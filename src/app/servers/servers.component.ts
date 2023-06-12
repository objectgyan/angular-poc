import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  productDescription = "Hello";

  isEnabled() {
    return this.productDescription.length > 0;
  }
}
