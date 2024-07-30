import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HaveQuestionComponent } from './have-question/have-question.component';
import { QuestionComponent } from './question/question.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    SharedComponent,
    HeaderComponent,
    FooterComponent,
    HaveQuestionComponent,
    QuestionComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HaveQuestionComponent,
    QuestionComponent
  ]
})
export class SharedModule { }
