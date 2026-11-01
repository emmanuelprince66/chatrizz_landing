import LegalDocument, { type Section } from "../components/LegalDocument";

const SITE = "https://chatrizz.co";

const sections: Section[] = [
  {
    title: "1. Introduction",
    blocks: [
      "Welcome to Chatrizz.",
      'Chatrizz ("we", "our", "us" or the "Platform") is a social networking and community discovery platform that helps people connect, communicate, share experiences, discover local products and services, and promote their businesses.',
      "We recognise that your privacy matters. This Privacy Policy explains how Chatrizz collects, uses, stores, protects, discloses and manages your personal information when you access our website, mobile application and related services.",
      "By using Chatrizz, you acknowledge that you have read this Privacy Policy. Where applicable law requires consent for a particular activity, we will request that consent separately.",
    ],
  },
  {
    title: "2. Who We Are",
    blocks: [
      "Chatrizz is operated by:",
      {
        fields: [
          ["Company/Legal Entity", "[Insert registered company name]"],
          ["Application", "Chatrizz"],
          ["Website", SITE],
          ["Privacy Contact Email", "info@chatrizz.co"],
          ["Business Address", "3 Akron Drive, Wolverhampton, WV10 6EG"],
        ],
      },
      "For privacy-related enquiries, data access requests, complaints or account deletion requests, please contact us using the details above.",
    ],
  },
  {
    title: "3. Information We Collect",
    blocks: [
      "Depending on how you use Chatrizz and the permissions you grant, we may collect the following categories of information.",
      { sub: "A. Account and Registration Information" },
      "When you create an account, we may collect:",
      {
        list: [
          "Full name or display name.",
          "Username.",
          "Email address.",
          "Phone number.",
          "Password or authentication credentials, stored using appropriate security measures.",
          "Date of birth or age information, where required.",
          "Profile photograph and other information you choose to provide.",
        ],
      },
      { sub: "B. Profile and Social Information" },
      "To help users connect and interact, we may collect information you choose to add to your profile, such as:",
      {
        list: [
          "Profile picture and biography.",
          "Interests and preferences.",
          "General location or city.",
          "Business name and description, where applicable.",
          "Other profile information you choose to make available.",
        ],
      },
      { sub: "C. Posts, Photos, Videos and Other User Content" },
      "When you use Chatrizz to share content, we may collect and process:",
      {
        list: [
          "Text posts and captions.",
          "Photographs and videos.",
          "Comments and reactions.",
          "Uploaded media and attachments.",
          "Business listings, product descriptions and service information.",
          "Other content you submit through the Platform.",
        ],
      },
      "Please remember that content you publish publicly may be visible to other users and may be copied, shared or captured by them.",
      { sub: "D. Messages and Communications" },
      "When you use Chatrizz's messaging or communication features, we process information necessary to deliver and maintain those services. This may include:",
      {
        list: [
          "Sender and recipient account information.",
          "Message content.",
          "Images, videos or other attachments sent through messages.",
          "Message timestamps and delivery information.",
          "Reports or complaints relating to communications.",
        ],
      },
      "Private messages are intended for the participants in the conversation. However, authorised personnel may access relevant information when necessary to investigate reports, address abuse, protect users, comply with legal obligations or enforce our policies.",
      { sub: "E. Location Information" },
      "Chatrizz uses location-related functionality to help users discover people, communities, products and services around them.",
      "Depending on your device settings and permissions, we may collect:",
      {
        list: [
          "Approximate location.",
          "Precise GPS location, where permission is granted and the feature requires it.",
          "City, region or country.",
          "Location information associated with posts, searches or business listings.",
        ],
      },
      "You can manage location permissions through your device settings. Disabling location access may affect features that depend on location.",
      "We do not intend to make your precise location publicly available unless a specific feature clearly allows you to share it.",
      { sub: "F. Device and Technical Information" },
      "When you access Chatrizz, we may automatically collect certain technical information, including:",
      {
        list: [
          "Device type and model.",
          "Operating system and version.",
          "App version.",
          "IP address.",
          "Device identifiers.",
          "Browser information, where applicable.",
          "Login activity.",
          "Usage logs and diagnostic information.",
          "Crash reports and performance data.",
        ],
      },
      "This information helps us maintain the security, reliability and performance of Chatrizz.",
      { sub: "G. Business, Product and Service Information" },
      "If you use Chatrizz to promote a business or discover products and services, we may collect:",
      {
        list: [
          "Business or seller name.",
          "Business contact information.",
          "Product and service descriptions.",
          "Business location.",
          "Images and promotional materials.",
          "Listing activity and interactions.",
        ],
      },
      "Please do not publish confidential business information or personal information belonging to another person without proper authorisation.",
    ],
  },
  {
    title: "4. How We Use Your Information",
    blocks: [
      "We use information collected through Chatrizz for legitimate and clearly defined purposes, including:",
      {
        numbered: [
          ["Account Management", "Creating, authenticating and managing user accounts."],
          ["Social Connections", "Helping users discover and connect with other people."],
          ["Communication", "Delivering messages, notifications and other communication features."],
          ["Content Sharing", "Enabling users to create, upload, display and interact with content."],
          ["Local Discovery", "Supporting location-based discovery of people, businesses, products and services."],
          ["Business Promotion", "Helping businesses and individuals showcase their products and services."],
          ["Personalisation", "Improving recommendations and the relevance of content shown to users."],
          ["Safety and Security", "Detecting suspicious activity, preventing fraud, investigating abuse and enforcing our community guidelines."],
          ["Platform Improvement", "Understanding usage patterns, diagnosing technical problems and improving app functionality."],
          ["Customer Support", "Responding to questions, complaints and user requests."],
          ["Legal Compliance", "Meeting applicable legal, regulatory and lawful governmental requirements."],
        ],
      },
    ],
  },
  {
    title: "5. Legal Basis for Processing",
    blocks: [
      "Where applicable, we process personal information under one or more lawful bases recognised by the Nigeria Data Protection Act 2023 and other applicable data protection laws.",
      "These may include:",
      {
        fields: [
          ["Consent", "Where you have given permission for a specific processing activity."],
          ["Contractual Necessity", "Where processing is necessary to provide the services you request."],
          ["Legitimate Interests", "Where processing is necessary for legitimate business interests, provided your rights and freedoms are not overridden."],
          ["Legal Obligations", "Where we are required to process or retain information to comply with applicable laws."],
          ["Vital Interests or Public Interest", "Where applicable under relevant law."],
        ],
      },
      "Where we rely on consent, you may withdraw it. Withdrawal does not affect processing lawfully carried out before the withdrawal.",
    ],
  },
  {
    title: "6. How Your Information Is Shared",
    blocks: [
      "Chatrizz does not sell your personal information to third parties for their independent marketing purposes.",
      "However, we may share information in the following circumstances:",
      { sub: "A. With Other Chatrizz Users" },
      "Information you choose to make public, including your profile details, posts, comments, business listings and other public content, may be visible to other users.",
      "Information shared through private messaging is intended for the participants in the conversation, subject to the safety, security and legal exceptions described in this Policy.",
      { sub: "B. With Service Providers" },
      "We may work with trusted third-party service providers who support the operation of Chatrizz, including:",
      {
        list: [
          "Cloud hosting and data storage providers.",
          "Authentication and account management providers.",
          "Analytics and application performance providers.",
          "Customer support and communication providers.",
          "Notification and messaging infrastructure providers.",
          "Content moderation and security providers.",
        ],
      },
      "These providers may process information on our behalf for specified purposes and are expected to apply appropriate safeguards.",
      { sub: "C. For Legal and Safety Reasons" },
      "We may disclose information where reasonably necessary to:",
      {
        list: [
          "Comply with applicable laws or valid legal requests.",
          "Protect the rights, safety and property of Chatrizz, our users or other individuals.",
          "Investigate suspected fraud, abuse, security incidents or violations of our policies.",
          "Enforce our Terms and Conditions.",
        ],
      },
      { sub: "D. Business Transfers" },
      "If Chatrizz undergoes a merger, acquisition, restructuring or sale of assets, relevant information may be transferred as part of that transaction, subject to appropriate legal safeguards.",
    ],
  },
  {
    title: "7. Public Content and User Responsibility",
    blocks: [
      "Chatrizz gives users the ability to share content and interact with other people.",
      "You are responsible for the content you publish and the information you choose to share.",
      "Please understand that:",
      {
        list: [
          "Public posts and business listings may be viewed by other users.",
          "Other users may screenshot, download, copy or redistribute content.",
          "Sharing personal information publicly may expose you to unwanted contact.",
          "You should avoid posting sensitive personal information, passwords, financial credentials or private information belonging to others.",
        ],
      },
      "Chatrizz cannot guarantee that information voluntarily made public by a user will remain private.",
    ],
  },
  {
    title: "8. Location Privacy",
    blocks: [
      "Location-based discovery is part of the Chatrizz experience.",
      "Where location services are enabled, we may use location information to support nearby discovery and relevant recommendations.",
      "You can disable location permissions through your device settings. However, certain features may become unavailable or less accurate.",
      "We encourage users to review their location permissions regularly and only share location information they are comfortable disclosing.",
    ],
  },
  {
    title: "9. Cookies and Similar Technologies",
    blocks: [
      "When you use our website, we may use cookies and similar technologies to:",
      {
        list: [
          "Keep the website functioning.",
          "Remember preferences.",
          "Understand website usage.",
          "Improve performance and user experience.",
          "Support security and analytics.",
        ],
      },
      "You can manage cookies through your browser settings. Disabling certain cookies may affect website functionality.",
      "Our mobile application may also use SDKs and similar technologies for analytics, diagnostics, authentication and other disclosed purposes.",
    ],
  },
  {
    title: "10. Data Security",
    blocks: [
      "We take reasonable technical and organisational measures to protect personal information against unauthorised access, disclosure, alteration, loss or destruction.",
      "Depending on the systems and services used, these measures may include:",
      {
        list: [
          "Access controls and authentication.",
          "Encryption where appropriate.",
          "Secure communication protocols.",
          "Monitoring and security logging.",
          "Restricted access to personal information.",
          "Security assessments and system maintenance.",
          "Backup and recovery procedures.",
        ],
      },
      "Although we work to protect your information, no internet-based service or electronic storage system can guarantee absolute security.",
      "If a personal data breach occurs, we will take appropriate steps in accordance with applicable legal and regulatory requirements.",
    ],
  },
  {
    title: "11. Data Retention",
    blocks: [
      "We retain personal information only for as long as reasonably necessary to fulfil the purposes for which it was collected, including providing services, maintaining security, resolving disputes and meeting legal obligations.",
      "Retention periods may vary depending on the category of information and the purpose for which it is processed.",
      "When information is no longer required, we will take reasonable steps to delete, anonymise or securely dispose of it.",
      "Certain information may be retained for a limited period where required by law or necessary for legitimate security, fraud prevention, dispute resolution or legal purposes.",
    ],
  },
  {
    title: "12. Account Deletion and Data Removal",
    blocks: [
      "You may request deletion of your Chatrizz account.",
      "You can initiate an account deletion request through the account settings in the application, where available, or through our external account deletion request page:",
      { fields: [["Account Deletion Request", "[Insert working account deletion URL]"]] },
      "You may also contact us at info@chatrizz.co.",
      "When an account deletion request is verified and processed, we will delete or anonymise personal information associated with the account, subject to applicable legal obligations and legitimate retention exceptions.",
      "Information that must be retained for legal, security, fraud prevention or dispute-resolution purposes will be restricted and retained only for the required period.",
      "Content that has already been shared, copied or captured by other users may not be recoverable from their devices or independent services.",
      "Uninstalling the Chatrizz application does not automatically delete your account.",
    ],
  },
  {
    title: "13. Your Privacy Rights",
    blocks: [
      "Subject to applicable law, you may have the right to:",
      {
        list: [
          "Know how your personal information is collected and used.",
          "Request access to personal information we hold about you.",
          "Request correction of inaccurate or incomplete information.",
          "Request deletion of your personal information.",
          "Withdraw consent where processing is based on consent.",
          "Object to certain forms of processing.",
          "Request restriction of processing in applicable circumstances.",
          "Request a copy of your information in a portable format, where applicable.",
          "Object to certain automated decisions that significantly affect you.",
          "Lodge a complaint with the relevant data protection authority.",
        ],
      },
      "To exercise these rights, contact us using the privacy contact information provided in this Policy.",
      "We may need to verify your identity before responding to certain requests.",
    ],
  },
  {
    title: "14. Children's Privacy",
    blocks: [
      "Chatrizz is not intended for children below the minimum age permitted under applicable law and our platform age requirements.",
      "We do not knowingly collect personal information from children where such collection is prohibited or requires parental authorisation that has not been obtained.",
      "If we become aware that a child has provided personal information in violation of applicable requirements, we will take appropriate steps to investigate and delete the information where required.",
      "Parents or guardians who believe a child has provided personal information to Chatrizz may contact us.",
    ],
  },
  {
    title: "15. Third-Party Services and External Links",
    blocks: [
      "Chatrizz may contain links to external websites, products or services that are not operated by us.",
      "We are not responsible for the privacy practices, security or content of those external services.",
      "We encourage users to review the privacy policies of third-party services before providing their information.",
    ],
  },
  {
    title: "16. International Data Transfers",
    blocks: [
      "Some of our service providers or technology infrastructure may be located outside Nigeria.",
      "Where personal information is transferred outside Nigeria, we will take appropriate steps to ensure that the transfer complies with applicable data protection laws, including the Nigeria Data Protection Act 2023.",
      "These safeguards may include appropriate contractual protections, recognised transfer mechanisms or other lawful arrangements.",
    ],
  },
  {
    title: "17. Changes to This Privacy Policy",
    blocks: [
      "We may update this Privacy Policy from time to time to reflect changes in our services, technology, legal requirements or data handling practices.",
      "Where material changes are made, we will take reasonable steps to notify users through the application, website or other appropriate communication channels.",
      "The updated version will display its effective date or last updated date.",
    ],
  },
  {
    title: "18. Contact Us",
    blocks: [
      "If you have questions, concerns or requests relating to this Privacy Policy or the way Chatrizz processes personal information, please contact:",
      { sub: "Chatrizz Privacy Team" },
      {
        fields: [
          ["Website", SITE],
          ["Email", "info@chatrizz.co"],
          ["Address", "3 Akron Drive, Wolverhampton, WV10 6EG"],
        ],
      },
      "You may also contact the Nigeria Data Protection Commission through its official website: https://ndpc.gov.ng/",
    ],
  },
];

const PrivacyPolicy = () => (
  <LegalDocument
    title="Privacy Policy"
    effectiveDate="30 October 2026"
    lastUpdated="30 October 2026"
    sections={sections}
    tagline="Your people. Your city. Your community."
  />
);

export default PrivacyPolicy;
