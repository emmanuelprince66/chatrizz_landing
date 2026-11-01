import LegalDocument, { type Section } from "../components/LegalDocument";

const SITE = "https://chatrizz.co";

const sections: Section[] = [
  {
    title: "1. Introduction and Acceptance of Terms",
    blocks: [
      "Welcome to Chatrizz.",
      'These Terms and Conditions ("Terms") govern your access to and use of the Chatrizz website, mobile application, features, services and related platforms (collectively referred to as the "Platform").',
      "Chatrizz is a social networking and community discovery platform that enables users to connect with people, communicate, share content, discover local products and services, and promote businesses.",
      "Chatrizz is operated by:",
      {
        fields: [
          ["Legal Company Name", "[Insert registered company name]"],
          ["Website", SITE],
          ["Contact Email", "info@chatrizz.co"],
        ],
      },
      "By registering, accessing or using Chatrizz, you agree to be bound by these Terms and our Privacy Policy.",
      "If you do not agree with these Terms, you must not access or use the Platform.",
    ],
  },
  {
    title: "2. Eligibility and Account Registration",
    blocks: [
      "To use Chatrizz, you must:",
      {
        list: [
          "Meet the minimum age requirement applicable to the Platform and the laws of your location.",
          "Provide accurate, complete and up-to-date registration information.",
          "Create an account using the registration methods made available by Chatrizz.",
          "Keep your account credentials secure.",
          "Not impersonate another person, organisation or business.",
          "Not create an account using false, misleading or stolen information.",
        ],
      },
      "You are responsible for activities carried out through your account.",
      "You must notify Chatrizz promptly if you suspect that your account has been accessed or used without your permission.",
      "Chatrizz reserves the right to request additional information where reasonably necessary to verify an account, investigate suspicious activity or protect the Platform.",
    ],
  },
  {
    title: "3. Your Chatrizz Account",
    blocks: [
      "Your account is intended for your personal or authorised business use.",
      "You agree not to:",
      {
        list: [
          "Share your login credentials with unauthorised individuals.",
          "Sell, rent, transfer or otherwise commercially exploit your account without our written permission.",
          "Create multiple accounts to deceive, harass or manipulate other users.",
          "Circumvent account restrictions, suspensions or bans.",
          "Use another person's account without authorisation.",
        ],
      },
      "You remain responsible for maintaining the confidentiality of your account credentials and for activities carried out through your account.",
    ],
  },
  {
    title: "4. Platform Features and Services",
    blocks: [
      "Chatrizz provides features that may include:",
      { sub: "A. Meet — Social Connections" },
      "Users can discover, connect and interact with other users through available social and community features.",
      "You acknowledge that interactions with other users are voluntary and that Chatrizz does not guarantee that you will establish friendships, relationships, business partnerships or other connections.",
      { sub: "B. Vibe — Content Sharing and Communication" },
      "Users may be able to:",
      {
        list: [
          "Create and publish posts.",
          "Upload photographs and videos.",
          "Share experiences and updates.",
          "Comment on and react to content.",
          "Follow, discover or interact with other users.",
          "Communicate through available messaging features.",
        ],
      },
      "You are responsible for all content you submit, upload, publish or communicate through Chatrizz.",
      { sub: "C. Hustle — Business and Local Discovery" },
      "Chatrizz may allow individuals and businesses to:",
      {
        list: [
          "Create business profiles or listings.",
          "Promote products and services.",
          "Share business-related content.",
          "Discover businesses and local offerings.",
          "Connect with potential customers and other businesses.",
        ],
      },
      "Chatrizz provides a platform for discovery and promotion. Unless a specific service expressly states otherwise, Chatrizz is not the seller, manufacturer, supplier, delivery provider or guarantor of products and services listed by users.",
      { sub: "D. Changes to Platform Features" },
      "We may introduce, modify, suspend or discontinue features to improve the Platform, address security concerns, comply with applicable laws or respond to operational requirements.",
      "Where reasonably practicable, we will provide notice of material changes that significantly affect users.",
    ],
  },
  {
    title: "5. User-Generated Content",
    blocks: [
      "You retain ownership of content you create and upload to Chatrizz, subject to any rights belonging to other parties.",
      "By submitting, uploading or publishing content on Chatrizz, you grant us a non-exclusive, worldwide, royalty-free licence to host, store, reproduce, display, distribute and technically process that content as reasonably necessary to operate, maintain, improve and promote the Platform.",
      "This licence is limited to the purposes of providing and operating Chatrizz and does not transfer ownership of your content to us.",
      "You confirm that:",
      {
        list: [
          "You own the content or have permission to use and share it.",
          "Your content does not violate another person's intellectual property or privacy rights.",
          "Your content does not contain unlawful, fraudulent or misleading material.",
          "You have obtained appropriate permission before sharing images, videos or personal information involving other individuals where required.",
        ],
      },
      "This licence ends when your content is deleted from our active services, except where continued processing is necessary for backups, legal compliance, security, dispute resolution or other legitimate purposes.",
    ],
  },
  {
    title: "6. Acceptable Use and Community Guidelines",
    blocks: [
      "Chatrizz is designed to encourage meaningful connections, positive interactions and business opportunities.",
      "You agree to use the Platform responsibly and respectfully.",
      "The following activities are prohibited:",
      { sub: "A. Harassment and Abuse" },
      {
        list: [
          "Bullying, threats, intimidation or targeted harassment.",
          "Hate speech or discriminatory abuse.",
          "Stalking, unwanted persistent contact or intimidation.",
          "Sexual harassment or non-consensual sexual content.",
          "Encouraging violence or harm against individuals or groups.",
        ],
      },
      { sub: "B. Fraud and Deception" },
      {
        list: [
          "Impersonating another person, organisation or business.",
          "Creating fake profiles for fraudulent purposes.",
          "Scamming, phishing or attempting to steal personal information.",
          "Promoting fake products, counterfeit goods or misleading offers.",
          "Misrepresenting your identity, qualifications, products or services.",
          "Manipulating reviews, ratings, engagement or interactions.",
        ],
      },
      { sub: "C. Inappropriate and Harmful Content" },
      {
        list: [
          "Sexually explicit or exploitative content.",
          "Child sexual abuse material or any content that exploits or endangers children.",
          "Content promoting human trafficking, exploitation or illegal activities.",
          "Graphic violent content intended to threaten or harm others.",
          "Content that violates applicable laws or regulations.",
        ],
      },
      { sub: "D. Spam and Platform Manipulation" },
      {
        list: [
          "Sending unsolicited bulk messages.",
          "Repeatedly publishing irrelevant or deceptive promotional content.",
          "Using bots, scripts or automated tools to manipulate the Platform without authorisation.",
          "Artificially generating followers, reactions, views or engagement.",
          "Disrupting the normal operation of Chatrizz.",
        ],
      },
      { sub: "E. Security and Unauthorised Access" },
      {
        list: [
          "Attempting to access another user's account without permission.",
          "Introducing malware, harmful code or malicious software.",
          "Attempting to interfere with the Platform's infrastructure.",
          "Reverse engineering or exploiting the Platform except where expressly permitted by law.",
          "Collecting user information through unauthorised scraping or automated extraction.",
        ],
      },
      "We reserve the right to investigate suspected violations and take appropriate action.",
    ],
  },
  {
    title: "7. Business Listings, Products and Services",
    blocks: [
      "Chatrizz may enable users to promote and discover products, services and businesses.",
      "Users who create business listings or promotional content must ensure that:",
      {
        list: [
          "Their business and contact information is accurate.",
          "Products and services are described honestly.",
          "Prices, availability and other material details are not misleading.",
          "They have the legal right and necessary approvals to offer the advertised products or services.",
          "Their listings comply with applicable consumer protection, advertising and industry regulations.",
        ],
      },
      "You must not use Chatrizz to promote illegal products, counterfeit goods, fraudulent investment opportunities or prohibited services.",
      { sub: "Important Notice About Transactions" },
      "Unless Chatrizz expressly provides a specific transaction or payment service, Chatrizz does not:",
      {
        list: [
          "Act as the seller of products listed by users.",
          "Guarantee the quality, authenticity, safety or availability of listed products.",
          "Guarantee the accuracy of business listings.",
          "Guarantee that a buyer will receive an advertised product or service.",
          "Guarantee that a seller will receive payment.",
          "Guarantee the conduct or performance of users or businesses discovered through the Platform.",
        ],
      },
      "Users are responsible for conducting appropriate checks before entering into transactions with other users or businesses.",
      "Where transactions occur between users, the parties are responsible for agreeing on payment, delivery, refunds, warranties and other transaction terms, subject to applicable law.",
      "Nothing in these Terms removes any consumer rights that cannot lawfully be excluded.",
    ],
  },
  {
    title: "8. Interactions Between Users",
    blocks: [
      "Chatrizz provides tools that allow people to discover and communicate with one another.",
      "You acknowledge that:",
      {
        list: [
          "You are responsible for deciding who you interact with.",
          "You should exercise caution when sharing personal information.",
          "You should verify information before relying on another user's claims.",
          "You should exercise care when arranging physical meetings.",
          "You should not send money or disclose sensitive financial information to people you do not trust.",
        ],
      },
      "Chatrizz does not guarantee the identity, character, intentions or conduct of other users.",
      "We encourage users to report suspicious, abusive or harmful interactions through available reporting channels.",
    ],
  },
  {
    title: "9. Content Moderation, Reporting and Enforcement",
    blocks: [
      "We want Chatrizz to remain a safe and respectful environment.",
      "We may review, restrict, remove or disable access to content that violates these Terms, our community guidelines or applicable laws.",
      "We may take actions including:",
      {
        list: [
          "Removing or restricting access to content.",
          "Issuing warnings.",
          "Restricting specific features.",
          "Temporarily suspending accounts.",
          "Permanently terminating accounts.",
          "Reporting suspected illegal activity to appropriate authorities where necessary.",
        ],
      },
      "Users may report content, profiles, messages or activities they believe violate our rules through available reporting mechanisms or by contacting our support team.",
      "We will review reports and take action where appropriate.",
      "Where practicable, users affected by enforcement decisions may contact us to request a review.",
      "We are not obligated to monitor every user interaction or item of content, but we reserve the right to take reasonable steps to protect the Platform and its users.",
    ],
  },
  {
    title: "10. Intellectual Property Rights",
    blocks: [
      "Chatrizz, including its name, logo, branding, software, design, interface, features, text, graphics and other platform materials, is owned by or licensed to the company operating the Platform.",
      "You may not, without our prior written permission:",
      {
        list: [
          "Copy or reproduce protected Chatrizz materials.",
          "Modify, distribute or commercially exploit our software or branding.",
          "Use our trademarks in a misleading manner.",
          "Reverse engineer or attempt to extract source code except where permitted by applicable law.",
          "Misrepresent your relationship with Chatrizz.",
        ],
      },
      "Nothing in these Terms gives you ownership of Chatrizz's intellectual property.",
      "If you believe content on Chatrizz infringes your intellectual property rights, contact us with sufficient information to identify the content and explain your complaint.",
      "We may remove or restrict access to content where appropriate.",
    ],
  },
  {
    title: "11. Third-Party Services and External Links",
    blocks: [
      "Chatrizz may contain links, integrations or references to third-party websites, services, products or applications.",
      "These third-party services are not necessarily owned or controlled by Chatrizz.",
      "We are not responsible for the content, privacy practices, availability, security or independent activities of third-party services.",
      "Your use of third-party services may be governed by their own terms and privacy policies.",
    ],
  },
  {
    title: "12. Privacy and Personal Information",
    blocks: [
      "Your use of Chatrizz is also governed by our Privacy Policy.",
      "Our Privacy Policy explains how we collect, use, store, disclose and protect personal information.",
      "By using Chatrizz, you acknowledge that your personal information will be handled in accordance with the Privacy Policy and applicable data protection laws.",
      { fields: [["Privacy Policy", `${SITE}/privacy/`]] },
    ],
  },
  {
    title: "13. Platform Availability and Service Changes",
    blocks: [
      "We aim to provide a reliable and accessible service. However, we do not guarantee that Chatrizz will always be available, uninterrupted, secure or free from errors.",
      "The Platform may occasionally be unavailable due to:",
      {
        list: [
          "Maintenance and upgrades.",
          "Technical failures.",
          "Network or internet disruptions.",
          "Third-party service interruptions.",
          "Security incidents.",
          "Events beyond our reasonable control.",
        ],
      },
      "We may modify or discontinue certain features where necessary.",
    ],
  },
  {
    title: "14. Account Suspension and Termination",
    blocks: [
      "You may stop using Chatrizz at any time and request deletion of your account through the available account deletion process.",
      "We may suspend, restrict or terminate your account where:",
      {
        list: [
          "You violate these Terms or applicable laws.",
          "Your account is involved in fraud, abuse or harmful activity.",
          "Your activities compromise the security or integrity of the Platform.",
          "We receive a valid legal or regulatory instruction.",
          "Continued access creates a material risk to other users or Chatrizz.",
        ],
      },
      "Where reasonably practicable and appropriate, we may notify you of the reason for suspension or termination and provide an opportunity to appeal.",
      "Termination does not remove obligations or liabilities that arose before termination.",
    ],
  },
  {
    title: "15. Disclaimer of Warranties",
    blocks: [
      'To the maximum extent permitted by applicable law, Chatrizz is provided on an "as available" and "as is" basis.',
      "We do not guarantee that:",
      {
        list: [
          "The Platform will meet every user's expectations.",
          "All user-provided information will be accurate.",
          "Every business or individual on the Platform is genuine or trustworthy.",
          "Products and services promoted by users are safe, authentic or suitable.",
          "The Platform will be free from errors, interruptions or security vulnerabilities.",
          "Users will achieve any particular social, personal or commercial outcome.",
        ],
      },
      "We will nevertheless take reasonable steps to maintain and improve the Platform.",
      "Nothing in these Terms excludes warranties or rights that cannot legally be excluded.",
    ],
  },
  {
    title: "16. Limitation of Liability",
    blocks: [
      "To the maximum extent permitted by applicable law, Chatrizz and its operators shall not be liable for indirect, incidental, special or consequential losses arising from:",
      {
        list: [
          "Your inability to access or use the Platform.",
          "Your interactions with other users.",
          "User-generated content or third-party listings.",
          "Transactions between users or businesses.",
          "Unauthorised access arising from circumstances beyond our reasonable control.",
          "Third-party services or external links.",
        ],
      },
      "We are not responsible for losses resulting from a user's failure to exercise reasonable care when interacting with other users or businesses.",
      "Nothing in these Terms excludes or limits liability for fraud, wilful misconduct, gross negligence where applicable, death or personal injury caused by negligence, or any liability that cannot lawfully be excluded or limited.",
    ],
  },
  {
    title: "17. Indemnification",
    blocks: [
      "To the extent permitted by applicable law, you agree to be responsible for losses, claims, damages and reasonable expenses arising from your unlawful conduct, your violation of these Terms, your infringement of another person's rights or your misuse of the Platform.",
      "This provision does not apply to the extent that a claim results from Chatrizz's own unlawful conduct or obligations that cannot legally be transferred to you.",
    ],
  },
  {
    title: "18. Changes to These Terms",
    blocks: [
      "We may update these Terms from time to time to reflect:",
      {
        list: [
          "Changes to our products and services.",
          "New features and functionality.",
          "Legal or regulatory requirements.",
          "Security and operational improvements.",
          "Changes in our business practices.",
        ],
      },
      "Where changes are material, we will take reasonable steps to notify users through the Platform, website or other appropriate channels.",
      "The updated Terms will display a revised effective date.",
      "Your continued use of Chatrizz after the updated Terms become effective constitutes acceptance of the revised Terms, to the extent permitted by applicable law.",
    ],
  },
  {
    title: "19. Governing Law and Dispute Resolution",
    blocks: [
      "These Terms shall be governed by the laws of the Federal Republic of Nigeria, subject to any mandatory consumer protection or other legal requirements that apply to you.",
      "If a dispute arises, the parties should first attempt to resolve it through good-faith discussions and by contacting Chatrizz's support team.",
      "Where an informal resolution is unsuccessful, either party may pursue remedies available through the competent courts or other legally recognised dispute resolution mechanisms in Nigeria.",
      "Nothing in this section limits any rights you may have under applicable consumer protection laws.",
    ],
  },
  {
    title: "20. Severability",
    blocks: [
      "If any provision of these Terms is found to be invalid, unlawful or unenforceable, the remaining provisions shall continue to apply to the extent legally permissible.",
    ],
  },
  {
    title: "21. Entire Agreement",
    blocks: [
      "These Terms, together with the Privacy Policy and any additional terms presented for specific Chatrizz services, constitute the agreement between you and Chatrizz concerning your use of the Platform.",
      "Where additional terms apply to a specific feature or service, those terms will be made available to you before or when you use that feature or service.",
    ],
  },
  {
    title: "22. Contact Information",
    blocks: [
      "For questions, complaints, reports or requests relating to these Terms, please contact:",
      { sub: "Chatrizz Support Team" },
      {
        fields: [
          ["Website", SITE],
          ["Email", "info@chatrizz.co"],
          ["Registered Company", "[Insert registered company name]"],
          ["Business Address", "3 Akron Drive, Wolverhampton, WV10 6EG"],
        ],
      },
    ],
  },
];

const TermsConditions = () => (
  <LegalDocument
    title="Terms & Conditions"
    effectiveDate="30 October 2026"
    lastUpdated="30 October 2026"
    sections={sections}
    tagline="Connect with people. Discover your community. Grow your hustle."
  />
);

export default TermsConditions;
