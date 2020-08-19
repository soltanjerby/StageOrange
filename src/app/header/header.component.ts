import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { enableRipple } from '@syncfusion/ej2-base';
import { MenuItemModel, MenuEventArgs } from '@syncfusion/ej2-angular-navigations';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit() {}

  isUser() {
    return this.loginService.isAuthUser();
  }

  isAdmin() {
    return this.loginService.isAuthAdmin();
  }

  logout() {
    this.loginService.logout();
    this.router.navigateByUrl("");
  }

  login() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: "800px",
      panelClass: "custom-dialog-container",
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe((res) => {
      // this.getEvents() ;
    });
  }

  private menuItems: MenuItemModel[] = [
    { text: 'Accueil', url: '/' },
    {
        text: 'Offres',
        items: [
            { text: 'Blue Pass-Sport', url: '#blue-pass-sport' },
            { text: 'Yellow Pass-Sport', url: '#yellow-pass-sport' },
            { text: 'Junior Pass-Sport', url: '#junior-pass-sport' },
            { text: 'Taekwondo Kids', url: '#taekwondo-kids' },
            { text: 'Piscine Kids', url: '#piscine-kids' },
            { text: 'Kids Island', url: '#kids-island' },
        ]
    },
    { text: 'Qui sommes-nous?', url: '/about' },
    { text: 'Contactez-nous', url: '/contact' }
];

private beforeItemRender(args: MenuEventArgs): void {
    if (args.item.url) {
        // To open url in blank page.
        args.element.getElementsByTagName('a')[0].setAttribute('target', '');
    }
}
}
