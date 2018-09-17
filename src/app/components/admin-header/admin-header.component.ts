import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../services/shared/token/token.service';


@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor(private tokenService: TokenService) { }


  logout(): void {
    sessionStorage.removeItem('token');
    this.tokenService.tokenEmitter.next(null);
  }
  ngOnInit() {
  }

}
