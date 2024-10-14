import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent, SidebarComponent } from '../components';

@Component({
  selector: 'app-docs',
  standalone: true,
  imports: [RouterModule, HeaderComponent, SidebarComponent],
  templateUrl: './docs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocsComponent {}
