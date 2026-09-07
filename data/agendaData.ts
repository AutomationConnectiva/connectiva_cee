export type SessionType = 'keynote' | 'sponsored' | 'panel' | 'break' | 'other';

export interface AgendaSession {
  time: string;
  type: SessionType;
  title: string;
  discussionPoints?: string[];
}

export interface AgendaModule {
  id: string;
  title: string;
  sponsor?: string;
  sessions: AgendaSession[];
}

export interface AgendaStage {
  id: string;
  label: string;
  intro?: string;
  opening?: AgendaSession[];
  modules: AgendaModule[];
  closing?: AgendaSession[];
}

export interface AgendaDay {
  id: string;
  label: string;
  date: string;
  stages: AgendaStage[];
}

export const sponsorAssets = {
  authologic: { name: 'Authologic', logo: '/sponsors/authologic.png' },
  evrotrust: { name: 'Evrotrust', logo: '/sponsors/evrotrust.png' },
  eri: { name: 'ERI', logo: '/sponsors/eri.png' },
  tieto: { name: 'Tieto Banktech', logo: '/sponsors/tieto.png' },
  guardsquare: { name: 'Guardsquare', logo: '/sponsors/guardsquare.png' },
} as const;

export const agendaDays: AgendaDay[] = [
  {
    id: 'day1',
    label: 'Day 1',
    date: '19 November 2026',
    stages: [
      {
        id: 'main',
        label: 'Main Stage',
        intro: 'C-level perspectives on the forces redefining banking across CEE. Morning plenary sessions before the Digital and Impact stages open in the afternoon.',
        opening: [
          { time: '08:30', type: 'other', title: 'Registration & Morning Coffee' },
          { time: '09:00', type: 'other', title: 'Welcome Remarks' },
        ],
        modules: [
          {
            id: 'tech-innovation',
            title: 'Tech & Innovation',
            sessions: [
              { time: '09:10', type: 'keynote', title: 'Reinventing Banking Through Emerging Technologies' },
              { time: '09:35', type: 'sponsored', title: 'How Can Digital Infrastructure Accelerate Transformation Across Modern Banks?' },
              {
                time: '10:00', type: 'panel', title: 'Scaling Innovation: How CEE Is Redefining the Future of Banking',
                discussionPoints: [
                  'Driving digital acceleration across diverse and fast-evolving CEE markets',
                  'Overcoming legacy constraints to enable scalable, innovation-ready foundations',
                  'Leveraging partnerships to expand capabilities and accelerate transformation',
                  'Balancing rapid innovation with compliance, security, and operational resilience',
                ],
              },
              { time: '10:45', type: 'break', title: 'Coffee Break, Networking & 1-to-1 Meetings' },
            ],
          },
          {
            id: 'regulatory-landscape',
            title: 'Regulatory Landscape',
            sponsor: 'authologic',
            sessions: [
              { time: '11:20', type: 'keynote', title: 'Navigating Regulatory Uncertainty in CEE Banking: Lessons from the Front Line' },
              { time: '11:45', type: 'sponsored', title: 'eIDAS 2.0 - 2 Months Until Launch - Status Update' },
              {
                time: '12:10', type: 'panel', title: 'Are Banks Ready for the Next Wave of EU & CEE Regulation?',
                discussionPoints: [
                  'How can banks innovate while meeting evolving EU regulations?',
                  'What strategies strengthen resilience amid growing compliance pressure?',
                  'Managing compliance costs while sustaining innovation momentum',
                  'Aligning governance, data, risk, and ESG frameworks for sustainable stability',
                ],
              },
              { time: '12:55', type: 'break', title: 'Lunch Break, Networking & 1-to-1 Meetings' },
            ],
          },
        ],
      },
      {
        id: 'digital',
        label: 'Digital Stage',
        intro: 'Practitioner-led sessions on building digital foundations and modernizing core systems. Afternoon sessions only.',
        modules: [
          {
            id: 'digital-infrastructure',
            title: 'Digital Infrastructure',
            sponsor: 'evrotrust',
            sessions: [
              { time: '14:00', type: 'keynote', title: 'Digital Trust in Banking Innovation' },
              { time: '14:25', type: 'sponsored', title: 'Securing Digital Operations with Identity-Driven Infrastructure' },
              {
                time: '14:50', type: 'panel', title: 'Building Resilient Digital Foundations for Customer-Centric Banking',
                discussionPoints: [
                  'Aligning digital infrastructure strategy with evolving customer expectations',
                  'Leveraging technology to enhance operational efficiency and reduce risk',
                  'Balancing innovation speed with regulatory and security requirements',
                  'Ensuring secure and compliant workflows across multiple banking channels',
                ],
              },
              { time: '15:35', type: 'break', title: 'Coffee Break, Networking & 1-to-1 Meetings' },
            ],
          },
          {
            id: 'core-transformation',
            title: 'Core Transformation',
            sponsor: 'eri',
            sessions: [
              { time: '16:10', type: 'keynote', title: 'From Innovation to Implementation: Technologies Transforming Banking' },
              { time: '16:35', type: 'sponsored', title: 'Enabling Financing Europe\u2019s Future: From Deposits to Investment - Unlocking Europe\u2019s Growth Potential' },
              {
                time: '17:00', type: 'panel', title: 'Modernizing Core Banking for Strategic Agility',
                discussionPoints: [
                  'Aligning core modernization with strategic objectives in CEE banks',
                  'Prioritizing technology upgrades for efficiency and scalable operation',
                  'How can banks manage regulatory compliance during transformation?',
                  'What metrics best measure ROI and risk in modernization?',
                ],
              },
            ],
          },
        ],
        closing: [
          { time: '17:45', type: 'other', title: 'End of Day 1, Networking & 1-to-1 Meetings' },
          { time: '18:30', type: 'other', title: 'Cocktail Reception & Gala Dinner' },
        ],
      },
      {
        id: 'impact',
        label: 'Impact Stage',
        intro: 'Expert deep dives into next-gen payments and fraud prevention. Afternoon sessions only.',
        modules: [
          {
            id: 'next-gen-payments',
            title: 'Next-Gen Payments',
            sponsor: 'tieto',
            sessions: [
              { time: '14:00', type: 'keynote', title: 'Enhancing Payment Security Through Effective Payee Verification' },
              { time: '14:25', type: 'sponsored', title: 'Smart Payment Systems: Risk Reduction & Operational Efficiency' },
              {
                time: '14:50', type: 'panel', title: 'AI in Next-Gen Payments: What\u2019s Real, What\u2019s Ready, What\u2019s Still Hype?',
                discussionPoints: [
                  'Evaluating real AI payment use-cases delivering measurable operational impact',
                  'Aligning AI innovation with the EU Instant Payments Regulation and PSD3 compliance',
                  'Identifying readiness gaps: data, governance, fraud systems, and compliance alignment',
                  'Assessing AI-driven risk scoring for domestic and cross-border transactions beyond traditional models',
                ],
              },
              { time: '15:35', type: 'break', title: 'Coffee Break, Networking & 1-to-1 Meetings' },
            ],
          },
          {
            id: 'fraud-financial-crime',
            title: 'Fraud & Financial Crime',
            sponsor: 'guardsquare',
            sessions: [
              { time: '16:10', type: 'keynote', title: 'Rebuilding Fraud and Financial Crime Defences for the Instant-Payments Era' },
              { time: '16:35', type: 'sponsored', title: 'Lessons Learned from a Major Financial Fraud Case that Started from a Mobile App Attack' },
              {
                time: '17:00', type: 'panel', title: 'Can Banks Stay Ahead of Fraudsters in the AI Era?',
                discussionPoints: [
                  'Is AI creating more fraud opportunities than protection?',
                  'Fraud prevention vs. financial inclusion',
                  'The rise of synthetic identities and deepfake attacks',
                  'Should banks share fraud intelligence more openly?',
                ],
              },
            ],
          },
        ],
        closing: [
          { time: '17:45', type: 'other', title: 'End of Day 1, Networking & 1-to-1 Meetings' },
          { time: '18:30', type: 'other', title: 'Cocktail Reception & Gala Dinner' },
        ],
      },
    ],
  },
  {
    id: 'day2',
    label: 'Day 2',
    date: '20 November 2026',
    stages: [
      {
        id: 'digital',
        label: 'Digital Stage',
        intro: 'Hands-on insights from leaders driving CX innovation and lending transformation. Morning sessions only.',
        opening: [
          { time: '08:30', type: 'other', title: 'Registration & Morning Coffee' },
          { time: '09:00', type: 'other', title: 'Welcome Remarks' },
        ],
        modules: [
          {
            id: 'cx-personalization',
            title: 'CX Personalization',
            sessions: [
              { time: '09:10', type: 'keynote', title: 'Driving Growth Through Customer-Focused Digital Innovation' },
              { time: '09:35', type: 'sponsored', title: 'Turning Data and Insights into Actionable Customer Value' },
              {
                time: '10:00', type: 'panel', title: 'Strategies for Digital Excellence in CX',
                discussionPoints: [
                  'Implementing AI-driven insights to anticipate evolving customer needs',
                  'Seamless omnichannel experiences across digital and physical touchpoints',
                  'Strategies to measure emotional engagement, loyalty, and advocacy',
                  'Leveraging customer data and insights to optimize ROI across the full customer journey',
                ],
              },
              { time: '10:45', type: 'break', title: 'Coffee Break, Networking & 1-to-1 Meetings' },
            ],
          },
          {
            id: 'lending-transformation',
            title: 'Lending Transformation',
            sessions: [
              { time: '11:20', type: 'keynote', title: 'Reinventing Mortgage Lending: Digital Journeys, AI Insights, and Smarter Risk' },
              { time: '11:45', type: 'sponsored', title: 'Smart Lending: Leveraging Technology to Enhance the Borrowing Journey' },
              {
                time: '12:10', type: 'panel', title: 'The Rise of Smart Lending: Practical AI Applications in Credit Transformation',
                discussionPoints: [
                  'Strategic priorities for AI adoption in lending modernization',
                  'Integrating alternative data sources into lending decision models',
                  'Balancing automation with responsible lending and regulatory expectations',
                  'Lessons learned from implementing end-to-end digital loan journeys',
                ],
              },
              { time: '12:55', type: 'break', title: 'Lunch Break, Networking & 1-to-1 Meetings' },
            ],
          },
        ],
      },
      {
        id: 'impact',
        label: 'Impact Stage',
        intro: 'Frontline expertise on cybersecurity and seamless payments. Morning sessions only.',
        opening: [
          { time: '08:30', type: 'other', title: 'Registration & Morning Coffee' },
          { time: '09:00', type: 'other', title: 'Welcome Remarks' },
        ],
        modules: [
          {
            id: 'cybersecurity-resilience',
            title: 'Cybersecurity & Resilience',
            sessions: [
              { time: '09:10', type: 'keynote', title: 'Safeguarding Banking Data in the Age of Digital Transformation' },
              { time: '09:35', type: 'sponsored', title: 'Threat Prevention: Leveraging Intelligent Security Technologies' },
              {
                time: '10:00', type: 'panel', title: 'Mitigating Cyber Threats and Operational Risks in CEE Banking',
                discussionPoints: [
                  'Strengthening security foundations as data volumes, channels, and digital interactions expand',
                  'How can banks balance customer experience with stronger authentication and fraud controls?',
                  'What role should AI and analytics play in improving AML monitoring and threat detection?',
                  'How can CEE institutions build resilience against cross-border, systemic, and supply-chain cyber risks?',
                  'What does quantum computing mean for encryption, security, and the financial systems banks rely on today?',
                ],
              },
              { time: '10:45', type: 'break', title: 'Coffee Break, Networking & 1-to-1 Meetings' },
            ],
          },
          {
            id: 'global-payments-cee',
            title: 'Global Payments & CEE',
            sessions: [
              { time: '11:20', type: 'keynote', title: 'The Future of Payments: Driving Automation, Resilience, and Innovation' },
              { time: '11:45', type: 'sponsored', title: 'Optimizing Payment Operations for Speed, Security, and Scale' },
              {
                time: '12:10', type: 'panel', title: 'Driving Seamless Payments Across CEE: Mobile, Card, and Innovation',
                discussionPoints: [
                  'How mobile and card payments are evolving in CEE',
                  'Opportunities and challenges in cross-border payment interoperability',
                  'Consumer adoption trends: convenience, speed, and security expectations',
                  'How banks can stay competitive amid fintech disruption',
                ],
              },
              { time: '12:55', type: 'break', title: 'Lunch Break, Networking & 1-to-1 Meetings' },
            ],
          },
        ],
      },
      {
        id: 'main',
        label: 'Main Stage',
        intro: 'C-suite perspectives on AI, risk, and leadership in banking\u2019s future. Closing plenary sessions after the morning Digital and Impact stages.',
        modules: [
          {
            id: 'risk-ai-strategy',
            title: 'Risk, AI, and Strategy',
            sessions: [
              { time: '14:00', type: 'keynote', title: 'AI-Driven Risk Management: Transforming Decision-Making in Banks' },
              { time: '14:25', type: 'sponsored', title: 'What Every CEE Banking Executive Needs to Know About Generative AI' },
              {
                time: '14:50', type: 'panel', title: 'Leading Through Uncertainty: Profitability, Risk & Reinvention',
                discussionPoints: [
                  'How are CEE banks managing profitability and tech-driven change under tight regulation?',
                  'How to lead in an environment of uncertainty, cost pressure, and changing expectations?',
                  'What\u2019s practical and what\u2019s still too risky? Decision-making when clarity is limited.',
                ],
              },
              { time: '15:35', type: 'break', title: 'Coffee Break, Networking & 1-to-1 Meetings' },
            ],
          },
          {
            id: 'leadership-transformation',
            title: 'Leadership & Transformation',
            sessions: [
              { time: '16:10', type: 'keynote', title: 'Digital Finance, Payments and Cybersecurity - Emerging Challenges, Regulatory Perspectives and the Way Forward' },
              { time: '16:35', type: 'sponsored', title: 'Accelerated Talent Transformation: Upskilling for Data & AI Roles' },
              {
                time: '17:00', type: 'panel', title: 'The Future Workforce: Human Skills in an AI-Driven Bank',
                discussionPoints: [
                  'How can banks balance automation with essential human judgment?',
                  'Identifying critical human skills that complement AI-driven operations',
                  'Redesigning workforce roles as technology reshapes banking functions',
                  'Embedding continuous learning models for adaptive, future-ready teams',
                ],
              },
            ],
          },
        ],
        closing: [
          { time: '17:45', type: 'other', title: 'Farewell & See You At The Next #BANCEE Events' },
        ],
      },
    ],
  },
];