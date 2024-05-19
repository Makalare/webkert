import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = new FormControl('');
  password = new FormControl('');
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }
  async login(){
    this.authService.login(this.email.value as string, this.password.value as string).then(cred => {
      console.log(cred);
      this.router.navigateByUrl('/main');
    }).catch(error =>{
      console.error(error);
    });
  }

  goToSignUp(): void {
    this.router.navigateByUrl('/signup');
  }
}