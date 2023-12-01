import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Order } from 'src/app/common/order';
import { AuthService } from 'src/app/services/auth.service';
import { OrderService } from 'src/app/services/order.service';
import { DetailOrderComponent } from '../detail-order/detail-order.component';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { Status } from 'src/app/common/status.enum';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-list-order',
    templateUrl: './list-order.component.html',
    styleUrls: ['./list-order.component.scss']
})
export class ListOrderComponent implements OnInit {

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    displayedColumns: string[] = [
        'actions',
        'name',
        'address',
        'dateScheduled',
        'timeScheduled',
        'isScheduled',
        'payment',
        'status',
        'acceptedTime',
        'acceptedDate',
        'accept'
    ];

    dataSource!: MatTableDataSource<any>;

    orders: Order[] = [];

    isLoading: boolean = false;

    constructor(
        private orderService: OrderService,
        private authService: AuthService,
        private _liveAnnouncer: LiveAnnouncer,
        private dialog: MatDialog,
        private snackbar: SnackBarService,
        private datePipe: DatePipe
    ) { }

    ngOnInit(): void {
        this.getOrders();
    }

    getOrders() {
        this.isLoading = true;
        this.authService.getCurrentUser().subscribe(
            (user: any) => {
                this.orderService.getOrdersByShopId(user.shopId)
                    .subscribe(orders => {
                        this.dataSource = new MatTableDataSource(orders);
                        this.dataSource.paginator = this.paginator;
                        this.dataSource.sort = this.sort;
                        this.isLoading = false;
                    })
            }
        )
    }

    openOrderDetails(data: any) {
        this.dialog.open(DetailOrderComponent, { data });
    }

    announceSortChange(sortState: Sort) {
        if (sortState.direction) {
            this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
        } else {
            this._liveAnnouncer.announce('Sorting cleared');
        }
    }

    acceptOrder(order: Order) {
        order.status = Status.ACCEPTED;

        // Set ngày giờ hiện tại
        const currentTime = this.datePipe.transform(new Date(), 'HH:mm');
        const currentDate = this.datePipe.transform(new Date(), 'dd/MM/yyyy');

        order.acceptedTime = currentTime!;
        order.acceptedDate = currentDate!;

        this.orderService.updateOrder(order.key!, order)
            .then(() => {
                this.snackbar.openSnackBar('Đã xác nhận đơn hàng.');
            })
            .catch(error => {
                console.error(error);
            })
    }

    deniedOrder(order: Order) {
        order.status = Status.DENIED;
        this.orderService.updateOrder(order.key!, order)
            .then(() => {
                this.snackbar.openSnackBar('Đơn hàng đã bị huỷ.', 'DONE');
            })
            .catch(error => {
                console.error(error);
            })
    }
}
