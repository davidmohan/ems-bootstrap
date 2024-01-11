import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { DashBoardComponent } from './home/dash-board/dash-board.component';
import { EventManagementComponent } from './home/event-management/event-management.component';
import { UsersComponent } from './home/users/users.component'
import { AddEventComponent } from './home/event-management/add-event/add-event.component';
import { AvailablesComponent } from './home/event-management/availables/availables.component';
import { ModifyEventComponent } from './home/event-management/modify-event/modify-event.component';
import { RegistrationsComponent } from './home/event-management/registrations/registrations.component';
import { FeedbacksComponent } from './home/event-management/feedbacks/feedbacks.component';
import { AvailableUsersComponent } from './home/users/available-users/available-users.component';
import { AddUserComponent } from './home/users/add-user/add-user.component';
import { ModifyUserComponent } from './home/users/modify-user/modify-user.component';
import { RegistrationFormComponent } from './home/event-management/registration-form/registration-form.component';
import { FeedbackFormComponent } from './home/event-management/feedback-form/feedback-form.component';
import { AllRegistrationsComponent } from './home/event-management/registrations/all-registrations/all-registrations.component';
import { ViewRegistrationComponent } from './home/event-management/registrations/view-registration/view-registration.component';
import { AllFeedbacksComponent } from './home/event-management/feedbacks/all-feedbacks/all-feedbacks.component';
import { ViewFeedbackComponent } from './home/event-management/feedbacks/view-feedback/view-feedback.component';
import { Error404Component } from './error-404/error-404.component';


const routes: Routes = [
  { path:'', component:HomeComponent, children: [
    { path:'dash-board', component:DashBoardComponent },
    { path:'event-management', component:EventManagementComponent, children: [
      { path:'', component: AvailablesComponent },
      { path:'add-event', component: AddEventComponent },
      { path:'modify-event', component: ModifyEventComponent },
      { path:'registrations', component: RegistrationsComponent, children: [
        { path: '', component: AllRegistrationsComponent },
        { path: 'view', component: ViewRegistrationComponent },
      ]},
      { path:'feedbacks', component: FeedbacksComponent, children: [
        { path: '', component: AllFeedbacksComponent },
        { path: 'view', component: ViewFeedbackComponent },
      ]},
      { path:'registration-form', component: RegistrationFormComponent },
      { path:'feedback-form', component: FeedbackFormComponent },
    ]},
    { path:'users', component:UsersComponent, children: [
      { path:'', component: AvailableUsersComponent, },
      { path:'add-user', component: AddUserComponent },
      { path:'modify-user', component: ModifyUserComponent },
    ]},
  ]},
  { path:'auth', component:AuthComponent },
  { path:'**', component:Error404Component },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
