import { Component, OnInit } from '@angular/core';

// Define an interface for the user object
interface User {
  id: number;
  name: string;
  department: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true
})
export class AppComponent implements OnInit {
  // Specify the type as an array of User interface
  users: User[] = [
    { id: 1, name: 'John', department: 'Finance' },
    { id: 2, name: 'Jane', department: 'HR' },
    { id: 3, name: 'Bob', department: 'IT' },
    { id: 4, name: 'Alice', department: 'Marketing' },
    // Additional users
    { id: 5, name: 'Emma', department: 'Finance' },
    { id: 6, name: 'Tom', department: 'HR' },
    { id: 7, name: 'Mike', department: 'Manufacturing' },
    { id: 8, name: 'Sarah', department: 'Service' },
    { id: 9, name: 'David', department: 'Delivery' }
  ];

  departments: string[] = ['Finance', 'HR', 'Manufacturing', 'Service', 'Delivery'];

  filteredUsers: User[] = this.users.slice(); // Populate with all users initially

  filteredDepartments: string[] = this.departments.slice(); // Populate with all departments initially

  ngOnInit(): void {
    }

  filterUsers(event: Event): void {
    const target = event.target as HTMLInputElement;
    const keyword = target.value.toLowerCase();
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(keyword) || user.department.toLowerCase().includes(keyword)
    );
  }

  filterDepartments(event: Event): void {
    const target = event.target as HTMLInputElement;
    const keyword = target.value.toLowerCase();
    this.filteredDepartments = this.departments.filter(department =>
      department.toLowerCase().includes(keyword)
    );
  }

  usersFilteredByDepartment(department: string): User[] {
    return this.filteredUsers.filter(user => user.department === department);
  }
}
