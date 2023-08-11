import { Component , EventEmitter , Output , ViewChild ,ElementRef , OnInit , SimpleChanges , OnChanges , DoCheck , AfterContentInit , AfterContentChecked , AfterViewInit , AfterViewChecked , ContentChild} from "@angular/core"; 

@Component({
    selector: 'success-alert',
    templateUrl: './success-alert.component.html',
    styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit , OnChanges, DoCheck , AfterContentInit , AfterContentChecked , AfterViewInit , AfterViewChecked{
    @Output() serverCreated = new EventEmitter<{name:string ; type:string ; content: string}>()
    @ViewChild('successTemplates') successTemplates? :ElementRef<HTMLInputElement>;
    @ContentChild ('contentChild') testTemplates?: ElementRef;
    successData: string=""
    
    constructor(){
        // super()
        // console.log('constructor xxxxx')
    }

    ngOnInit(){
        // console.log('ngOnInit xxxxx')
        // console.log(`檢查  ngOnInit testTemplates: `, this.testTemplates)
    }

    ngOnChanges(changes:SimpleChanges ){
        // console.log('ngOnChanges xxxxx')
        // console.log(changes)
    }
    ngDoCheck(): void {
        // console.log('ngDoCheck xxxxxxxxxxx')
        // console.log(`檢查  ngDoCheck testTemplates: `, this.testTemplates)

    }

    ngAfterContentInit(): void {
        // console.log('ngAfterContentInit xxxxxxxxxxx')
        // console.log(`檢查  ngAfterContentInit testTemplates: `, this.testTemplates)

    }

    ngAfterContentChecked(): void {
        // console.log('ngAfterContentChecked xxxxxxxxxxx')
        
    }
    ngAfterViewInit(): void {
        // console.log('ngAfterViewInit xxxxxxxxxxx')
        // console.log(`檢查  ngAfterViewInit testTemplates: `, this.testTemplates)

        
    }
    ngAfterViewChecked(): void {
        // console.log('ngAfterViewChecked xxxxxxxxxxx')
        
    }
    doFunction(inputElement: HTMLInputElement){
        console.log('1: ', inputElement)
        console.log('2: ', this.successTemplates?.nativeElement )
        this.serverCreated.emit({name: this.successData , type: this.successData , content:this.successData})
    }
}