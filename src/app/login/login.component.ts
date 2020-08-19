import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  constructor(private authService: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  loginProces() {
    if (this.formGroup.valid) {
      const data = {
        username: this.formGroup.value.email,
        password: this.formGroup.value.password
      };
      this.authService.login(data).subscribe(result => {
        if (result.accessToken) {
          console.log(result);
          alert(result.message);
          this.router.navigate(['/event']);
        }
        else {
          alert(result.message);
        }
      });
    }
  }

  createUser() {
    this.router.navigate(['/create-user']);
  }
}
