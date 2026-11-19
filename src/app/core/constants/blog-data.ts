import type { IBlogHubContent, IBlogArticleContent, Locale } from '@core/models/content.model';

export const DEFAULT_BLOG_HUB: Record<Locale, IBlogHubContent> = {
  en: {
  "header": {
    "badge": "THE AVERA BLOG",
    "title": "Building a team in Egypt, explained.",
    "description": "Plain guidance for companies hiring in Egypt: who is responsible for what, what to ask a provider, and what the law means for employers."
  },
  "categories": [
    {
      "id": "all",
      "label": "ALL"
    },
    {
      "id": "hiring-in-egypt",
      "label": "HIRING IN EGYPT"
    },
    {
      "id": "employer-of-record",
      "label": "EMPLOYER OF RECORD"
    },
    {
      "id": "payroll-and-hr",
      "label": "PAYROLL AND HR"
    },
    {
      "id": "about-avera",
      "label": "ABOUT AVERA"
    }
  ],
  "featured_article": {
    "number": "01",
    "slug": "eor-egypt",
    "category": "EMPLOYER OF RECORD",
    "title": "What is an Employer of Record in Egypt?",
    "excerpt": "A company registered in Egypt becomes the legal employer of your staff there, while you direct their daily work.",
    "cta_text": "READ THE ARTICLE",
    "cta_link": "/en/blog/eor-egypt"
  },
  "card_listings": [
    {
      "number": "02",
      "slug": "hiring-in-egypt",
      "category": "HIRING IN EGYPT",
      "title": "Hiring in Egypt: how the journey starts",
      "excerpt": "Building a team in Egypt takes five stages. Each stage has a clear owner.",
      "cta_text": "READ",
      "cta_link": "/en/blog/hiring-in-egypt"
    },
    {
      "number": "03",
      "slug": "egypt-labor-law-2025",
      "category": "PAYROLL AND HR",
      "title": "Egypt's new Labor Law: what employers should know",
      "excerpt": "Labor Law No. 14 of 2025 took effect on 1 September 2025. Contracts drafted before it need review.",
      "cta_text": "READ",
      "cta_link": "/en/blog/egypt-labor-law-2025"
    },
    {
      "number": "04",
      "slug": "choosing-eor-egypt",
      "category": "EMPLOYER OF RECORD",
      "title": "Six questions to ask before choosing an EOR in Egypt",
      "excerpt": "What you ask before signing decides what happens after.",
      "cta_text": "READ",
      "cta_link": "/en/blog/choosing-eor-egypt"
    },
    {
      "number": "05",
      "slug": "eor-contract-data-benefits",
      "category": "EMPLOYER OF RECORD",
      "title": "Contract, data and benefits questions before you sign",
      "excerpt": "Six questions on the terms of the contract itself and on your employees’ data.",
      "cta_text": "READ",
      "cta_link": "/en/blog/eor-contract-data-benefits"
    },
    {
      "number": "06",
      "slug": "inside-avera-how-we-work",
      "category": "ABOUT AVERA",
      "title": "Inside AVERA: how we work",
      "excerpt": "Four principles: written responsibility, clear steps, two languages, and confidentiality.",
      "cta_text": "READ",
      "cta_link": "/en/blog/inside-avera-how-we-work"
    }
  ],
  "cta": {
    "tagline": "YOUR TEAM IN EGYPT. OUR RESPONSIBILITY.",
    "headline": "Thinking of building a team in Egypt?",
    "button_text": "GET YOUR PROPOSAL",
    "button_link": "/en/contact",
    "footer_contact": "AVERA ELITE · BUSINESS SOLUTIONS | 74 El Nozha St., Heliopolis, Cairo, Egypt · info@averaelite.com"
  }
},
  ar: {
  "header": {
    "badge": "مدوّنة AVERA",
    "title": "بناء فريق في مصر، بوضوح.",
    "description": "إرشاد مباشر للشركات التي توظّف في مصر: من المسؤول عن ماذا، وماذا تسألون المزوّد، وماذا يعني القانون لصاحب العمل."
  },
  "categories": [
    {
      "id": "all",
      "label": "الكل"
    },
    {
      "id": "hiring-in-egypt",
      "label": "التوظيف في مصر"
    },
    {
      "id": "employer-of-record",
      "label": "صاحب العمل الرسمي"
    },
    {
      "id": "payroll-and-hr",
      "label": "الرواتب والموارد البشرية"
    },
    {
      "id": "about-avera",
      "label": "عن افيرا"
    }
  ],
  "featured_article": {
    "number": "01",
    "slug": "eor-egypt",
    "category": "صاحب العمل الرسمي",
    "title": "ما هو صاحب العمل الرسمي (EOR) في مصر؟",
    "excerpt": "صاحب العمل الرسمي شركة مسجّلة في مصر تتولى التوظيف القانوني لموظفيكم هناك، بينما توجهون أنتم عملهم اليومي.",
    "cta_text": "اقرأوا المقال",
    "cta_link": "/ar/blog/eor-egypt"
  },
  "card_listings": [
    {
      "number": "02",
      "slug": "hiring-in-egypt",
      "category": "التوظيف في مصر",
      "title": "التوظيف في مصر: كيف تبدأ الرحلة",
      "excerpt": "بناء فريق في مصر يمرّ بخمس مراحل. كل مرحلة لها مسؤول واضح.",
      "cta_text": "اقرأوا",
      "cta_link": "/ar/blog/hiring-in-egypt"
    },
    {
      "number": "03",
      "slug": "egypt-labor-law-2025",
      "category": "الرواتب والموارد البشرية",
      "title": "قانون العمل المصري الجديد: ما يهم صاحب العمل",
      "excerpt": "نفذ قانون العمل رقم 14 لسنة 2025 في 1 سبتمبر 2025.. العقود المحرّرة قبله تحتاج مراجعة",
      "cta_text": "اقرأوا",
      "cta_link": "/ar/blog/egypt-labor-law-2025"
    },
    {
      "number": "04",
      "slug": "choosing-eor-egypt",
      "category": "صاحب العمل الرسمي",
      "title": "ستة أسئلة قبل اختيار مزوّد EOR في مصر",
      "excerpt": "ما تسألون عنه قبل التعاقد يحدد ما يحدث بعده.",
      "cta_text": "اقرأوا",
      "cta_link": "/ar/blog/choosing-eor-egypt"
    },
    {
      "number": "05",
      "slug": "eor-contract-data-benefits",
      "category": "صاحب العمل الرسمي",
      "title": "أسئلة العقد والبيانات والمزايا قبل التوقيع",
      "excerpt": "ستة أسئلة تتعلق بشروط العقد نفسه وبيانات موظفيكم.",
      "cta_text": "اقرأوا",
      "cta_link": "/ar/blog/eor-contract-data-benefits"
    },
    {
      "number": "06",
      "slug": "inside-avera-how-we-work",
      "category": "عن افيرا",
      "title": "من الداخل: كيف نعمل",
      "excerpt": "أربعة مبادئ: مسؤولية مكتوبة، ووضوح في الخطوات، ولغتان، وسرية ما تؤتمنوننا عليه.",
      "cta_text": "اقرأوا",
      "cta_link": "/ar/blog/inside-avera-how-we-work"
    }
  ],
  "cta": {
    "tagline": "فريقكم في مصر، مسؤوليتنا.",
    "headline": "هل تفكرون في بدء فريق في مصر؟",
    "button_text": "احصل على عرضك",
    "button_link": "/ar/contact",
    "footer_contact": "AVERA ELITE · BUSINESS SOLUTIONS | 74 El Nozha St., Heliopolis, Cairo, Egypt · info@averaelite.com"
  }
}
};

