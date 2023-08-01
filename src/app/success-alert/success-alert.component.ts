import { Component , EventEmitter , Output } from "@angular/core";

@Component({
    selector: 'success-alert',
    templateUrl: './success-alert.component.html',
    styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent{
    @Output() serverCreated = new EventEmitter<{name:string ; type:string ; content: string}>()
    successData: string=""

    ondjalfdjsaljf(){
        this.serverCreated.emit({name: this.successData , type: this.successData , content:this.successData})
    }
}