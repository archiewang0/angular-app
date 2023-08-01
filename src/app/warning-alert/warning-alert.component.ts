import { Component , Input, ViewEncapsulation } from "@angular/core";

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
    encapsulation: ViewEncapsulation.ShadowDom
})
export class WarningAlertComponent {
    @Input('otherNameElement') element: {name:string; type: string; content: string} | null
    constructor(){
        this.element = null
    }
}