import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  msg: string;

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
    const code = this.route.snapshot.paramMap.get('code');
    const state: string = this.route.snapshot.paramMap.get('state');

    this.msg = 'Authenticating with Bungie';
    if (code) {
      this.authService.getTokenFromBungie(code, state).subscribe(
        (res) => {
          this.msg = 'Success!';
          this.router.navigate(['/home']);
        },
        (err) => {
          this.msg = JSON.stringify(err);
        });
    }
  }
}
