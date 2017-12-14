import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload(){
    //for absolute paths:
    this.router.navigate(['/servers']);
    //for relative paths:
    // this.router.navigate(['servers'], {relativeTo: this.route}) //relativeTo: to tell him where we currently are, needs ActivatedRoute (it injects the currently active route). Relative to which route this link should be loaded.
  }

}
