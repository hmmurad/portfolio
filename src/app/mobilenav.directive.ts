import { Directive, ElementRef, HostBinding, HostListener, Renderer2, inject } from "@angular/core";

@Directive({
    standalone: true,
    selector: '[appHumburgerMenu]'
})
export class MobileNavDirective {

    element = inject(ElementRef)
    rederer = inject(Renderer2)

    @HostBinding('style.font-size') fontSize = ''


    @HostListener('mouseenter') onClick() {
        this.fontSize = '48px'
    }
    @HostListener('mouseleave') onLeave() {
        this.fontSize = '24px'
    }

}