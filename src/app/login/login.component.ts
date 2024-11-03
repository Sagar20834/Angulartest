import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onLogin() {
    if (this.username && this.password) {
      const payload = { username: this.username, password: this.password };

      // Send a POST request to the backend
      this.http.post('http://localhost:3000/login', payload).subscribe({
        next: (response) => {
          console.log('User logged in successfully @@');
          this.error = '';
          this.router.navigate(['/dashboard']); // Redirect to dashboard or appropriate page
        },
        error: (error) => {
          this.error = 'Login failed. Check your credentials.';
          console.error(error);
        },
      });
    } else {
      this.error = 'Please fill in both fields';
    }
  }
}
