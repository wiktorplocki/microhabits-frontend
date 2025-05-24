import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habit } from './habit.model';

@Injectable({
  providedIn: 'root'
})
export class HabitService {
  private apiUrl = 'https://api.example.com/habits'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getHabits(): Observable<Array<Habit>> {
    return this.http.get<Array<Habit>>(`${this.apiUrl}/habits`);
  }

  addHabit(name: string): Observable<Habit> {
    return this.http.post<Habit>(`${this.apiUrl}/habits`, { name });
  }

  deleteHabit(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/habits/${id}`);
  }
}
