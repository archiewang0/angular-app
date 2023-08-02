import { Component , EventEmitter , Output , ViewChild ,ElementRef} from "@angular/core";

@Component({
    selector: 'success-alert',
    templateUrl: './success-alert.component.html',
    styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent{
    @Output() serverCreated = new EventEmitter<{name:string ; type:string ; content: string}>()
    @ViewChild('successTemplates') successTemplates? :ElementRef<HTMLInputElement>;
    successData: string=""

    ondjalfdjsaljf(inputElement: HTMLInputElement){
        console.log('1: ', inputElement)
        console.log('2: ', this.successTemplates?.nativeElement )
        this.serverCreated.emit({name: this.successData , type: this.successData , content:this.successData})
    }
}