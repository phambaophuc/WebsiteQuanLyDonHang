import { Component, Inject, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Option } from 'src/app/common/option';
import { Section } from 'src/app/common/section';
import { Shop } from 'src/app/common/shop';
import { FoodService } from 'src/app/services/food.service';
import { ShopService } from 'src/app/services/shop.service';

@Component({
    selector: 'app-edit-food',
    templateUrl: './edit-food.component.html',
    styleUrls: ['./edit-food.component.scss']
})
export class EditFoodComponent implements OnInit {

    editForm: FormGroup = new FormGroup({});

    shops: Shop[] = [];

    option: Option = {};

    selectedImage: File | null = null;
    selectedImageSrc: string | null = null;

    addingFood: boolean = false;
    selectedShopSections?: Section[];

    constructor(
        private fb: FormBuilder,
        private afStorage: AngularFireStorage,
        private dialogRef: MatDialogRef<EditFoodComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private foodService: FoodService,
        private shopService: ShopService,
        private toastr: ToastrService
    ) { }

    ngOnInit(): void {
        this.getAllShops();
        this.getAllSectionShop();

        this.editForm = this.fb.group({
            foodName: new FormControl('', [Validators.required]),
            foodType: new FormControl('', [Validators.required]),
            foodPrice: new FormControl('',
                [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]
            ),
            foodDescription: new FormControl(''),
            isOutOfStock: new FormControl(false),
            shopId: new FormControl(this.data.shopId, [Validators.required]),
            sectionId: new FormControl(this.data.sectionId, [Validators.required])
        })

        this.editForm.patchValue(this.data);
    }

    get foodName() { return this.editForm.get('foodName') };
    get foodType() { return this.editForm.get('foodType') };
    get foodPrice() { return this.editForm.get('foodPrice') };
    get foodDescription() { return this.editForm.get('foodDescription') };
    get isOutOfStock() { return this.editForm.get('isOutOfStock') };
    get shopId() { return this.editForm.get('shopId') };
    get sectionId() { return this.editForm.get('sectionId') };

    onSubmit() {
        this.addingFood = true;

        if (this.editForm.valid) {
            if (this.selectedImage) {
                const imageRef = this.afStorage.ref(`FoodImage/${this.selectedImage.name}`);
                const uploadTask = imageRef.put(this.selectedImage);

                uploadTask.snapshotChanges().subscribe(
                    (snapshot) => {
                        if (snapshot?.state === 'success') {
                            imageRef.getDownloadURL().subscribe(
                                (downloadUrl) => {
                                    this.editForm.value.foodImage = downloadUrl;
                                    this.updateFood();
                                }
                            )
                        }
                    }
                )
            } else {
                this.updateFood();
            }
        }
    }

    updateFood() {
        this.foodService.updateFood(this.data.key, this.editForm.value)
            .then(() => {
                this.toastr.info('Thông tin sản phẩm đã được cập nhật.', 'Cập nhật thành công!');
                this.dialogRef.close();
                this.addingFood = false;
            })
            .catch(error => {
                console.log(error);
                this.addingFood = false;
            });
    }

    onShopSelectionChange() {
        const selectedShopId = this.shopId?.value;

        this.shopService.getSectionShop(selectedShopId).subscribe(
            data => {
                this.selectedShopSections = data;
                this.sectionId?.setValue(this.selectedShopSections![0].key);
            }
        )
    }

    getAllShops() {
        this.shopService.getAllShops().subscribe(
            data => {
                this.shops = data;
            }
        );
    }

    getAllSectionShop() {
        this.shopService.getSectionShop(this.data.shopId)
            .subscribe(data => {
                this.selectedShopSections = data;
            });
    }

    onImageSelected(event: any) {
        this.selectedImage = event.target.files[0];
        this.selectedImageSrc = URL.createObjectURL(this.selectedImage!);
    }
}
