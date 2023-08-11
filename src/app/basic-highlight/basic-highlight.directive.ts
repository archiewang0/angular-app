import {Directive ,OnInit , ElementRef } from "@angular/core"

// BasicHighlightDirective 的 constructor 會被參數給帶入 Directive選中的Element 
// 所以可以直接來使用
@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    // 限制該elementRef 只能在該class進行竄改
    constructor( private elementRef: ElementRef ){

    }

    ngOnInit(): void {
        console.log('basic init!!!!')
        this.elementRef.nativeElement.style.backgroundColor = 'green'
    }
}