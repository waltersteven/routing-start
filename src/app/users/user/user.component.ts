import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //retrieving parameter from url
    this.user = {
      id: this.route.snapshot.params['id'], //getting id from url
      name: this.route.snapshot.params['name']
    };
  }

}
