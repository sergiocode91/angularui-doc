import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  standalone: true,
  imports: [],
  templateUrl: './skeleton.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkeletonComponent {

}
