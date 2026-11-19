import { ChangeDetectionStrategy, Component, computed, effect, inject, input } from '@angular/core';
import { PageContext } from '@core/services/page-context.service';
import { Breadcrumbs, PageHero } from '@shared/components/parts';

/** Privacy and terms: authoritative legal notices rendered with semantic HTML structure. */
@Component({
  selector: 'app-legal-page',
  imports: [Breadcrumbs, PageHero],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let p = page();
    <app-breadcrumbs [trail]="trail()" />
    <app-page-hero [title]="p.h1" [lead]="p.updatedNote" tone="white" />
    <section class="section section--tight">
      <div class="container prose">
        @if (p.inShort?.length) {
          <div class="summary-box">
            <h2 class="h4">{{ p.inShortTitle || (ctx.lang() === 'ar' ? 'باختصار' : 'In short') }}</h2>
            <ul>
              @for (item of p.inShort; track item) {
                <li>{{ item }}</li>
              }
            </ul>
          </div>
        }
        @for (s of p.sections; track s.title) {
          <section class="legal-section">
            <h2 class="h3">{{ s.title }}</h2>
            @if (s.contentHtml) {
              <div class="legal-content" [innerHTML]="s.contentHtml"></div>
            } @else {
              <p>{{ s.text }}</p>
            }
          </section>
        }
      </div>
    </section>`,
})
export class LegalPage {
  protected readonly ctx = inject(PageContext);
  readonly doc = input.required<'privacy' | 'terms'>();
  protected readonly page = computed(() => this.ctx.d().legal[this.doc()]);
  protected readonly trail = computed(() => [{ label: this.page().h1, path: `/${this.doc()}` }]);
  constructor() { effect(() => this.ctx._Seo.set(this.ctx.lang(), `/${this.doc()}`, this.page().meta)); }
}
