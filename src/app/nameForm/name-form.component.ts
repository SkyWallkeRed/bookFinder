import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {InputInterface, UserInterface} from '../interfaces';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.scss']
})
export class NameFormComponent implements OnInit {
  @Input() setup: InputInterface;
  @Output() private nameOutput = new EventEmitter<UserInterface>();

  private nameForm: FormGroup;
  private Setup: InputInterface;

  constructor() {
    this.Setup = this.setup;
  }

  ngOnInit(): void {
    this.nameForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
    });
  }

  updateName() {
    if (!this.nameForm.valid) {
      return;
    } else {
      this.nameOutput.emit(this.nameForm.get('name').value);
    }
  }

}
