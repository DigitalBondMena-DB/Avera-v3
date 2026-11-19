import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageContext } from '@core/services/page-context.service';
import { DEFAULT_BLOG_HUB } from '@core/constants/blog-data';
import type { IBlogCard, IBlogCategory } from '@core/models/content.model';
import { Breadcrumbs } from '@shared/components/parts';

@Component({
  selector: 'app-blog-hub',
  imports: [RouterLink, Breadcrumbs],
  templateUrl: './blog-hub.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    .blog-hero {
      background-color: var(--color-navy);
      color: var(--color-white);
      padding: clamp(48px, 6vw, 84px) 0 clamp(40px, 5vw, 64px);
      border-bottom: 1px solid var(--color-rule-navy);
    }
    .blog-hero__badge {
      display: inline-block;
      font-size: 0.8125rem;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--color-brass);
      margin-bottom: 16px;
    }
    .blog-hero__title {
      color: var(--color-white);
      font-size: clamp(2rem, 1.5rem + 2vw, 3.25rem);
      font-weight: 700;
      line-height: 1.15;
      margin-bottom: 20px;
      max-width: 820px;
    }
    .blog-hero__lead {
      color: var(--color-on-navy-muted);
      font-size: clamp(1.0625rem, 1rem + 0.35vw, 1.25rem);
      line-height: 1.6;
      max-width: 720px;
      margin: 0;
    }
    .blog-filter {
      padding: 28px 0;
      border-bottom: 1px solid var(--color-rule);
      background: var(--color-white);
      position: sticky;
      top: var(--header-h);
      z-index: 20;
    }
    .blog-filter__list {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      align-items: center;
    }
    .blog-filter__btn {
      padding: 8px 18px;
      font-size: 0.875rem;
      font-weight: 600;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      border: 1px solid var(--color-rule);
      background: var(--color-ivory);
      color: var(--color-ink);
      border-radius: var(--radius);
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .blog-filter__btn:hover {
      border-color: var(--color-brass);
      color: var(--color-navy);
    }
    .blog-filter__btn.is-active {
      background: var(--color-navy);
      border-color: var(--color-navy);
      color: var(--color-white);
    }
    .blog-featured {
      margin-top: 48px;
      margin-bottom: 48px;
    }
    .featured-card {
      background: var(--color-navy);
      color: var(--color-white);
      border-radius: var(--radius);
      padding: clamp(32px, 5vw, 56px);
      display: grid;
      grid-template-columns: 80px 1fr;
      gap: clamp(24px, 4vw, 48px);
      align-items: start;
      border-inline-start: 4px solid var(--color-brass);
      position: relative;
    }
    @media (max-width: 640px) {
      .featured-card {
        grid-template-columns: 1fr;
        gap: 16px;
      }
    }
    .featured-card__num {
      font-size: clamp(2rem, 1.5rem + 1.5vw, 3rem);
      font-weight: 700;
      color: var(--color-brass);
      line-height: 1;
      opacity: 0.9;
    }
    .featured-card__cat {
      font-size: 0.8125rem;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--color-brass);
      margin-bottom: 12px;
    }
    .featured-card__title {
      color: var(--color-white);
      font-size: clamp(1.5rem, 1.25rem + 1vw, 2.25rem);
      font-weight: 700;
      line-height: 1.25;
      margin-bottom: 16px;
    }
    .featured-card__title a {
      color: inherit;
      text-decoration: none;
    }
    .featured-card__title a:hover {
      color: var(--color-brass);
    }
    .featured-card__excerpt {
      color: var(--color-on-navy-muted);
      font-size: 1.0625rem;
      line-height: 1.6;
      margin-bottom: 24px;
      max-width: 720px;
    }
    .featured-card__btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
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
    }
    .featured-card__btn:hover {
      background: #c5a456;
    }
    .blog-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 32px;
      margin-bottom: 72px;
    }
    .blog-card {
      background: var(--color-white);
      border: 1px solid var(--color-rule);
      border-radius: var(--radius);
      padding: 32px 28px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
    }
    .blog-card:hover {
      border-color: var(--color-brass);
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgb(13 34 63 / 0.06);
    }
    .blog-card__header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 16px;
    }
    .blog-card__num {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--color-ink-2);
    }
    .blog-card__cat {
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--color-gold-text);
    }
    .blog-card__title {
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 1.35;
      margin-bottom: 12px;
      color: var(--color-navy);
    }
    .blog-card__title a {
      color: inherit;
      text-decoration: none;
    }
    .blog-card__title a:hover {
      color: var(--color-brass);
    }
    .blog-card__excerpt {
      font-size: 0.9375rem;
      color: var(--color-ink-2);
      line-height: 1.6;
      margin-bottom: 20px;
      flex-grow: 1;
    }
    .blog-card__cta {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 0.875rem;
      font-weight: 600;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--color-navy);
      text-decoration: none;
    }
    .blog-card__cta:hover {
      color: var(--color-brass);
    }
    .blog-cta {
      background: var(--color-navy);
      color: var(--color-white);
      padding: clamp(48px, 6vw, 72px) 0;
      text-align: center;
      position: relative;
    }
    .blog-cta__tagline {
      font-size: 0.8125rem;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--color-brass);
      margin-bottom: 12px;
    }
    .blog-cta__headline {
      color: var(--color-white);
      font-size: clamp(1.75rem, 1.25rem + 1.5vw, 2.5rem);
      font-weight: 700;
      margin-bottom: 28px;
    }
    .blog-cta__btn {
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
    .blog-cta__btn:hover {
      background: #c5a456;
    }
    .blog-cta__footer {
      margin-top: 36px;
      padding-top: 24px;
      border-top: 1px solid var(--color-rule-navy);
      color: var(--color-on-navy-muted);
      font-size: 0.875rem;
    }
  `]
})
export class BlogHub {
  protected readonly ctx = inject(PageContext);

  protected readonly hub = computed(() => {
    const lang = this.ctx.lang();
    return this.ctx.d().blogHub || DEFAULT_BLOG_HUB[lang];
  });

  protected readonly activeCategory = signal<string>('all');

  protected readonly categories = computed<IBlogCategory[]>(() => {
    return this.hub().categories;
  });

  protected readonly featured = computed<IBlogCard>(() => {
    return this.hub().featured_article;
  });

  protected readonly cards = computed<IBlogCard[]>(() => {
    const cat = this.activeCategory().toLowerCase();
    const allCards = this.hub().card_listings;
    if (cat === 'all' || cat === 'الكل') {
      return allCards;
    }
    return allCards.filter(card => {
      const cardCat = card.category.toLowerCase().replace(/\s+/g, '-');
      return cardCat.includes(cat) || card.category.toLowerCase() === cat;
    });
  });

  protected readonly isFeaturedVisible = computed<boolean>(() => {
    const cat = this.activeCategory().toLowerCase();
    if (cat === 'all' || cat === 'الكل') return true;
    const featCat = this.featured().category.toLowerCase().replace(/\s+/g, '-');
    return featCat.includes(cat) || this.featured().category.toLowerCase() === cat;
  });

  protected readonly trail = computed(() => [
    { label: this.hub().header.badge, path: '/blog' }
  ]);

  constructor() {
    effect(() => {
      const lang = this.ctx.lang();
      const meta = this.hub().meta || {
        title: this.hub().header.title,
        description: this.hub().header.description
      };
      this.ctx._Seo.set(lang, '/blog', meta);
    });
  }

  setCategory(catId: string) {
    this.activeCategory.set(catId);
  }
}
