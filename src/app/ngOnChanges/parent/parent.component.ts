import { Component, OnInit } from '@angular/core';
import { AuthorsModel } from 'src/app/shared/authors.model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  title='this is statement from parent component'
  count:number=0;
  status:boolean=false;
  obj:AuthorsModel = {id:10, name: 'Check-Data'};

  constructor() { }

  ngOnInit(): void {
  }

  public counter(){
    this.count++;
    this.status = !this.status;
    this.obj.id = this.count;
  }

}
