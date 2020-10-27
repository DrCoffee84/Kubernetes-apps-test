import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { BackService } from './back.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-front';

  constructor(protected backService: BackService) { }

  ngOnInit() {

    this.backService.getOk().subscribe(res => {
      alert(res.status);
    });

  }
}
