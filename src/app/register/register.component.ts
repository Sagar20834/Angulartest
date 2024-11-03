import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onRegister() {
    if (this.username && this.password) {
      // Define the request payload
      const payload = { username: this.username, password: this.password };

      // Send a POST request to the backend
      this.http.post('http://localhost:3000/register', payload).subscribe({
        next: (response) => {
          console.log('User registered successfully');
          this.error = '';
          this.router.navigate(['/login']);
          // Optionally, navigate to login or clear the form
        },
        error: (error) => {
          this.error = 'Registration failed. Try again.!!';
          console.error(error);
        },
      });
    } else {
      this.error = 'Please fill in both fields';
    }
  }
}
