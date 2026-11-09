import LegalDocument, { type Section } from "../components/LegalDocument";

const sections: Section[] = [
  {
    blocks: [
      "Chatrizz has zero tolerance for child sexual abuse and exploitation (CSAE), including child sexual abuse material (CSAM). This page sets out the standards we hold everyone on Chatrizz to, and what we do when those standards are broken.",
    ],
  },
  {
    title: "Who can use Chatrizz",
    blocks: [
      "Chatrizz is for people aged [MINIMUM AGE] and over. Accounts we find belong to someone under that age are removed.",
    ],
  },
  {
    title: "What is prohibited",
    blocks: [
      "On Chatrizz, in posts, comments, chats, group chats, profiles, marketplace listings and calls, you may not:",
      {
        list: [
          "Create, share, request or link to child sexual abuse material of any kind, including drawn, edited or AI-generated content.",
          "Sexualise minors in any way, including comments, captions or emojis.",
          "Groom a minor: contact a minor to build trust for sexual purposes, or ask a minor for sexual images, conversations or meetings.",
          "Sextort anyone: threaten or blackmail a minor using intimate images.",
          "Traffic, advertise or sell minors for sexual purposes, or offer content or services that do.",
          "Use Chatrizz to arrange contact with a minor for sexual purposes, on or off the app.",
        ],
      },
    ],
  },
  {
    title: "How to report",
    blocks: [
      {
        list: [
          "**In the app:** open the ⋯ menu on a post, choose **Report** and select a reason. Reports are anonymous. You can also block any user from their profile or from Settings → Blocked users.",
          "**By email:** send details (the username, a link to the post or a description, and when it happened) to **info@chatrizz.co**.",
          "**If a child is in immediate danger,** contact your local police first.",
        ],
      },
      "Do not download, screenshot or forward suspected abuse material, even to report it. Report the content or the account and we will preserve what is needed.",
    ],
  },
  {
    title: "What we do",
    blocks: [
      "When we become aware of suspected CSAE or CSAM, we:",
      {
        steps: [
          "Remove the content and disable the accounts involved.",
          "Preserve the relevant records as the law requires.",
          "Report it to the appropriate authorities, including the National Center for Missing & Exploited Children (NCMEC) CyberTipline and the relevant law enforcement agencies in the countries involved. In Nigeria, that includes the National Agency for the Prohibition of Trafficking in Persons (NAPTIP) and the Nigeria Police Force.",
          "Cooperate with law enforcement requests.",
        ],
      },
      "We prioritise reports about child safety above all others.",
    ],
  },
  {
    title: "Compliance",
    blocks: [
      "Chatrizz complies with applicable child safety laws in the countries where it operates and with Google Play's Child Safety Standards policy.",
    ],
  },
  {
    title: "Contact",
    blocks: [
      "Our child safety point of contact can be reached at **info@chatrizz.co**.",
      "Chatrizz Ltd, 3 Akron Drive, Wolverhampton, WV10 6EG",
    ],
  },
];

const ChildSafety = () => (
  <LegalDocument
    title="Chatrizz Child Safety Standards"
    lastUpdated="9 November 2026"
    sections={sections}
    tagline="Your people. Your city. Your community."
  />
);

export default ChildSafety;
