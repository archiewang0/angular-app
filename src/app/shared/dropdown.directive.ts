import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core'

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
      this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
      // contains(event.target) 主要是判斷是否點擊在目標上
      // 如果也是在目標身上 就將dropdwon狀態相反切換, 如果是以外的地方直接變成
    }
    constructor(private elRef: ElementRef) {}
  }