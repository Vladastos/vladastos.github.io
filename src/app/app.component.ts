import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'vladastos';
  route!: Router;
  constructor(
    private router : Router,
  ){
    this.route = router;
  }

  ngOnInit(): void {
    console.log('Ciao!');
  }
}
