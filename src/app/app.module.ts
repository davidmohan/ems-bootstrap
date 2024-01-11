import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { DashBoardComponent } from './home/dash-board/dash-board.component';
import { EventManagementComponent } from './home/event-management/event-management.component';
import { UsersComponent } from './home/users/users.component';
import { AddEventComponent } from './home/event-management/add-event/add-event.component';
import { AvailablesComponent } from './home/event-management/availables/availables.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ModifyEventComponent } from './home/event-management/modify-event/modify-event.component';
import { RegistrationsComponent } from './home/event-management/registrations/registrations.component';
import { FeedbacksComponent } from './home/event-management/feedbacks/feedbacks.component';
import { AddUserComponent } from './home/users/add-user/add-user.component';
import { ModifyUserComponent } from './home/users/modify-user/modify-user.component';
import { AvailableUsersComponent } from './home/users/available-users/available-users.component';
import { NewStudentFormComponent } from './home/users/add-user/new-student-form/new-student-form.component';
import { NewStaffFormComponent } from './home/users/add-user/new-staff-form/new-staff-form.component';
import { NewAdminFormComponent } from './home/users/add-user/new-admin-form/new-admin-form.component';
import { ModifyStudentComponent } from './home/users/modify-user/modify-student/modify-student.component';
import { ModifyStaffComponent } from './home/users/modify-user/modify-staff/modify-staff.component';
import { ModifyAdminComponent } from './home/users/modify-user/modify-admin/modify-admin.component';
import { RegistrationFormComponent } from './home/event-management/registration-form/registration-form.component';
import { FeedbackFormComponent } from './home/event-management/feedback-form/feedback-form.component';
import { ViewRegistrationComponent } from './home/event-management/registrations/view-registration/view-registration.component';
import { AllRegistrationsComponent } from './home/event-management/registrations/all-registrations/all-registrations.component';
import { AllFeedbacksComponent } from './home/event-management/feedbacks/all-feedbacks/all-feedbacks.component';
import { ViewFeedbackComponent } from './home/event-management/feedbacks/view-feedback/view-feedback.component';
import { LeftMenuComponent } from './home/left-menu/left-menu.component';
import { Error404Component } from './error-404/error-404.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    DashBoardComponent, 
    EventManagementComponent,
    UsersComponent,
    AddEventComponent,
    LeftMenuComponent,
    AvailablesComponent,
    ModifyEventComponent,
    RegistrationsComponent,
    FeedbacksComponent,
    AvailableUsersComponent,
    AddUserComponent,
    ModifyUserComponent,
    NewStudentFormComponent,
    NewStaffFormComponent,
    NewAdminFormComponent,
    ModifyStudentComponent,
    ModifyStaffComponent,
    ModifyAdminComponent,
    RegistrationFormComponent,
    FeedbackFormComponent,
    ViewRegistrationComponent,
    AllRegistrationsComponent,
    AllFeedbacksComponent,
    ViewFeedbackComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    SweetAlert2Module.forRoot(),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
