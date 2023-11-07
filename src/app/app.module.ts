import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GuestComponent } from './theme/layouts/guest/guest.component';
import { AdminComponent } from './theme/layouts/admin/admin.component';
import { NavigationComponent } from './theme/layouts/admin/navigation/navigation.component';
import { NavBarComponent } from './theme/layouts/admin/nav-bar/nav-bar.component';
import { NavLeftComponent } from './theme/layouts/admin/nav-bar/nav-left/nav-left.component';
import { NavRightComponent } from './theme/layouts/admin/nav-bar/nav-right/nav-right.component';
import { NavSearchComponent } from './theme/layouts/admin/nav-bar/nav-left/nav-search/nav-search.component';
import { ChatMsgComponent } from './theme/layouts/admin/nav-bar/nav-right/chat-msg/chat-msg.component';
import { ChatUserListComponent } from './theme/layouts/admin/nav-bar/nav-right/chat-user-list/chat-user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './theme/shared/shared.module';
import { FriendComponent } from './theme/layouts/admin/nav-bar/nav-right/chat-user-list/friend/friend.component';
import { NavContentComponent } from './theme/layouts/admin/navigation/nav-content/nav-content.component';
import { NavCollapseComponent } from './theme/layouts/admin/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavGroupComponent } from './theme/layouts/admin/navigation/nav-content/nav-group/nav-group.component';
import { NavItemComponent } from './theme/layouts/admin/navigation/nav-content/nav-item/nav-item.component';
import { SamplePageComponent } from './pages/sample-page/sample-page.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [
        AppComponent,
        GuestComponent,
        AdminComponent,
        NavigationComponent,
        NavBarComponent,
        NavLeftComponent,
        NavRightComponent,
        NavSearchComponent,
        ChatMsgComponent,
        ChatUserListComponent,
        FriendComponent,
        NavContentComponent,
        NavCollapseComponent,
        NavGroupComponent,
        NavItemComponent,
        SamplePageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule, MatButtonModule, MatDividerModule, MatIconModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
