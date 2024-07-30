import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HaveQuestionComponent } from './have-question/have-question.component';
import { HeaderComponent } from './header/header.component';
import { QuestionComponent } from './question/question.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'haveQuestion', component: HaveQuestionComponent },
  { path: 'quesion', component: QuestionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
