import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { BackService } from './back.service';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-front';
  environment = environment;

  constructor(protected backService: BackService) { }

  ngOnInit() {

    this.backService.getOk().subscribe(res => {
      document.getElementById("lb_init").innerHTML += res.status.toString();
    });

  }
  onClick() {
    this.backService.getOk().subscribe(res => {
      document.write(res.status.toString());
    });
  }
}
