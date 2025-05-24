import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MATERIAL_IMPORTS } from '../../shared/material-imports';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    RouterModule,
    ...MATERIAL_IMPORTS
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
