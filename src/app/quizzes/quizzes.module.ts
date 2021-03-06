import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  CreateQuizComponent,
  QuizzesListComponent,
  QuizDetailsComponent,
  QuizEditComponent,
  EditQuizInfoComponent,
  EditQuestionsComponent,
  QuestionsListComponent,
  QuestionsDetailsComponent,
  QuestionsAddComponent,
  SolveQuizComponent,
  QuizResultComponent,
  EditQuestionComponent,
} from '.';
import { quizzesRoutes } from './quizzes.routes';
import { SharedModule } from '../shared/shared.module';
import { CustomMaterialModule } from '../core/material.module';
import { AnswersListComponent } from './solve/answers-list/answers-list.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    CreateQuizComponent,
    QuizzesListComponent,
    QuizDetailsComponent,
    QuizEditComponent,
    EditQuizInfoComponent,
    EditQuestionsComponent,
    QuestionsListComponent,
    QuestionsDetailsComponent,
    QuestionsAddComponent,
    SolveQuizComponent,
    QuizResultComponent,
    EditQuestionComponent,
    AnswersListComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    CoreModule,
    RouterModule.forChild(quizzesRoutes),
  ],
  exports: [ReactiveFormsModule],
})
export class QuizzesModule {}
