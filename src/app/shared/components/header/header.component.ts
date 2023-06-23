import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() toggleSideBarForMe = new EventEmitter();
  
  toggleSideBar() {
    this.toggleSideBarForMe.emit("click!");
    // setTimeout(() => {
    //   window.dispatchEvent(
    //     new Event('resize')
    //   );
    // }, 300);
  }
}
