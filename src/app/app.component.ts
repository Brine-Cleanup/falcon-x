import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rForm: FormGroup;
  post: any;
  fname = '';
  lname = '';
  email = '';
  pass = '';
  conpass = '';
  dob = '';

  constructor(private fb: FormBuilder) {

    this.rForm = fb.group({
      fname: [null, Validators.required],
      lname: [null, Validators.compose([Validators.required, Validators.minLength(2)])],
      email : [null, Validators.required],
      pass : [null, Validators.required],
      conpass : [null, Validators.required],
      dob : [null, Validators.required],
      validate : ''
    });

  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {

    this.rForm.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate === '1') {
          this.rForm.get('fname').setValidators([Validators.required, Validators.minLength(3)]);

        } else {
          this.rForm.get('fname').setValidators(Validators.required);
        }
        this.rForm.get('fname').updateValueAndValidity();
      }
    );
  }

  addPost(post) {
    this.lname = post.lname;
    this.fname = post.fname;
  }

}
