import { ChangeDetectionStrategy, Component, computed, effect, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageContext } from '@core/services/page-context.service';
import { environment } from '@env/environment';
import { DEFAULT_BLOG_ARTICLES, DEFAULT_BLOG_HUB } from '@core/constants/blog-data';
import type { IBlogArticleContent } from '@core/models/content.model';
import { Breadcrumbs } from '@shared/components/parts';

@Component({
  selector: 'app-blog-detail',
  imports: [RouterLink, Breadcrumbs],
  templateUrl: './blog-detail.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    .article-hero {
      background-color: var(--color-navy);
      color: var(--color-white);
      padding: clamp(48px, 6vw, 80px) 0 clamp(40px, 5vw, 64px);
      border-bottom: 1px solid var(--color-rule-navy);
    }
    .article-hero__breadcrumbs {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.8125rem;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--color-brass);
      margin-bottom: 16px;
    }
    .article-hero__breadcrumbs a {
      color: inherit;
      text-decoration: none;
    }
    .article-hero__breadcrumbs a:hover {
      text-decoration: underline;
    }
    .article-hero__title {
      color: var(--color-white);
      font-size: clamp(2rem, 1.4rem + 2vw, 3.25rem);
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 18px;
      max-width: 900px;
    }
    .article-hero__sub {
      color: var(--color-brass);
      font-size: 0.875rem;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin: 0;
    }
    .article-layout {
      padding: clamp(40px, 6vw, 72px) 0;
      display: grid;
      grid-template-columns: 280px 1fr;
      gap: clamp(32px, 5vw, 64px);
      align-items: start;
    }
    @media (max-width: 900px) {
      .article-layout {
        grid-template-columns: 1fr;
        gap: 40px;
      }
    }
    .article-sidebar {
      position: sticky;
      top: calc(var(--header-h) + 24px);
      background: var(--color-ivory);
      border: 1px solid var(--color-rule);
      border-radius: var(--radius);
      padding: 24px 20px;
    }
    .article-sidebar__heading {
      font-size: 0.8125rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--color-gold-text);
      margin-bottom: 16px;
      padding-bottom: 10px;
      border-bottom: 1px solid var(--color-rule);
    }
    .article-sidebar__nav {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .article-sidebar__link {
      color: var(--color-ink);
      font-size: 0.9375rem;
      line-height: 1.45;
      text-decoration: none;
      transition: color 0.2s ease;
    }
    .article-sidebar__link:hover {
      color: var(--color-brass);
    }
    .in-brief-box {
      background: var(--color-ivory);
      border-inline-start: 4px solid var(--color-brass);
      border-radius: var(--radius);
      padding: clamp(24px, 4vw, 36px);
      margin-bottom: 48px;
    }
    .in-brief-box__heading {
      font-size: 0.875rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--color-gold-text);
      margin-bottom: 16px;
    }
    .in-brief-box__list {
      list-style: disc;
      padding-inline-start: 20px;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .in-brief-box__list li {
      font-size: 1.0625rem;
      line-height: 1.65;
      color: var(--color-ink);
    }
    .article-section {
      margin-bottom: 56px;
    }
    .article-section__header {
      font-size: clamp(1.5rem, 1.25rem + 0.8vw, 2rem);
      font-weight: 700;
      color: var(--color-navy);
      line-height: 1.3;
      margin-bottom: 20px;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--color-rule);
    }
    .article-prose {
      font-size: 1.0625rem;
      line-height: 1.75;
      color: var(--color-ink);
    }
    .article-prose p {
      margin-bottom: 1.25em;
    }
    .article-prose ul, .article-prose ol {
      padding-inline-start: 24px;
      margin-bottom: 1.25em;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .article-prose ul {
      list-style: disc;
    }
    .article-prose ol {
      list-style: decimal;
    }
    .article-table-wrap {
      overflow-x: auto;
      margin: 28px 0;
      border: 1px solid var(--color-rule);
      border-radius: var(--radius);
    }
    .article-table {
      width: 100%;
      border-collapse: collapse;
      text-align: start;
      font-size: 0.9375rem;
    }
    .article-table th {
      background: var(--color-navy);
      color: var(--color-white);
      padding: 14px 18px;
      font-weight: 600;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      font-size: 0.8125rem;
      border-bottom: 1px solid var(--color-rule);
    }
    .article-table td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--color-rule);
      color: var(--color-ink);
      line-height: 1.6;
    }
    .article-table tr:last-child td {
      border-bottom: none;
    }
    .article-table tr:nth-child(even) td {
      background: var(--color-ivory);
    }
    .guide-callout {
      background: var(--color-navy);
      color: var(--color-white);
      border-radius: var(--radius);
      padding: clamp(28px, 4vw, 40px);
      margin: 48px 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 24px;
      border-inline-start: 4px solid var(--color-brass);
    }
    .guide-callout__text {
      font-size: 1.125rem;
      line-height: 1.6;
      max-width: 620px;
      margin: 0;
      color: var(--color-white);
    }
    .guide-callout__btn {
      display: inline-flex;
      align-items: center;
      padding: 12px 24px;
      background: var(--color-brass);
      color: var(--color-navy-deep);
      font-size: 0.875rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      text-decoration: none;
      border-radius: var(--radius);
      transition: background 0.2s ease;
      white-space: nowrap;
    }
    .guide-callout__btn:hover {
      background: #c5a456;
    }
    .article-meta-notes {
      margin-top: 40px;
      padding-top: 24px;
      border-top: 1px solid var(--color-rule);
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .article-disclaimer {
      font-size: 0.875rem;
      color: var(--color-ink-2);
      font-style: italic;
      margin: 0;
    }
    .article-sources {
      font-size: 0.875rem;
      color: var(--color-gold-text);
      font-weight: 500;
      margin: 0;
    }
    .keep-reading-section {
      background: var(--color-ivory);
      padding: clamp(48px, 6vw, 72px) 0;
      border-top: 1px solid var(--color-rule);
      border-bottom: 1px solid var(--color-rule);
    }
    .keep-reading__header {
      font-size: 0.875rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--color-gold-text);
      margin-bottom: 28px;
    }
    .keep-reading-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 24px;
    }
    .keep-reading-card {
      background: var(--color-white);
      border: 1px solid var(--color-rule);
      border-radius: var(--radius);
      padding: 24px;
      transition: all 0.2s ease;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .keep-reading-card:hover {
      border-color: var(--color-brass);
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgb(13 34 63 / 0.05);
    }
    .keep-reading-card__cat {
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--color-gold-text);
      margin-bottom: 8px;
    }
    .keep-reading-card__title {
      font-size: 1.125rem;
      font-weight: 700;
      line-height: 1.35;
      color: var(--color-navy);
      margin: 0;
    }
    .keep-reading-card a {
      color: inherit;
      text-decoration: none;
    }
    .keep-reading-card a:hover {
      color: var(--color-brass);
    }
    .article-cta {
      background: var(--color-navy);
      color: var(--color-white);
      padding: clamp(48px, 6vw, 72px) 0;
      text-align: center;
    }
    .article-cta__tagline {
      font-size: 0.8125rem;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--color-brass);
      margin-bottom: 12px;
    }
    .article-cta__headline {
      color: var(--color-white);
      font-size: clamp(1.75rem, 1.25rem + 1.5vw, 2.5rem);
      font-weight: 700;
      margin-bottom: 28px;
    }
    .article-cta__btn {
      display: inline-flex;
      align-items: center;
      padding: 14px 32px;
      background: var(--color-brass);
      color: var(--color-navy-deep);
      font-size: 0.9375rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      text-decoration: none;
      border-radius: var(--radius);
      transition: background 0.2s ease;
    }
    .article-cta__btn:hover {
      background: #c5a456;
    }
  `]
})
export class BlogDetail {
  protected readonly ctx = inject(PageContext);
  readonly slug = input.required<string>();

  protected readonly article = computed<IBlogArticleContent>(() => {
    const lang = this.ctx.lang();
    const fromDict = this.ctx.d().blogArticles?.[this.slug()];
    return fromDict || DEFAULT_BLOG_ARTICLES[lang]?.[this.slug()] || DEFAULT_BLOG_ARTICLES['en']?.[this.slug()];
  });

  protected readonly hub = computed(() => {
    const lang = this.ctx.lang();
    return this.ctx.d().blogHub || DEFAULT_BLOG_HUB[lang];
  });

  protected readonly guideDownloadUrl = computed(() => {
    const lang = this.ctx.lang();
    return lang === 'ar'
      ? '/downloads/AVERA-Building-Your-Team-in-Egypt-2027-ar.pdf'
      : '/downloads/AVERA-Building-Your-Team-in-Egypt-2027.pdf';
  });

  protected readonly trail = computed(() => {
    const art = this.article();
    return [
      { label: this.hub().header.badge, path: '/blog' },
      { label: art.short_title || art.title, path: `/blog/${this.slug()}` },
    ];
  });

  constructor() {
    effect(() => {
      const art = this.article();
      const lang = this.ctx.lang();
      const path = `/blog/${this.slug()}`;
      const meta = art.meta || {
        title: art.title,
        description: art.in_brief?.[0] || art.title,
      };
      this.ctx._Seo.set(lang, path, meta);
      this.ctx._Seo.jsonLd('article', {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: art.title,
        description: meta.description,
        articleSection: art.category,
        inLanguage: lang,
        url: this.ctx._Seo.url(lang, path),
        publisher: {
          '@type': 'Organization',
          name: this.ctx._Settings.business().name[lang],
          url: environment.siteUrl,
        },
      });
    });
  }
}
