import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {
notice=[
  {id:'',title:'somthing deffrent',date: '20/29/28',description:'djhsnfjhsdfjshdf jk jdhfjdhf jdhfdjfhi id fiudf fifif i hfidhfidh '},
  {id:'',title:'somthing deffrent',date: '20/29/28',description:'djhsnfjhsdfjshdf jk jdhfjdhf jdhfdjfhi id fiudf fifif i hfidhfidh '},
  {id:'',title:'somthing deffrent',date: '20/29/28',description:'djhsnfjhsdfjshdf jk jdhfjdhf jdhfdjfhi id fiudf fifif i hfidhfidh '},
  {id:'',title:'somthing deffrent',date: '20/29/28',description:'djhsnfjhsdfjshdf jk jdhfjdhf jdhfdjfhi id fiudf fifif i hfidhfidh '},
  {id:'',title:'somthing deffrent',date: '20/29/28',description:'djhsnfjhsdfjshdf jk jdhfjdhf jdhfdjfhi id fiudf fifif i hfidhfidh '},
]
  constructor() { }

  ngOnInit(): void {

    if(this.notice.length>15){
      this.deletenotice();
    }
  }
  deletenotice(){

  }

}
