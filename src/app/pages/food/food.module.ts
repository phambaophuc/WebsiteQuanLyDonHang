import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodRoutingModule } from './food-routing.module';
import { FoodComponent } from './food.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { AddFoodComponent } from './add-food/add-food.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { OptionDialogComponent } from './add-food/option-dialog/option-dialog.component';


@NgModule({
    declarations: [
        FoodComponent,
        AddFoodComponent,
        OptionDialogComponent
    ],
    imports: [
        CommonModule,
        FoodRoutingModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatCheckboxModule,
        MatDialogModule,
        MatDividerModule,
        MatListModule,
        MatTabsModule,
        MatCardModule,
        SharedModule
    ]
})
export class FoodModule { }
