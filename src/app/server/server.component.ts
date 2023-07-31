import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
}) 
export class ServerComponent{
    serverId: number = 10
    serverState: string = 'offline'
    allowNewServer: boolean = true
    getServerInfo: ()=>string = ()=>{
        return 'www.server.com'
    }

    constructor(){
        setTimeout(()=>{
            this.allowNewServer = false
        },1000)
    }
}

