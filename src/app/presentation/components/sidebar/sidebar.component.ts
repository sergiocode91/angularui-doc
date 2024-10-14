import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  public gettingStarted = signal([
    { label: 'Introduction', path: 'introduction' },
    { label: 'Installation', path: 'installation' },
    { label: 'Upgrade guide', path: 'upgrade-guide' },
  ]);
  public components = signal([
    { label: 'Alert', path: 'alert' },
    { label: 'Avatar', path: 'avatar' },
    { label: 'Badge', path: 'badge' },
    { label: 'Breadcrumb', path: 'breadcrumb' },
    { label: 'Button', path: 'button' },
    { label: 'Card', path: 'card' },
    { label: 'Dialog', path: 'dialog' },
    { label: 'Input', path: 'input' },
    { label: 'Label', path: 'label' },
    { label: 'Progress', path: 'progress' },
    { label: 'Select', path: 'select' },
    { label: 'Skeleton', path: 'skeleton' },
    { label: 'Spinner', path: 'spinner' },
    { label: 'Switch', path: 'switch' },
    { label: 'Table', path: 'table' },
    { label: 'Textarea', path: 'textarea' },
    { label: 'Tooltip', path: 'tooltip' },
  ]);
}