export const DEFAULT_BLOG_ARTICLES: Record<Locale, Record<string, IBlogArticleContent>> = {
  en: {
  "eor-egypt": {
    "title": "What is an Employer of Record in Egypt, and when does it suit your company?",
    "short_title": "What is an Employer of Record in Egypt?",
    "category": "EMPLOYER OF RECORD",
    "breadcrumbs": [
      "BLOG",
      "EMPLOYER OF RECORD"
    ],
    "subtitle": "AVERA ELITE · BUSINESS SOLUTIONS",
    "table_of_contents": [
      "What does an EOR do?",
      "Who is responsible for what?",
      "When does an EOR fit?",
      "Questions to ask any provider"
    ],
    "in_brief": [
      "An Employer of Record (EOR) is a company registered in Egypt that becomes the legal employer of your staff there, while you direct their daily work.",
      "It suits a company with no Egyptian entity that wants to start a team without setting one up.",
      "Before signing, ask: whose name is on the contracts and invoices, and who is responsible if something goes wrong?"
    ],
    "sections": [
      {
        "id": "what-does-an-eor-do",
        "header": "What does an EOR do?",
        "content_text": "Under an EOR model, the employee is legally employed by the registered company in Egypt. That company signs the employment contract, runs payroll and registers the employee for social insurance. Your company directs the work and sets the goals. This is the model AVERA offers to Gulf and international companies building a team in Egypt.",
        "content_html": "<p>Under an EOR model, the employee is legally employed by the registered company in Egypt. That company signs the employment contract, runs payroll and registers the employee for social insurance. Your company directs the work and sets the goals. This is the model AVERA offers to Gulf and international companies building a team in Egypt.</p>"
      },
      {
        "id": "who-is-responsible-for-what",
        "header": "Who is responsible for what?",
        "content_text": "A clear division of responsibilities ensures smooth daily operations between AVERA and your company.",
        "content_html": "<p>A clear division of responsibilities ensures smooth daily operations between AVERA and your company.</p>",
        "table": {
          "headers": [
            "ITEM",
            "RESPONSIBLE"
          ],
          "rows": [
            [
              "Employment contract and employer obligations",
              "AVERA"
            ],
            [
              "Payroll, statutory entitlements and insurance",
              "AVERA"
            ],
            [
              "Invoices and the contract with your company",
              "AVERA"
            ],
            [
              "Day-to-day direction and performance",
              "Your company"
            ],
            [
              "Defining tasks and goals",
              "Your company"
            ]
          ],
          "table_html": "<table><thead><tr><th>ITEM</th><th>RESPONSIBLE</th></tr></thead><tbody><tr><td>Employment contract and employer obligations</td><td>AVERA</td></tr><tr><td>Payroll, statutory entitlements and insurance</td><td>AVERA</td></tr><tr><td>Invoices and the contract with your company</td><td>AVERA</td></tr><tr><td>Day-to-day direction and performance</td><td>Your company</td></tr><tr><td>Defining tasks and goals</td><td>Your company</td></tr></tbody></table>"
        }
      },
      {
        "id": "when-does-an-eor-fit",
        "header": "When does an EOR fit?",
        "bullets": [
          "You have no entity in Egypt and want to start with a small or mid-sized team.",
          "You are testing the market before committing to a permanent entity.",
          "You prefer one party to handle the legal and payroll side of employment."
        ],
        "content_text": "When might your own entity fit better? When you plan large, permanent operations in Egypt. That decision should rest on specialist legal and tax advice.",
        "content_html": "<ul><li>You have no entity in Egypt and want to start with a small or mid-sized team.</li><li>You are testing the market before committing to a permanent entity.</li><li>You prefer one party to handle the legal and payroll side of employment.</li></ul><p>When might your own entity fit better? When you plan large, permanent operations in Egypt. That decision should rest on specialist legal and tax advice.</p>"
      },
      {
        "id": "questions-to-ask-any-provider",
        "header": "Questions to ask any provider",
        "numbered_list": [
          "Whose name is on the contract with your company and with the employee, and on the invoices?",
          "What happens if there is a payroll or registration error, and who answers?"
        ],
        "content_text": "1. Whose name is on the contract with your company and with the employee, and on the invoices?\n2. What happens if there is a payroll or registration error, and who answers?",
        "content_html": "<ol><li>Whose name is on the contract with your company and with the employee, and on the invoices?</li><li>What happens if there is a payroll or registration error, and who answers?</li></ol>"
      }
    ],
    "guide_box": {
      "text": "The full list of provider questions, with a ready-to-use evaluation template, is in the guide \"Build your team in Egypt 2027\".",
      "button_text": "DOWNLOAD THE GUIDE FREE",
      "button_link": "/en/guide-download"
    },
    "disclaimer": "This article is general information, not legal advice.",
    "sources": "EY: Egypt Labor Law No. 14 of 2025 · Andersen Egypt",
    "keep_reading": [
      {
        "category": "HIRING IN EGYPT",
        "title": "Hiring in Egypt: how the journey starts",
        "slug": "hiring-in-egypt"
      },
      {
        "category": "PAYROLL AND HR",
        "title": "Egypt’s new Labor Law: what employers should know",
        "slug": "egypt-labor-law-2025"
      },
      {
        "category": "EMPLOYER OF RECORD",
        "title": "Six questions to ask before choosing an EOR in Egypt",
        "slug": "choosing-eor-egypt"
      }
    ],
    "cta": {
      "tagline": "YOUR TEAM IN EGYPT. OUR RESPONSIBILITY.",
      "headline": "Thinking of building a team in Egypt?",
      "button_text": "GET YOUR PROPOSAL",
      "button_link": "/en/contact"
    }
  },
  "hiring-in-egypt": {
    "title": "Hiring in Egypt: how the journey starts and who handles each stage",
    "short_title": "Hiring in Egypt: how the journey starts",
    "category": "HIRING IN EGYPT",
    "breadcrumbs": [
      "BLOG",
      "HIRING IN EGYPT"
    ],
    "subtitle": "AVERA ELITE · BUSINESS SOLUTIONS",
    "table_of_contents": [
      "Tips for an easier start"
    ],
    "in_brief": [
      "Building a team in Egypt takes five stages. Each stage has a clear owner, and what is asked of your company at each stage is limited."
    ],
    "sections": [
      {
        "id": "five-stages-of-hiring",
        "header": "The Five Stages of Hiring in Egypt",
        "stages": [
          {
            "number": 1,
            "name": "Consultation and role definition",
            "description": "We learn your activity, team size, the tasks of each role, and what fits you: hiring only, or formal employment through an EOR."
          },
          {
            "number": 2,
            "name": "Proposal and contract",
            "description": "You receive a written proposal setting out scope and responsibilities, then contract with AVERA."
          },
          {
            "number": 3,
            "name": "Search and shortlisting",
            "description": "We search for candidates, assess them and give you a short list. You run the interviews and decide."
          },
          {
            "number": 4,
            "name": "Offer and appointment",
            "description": "AVERA prepares the employment contract as the employer of record and registers the employee."
          },
          {
            "number": 5,
            "name": "Monthly operations",
            "description": "Payroll, insurance and monthly reports, with one point of contact for any query."
          }
        ],
        "content_text": "1. Consultation and role definition. We learn your activity, team size, the tasks of each role, and what fits you: hiring only, or formal employment through an EOR.\n2. Proposal and contract. You receive a written proposal setting out scope and responsibilities, then contract with AVERA.\n3. Search and shortlisting. We search for candidates, assess them and give you a short list. You run the interviews and decide.\n4. Offer and appointment. AVERA prepares the employment contract as the employer of record and registers the employee.\n5. Monthly operations. Payroll, insurance and monthly reports, with one point of contact for any query.",
        "content_html": "<ol><li><strong>Consultation and role definition.</strong> We learn your activity, team size, the tasks of each role, and what fits you: hiring only, or formal employment through an EOR.</li><li><strong>Proposal and contract.</strong> You receive a written proposal setting out scope and responsibilities, then contract with AVERA.</li><li><strong>Search and shortlisting.</strong> We search for candidates, assess them and give you a short list. You run the interviews and decide.</li><li><strong>Offer and appointment.</strong> AVERA prepares the employment contract as the employer of record and registers the employee.</li><li><strong>Monthly operations.</strong> Payroll, insurance and monthly reports, with one point of contact for any query.</li></ol>"
      },
      {
        "id": "tips-for-an-easier-start",
        "header": "Tips for an easier start",
        "content_text": "Write the role's tasks in short sentences before you start; it shortens the search.",
        "content_html": "<p>Write the role's tasks in short sentences before you start; it shortens the search.</p>"
      }
    ],
    "guide_box": {
      "text": "Who does what at each stage, and a week-by-week plan for the first 90 days, are in the guide \"Build your team in Egypt 2027\".",
      "button_text": "DOWNLOAD THE GUIDE FREE",
      "button_link": "/en/guide-download"
    },
    "disclaimer": "General information, not legal advice.",
    "sources": "",
    "keep_reading": [
      {
        "category": "PAYROLL AND HR",
        "title": "Egypt’s new Labor Law: what employers should know",
        "slug": "egypt-labor-law-2025"
      },
      {
        "category": "EMPLOYER OF RECORD",
        "title": "Six questions to ask before choosing an EOR in Egypt",
        "slug": "choosing-eor-egypt"
      },
      {
        "category": "EMPLOYER OF RECORD",
        "title": "Contract, data and benefits questions before you sign",
        "slug": "eor-contract-data-benefits"
      }
    ],
    "cta": {
      "tagline": "YOUR TEAM IN EGYPT. OUR RESPONSIBILITY.",
      "headline": "Thinking of building a team in Egypt?",
      "button_text": "GET YOUR PROPOSAL",
      "button_link": "/en/contact"
    }
  },
  "egypt-labor-law-2025": {
    "title": "Egypt's new Labor Law: what employers should know",
    "short_title": "Egypt's new Labor Law: what employers should know",
    "category": "PAYROLL AND HR",
    "breadcrumbs": [
      "BLOG",
      "PAYROLL AND HR"
    ],
    "subtitle": "AVERA ELITE · BUSINESS SOLUTIONS",
    "table_of_contents": [
      "Points legal commentators list (general awareness only)",
      "What to do now"
    ],
    "in_brief": [
      "Labor Law No. 14 of 2025 took effect on 1 September 2025, replacing Law No. 12 of 2003 (EY).",
      "Contracts drafted before it need review.",
      "Your obligations differ by model: your own entity or an EOR."
    ],
    "sections": [
      {
        "id": "points-legal-commentators-list",
        "header": "Points legal commentators list (general awareness only)",
        "content_text": "Key points highlighted by legal analysts regarding Egypt's new Labor Law No. 14 of 2025.",
        "content_html": "<p>Key points highlighted by legal analysts regarding Egypt's new Labor Law No. 14 of 2025.</p>",
        "table": {
          "headers": [
            "POINT",
            "WHAT THE SOURCES SAY",
            "SOURCE"
          ],
          "rows": [
            [
              "Probation",
              "Capped at three months, and not repeatable with the same employer",
              "Law-firm summary"
            ],
            [
              "Contract duration",
              "Contracts are presumed open-ended unless justified otherwise",
              "Andersen"
            ],
            [
              "Pre-signed resignation forms",
              "Not valid as a basis for ending employment",
              "Andersen"
            ],
            [
              "Dismissal and termination",
              "The law distinguishes \"dismissal\" (requires a court ruling) from lawful termination for legitimate causes",
              "Andersen"
            ],
            [
              "Contract copies",
              "Four counterparts, one deposited with the Ministry of Manpower",
              "Lexology"
            ],
            [
              "Labor courts",
              "Specialised labor courts from 1 October 2025",
              "EY"
            ]
          ],
          "table_html": "<table><thead><tr><th>POINT</th><th>WHAT THE SOURCES SAY</th><th>SOURCE</th></tr></thead><tbody><tr><td>Probation</td><td>Capped at three months, and not repeatable with the same employer</td><td>Law-firm summary</td></tr><tr><td>Contract duration</td><td>Contracts are presumed open-ended unless justified otherwise</td><td>Andersen</td></tr><tr><td>Pre-signed resignation forms</td><td>Not valid as a basis for ending employment</td><td>Andersen</td></tr><tr><td>Dismissal and termination</td><td>The law distinguishes \"dismissal\" (requires a court ruling) from lawful termination for legitimate causes</td><td>Andersen</td></tr><tr><td>Contract copies</td><td>Four counterparts, one deposited with the Ministry of Manpower</td><td>Lexology</td></tr><tr><td>Labor courts</td><td>Specialised labor courts from 1 October 2025</td><td>EY</td></tr></tbody></table>"
        }
      },
      {
        "id": "what-to-do-now",
        "header": "What to do now",
        "numbered_list": [
          "Review your current employment contracts with your legal adviser."
        ],
        "content_text": "1. Review your current employment contracts with your legal adviser.",
        "content_html": "<ol><li>Review your current employment contracts with your legal adviser.</li></ol>"
      }
    ],
    "guide_box": {
      "text": "The full review checklist, and what changes in 2027, are in the guide \"Build your team in Egypt 2027\".",
      "button_text": "DOWNLOAD THE GUIDE FREE",
      "button_link": "/en/guide-download"
    },
    "disclaimer": "General information, not legal advice. Rules may change.",
    "sources": "EY · Andersen · Lexology",
    "keep_reading": [
      {
        "category": "EMPLOYER OF RECORD",
        "title": "Six questions to ask before choosing an EOR in Egypt",
        "slug": "choosing-eor-egypt"
      },
      {
        "category": "EMPLOYER OF RECORD",
        "title": "Contract, data and benefits questions before you sign",
        "slug": "eor-contract-data-benefits"
      },
      {
        "category": "ABOUT AVERA",
        "title": "Inside AVERA: how we work",
        "slug": "inside-avera-how-we-work"
      }
    ],
    "cta": {
      "tagline": "YOUR TEAM IN EGYPT. OUR RESPONSIBILITY.",
      "headline": "Thinking of building a team in Egypt?",
      "button_text": "GET YOUR PROPOSAL",
      "button_link": "/en/contact"
    }
  },
  "choosing-eor-egypt": {
    "title": "Six questions to ask before choosing an EOR provider in Egypt",
    "short_title": "Six questions to ask before choosing an EOR in Egypt",
    "category": "EMPLOYER OF RECORD",
    "breadcrumbs": [
      "BLOG",
      "EMPLOYER OF RECORD"
    ],
    "subtitle": "AVERA ELITE · BUSINESS SOLUTIONS",
    "table_of_contents": [
      "What we commit to at AVERA"
    ],
    "in_brief": [
      "What you ask before signing decides what happens after. Here are six topics where you should ask for a written answer."
    ],
    "sections": [
      {
        "id": "key-evaluation-topics",
        "header": "Topics to Evaluate Before Choosing an EOR Provider",
        "content_text": "A structured comparison of critical risks, warning signs, and the exact questions to ask potential EOR providers.",
        "content_html": "<p>A structured comparison of critical risks, warning signs, and the exact questions to ask potential EOR providers.</p>",
        "table": {
          "headers": [
            "TOPIC",
            "THE PROBLEM",
            "WATCH FOR",
            "ASK"
          ],
          "rows": [
            [
              "1. Who is responsible?",
              "Unclear who answers when something goes wrong",
              "Contracts and invoices under several names; hand-offs between parties",
              "Whose name is on the contract and invoice? Who answers to us?"
            ],
            [
              "2. Contracts that follow the law",
              "An old template may conflict with the new Labor Law",
              "Templates not updated since September 2025",
              "When were the contract templates updated? How do you track changes?"
            ],
            [
              "3. Invoice clarity",
              "A low monthly price grows with add-ons",
              "Items not shown in the proposal",
              "Ask for a sample invoice with every item, including statutory contributions"
            ]
          ],
          "table_html": "<table><thead><tr><th>TOPIC</th><th>THE PROBLEM</th><th>WATCH FOR</th><th>ASK</th></tr></thead><tbody><tr><td>1. Who is responsible?</td><td>Unclear who answers when something goes wrong</td><td>Contracts and invoices under several names; hand-offs between parties</td><td>Whose name is on the contract and invoice? Who answers to us?</td></tr><tr><td>2. Contracts that follow the law</td><td>An old template may conflict with the new Labor Law</td><td>Templates not updated since September 2025</td><td>When were the contract templates updated? How do you track changes?</td></tr><tr><td>3. Invoice clarity</td><td>A low monthly price grows with add-ons</td><td>Items not shown in the proposal</td><td>Ask for a sample invoice with every item, including statutory contributions</td></tr></tbody></table>"
        }
      },
      {
        "id": "what-we-commit-to-at-avera",
        "header": "What we commit to at AVERA",
        "bullets": [
          "Contracts and invoices are in AVERA's name, so AVERA is the party that answers to you.",
          "We have a written service-level agreement.",
          "Communication and reports in Arabic and English."
        ],
        "content_text": "Contracts and invoices are in AVERA's name, so AVERA is the party that answers to you.\nWe have a written service-level agreement.\nCommunication and reports in Arabic and English.",
        "content_html": "<ul><li>Contracts and invoices are in AVERA's name, so AVERA is the party that answers to you.</li><li>We have a written service-level agreement.</li><li>Communication and reports in Arabic and English.</li></ul>"
      }
    ],
    "guide_box": {
      "text": "The other three questions, with a provider evaluation template, are in the guide \"Build your team in Egypt 2027\".",
      "button_text": "DOWNLOAD THE GUIDE FREE",
      "button_link": "/en/guide-download"
    },
    "disclaimer": "General information, not legal advice.",
    "sources": "",
    "keep_reading": [
      {
        "category": "EMPLOYER OF RECORD",
        "title": "Contract, data and benefits questions before you sign",
        "slug": "eor-contract-data-benefits"
      },
      {
        "category": "ABOUT AVERA",
        "title": "Inside AVERA: how we work",
        "slug": "inside-avera-how-we-work"
      },
      {
        "category": "EMPLOYER OF RECORD",
        "title": "What is an Employer of Record in Egypt?",
        "slug": "eor-egypt"
      }
    ],
    "cta": {
      "tagline": "YOUR TEAM IN EGYPT. OUR RESPONSIBILITY.",
      "headline": "Thinking of building a team in Egypt?",
      "button_text": "GET YOUR PROPOSAL",
      "button_link": "/en/contact"
    }
  },
  "eor-contract-data-benefits": {
    "title": "Questions on the contract, data and benefits before you sign",
    "short_title": "Contract, data and benefits questions before you sign",
    "category": "EMPLOYER OF RECORD",
    "breadcrumbs": [
      "BLOG",
      "EMPLOYER OF RECORD"
    ],
    "subtitle": "AVERA ELITE · BUSINESS SOLUTIONS",
    "table_of_contents": [
      "What we commit to at AVERA"
    ],
    "in_brief": [
      "After the questions on responsibility and invoices come six on the terms of the contract itself and on your employees' data."
    ],
    "sections": [
      {
        "id": "contract-data-benefits-table",
        "header": "Contract, Data and Benefits Checklist",
        "content_text": "Detailed examination of contract terms, data protection, insurance, employment relations, IP, and payment currencies.",
        "content_html": "<p>Detailed examination of contract terms, data protection, insurance, employment relations, IP, and payment currencies.</p>",
        "table": {
          "headers": [
            "TOPIC",
            "THE PROBLEM",
            "WATCH FOR",
            "ASK"
          ],
          "rows": [
            [
              "1. Contract term",
              "A longer commitment than you expect",
              "Minimum term or headcount, automatic renewal",
              "What is the term? Is there a minimum? How is it renewed?"
            ],
            [
              "2. Employee data",
              "You do not know where it is kept or who can reach it",
              "Transfers outside Egypt with no clear procedure",
              "Where is data kept, who can access it, and what happens to it at exit?"
            ],
            [
              "3. Insurance and benefits",
              "What you assume is included may not be",
              "Benefits described in general terms",
              "What exactly do insurance and benefits cover, and what do they not?"
            ],
            [
              "4. Daily employment matters",
              "Unclear who handles leave and disciplinary issues",
              "Responsibilities not written down",
              "Who handles leave, disciplinary matters and warnings, and what is our role?"
            ],
            [
              "5. IP and confidentiality",
              "Unclear who owns what an employee creates",
              "Confidentiality clauses that do not cover your company",
              "Do the contract clauses give your company the IP and confidentiality rights?"
            ],
            [
              "6. Currency and payment",
              "An invoice that moves with the exchange rate",
              "Invoice currency and payment date not stated",
              "In which currency is the invoice issued, and when is payment due?"
            ]
          ],
          "table_html": "<table><thead><tr><th>TOPIC</th><th>THE PROBLEM</th><th>WATCH FOR</th><th>ASK</th></tr></thead><tbody><tr><td>1. Contract term</td><td>A longer commitment than you expect</td><td>Minimum term or headcount, automatic renewal</td><td>What is the term? Is there a minimum? How is it renewed?</td></tr><tr><td>2. Employee data</td><td>You do not know where it is kept or who can reach it</td><td>Transfers outside Egypt with no clear procedure</td><td>Where is data kept, who can access it, and what happens to it at exit?</td></tr><tr><td>3. Insurance and benefits</td><td>What you assume is included may not be</td><td>Benefits described in general terms</td><td>What exactly do insurance and benefits cover, and what do they not?</td></tr><tr><td>4. Daily employment matters</td><td>Unclear who handles leave and disciplinary issues</td><td>Responsibilities not written down</td><td>Who handles leave, disciplinary matters and warnings, and what is our role?</td></tr><tr><td>5. IP and confidentiality</td><td>Unclear who owns what an employee creates</td><td>Confidentiality clauses that do not cover your company</td><td>Do the contract clauses give your company the IP and confidentiality rights?</td></tr><tr><td>6. Currency and payment</td><td>An invoice that moves with the exchange rate</td><td>Invoice currency and payment date not stated</td><td>In which currency is the invoice issued, and when is payment due?</td></tr></tbody></table>"
        }
      },
      {
        "id": "what-we-commit-to-at-avera",
        "header": "What we commit to at AVERA",
        "content_text": "Contracts and invoices are in AVERA's name, and we have a written service-level agreement.",
        "content_html": "<p>Contracts and invoices are in AVERA's name, and we have a written service-level agreement.</p>"
      }
    ],
    "guide_box": null,
    "disclaimer": "General information, not legal advice.",
    "sources": "",
    "keep_reading": [
      {
        "category": "ABOUT AVERA",
        "title": "Inside AVERA: how we work",
        "slug": "inside-avera-how-we-work"
      },
      {
        "category": "EMPLOYER OF RECORD",
        "title": "What is an Employer of Record in Egypt?",
        "slug": "eor-egypt"
      },
      {
        "category": "HIRING IN EGYPT",
        "title": "Hiring in Egypt: how the journey starts",
        "slug": "hiring-in-egypt"
      }
    ],
    "cta": {
      "tagline": "YOUR TEAM IN EGYPT. OUR RESPONSIBILITY.",
      "headline": "Thinking of building a team in Egypt?",
      "button_text": "GET YOUR PROPOSAL",
      "button_link": "/en/contact"
    }
  },
  "inside-avera-how-we-work": {
    "title": "Inside AVERA: how we work with companies building teams in Egypt",
    "short_title": "Inside AVERA: how we work",
    "category": "ABOUT AVERA",
    "breadcrumbs": [
      "BLOG",
      "ABOUT AVERA"
    ],
    "subtitle": "AVERA ELITE · BUSINESS SOLUTIONS",
    "table_of_contents": [
      "IN BRIEF"
    ],
    "in_brief": [
      "We build our work on four principles: written responsibility, clear steps, two languages, and confidentiality you can trust."
    ],
    "sections": [
      {
        "id": "four-principles",
        "header": "Four Principles of Working with AVERA",
        "principles": [
          {
            "number": 1,
            "name": "Written responsibility",
            "description": "The contracts with your company and with your employees, and the invoices, are in AVERA's name, and a written service-level agreement sets out what we commit to. You do not have to hunt for who answers."
          },
          {
            "number": 2,
            "name": "Clear steps",
            "description": "We set out what we handle and what your company handles at each stage, from consultation to monthly operations."
          },
          {
            "number": 3,
            "name": "Two languages",
            "description": "We communicate in Arabic or English, whichever suits your company."
          },
          {
            "number": 4,
            "name": "Confidentiality",
            "description": "We do not name our clients or their employees without their permission, and we protect your data."
          }
        ],
        "content_text": "1. Written responsibility. The contracts with your company and with your employees, and the invoices, are in AVERA's name, and a written service-level agreement sets out what we commit to. You do not have to hunt for who answers.\n2. Clear steps. We set out what we handle and what your company handles at each stage, from consultation to monthly operations.\n3. Two languages. We communicate in Arabic or English, whichever suits your company.\n4. Confidentiality. We do not name our clients or their employees without their permission, and we protect your data.",
        "content_html": "<ol><li><strong>Written responsibility.</strong> The contracts with your company and with your employees, and the invoices, are in AVERA's name, and a written service-level agreement sets out what we commit to. You do not have to hunt for who answers.</li><li><strong>Clear steps.</strong> We set out what we handle and what your company handles at each stage, from consultation to monthly operations.</li><li><strong>Two languages.</strong> We communicate in Arabic or English, whichever suits your company.</li><li><strong>Confidentiality.</strong> We do not name our clients or their employees without their permission, and we protect your data.</li></ol>"
      },
      {
        "id": "choosing-a-package",
        "header": "Choosing a package",
        "content_text": "We offer our service in three packages: Select, Premier and Signature.",
        "content_html": "<p>We offer our service in three packages: Select, Premier and Signature.</p>"
      }
    ],
    "guide_box": null,
    "disclaimer": "General information, not legal advice.",
    "sources": "",
    "keep_reading": [
      {
        "category": "EMPLOYER OF RECORD",
        "title": "What is an Employer of Record in Egypt?",
        "slug": "eor-egypt"
      },
      {
        "category": "HIRING IN EGYPT",
        "title": "Hiring in Egypt: how the journey starts",
        "slug": "hiring-in-egypt"
      },
      {
        "category": "PAYROLL AND HR",
        "title": "Egypt’s new Labor Law: what employers should know",
        "slug": "egypt-labor-law-2025"
      }
    ],
    "cta": {
      "tagline": "YOUR TEAM IN EGYPT. OUR RESPONSIBILITY.",
      "headline": "Thinking of building a team in Egypt?",
      "button_text": "GET YOUR PROPOSAL",
      "button_link": "/en/contact"
    }
  }
},
  ar: {
  "eor-egypt": {
    "title": "ما هو صاحب العمل الرسمي في مصر، ومتى يناسب شركتكم؟",
    "short_title": "ما هو صاحب العمل الرسمي (EOR) في مصر؟",
    "category": "صاحب العمل الرسمي",
    "breadcrumbs": [
      "المدوّنة",
      "صاحب العمل الرسمي"
    ],
    "subtitle": "AVERA ELITE · BUSINESS SOLUTIONS",
    "table_of_contents": [
      "ما المقصود بالـEOR؟",
      "من يتحمّل ماذا؟",
      "متى يناسبكم هذا النموذج؟",
      "أسئلة تسألونها لأي مزوّد"
    ],
    "in_brief": [
      "صاحب العمل الرسمي هو شركة مسجّلة في مصر تتولى التوظيف القانوني لموظفيكم هناك، بينما توجهون أنتم عملهم اليومي.",
      "يناسب شركة لا تملك كيانًا في مصر وتريد بدء فريق دون إجراءات تأسيس شركة.",
      "قبل أي تعاقد، اسألوا: باسم من العقود والفواتير؟ ومن يتحمّل المسؤولية إذا حدث خطأ؟"
    ],
    "sections": [
      {
        "id": "what-does-an-eor-do",
        "header": "ما المقصود بالـEOR؟",
        "content_text": "في نموذج صاحب العمل الرسمي، يكون الموظف موظفًا قانونيًا لدى الجهة المسجّلة في مصر، وهي التي تتعاقد معه وتصرف راتبه وتسجّله في التأمينات الاجتماعية. أما شركتكم فتوجّه عمله وتحدد أهدافه. هذا ما تقدمه افيرا لشركات خليجية ودولية تبني فريقًا في مصر.",
        "content_html": "<p>في نموذج صاحب العمل الرسمي، يكون الموظف موظفًا قانونيًا لدى الجهة المسجّلة في مصر، وهي التي تتعاقد معه وتصرف راتبه وتسجّله في التأمينات الاجتماعية. أما شركتكم فتوجّه عمله وتحدد أهدافه. هذا ما تقدمه افيرا لشركات خليجية ودولية تبني فريقًا في مصر.</p>"
      },
      {
        "id": "who-is-responsible-for-what",
        "header": "من يتحمّل ماذا؟",
        "content_text": "توزيع واضح للمسؤوليات يضمن سلاسة العمل اليومي بين افيرا وشركتكم.",
        "content_html": "<p>توزيع واضح للمسؤوليات يضمن سلاسة العمل اليومي بين افيرا وشركتكم.</p>",
        "table": {
          "headers": [
            "الموضوع",
            "المسؤول"
          ],
          "rows": [
            [
              "عقد العمل مع الموظف والتزامات صاحب العمل",
              "افيرا"
            ],
            [
              "الرواتب والمستحقات النظامية والتأمينات",
              "افيرا"
            ],
            [
              "الفواتير والتعاقد مع شركتكم",
              "افيرا"
            ],
            [
              "توجيه العمل اليومي وتقييم الأداء",
              "شركتكم"
            ],
            [
              "تحديد المهام والأهداف",
              "شركتكم"
            ]
          ],
          "table_html": "<table><thead><tr><th>الموضوع</th><th>المسؤول</th></tr></thead><tbody><tr><td>عقد العمل مع الموظف والتزامات صاحب العمل</td><td>افيرا</td></tr><tr><td>الرواتب والمستحقات النظامية والتأمينات</td><td>افيرا</td></tr><tr><td>الفواتير والتعاقد مع شركتكم</td><td>افيرا</td></tr><tr><td>توجيه العمل اليومي وتقييم الأداء</td><td>شركتكم</td></tr><tr><td>تحديد المهام والأهداف</td><td>شركتكم</td></tr></tbody></table>"
        }
      },
      {
        "id": "when-does-an-eor-fit",
        "header": "متى يناسبكم هذا النموذج؟",
        "bullets": [
          "لا تملكون كيانًا في مصر وتريدون البدء بفريق صغير أو متوسط.",
          "تختبرون السوق قبل الالتزام بكيان دائم.",
          "تفضّلون جهة واحدة تدير الجانب القانوني والمالي للعمالة."
        ],
        "content_text": "متى قد يكون الكيان الخاص أنسب؟ عندما تخططون لعمليات كبيرة ودائمة في مصر تتطلب كيانًا خاصًا بكم. وهذا قرار يقوم على استشارة قانونية ومالية متخصصة.",
        "content_html": "<ul><li>لا تملكون كيانًا في مصر وتريدون البدء بفريق صغير أو متوسط.</li><li>تختبرون السوق قبل الالتزام بكيان دائم.</li><li>تفضّلون جهة واحدة تدير الجانب القانوني والمالي للعمالة.</li></ul><p>متى قد يكون الكيان الخاص أنسب؟ عندما تخططون لعمليات كبيرة ودائمة في مصر تتطلب كيانًا خاصًا بكم. وهذا قرار يقوم على استشارة قانونية ومالية متخصصة.</p>"
      },
      {
        "id": "questions-to-ask-any-provider",
        "header": "أسئلة تسألونها لأي مزوّد",
        "numbered_list": [
          "باسم من العقد مع شركتكم ومع الموظف؟ وباسم من تصدر الفواتير؟",
          "ماذا يحدث إذا وقع خطأ في الراتب أو التسجيل؟ ومن يردّ؟"
        ],
        "content_text": "1. باسم من العقد مع شركتكم ومع الموظف؟ وباسم من تصدر الفواتير؟\n2. ماذا يحدث إذا وقع خطأ في الراتب أو التسجيل؟ ومن يردّ؟",
        "content_html": "<ol><li>باسم من العقد مع شركتكم ومع الموظف؟ وباسم من تصدر الفواتير؟</li><li>ماذا يحدث إذا وقع خطأ في الراتب أو التسجيل؟ ومن يردّ؟</li></ol>"
      }
    ],
    "guide_box": {
      "text": "القائمة الكاملة لأسئلة اختيار المزوّد، مع قالب تقييم جاهز، في دليل «بناء فريقك في مصر 2027».",
      "button_text": "حمّلوا الدليل مجانًا",
      "button_link": "/ar/guide-download"
    },
    "disclaimer": "هذا المقال معلومات عامة وليس استشارة قانونية.",
    "sources": "المصادر: EY: قانون العمل رقم 14 لسنة 2025 · Andersen Egypt",
    "keep_reading": [
      {
        "category": "التوظيف في مصر",
        "title": "التوظيف في مصر: كيف تبدأ الرحلة",
        "slug": "hiring-in-egypt"
      },
      {
        "category": "الرواتب والموارد البشرية",
        "title": "قانون العمل المصري الجديد: ما يهم صاحب العمل",
        "slug": "egypt-labor-law-2025"
      },
      {
        "category": "صاحب العمل الرسمي",
        "title": "ستة أسئلة قبل اختيار مزوّد EOR في مصر",
        "slug": "choosing-eor-egypt"
      }
    ],
    "cta": {
      "tagline": "فريقكم في مصر، مسؤوليتنا.",
      "headline": "هل تفكرون في بدء فريق في مصر؟",
      "button_text": "احصل على عرضك",
      "button_link": "/ar/contact"
    }
  },
  "hiring-in-egypt": {
    "title": "التوظيف في مصر: كيف تبدأ الرحلة ومن يتولّى كل مرحلة؟",
    "short_title": "التوظيف في مصر: كيف تبدأ الرحلة",
    "category": "التوظيف في مصر",
    "breadcrumbs": [
      "المدوّنة",
      "التوظيف في مصر"
    ],
    "subtitle": "AVERA ELITE · BUSINESS SOLUTIONS",
    "table_of_contents": [
      "نصائح لبداية أسهل"
    ],
    "in_brief": [
      "بناء فريق في مصر يمرّ بخمس مراحل. كل مرحلة لها مسؤول واضح، وما تحتاجه من شركتكم في كل مرحلة محدود."
    ],
    "sections": [
      {
        "id": "five-stages-of-hiring",
        "header": "المراحل الخمس للتوظيف في مصر",
        "stages": [
          {
            "number": 1,
            "name": "الاستشارة وتعريف الدور",
            "description": "نتفهم نشاطكم وحجم الفريق المطلوب ومهام كل دور وما يناسبكم: توظيف فقط، أم توظيف رسمي عبر EOR."
          },
          {
            "number": 2,
            "name": "العرض والتعاقد",
            "description": "تستلمون عرضًا مكتوبًا بالنطاق والمسؤوليات، ثم تتعاقدون مع افيرا."
          },
          {
            "number": 3,
            "name": "البحث والترشيح",
            "description": "نبحث عن المرشحين ونقيّمهم ونعرض عليكم قائمة مختصرة، وأنتم تجرون المقابلات وتقرّرون."
          },
          {
            "number": 4,
            "name": "العرض الوظيفي والتعيين",
            "description": "تُجهّز افيرا عقد العمل بصفتها صاحب العمل الرسمي وتسجّل الموظف نظاميًا."
          },
          {
            "number": 5,
            "name": "التشغيل الشهري",
            "description": "رواتب وتأمينات وتقارير شهرية، ونقطة تواصل واحدة لأي استفسار."
          }
        ],
        "content_text": "1. الاستشارة وتعريف الدور. نتفهم نشاطكم وحجم الفريق المطلوب ومهام كل دور وما يناسبكم: توظيف فقط، أم توظيف رسمي عبر EOR.\n2. العرض والتعاقد. تستلمون عرضًا مكتوبًا بالنطاق والمسؤوليات، ثم تتعاقدون مع افيرا.\n3. البحث والترشيح. نبحث عن المرشحين ونقيّمهم ونعرض عليكم قائمة مختصرة، وأنتم تجرون المقابلات وتقرّرون.\n4. العرض الوظيفي والتعيين. تُجهّز افيرا عقد العمل بصفتها صاحب العمل الرسمي وتسجّل الموظف نظاميًا.\n5. التشغيل الشهري. رواتب وتأمينات وتقارير شهرية، ونقطة تواصل واحدة لأي استفسار.",
        "content_html": "<ol><li><strong>الاستشارة وتعريف الدور.</strong> نتفهم نشاطكم وحجم الفريق المطلوب ومهام كل دور وما يناسبكم: توظيف فقط، أم توظيف رسمي عبر EOR.</li><li><strong>العرض والتعاقد.</strong> تستلمون عرضًا مكتوبًا بالنطاق والمسؤوليات، ثم تتعاقدون مع افيرا.</li><li><strong>البحث والترشيح.</strong> نبحث عن المرشحين ونقيّمهم ونعرض عليكم قائمة مختصرة، وأنتم تجرون المقابلات وتقرّرون.</li><li><strong>العرض الوظيفي والتعيين.</strong> تُجهّز افيرا عقد العمل بصفتها صاحب العمل الرسمي وتسجّل الموظف نظاميًا.</li><li><strong>التشغيل الشهري.</strong> رواتب وتأمينات وتقارير شهرية، ونقطة تواصل واحدة لأي استفسار.</li></ol>"
      },
      {
        "id": "tips-for-an-easier-start",
        "header": "نصائح لبداية أسهل",
        "content_text": "اكتبوا مهام الدور بجمل قصيرة قبل البدء، فهذا يختصر وقت البحث.",
        "content_html": "<p>اكتبوا مهام الدور بجمل قصيرة قبل البدء، فهذا يختصر وقت البحث.</p>"
      }
    ],
    "guide_box": {
      "text": "دور كل طرف في كل مرحلة، وخطة أول 90 يومًا أسبوعًا بأسبوع، في دليل «بناء فريقك في مصر 2027».",
      "button_text": "حمّلوا الدليل مجانًا",
      "button_link": "/ar/guide-download"
    },
    "disclaimer": "معلومات عامة وليست استشارة قانونية.",
    "sources": "",
    "keep_reading": [
      {
        "category": "الرواتب والموارد البشرية",
        "title": "قانون العمل المصري الجديد: ما يهم صاحب العمل",
        "slug": "egypt-labor-law-2025"
      },
      {
        "category": "صاحب العمل الرسمي",
        "title": "ستة أسئلة قبل اختيار مزوّد EOR في مصر",
        "slug": "choosing-eor-egypt"
      },
      {
        "category": "صاحب العمل الرسمي",
        "title": "أسئلة العقد والبيانات والمزايا قبل التوقيع",
        "slug": "eor-contract-data-benefits"
      }
    ],
    "cta": {
      "tagline": "فريقكم في مصر، مسؤوليتنا.",
      "headline": "هل تفكرون في بدء فريق في مصر؟",
      "button_text": "احصل على عرضك",
      "button_link": "/ar/contact"
    }
  },
  "egypt-labor-law-2025": {
    "title": "قانون العمل المصري الجديد: ما يهم صاحب العمل أن يعرفه",
    "short_title": "قانون العمل المصري الجديد: ما يهم صاحب العمل",
    "category": "الرواتب والموارد البشرية",
    "breadcrumbs": [
      "المدوّنة",
      "الرواتب والموارد البشرية"
    ],
    "subtitle": "AVERA ELITE · BUSINESS SOLUTIONS",
    "table_of_contents": [
      "نقاط يذكرها محللون قانونيون (للمعرفة العامة فقط)",
      "ما تفعله الآن"
    ],
    "in_brief": [
      "نفذ قانون العمل رقم 14 لسنة 2025 في 1 سبتمبر 2025 وحلّ محل القانون رقم 12 لسنة 2003 (EY).",
      "العقود المحرّرة قبله تحتاج مراجعة.",
      "التزاماتكم تتغيّر حسب نموذج التوظيف: كيانكم الخاص أو عبر EOR."
    ],
    "sections": [
      {
        "id": "points-legal-commentators-list",
        "header": "نقاط يذكرها محللون قانونيون (للمعرفة العامة فقط)",
        "content_text": "أبرز النقاط التي يذكرها المحللون القانونيون بشأن قانون العمل المصري الجديد رقم 14 لسنة 2025.",
        "content_html": "<p>أبرز النقاط التي يذكرها المحللون القانونيون بشأن قانون العمل المصري الجديد رقم 14 لسنة 2025.</p>",
        "table": {
          "headers": [
            "النقطة",
            "ما تذكره المصادر",
            "المصدر"
          ],
          "rows": [
            [
              "تجربة العمل (فترة الاختبار)",
              "حدّها الأقصى ثلاثة أشهر، ولا تُكرّر مع نفس صاحب العمل",
              "ملخص لشركة استشارات"
            ],
            [
              "استمرار العقد",
              "يُفترض أن العقود غير محددة المدة ما لم يُبرّر غير ذلك",
              "Andersen"
            ],
            [
              "استمارات الاستقالة الموقّعة مسبقًا",
              "لا قيمة لها كأساس لإنهاء العلاقة",
              "Andersen"
            ],
            [
              "الفصل وإنهاء العلاقة",
              "يُميّز القانون بين «الفصل» وهو يتطلب حكمًا قضائيًا، و«إنهاء العلاقة» لأسباب مشروعة",
              "Andersen"
            ],
            [
              "نسخ العقد",
              "يُحرّر العقد بأربع نسخ، إحداها تُودع لدى وزارة القوى العاملة",
              "Lexology"
            ],
            [
              "محاكم العمل",
              "محاكم متخصصة للنزاعات العمالية من 1 أكتوبر 2025",
              "EY"
            ]
          ],
          "table_html": "<table><thead><tr><th>النقطة</th><th>ما تذكره المصادر</th><th>المصدر</th></tr></thead><tbody><tr><td>تجربة العمل (فترة الاختبار)</td><td>حدّها الأقصى ثلاثة أشهر، ولا تُكرّر مع نفس صاحب العمل</td><td>ملخص لشركة استشارات</td></tr><tr><td>استمرار العقد</td><td>يُفترض أن العقود غير محددة المدة ما لم يُبرّر غير ذلك</td><td>Andersen</td></tr><tr><td>استمارات الاستقالة الموقّعة مسبقًا</td><td>لا قيمة لها كأساس لإنهاء العلاقة</td><td>Andersen</td></tr><tr><td>الفصل وإنهاء العلاقة</td><td>يُميّز القانون بين «الفصل» وهو يتطلب حكمًا قضائيًا، و«إنهاء العلاقة» لأسباب مشروعة</td><td>Andersen</td></tr><tr><td>نسخ العقد</td><td>يُحرّر العقد بأربع نسخ، إحداها تُودع لدى وزارة القوى العاملة</td><td>Lexology</td></tr><tr><td>محاكم العمل</td><td>محاكم متخصصة للنزاعات العمالية من 1 أكتوبر 2025</td><td>EY</td></tr></tbody></table>"
        }
      },
      {
        "id": "what-to-do-now",
        "header": "ما تفعله الآن",
        "numbered_list": [
          "راجعوا عقود موظفيكم الحالية مع مستشاركم القانوني."
        ],
        "content_text": "1. راجعوا عقود موظفيكم الحالية مع مستشاركم القانوني.",
        "content_html": "<ol><li>راجعوا عقود موظفيكم الحالية مع مستشاركم القانوني.</li></ol>"
      }
    ],
    "guide_box": {
      "text": "قائمة المراجعة الكاملة، وما الذي يتغير في 2027، في دليل «بناء فريقك في مصر 2027».",
      "button_text": "حمّلوا الدليل مجانًا",
      "button_link": "/ar/guide-download"
    },
    "disclaimer": "معلومات عامة وليست استشارة قانونية، وقد تتغير الأحكام.",
    "sources": "EY · Andersen · Lexology",
    "keep_reading": [
      {
        "category": "صاحب العمل الرسمي",
        "title": "ستة أسئلة قبل اختيار مزوّد EOR في مصر",
        "slug": "choosing-eor-egypt"
      },
      {
        "category": "صاحب العمل الرسمي",
        "title": "أسئلة العقد والبيانات والمزايا قبل التوقيع",
        "slug": "eor-contract-data-benefits"
      },
      {
        "category": "عن افيرا",
        "title": "من الداخل: كيف نعمل",
        "slug": "inside-avera-how-we-work"
      }
    ],
    "cta": {
      "tagline": "فريقكم في مصر، مسؤوليتنا.",
      "headline": "هل تفكرون في بدء فريق في مصر؟",
      "button_text": "احصل على عرضك",
      "button_link": "/ar/contact"
    }
  },
  "choosing-eor-egypt": {
    "title": "ستة أسئلة تسألونها قبل اختيار مزوّد EOR في مصر",
    "short_title": "ستة أسئلة قبل اختيار مزوّد EOR في مصر",
    "category": "صاحب العمل الرسمي",
    "breadcrumbs": [
      "المدوّنة",
      "صاحب العمل الرسمي"
    ],
    "subtitle": "AVERA ELITE · BUSINESS SOLUTIONS",
    "table_of_contents": [
      "ما نلتزم به في افيرا"
    ],
    "in_brief": [
      "ما تسألون عنه قبل التعاقد يحدد ما يحدث بعده. هذه ستة مواضيع تستحق أن تطلبوا فيها جوابًا مكتوبًا."
    ],
    "sections": [
      {
        "id": "key-evaluation-topics",
        "header": "مواضيع للتقييم قبل اختيار مزوّد EOR",
        "content_text": "مقارنة منهجية لأهم المخاطر والملاحظات والأسئلة الدقيقة الموجهة لمزوّدي خدمات صاحب العمل الرسمي.",
        "content_html": "<p>مقارنة منهجية لأهم المخاطر والملاحظات والأسئلة الدقيقة الموجهة لمزوّدي خدمات صاحب العمل الرسمي.</p>",
        "table": {
          "headers": [
            "الموضوع",
            "المشكلة",
            "انتبهوا لـ",
            "اسألوا"
          ],
          "rows": [
            [
              "1. من المسؤول؟",
              "لا يُعرف من يردّ عند حدوث مشكلة",
              "عقود وفواتير بأكثر من اسم، وإحالة بين الجهات",
              "باسم من العقد والفاتورة؟ ومن يردّ علينا؟"
            ],
            [
              "2. عقود تواكب القانون",
              "نموذج قديم قد يخالف قانون العمل الجديد",
              "نماذج لم تُحدّث منذ سبتمبر 2025",
              "متى حُدّثت نماذج العقود؟ وكيف تتابعون التعديلات؟"
            ],
            [
              "3. وضوح الفاتورة",
              "سعر شهري منخفض يرتفع بالإضافات",
              "بنود لا تظهر في العرض",
              "اطلبوا فاتورة نموذجية بكل البنود شاملة الاستحقاقات النظامية"
            ]
          ],
          "table_html": "<table><thead><tr><th>الموضوع</th><th>المشكلة</th><th>انتبهوا لـ</th><th>اسألوا</th></tr></thead><tbody><tr><td>1. من المسؤول؟</td><td>لا يُعرف من يردّ عند حدوث مشكلة</td><td>عقود وفواتير بأكثر من اسم، وإحالة بين الجهات</td><td>باسم من العقد والفاتورة؟ ومن يردّ علينا؟</td></tr><tr><td>2. عقود تواكب القانون</td><td>نموذج قديم قد يخالف قانون العمل الجديد</td><td>نماذج لم تُحدّث منذ سبتمبر 2025</td><td>متى حُدّثت نماذج العقود؟ وكيف تتابعون التعديلات؟</td></tr><tr><td>3. وضوح الفاتورة</td><td>سعر شهري منخفض يرتفع بالإضافات</td><td>بنود لا تظهر في العرض</td><td>اطلبوا فاتورة نموذجية بكل البنود شاملة الاستحقاقات النظامية</td></tr></tbody></table>"
        }
      },
      {
        "id": "what-we-commit-to-at-avera",
        "header": "ما نلتزم به في افيرا",
        "bullets": [
          "العقود والفواتير باسم افيرا، فهي الجهة التي تردّ عليكم.",
          "لدينا اتفاقية مستوى خدمة مكتوبة.",
          "التواصل والتقارير بالعربية والإنجليزية."
        ],
        "content_text": "العقود والفواتير باسم افيرا، فهي الجهة التي تردّ عليكم.\nلدينا اتفاقية مستوى خدمة مكتوبة.\nالتواصل والتقارير بالعربية والإنجليزية.",
        "content_html": "<ul><li>العقود والفواتير باسم افيرا، فهي الجهة التي تردّ عليكم.</li><li>لدينا اتفاقية مستوى خدمة مكتوبة.</li><li>التواصل والتقارير بالعربية والإنجليزية.</li></ul>"
      }
    ],
    "guide_box": {
      "text": "الأسئلة الثلاثة الأخرى، مع قالب تقييم المزوّد، في دليل «بناء فريقك في مصر 2027».",
      "button_text": "حمّلوا الدليل مجانًا",
      "button_link": "/ar/guide-download"
    },
    "disclaimer": "معلومات عامة وليست استشارة قانونية.",
    "sources": "",
    "keep_reading": [
      {
        "category": "صاحب العمل الرسمي",
        "title": "أسئلة العقد والبيانات والمزايا قبل التوقيع",
        "slug": "eor-contract-data-benefits"
      },
      {
        "category": "عن افيرا",
        "title": "من الداخل: كيف نعمل",
        "slug": "inside-avera-how-we-work"
      },
      {
        "category": "صاحب العمل الرسمي",
        "title": "ما هو صاحب العمل الرسمي (EOR) في مصر؟",
        "slug": "eor-egypt"
      }
    ],
    "cta": {
      "tagline": "فريقكم في مصر، مسؤوليتنا.",
      "headline": "هل تفكرون في بدء فريق في مصر؟",
      "button_text": "احصل على عرضك",
      "button_link": "/ar/contact"
    }
  },
  "eor-contract-data-benefits": {
    "title": "أسئلة العقد والبيانات والمزايا قبل التوقيع",
    "short_title": "أسئلة العقد والبيانات والمزايا قبل التوقيع",
    "category": "صاحب العمل الرسمي",
    "breadcrumbs": [
      "المدوّنة",
      "صاحب العمل الرسمي"
    ],
    "subtitle": "AVERA ELITE · BUSINESS SOLUTIONS",
    "table_of_contents": [
      "ما نلتزم به في افيرا"
    ],
    "in_brief": [
      "بعد أسئلة المسؤولية والفاتورة، تأتي ستة أسئلة تتعلق بشروط العقد نفسه وبيانات موظفيكم."
    ],
    "sections": [
      {
        "id": "contract-data-benefits-table",
        "header": "قائمة مراجعة العقد والبيانات والمزايا",
        "content_text": "فحص مفصّل لبنود التعاقد، وحماية البيانات، والمزايا والتأمين، والإدارة اليومية، وحقوق الملكية والسرية، وعملة الفواتير.",
        "content_html": "<p>فحص مفصّل لبنود التعاقد، وحماية البيانات، والمزايا والتأمين، والإدارة اليومية، وحقوق الملكية والسرية، وعملة الفواتير.</p>",
        "table": {
          "headers": [
            "الموضوع",
            "المشكلة",
            "انتبهوا لـ",
            "اسألوا"
          ],
          "rows": [
            [
              "1. مدة التعاقد",
              "التزام أطول مما تتوقعون",
              "حد أدنى للمدة أو لعدد الموظفين وتجديد تلقائي",
              "ما مدة العقد؟ هل هناك حد أدنى؟ كيف يُجدّد؟"
            ],
            [
              "2. بيانات الموظفين",
              "لا تعرفون أين تُحفظ ومن يصل إليها",
              "نقل البيانات خارج مصر بلا إجراء واضح",
              "أين تُحفظ البيانات؟ من يصل إليها؟ ماذا يحدث لها عند الإنهاء؟"
            ],
            [
              "3. التأمين والمزايا",
              "ما تظنونه مشمولًا قد لا يكون",
              "مزايا تُذكر بعمومية دون تفاصيل",
              "ما المشمول بالتأمين والمزايا بالتفصيل؟ وما الذي لا يشملها؟"
            ],
            [
              "4. علاقة العمل اليومية",
              "لا يُعرف من يتعامل مع الإجازات والمخالفات",
              "تقسيم غير مكتوب للمسؤوليات",
              "من يعالج الإجازات والمخالفات والإنذارات؟ وما دورنا؟"
            ],
            [
              "5. الملكية الفكرية والسرية",
              "غموض حول من يملك ما ينتجه الموظف",
              "بنود سرية لا تشمل شركتكم",
              "هل تشمل بنود العقد الملكية الفكرية والسرية لصالحكم؟"
            ],
            [
              "6. العملة والدفع",
              "فاتورة تتغير مع سعر الصرف",
              "عملة الفاتورة وموعد السداد غير الموضحين",
              "بأي عملة تُصدر الفاتورة؟ ومتى يحين السداد؟"
            ]
          ],
          "table_html": "<table><thead><tr><th>الموضوع</th><th>المشكلة</th><th>انتبهوا لـ</th><th>اسألوا</th></tr></thead><tbody><tr><td>1. مدة التعاقد</td><td>التزام أطول مما تتوقعون</td><td>حد أدنى للمدة أو لعدد الموظفين وتجديد تلقائي</td><td>ما مدة العقد؟ هل هناك حد أدنى؟ كيف يُجدّد؟</td></tr><tr><td>2. بيانات الموظفين</td><td>لا تعرفون أين تُحفظ ومن يصل إليها</td><td>نقل البيانات خارج مصر بلا إجراء واضح</td><td>أين تُحفظ البيانات؟ من يصل إليها؟ ماذا يحدث لها عند الإنهاء؟</td></tr><tr><td>3. التأمين والمزايا</td><td>ما تظنونه مشمولًا قد لا يكون</td><td>مزايا تُذكر بعمومية دون تفاصيل</td><td>ما المشمول بالتأمين والمزايا بالتفصيل؟ وما الذي لا يشملها؟</td></tr><tr><td>4. علاقة العمل اليومية</td><td>لا يُعرف من يتعامل مع الإجازات والمخالفات</td><td>تقسيم غير مكتوب للمسؤوليات</td><td>من يعالج الإجازات والمخالفات والإنذارات؟ وما دورنا؟</td></tr><tr><td>5. الملكية الفكرية والسرية</td><td>غموض حول من يملك ما ينتجه الموظف</td><td>بنود سرية لا تشمل شركتكم</td><td>هل تشمل بنود العقد الملكية الفكرية والسرية لصالحكم؟</td></tr><tr><td>6. العملة والدفع</td><td>فاتورة تتغير مع سعر الصرف</td><td>عملة الفاتورة وموعد السداد غير الموضحين</td><td>بأي عملة تُصدر الفاتورة؟ ومتى يحين السداد؟</td></tr></tbody></table>"
        }
      },
      {
        "id": "what-we-commit-to-at-avera",
        "header": "ما نلتزم به في افيرا",
        "content_text": "العقود والفواتير باسم افيرا، ولدينا اتفاقية مستوى خدمة مكتوبة.",
        "content_html": "<p>العقود والفواتير باسم افيرا، ولدينا اتفاقية مستوى خدمة مكتوبة.</p>"
      }
    ],
    "guide_box": null,
    "disclaimer": "معلومات عامة وليست استشارة قانونية.",
    "sources": "",
    "keep_reading": [
      {
        "category": "عن افيرا",
        "title": "من الداخل: كيف نعمل",
        "slug": "inside-avera-how-we-work"
      },
      {
        "category": "صاحب العمل الرسمي",
        "title": "ما هو صاحب العمل الرسمي (EOR) في مصر؟",
        "slug": "eor-egypt"
      },
      {
        "category": "التوظيف في مصر",
        "title": "التوظيف في مصر: كيف تبدأ الرحلة",
        "slug": "hiring-in-egypt"
      }
    ],
    "cta": {
      "tagline": "فريقكم في مصر، مسؤوليتنا.",
      "headline": "هل تفكرون في بدء فريق في مصر؟",
      "button_text": "احصل على عرضك",
      "button_link": "/ar/contact"
    }
  },
  "inside-avera-how-we-work": {
    "title": "من الداخل: كيف نعمل مع شركات تبني فرقها في مصر",
    "short_title": "من الداخل: كيف نعمل",
    "category": "عن افيرا",
    "breadcrumbs": [
      "المدوّنة",
      "عن افيرا"
    ],
    "subtitle": "AVERA ELITE · BUSINESS SOLUTIONS",
    "table_of_contents": [
      "باختصار"
    ],
    "in_brief": [
      "نبني عملنا على أربعة مبادئ: مسؤولية مكتوبة، وضوح في الخطوات، لغتان، وسرية ما تؤتمنوننا عليه."
    ],
    "sections": [
      {
        "id": "four-principles",
        "header": "أربعة مبادئ للعمل مع افيرا",
        "principles": [
          {
            "number": 1,
            "name": "مسؤولية مكتوبة",
            "description": "العقود مع شركتكم ومع الموظفين، والفواتير، باسم افيرا، ولدينا اتفاقية مستوى خدمة تحدد ما نلتزم به. لا تحتاجون إلى البحث عن من يجيبكم."
          },
          {
            "number": 2,
            "name": "وضوح في الخطوات",
            "description": "نحدّد ما نتولاه وما تتولاه شركتكم في كل مرحلة، من الاستشارة إلى التشغيل الشهري."
          },
          {
            "number": 3,
            "name": "لغتان",
            "description": "نخاطبكم بالعربية أو الإنجليزية حسب الأنسب لشركتكم."
          },
          {
            "number": 4,
            "name": "سرية ما تؤتمنوننا عليه",
            "description": "لا نذكر أسماء عملائنا أو موظفيهم دون إذنهم، ونحمي بياناتكم."
          }
        ],
        "content_text": "1. مسؤولية مكتوبة. العقود مع شركتكم ومع الموظفين، والفواتير، باسم افيرا، ولدينا اتفاقية مستوى خدمة تحدد ما نلتزم به. لا تحتاجون إلى البحث عن من يجيبكم.\n2. وضوح في الخطوات. نحدّد ما نتولاه وما تتولاه شركتكم في كل مرحلة، من الاستشارة إلى التشغيل الشهري.\n3. لغتان. نخاطبكم بالعربية أو الإنجليزية حسب الأنسب لشركتكم.\n4. سرية ما تؤتمنوننا عليه. لا نذكر أسماء عملائنا أو موظفيهم دون إذنهم، ونحمي بياناتكم.",
        "content_html": "<ol><li><strong>مسؤولية مكتوبة.</strong> العقود مع شركتكم ومع الموظفين، والفواتير، باسم افيرا، ولدينا اتفاقية مستوى خدمة تحدد ما نلتزم به. لا تحتاجون إلى البحث عن من يجيبكم.</li><li><strong>وضوح في الخطوات.</strong> نحدّد ما نتولاه وما تتولاه شركتكم في كل مرحلة، من الاستشارة إلى التشغيل الشهري.</li><li><strong>لغتان.</strong> نخاطبكم بالعربية أو الإنجليزية حسب الأنسب لشركتكم.</li><li><strong>سرية ما تؤتمنوننا عليه.</strong> لا نذكر أسماء عملائنا أو موظفيهم دون إذنهم، ونحمي بياناتكم.</li></ol>"
      },
      {
        "id": "choosing-a-package",
        "header": "اختيار الباقة",
        "content_text": "نقدّم خدمتنا في ثلاث باقات: Select و Premier و Signature.",
        "content_html": "<p>نقدّم خدمتنا في ثلاث باقات: Select و Premier و Signature.</p>"
      }
    ],
    "guide_box": null,
    "disclaimer": "معلومات عامة وليست استشارة قانونية.",
    "sources": "",
    "keep_reading": [
      {
        "category": "صاحب العمل الرسمي",
        "title": "ما هو صاحب العمل الرسمي (EOR) في مصر؟",
        "slug": "eor-egypt"
      },
      {
        "category": "التوظيف في مصر",
        "title": "التوظيف في مصر: كيف تبدأ الرحلة",
        "slug": "hiring-in-egypt"
      },
      {
        "category": "الرواتب والموارد البشرية",
        "title": "قانون العمل المصري الجديد: ما يهم صاحب العمل",
        "slug": "egypt-labor-law-2025"
      }
    ],
    "cta": {
      "tagline": "فريقكم في مصر، مسؤوليتنا.",
      "headline": "هل تفكرون في بدء فريق في مصر؟",
      "button_text": "احصل على عرضك",
      "button_link": "/ar/contact"
    }
  }
}
};
