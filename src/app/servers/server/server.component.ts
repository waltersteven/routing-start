import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, 
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    //const id = +this.route.snapshot.params['id']; // + is to convert it to a number
    //this.server = this.serversService.getServer(id);

    //this.route.params.subscribe( // params is an observable: feature that allows us to work with asynchronous task, use this when we will update the component from inside, it will subscribe to an event which might happen in the future.
      //(params: Params) =>  { //get executed whenever the parameter changes
        //this.server = this.serversService.getServer(+params['id']);
      //}
    //);

    //this replace the commented section 
    this.route.data.subscribe( //we access to the data in app-routing.module.ts
      (data: Data) => {
        this.server = data['server']; //the name server has to match the name in the resolve of the child in app-routing.module.ts
      }
    );
  }

  onEdit(){
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'}) //relativeTo in order to navigate relatively (append /edit to the currently route)
    //queryParamsHandling is for preserve the id of the URL
  }

}
