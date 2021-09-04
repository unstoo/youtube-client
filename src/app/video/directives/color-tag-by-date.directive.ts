import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorTagByDate]',
})
export class ColorTagByDateDirective implements OnInit {
  @Input() public appColorTagByDate: string = '';

  constructor(private el: ElementRef, private r2: Renderer2) {
  }

  ngOnInit(): void {
    this.el.nativeElement.style.position = 'relative';
    const color = this.getColor(this.appColorTagByDate);
    const tag = this.r2.createElement('div');
    tag.style.backgroundColor = color;
    tag.style.height = '1vw';
    tag.style.bottom = '0';
    tag.style.position = 'absolute';
    tag.style.left = '0';
    tag.style.right = '0';
    tag.style.zIndex = '1000';
    tag.style.borderBottomLeftRadius = '0.4vw';
    tag.style.borderBottomRightRadius = '0.4vw';
    this.el.nativeElement.appendChild(tag);
  }

  getColor(publishedAt: string): string {
    const now = (new Date()).getTime();
    const videoTime = (new Date(publishedAt)).getTime();
    const diff = now - videoTime;
    const day = 24 * 60 * 60 * 1000;

    if (diff / day < 7) {
      return 'rgba(47, 128, 237, 1)';
    }

    if (diff / day < 31) {
      return 'rgba(39, 174, 96, 1)';
    }

    if (diff / day < 30 * 6) {
      return 'rgba(242, 201, 76, 1)';
    }

    return 'rgba(235, 87, 87, 1)';
  }

}
