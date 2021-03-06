import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Question } from 'src/app/shared/models/question.model';
import { QuizBuilderService } from '../quiz-builder.service';
import { ToastrService } from 'ngx-toastr';
import { ServerResponse } from 'src/app/shared/models/server-response.model';

@Component({
  selector: 'app-question-add',
  templateUrl: './questions-add.component.html',
  styleUrls: ['./questions-add.component.scss']
})
export class QuestionsAddComponent implements OnInit {
  questionForm: FormGroup;
  questionModel: Question;

  get answers(): FormArray {
    return <FormArray> this.questionForm.get('answers');
  }

  constructor(private formBuilder: FormBuilder,
              private quizBuilder: QuizBuilderService,
              private toastr: ToastrService,
              private router: Router) {
  }

  ngOnInit() {
    this.questionModel = {
      quizId: this.router.url.split('/')[3],
      _id: '',
      question: '',
      answers: [{
        answer: '',
        isCorrect: false,
        isSelected: false,
      }],
      shouldShuffle: false
    };

    this.questionForm = this.formBuilder.group({
      question: ['', [Validators.required, Validators.minLength(10)]],
      answers: this.formBuilder.array([this.buildAnswer()]),
      shouldShuffle: false
    });
  }

  save() {
    const quizId = this.questionModel.quizId;
    this.questionModel = this.questionForm.value;
    this.questionModel.quizId = quizId;

    this.quizBuilder.createQuestion(this.questionModel);

    this.questionForm.reset();
  }

  addAnswer(): void {
    this.answers.push(this.buildAnswer());
    console.log(this.answers.length);
  }

  removeLastAnswer(): void {
    this.answers.removeAt(this.answers.length - 1);
  }

  private handleQuestionCreation(res: ServerResponse) {
    if (res.success) {
      console.log(res.data);
      this.toastr.success(res.message);
    }
  }

  private buildAnswer(): FormGroup {
    return this.formBuilder.group({
      answer: ['', Validators.required],
      isCorrect: false,
    });
  }
}
