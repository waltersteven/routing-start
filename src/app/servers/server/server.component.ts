import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id']; // + is to convert it to a number
    this.server = this.serversService.getServer(id);

    this.route.params.subscribe( // params is an observable: feature that allows us to work with asynchronous task, use this when we will update the component from inside, it will subscribe to an event which might happen in the future.
      (params: Params) =>  { //get executed whenever the parameter changes
        this.server = this.serversService.getServer(+params['id']);
      }
    );
  }

}
