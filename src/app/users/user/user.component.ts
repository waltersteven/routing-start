import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //retrieving parameter from url
    this.user = {
      id: this.route.snapshot.params['id'], //getting id from url, this does not reinstanciate the component, this is why we need the observable.
      name: this.route.snapshot.params['name']
    };

    this.paramsSubscription = this.route.params.subscribe( // params is an observable: feature that allows us to work with asynchronous task, use this when we will update the component from inside, it will subscribe to an event which might happen in the future.
      (params: Params) =>  { //get executed whenever the parameter changes
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }

  ngOnDestroy(){
    this.paramsSubscription.unsubscribe(); //we add this because when we change to other component this user component destroys but not the params subscribe, so we need to destroy it with paramsSubscription.
  }

}
