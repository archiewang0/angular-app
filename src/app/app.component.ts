import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

// 資料的區域
export class AppComponent {
  title = 'frist_angular_app!!!!!!!!!!!!!!!!!!!!!!!';
  serverElements = [{name:'serverElement' ,type: 'offline' , content:'測試'} , {name:'server2' ,type: 'online' , content:'測試2'}]
  switchValue: number = 10;
  prop: string = ""

  onServerCreated(event:{name: string; type: string; content: string}){
    console.log(event)
    this.serverElements.push({name: event.name , type: event.type , content: event.content})
  }


}
