import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from "@angular/material";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errMess: boolean;
  formErrors = {
    'email': '',
    'password': '',
  };

  validationMessages = {
    'password': {
      'required': 'Password is required.',
    },
    'email': {
      'required': 'Email is required.',
      'email': 'Email not in valid format.'
    }
  };

  constructor(
    public matDialogRef: MatDialogRef<LoginComponent>,
    public dialog: MatDialog,
    private loginService: LoginService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
    });
    this.loginForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();

    this.errMess=false;
  }

  onValueChanged(data?: any) {
    /*if (!this.loginForm) { return; }
    const form = this.loginForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if(control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }*/
  }

  login() {
    /*//if(this.loginForm.value.password == "12345"  && this.loginForm.value.email=="enseignant@gmail.com"){
    //  localStorage.setItem("role" , "enseignant");
    //  console.log(localStorage.getItem("role") ) ;
    //  this.matDialogRef.close();
    //}
    //localStorage.setItem("role" , "etudiant");
    this.loginService
      .loginEtd(this.loginForm.value.email, this.loginForm.value.password)
      .pipe(first())
      .subscribe(
        () => {
          console.log(this.eleveId);
          this.matDialogRef.close();
          location.reload();
        },
        (err) => {console.log(err); this.errMess=true;}
      );
    //this.router.navigateByUrl("home");
    //localStorage.setItem("eleveID", this.eleveId.toString());
    //console.log(localStorage.getItem("eleveID") ) ;
    //this.matDialogRef.close();
    //}
    //else {

    //}*/
  }
}
