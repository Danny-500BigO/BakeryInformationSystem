import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
 

@Component({
  selector: 'app-default-menubar',
  standalone: true,
  imports: [MenubarModule,FontAwesomeModule],
  templateUrl: './default-menubar.component.html',
  styleUrl: './default-menubar.component.scss'
})
export class DefaultMenubarComponent {
  faUser = faUser;
  
}
