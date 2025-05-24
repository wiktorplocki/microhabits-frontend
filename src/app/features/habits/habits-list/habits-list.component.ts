import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HabitService } from '../habit.service';
import { Habit } from '../habit.model';
import { MATERIAL_IMPORTS } from '../../../shared/material-imports';

@Component({
  standalone: true,
  selector: 'app-habits-list',
  imports: [
    CommonModule,
    ...MATERIAL_IMPORTS
  ],
  templateUrl: './habits-list.component.html',
  styleUrl: './habits-list.component.scss'
})
export class HabitsListComponent implements OnInit {
  habits: Array<Habit> = [];
  loading = true;
  error = '';
  newHabitName = '';
  formError = '';

  constructor(private habitService: HabitService) { }

  ngOnInit(): void {
    this.loading = true;

    this.habitService.getHabits().subscribe({
      next: (data)=> {
        this.habits = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Nie udało się pobrać nawyków';
        this.loading = false;
      },
    });
  }

  addHabit(): void {
    const name = this.newHabitName.trim();

    if (!name) {
      this.formError = 'Nazwa nawyku nie może być pusta';
      return;
    }

    this.habitService.addHabit(name).subscribe({
      next: (habit) => {
        this.habits.unshift(habit);
        this.newHabitName = '';
        this.formError = '';
      },
      error: () => {
        this.formError = 'Nie udało się dodać nawyku';
        this.loading = false;
      }
    });
  }

  deleteHabit(id: number): void {
    this.habitService.deleteHabit(id).subscribe({
      next: () => {
        this.habits = this.habits.filter((habit) => habit.id !== id);
      },
      error: () => {
        this.error = `Nie udało się usunąć nawyku o ID ${id}`;
        this.loading = false;
      }
    })
  }
}
