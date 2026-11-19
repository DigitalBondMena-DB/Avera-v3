import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators, type AbstractControl } from '@angular/forms';
import { finalize } from 'rxjs';
import { PageContext } from '@core/services/page-context.service';
import { ApiService } from '@core/services/api.service';
import { AnalyticsService } from '@core/services/analytics.service';
import { API_END_POINTS } from '@core/constants/api-end-points';
import { EMAIL_PATTERN, errorText } from '@shared/components/forms/lead-validators';
import { Breadcrumbs, PageHero } from '@shared/components/parts';
import { Icon } from '@shared/components/icon';

const PATH = '/guide';

@Component({
  selector: 'app-guide',
  imports: [RouterLink, ReactiveFormsModule, Breadcrumbs, PageHero, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let d = ctx.d();
    @let g = d.guide;
    @let f = d.forms;

    <app-breadcrumbs [trail]="trail()" />
    <app-page-hero [eyebrow]="g.eyebrow || d.siteName" [title]="g.h1" />

    <section class="section">
      <div class="container">
        <div class="split split--6-6 guide-grid">
          <div class="guide-intro">
            <h2 class="h3">{{ g.summaryTitle }}</h2>
            <ul class="guide-bullets">
              @for (b of bullets(); track b) {
                <li class="guide-bullet">
                  <app-icon name="check" class="guide-bullet__icon" />
                  <span>{{ b }}</span>
                </li>
              }
            </ul>
            <div class="summary-box" style="margin-top: 32px;">
              <p class="summary-box__text">AVERA ELITE · BUSINESS SOLUTIONS</p>
              <p class="note" style="margin: 8px 0 0;">{{ g.disclaimer || d.common.generalInfo }}</p>
            </div>
          </div>

          <div class="guide-form-card">
            @if (submitted()) {
              <div class="guide-success" role="status">
                <div class="guide-success__icon">
                  <app-icon name="check" [size]="32" />
                </div>
                <h3 class="h3">{{ g.successTitle }}</h3>
                <p class="guide-success__text">{{ g.successText }}</p>
                <a [href]="downloadUrl()" download class="btn btn--primary btn--lg" style="margin-top: 24px;">
                  <span>{{ g.downloadBtn }}</span>
                  <span aria-hidden="true">&darr;</span>
                </a>
              </div>
            } @else {
              <form class="form" [formGroup]="form" (ngSubmit)="submit()" novalidate>
                @if (attempted() && form.invalid) {
                  <p class="form__summary" role="alert">{{ f.errorSummary }}</p>
                }

                <div class="form__fields">
                  <div class="field" [class.field--error]="err('name')">
                    <label class="field__label" for="guide-name">{{ f.fields.name }}</label>
                    <input id="guide-name" formControlName="name" type="text" autocomplete="name"
                      [attr.aria-invalid]="err('name') ? true : null" [attr.aria-describedby]="err('name') ? 'guide-name-err' : null" />
                    @if (err('name'); as e) { <p class="field__error" id="guide-name-err">{{ e }}</p> }
                  </div>

                  <div class="field" [class.field--error]="err('email')">
                    <label class="field__label" for="guide-email">{{ f.fields.email }}</label>
                    <input id="guide-email" formControlName="email" type="email" dir="ltr" autocomplete="email"
                      [attr.aria-invalid]="err('email') ? true : null" [attr.aria-describedby]="err('email') ? 'guide-email-err' : null" />
                    @if (err('email'); as e) { <p class="field__error" id="guide-email-err">{{ e }}</p> }
                  </div>

                  <div class="field" [class.field--error]="err('company')">
                    <label class="field__label" for="guide-company">{{ f.fields.company }}</label>
                    <input id="guide-company" formControlName="company" type="text" autocomplete="organization"
                      [attr.aria-invalid]="err('company') ? true : null" [attr.aria-describedby]="err('company') ? 'guide-company-err' : null" />
                    @if (err('company'); as e) { <p class="field__error" id="guide-company-err">{{ e }}</p> }
                  </div>

                  <div class="field" [class.field--error]="err('country')">
                    <label class="field__label" for="guide-country">{{ f.fields.country }}</label>
                    <div class="select">
                      <select id="guide-country" formControlName="country" [attr.aria-invalid]="err('country') ? true : null"
                        [attr.aria-describedby]="err('country') ? 'guide-country-err' : null">
                        <option value="">{{ f.fields.countryPlaceholder }}</option>
                        @for (o of f.countries; track o.value) { <option [value]="o.value">{{ o.label }}</option> }
                      </select>
                    </div>
                    @if (err('country'); as e) { <p class="field__error" id="guide-country-err">{{ e }}</p> }
                  </div>

                  <div class="hp" aria-hidden="true">
                    <label>Website<input tabindex="-1" autocomplete="off" name="website" [value]="website()" (input)="onWebsite($event)" /></label>
                  </div>

                  <p class="form__privacy">
                    {{ g.consentLine }}
                    <a [routerLink]="ctx.L('/privacy')">{{ f.privacyLink }}</a>.
                  </p>
                </div>

                <div class="form__actions" style="margin-top: 24px;">
                  <button type="submit" class="btn btn--primary btn--full" [disabled]="busy()" [attr.aria-busy]="busy() || null">
                    {{ busy() ? f.submitting : (g.submit || f.submit) }}
                  </button>
                </div>
              </form>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .guide-grid {
      align-items: start;
      gap: clamp(32px, 5vw, 64px);
    }
    .guide-bullets {
      list-style: none;
      padding: 0;
      margin: 24px 0 0;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .guide-bullet {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      font-size: 1.0625rem;
      line-height: 1.6;
      color: var(--color-ink);
    }
    .guide-bullet__icon {
      color: var(--color-brass);
      flex-shrink: 0;
      margin-top: 4px;
    }
    .guide-form-card {
      background: var(--color-ivory);
      border: 1px solid var(--color-rule);
      border-radius: var(--radius);
      padding: clamp(24px, 4vw, 40px);
    }
    .btn--full {
      width: 100%;
      justify-content: center;
    }
    .guide-success {
      text-align: center;
      padding: 24px 12px;
    }
    .guide-success__icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: var(--color-navy);
      color: var(--color-brass);
      margin-bottom: 20px;
    }
    .guide-success__text {
      color: var(--color-ink-2);
      font-size: 1.0625rem;
      line-height: 1.6;
      margin-top: 12px;
    }
  `],
})
export class Guide {
  protected readonly ctx = inject(PageContext);
  private readonly _Fb = inject(FormBuilder).nonNullable;
  private readonly _Api = inject(ApiService);
  private readonly _Analytics = inject(AnalyticsService);

  protected readonly busy = signal(false);
  protected readonly attempted = signal(false);
  protected readonly submitted = signal(false);
  protected readonly website = signal('');

  protected readonly bullets = computed(() => {
    const g = this.ctx.d().guide;
    if (g.bullets && g.bullets.length > 0) return g.bullets;
    return g.summary ? g.summary.split('\n\n').filter(Boolean) : [];
  });

  protected readonly downloadUrl = computed(() =>
    this.ctx.lang() === 'ar'
      ? '/downloads/AVERA-Building-Your-Team-in-Egypt-2027-ar.pdf'
      : '/downloads/AVERA-Building-Your-Team-in-Egypt-2027.pdf'
  );

  protected readonly trail = computed(() => [{ label: this.ctx.d().guide.h1, path: PATH }]);

  protected readonly form = this._Fb.group({
    name: ['', [Validators.required, Validators.maxLength(120)]],
    email: ['', [Validators.required, Validators.maxLength(254), Validators.pattern(EMAIL_PATTERN)]],
    company: ['', [Validators.required, Validators.maxLength(160)]],
    country: ['', [Validators.required]],
  });

  constructor() {
    effect(() => this.ctx._Seo.set(this.ctx.lang(), PATH, this.ctx.d().guide.meta));
  }

  protected ctrl(k: string): AbstractControl { return this.form.get(k)!; }
  protected err(k: string): string | null {
    const c = this.ctrl(k);
    if (!c.invalid || (!c.touched && !this.attempted())) return null;
    return errorText(c.errors, this.ctx.d().forms.errors);
  }
  protected onWebsite(e: Event): void { this.website.set((e.target as HTMLInputElement).value); }

  protected submit(): void {
    if (this.busy()) return;
    this.attempted.set(true);
    if (this.form.invalid) return;

    if (this.website().trim()) {
      this.submitted.set(true);
      return;
    }

    this.busy.set(true);
    const val = this.form.getRawValue();
    const payload = {
      kind: 'documents',
      locale: this.ctx.lang(),
      page: PATH,
      website: '',
      data: {
        name: val.name,
        email: val.email,
        company: val.company,
        country: val.country,
        documents: `Guide Request: ${this.ctx.d().guide.h1}`,
      },
    };

    this._Api.post(API_END_POINTS.LEADS, payload).pipe(
      finalize(() => {
        this.busy.set(false);
        this.submitted.set(true);
        this._Analytics.track('generate_lead', { form_type: 'guide_download' });
      })
    ).subscribe({
      next: () => {
        if (typeof document !== 'undefined') {
          const a = document.createElement('a');
          a.href = this.downloadUrl();
          a.download = '';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        }
      },
      error: () => {
        if (typeof document !== 'undefined') {
          const a = document.createElement('a');
          a.href = this.downloadUrl();
          a.download = '';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        }
      }
    });
  }
}
