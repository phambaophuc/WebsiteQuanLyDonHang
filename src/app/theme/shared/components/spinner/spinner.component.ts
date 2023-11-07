import { Component, Inject, Input, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Spinkit } from './spinkits';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SpinnerComponent implements OnDestroy {

    // public props
    isSpinnerVisible = true;
    Spinkit = Spinkit;
    @Input() backgroundColor = '#2689E2';
    @Input() spinner = Spinkit.skLine;

    // constructor
    constructor(
        private router: Router,
        @Inject(DOCUMENT) private document: Document
    ) {
        this.router.events.subscribe({
            next: (event) => {
                if (event instanceof NavigationStart) {
                    this.isSpinnerVisible = true;
                } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
                    this.isSpinnerVisible = false;
                }
            },
            error: () => {
                this.isSpinnerVisible = false;
            }
        });
    }

    ngOnDestroy(): void {
        this.isSpinnerVisible = false;
    }
}
