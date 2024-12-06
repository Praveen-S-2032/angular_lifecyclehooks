import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthorsModel } from 'src/app/shared/authors.model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {

  @Input() titleFromParent="" ;
  @Input() data:number=0;
  @Input() data2:boolean=false;
  @Input() authors:AuthorsModel | undefined;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    console.log(this.authors);
  }

}
