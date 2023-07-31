import { Component } from "@angular/core";

@Component({
    selector: 'warning-alert',
    template: `
        <p>錯誤alert</p>
    `,
    styles: [`
        p {
            border: 1px solid red;
            padding: 5px;
            background-color: red;
        }
    `]
})
export class WarningAlertComponent {}