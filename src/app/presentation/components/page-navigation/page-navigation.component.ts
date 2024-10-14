import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, input, signal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-page-navigation',
  standalone: true,
  imports: [LucideAngularModule, NgClass],
  templateUrl: './page-navigation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageNavigationComponent {
  public sections: any = input.required();
  public activeSection = signal('');
  public showScrollToTop = signal(false);

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.onScroll.bind(this));
  
      effect(() => {
        this.updateActiveSection();
      }, { allowSignalWrites: true });
    }
  }

  scrollToTop() {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  updateActiveSection() {
    if (typeof window !== 'undefined') {
      let currentSection = '';
      this.sections().forEach((section: any) => {
        const element = document.getElementById(section.id);
        if (element && window.scrollY >= element.offsetTop - 100) {
          currentSection = section.id;
        }
      });
      this.activeSection.set(currentSection);
    }
  }

  onScroll() {
    if (typeof window !== 'undefined') {
      this.showScrollToTop.set(window.scrollY > 1);
    }
  }

  scrollToSection(sectionId: string) {
    if (typeof window !== 'undefined') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        this.activeSection.set(sectionId);
      }
    }
  }
}
