import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-captacao',
  templateUrl: './captacao.component.html',
  styleUrls: ['./captacao.component.scss']
})
export class CaptacaoComponent implements OnInit {

  users: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data =>{
      this.users = data;
      console.log(this.users);
    })
  }

}
