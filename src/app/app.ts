import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { Home } from './home/home';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CurrencyPipe, Home],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angProject1');
}
