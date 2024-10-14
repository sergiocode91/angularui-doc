import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
} from '@angular/core';
import { FooterComponent, PageNavigationComponent } from '@app/presentation/components';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [LucideAngularModule, FooterComponent, PageNavigationComponent],
  templateUrl: './introduction.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntroductionComponent {

}
