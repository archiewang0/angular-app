import { Component , Input, ViewEncapsulation , OnChanges , SimpleChanges ,DoCheck , Directive} from "@angular/core";

@Component({
    selector: 'warning-alert',
    templateUrl: './warning-alert.component.html',
    styles: [`
        p {
            border: 1px solid red;
            padding: 5px;
            background-color: red;
        }
    `],
    encapsulation: ViewEncapsulation.None
})
export class WarningAlertComponent implements OnChanges {
    @Input('otherNameElement') element: {name:string; type: string; content: string} | null
    @Input('someValue') someValue: number 
    componentArray: string[]
    constructor(){
        this.element = null
        this.someValue = 0
        this.componentArray = ['xxx','000']
    }
    
    ngOnChanges(changes:SimpleChanges ){
        // console.log('warning-alert  ngOnChanges xxxxxx')
        // console.log(changes)
    }

    addComponentNumber(){
        this.componentArray.push('newCreate')
    }


}