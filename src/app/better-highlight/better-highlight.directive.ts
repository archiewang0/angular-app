import { Directive , ElementRef, HostBinding, HostListener, Input, OnInit , Renderer2 } from "@angular/core";

// selector 選中的Dom 會成為 constructor 裡面的第一位參數(elRef), 可以針對elRef 對他做樣式處理或是架構或是邏輯處理
@Directive({
    selector: '[appBetterHighlight]'
})
export class BetterHightlightDirective implements OnInit {
    @Input() defaultColor: string = "red"
    @Input('appBetterHighlight') hightlightColor: string = "blue"
    @HostBinding('style.fontSize') xxxxx: string ='20px'
    @HostBinding('attr.test-fortest') xxxxz: string ='fdsfdjskfjk'

    constructor(private elementRef: ElementRef ,private renderer: Renderer2 ){

    }

    ngOnInit(): void {
        console.log(' better directive init!!!!')
        // this.renderer.setStyle( this.elementRef.nativeElement , 'background-color' , 'blue' )
        // 針對[appBetterHightlight] 的tags 寫入樣式藉由 setStyle method 來達成
    }

    @HostListener('mouseenter') mouseover(eventData: Event){
        this.renderer.setStyle(this.elementRef.nativeElement , 'background-color' , this.defaultColor )
    }

    @HostListener('mouseleave') mouseleave(eventData: Event){
        this.renderer.setStyle(this.elementRef.nativeElement , 'background-color' , this.hightlightColor  )
    }
}