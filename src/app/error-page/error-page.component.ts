import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.errorMessage = this.route.snapshot.data['message']; //accessing message in app-routing.module.ts //when page it's not reloading
    this.route.data.subscribe( //when page reloads continually
      (data: Data) => {
       this.errorMessage = data['message'];
      }
    );
  }

}
