import { Component, OnInit, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-colleague',
  templateUrl: './add-colleague.component.html',
  styleUrls: ['./add-colleague.component.css'],
})
export class AddColleagueComponent implements OnInit {
  colleagueFormGroup: FormGroup;
  colleagues: any = [];
  action: string;
  data: any;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddColleagueComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public localData: any
  ) {
    this.data = { ...localData };
    this.action = this.data.action;
  }

  ngOnInit(): void {
    this.colleagueFormGroup = this.fb.group({
      id: [''],
      email: ['', [Validators.required, Validators.email]],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      job: ['', Validators.required],
    });
  }

  get c() {
    return this.colleagueFormGroup.controls;
  }

  doAction() {
    this.dialogRef.close({ event: this.action, data: this.data });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
