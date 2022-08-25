import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-student',
  templateUrl: './top-student.component.html',
  styleUrls: ['./top-student.component.css']
})
export class TopStudentComponent implements OnInit {
student=[
  {id:'',name:'funny',img:"../../../favicon.ico",rank:33333},
  {id:'',name:'funny',img:"../../../favicon.ico",rank:33333},
  {id:'',name:'funny',img:"../../../favicon.ico",rank:33333},
  {id:'',name:'funny',img:"../../../favicon.ico",rank:33333},
  {id:'',name:'funny',img:"../../../favicon.ico",rank:33333},
  {id:'',name:'funny',img:"../../../favicon.ico",rank:33333},
  {id:'',name:'funny',img:"../../../favicon.ico",rank:33333},
  {id:'',name:'funny',img:"../../../favicon.ico",rank:33333},
]
  constructor() { }

  ngOnInit(): void {
  }

}
