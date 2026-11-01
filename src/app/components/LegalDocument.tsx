import type { ReactNode } from "react";

// Content blocks: a string is a paragraph, { list } is a bullet list,
// { numbered } is a numbered list of bold label + text, { sub } is a
// sub-heading, { fields } is a bold label/value group.
export type Block =
  | string
  | { list: string[] }
  | { numbered: [string, string][] }
  | { sub: string }
  | { fields: [string, string][] };

export type Section = { title: string; blocks: Block[] };

const linkClass =
  "text-cyan-400 hover:text-cyan-300 underline transition-colors break-all";

const emailPattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

// Turns any https:// URL or email address inside a string into a link.
const withLinks = (text: string): ReactNode =>
  text
    .split(/(https?:\/\/[^\s]+|[^\s@]+@[^\s@]+\.[a-z]{2,})/gi)
    .map((part, i) => {
      if (/^https?:\/\//.test(part))
        return (
          <a key={i} href={part} className={linkClass}>
            {part}
          </a>
        );
      if (emailPattern.test(part))
        return (
          <a key={i} href={`mailto:${part}`} className={linkClass}>
            {part}
          </a>
        );
      return part;
    });

const renderBlock = (block: Block, i: number) => {
  if (typeof block === "string") return <p key={i}>{withLinks(block)}</p>;
  if ("sub" in block)
    return (
      <h3 key={i} className="text-white font-semibold pt-2">
        {block.sub}
      </h3>
    );
  if ("list" in block)
    return (
      <ul key={i} className="list-disc pl-5 space-y-1">
        {block.list.map((item) => (
          <li key={item}>{withLinks(item)}</li>
        ))}
      </ul>
    );
  if ("numbered" in block)
    return (
      <ol key={i} className="list-decimal pl-5 space-y-1">
        {block.numbered.map(([label, text]) => (
          <li key={label}>
            <span className="font-semibold text-white">{label}:</span> {text}
          </li>
        ))}
      </ol>
    );
  return (
    <div key={i} className="space-y-1">
      {block.fields.map(([label, value]) => (
        <p key={label}>
          <span className="font-semibold text-white">{label}:</span>{" "}
          {withLinks(value)}
        </p>
      ))}
    </div>
  );
};

type Props = {
  title: string;
  effectiveDate: string;
  lastUpdated: string;
  sections: Section[];
  tagline: string;
};

const LegalDocument = ({
  title,
  effectiveDate,
  lastUpdated,
  sections,
  tagline,
}: Props) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 md:p-8">
      <div className="max-w-5xl  mx-auto">
        {/* Header Card */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-6 md:p-8 shadow-xl mb-6">
          <h1 className="text-white text-2xl md:text-3xl font-bold mb-2">
            {title}
          </h1>
          <p className="text-cyan-50 text-sm md:text-base">
            Effective Date: {effectiveDate}
          </p>
          <p className="text-cyan-50 text-sm md:text-base">
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* Document Content */}
        <div className="bg-slate-800/50 backdrop-blur rounded-xl p-5 md:p-6 shadow-lg border border-slate-700/50">
          <div className="space-y-8 text-slate-300 text-sm md:text-base leading-relaxed">
            {sections.map((section) => (
              <section key={section.title} className="space-y-3">
                <h2 className="text-cyan-400 font-semibold text-base md:text-lg">
                  {section.title}
                </h2>
                {section.blocks.map(renderBlock)}
              </section>
            ))}
          </div>
        </div>

        {/* Sign-off */}
        <div className="text-center py-10 space-y-2">
          <p className="text-white text-xl font-bold tracking-wide">CHATRIZZ</p>
          <p className="text-cyan-400 font-semibold">Meet. Vibe. Hustle.</p>
          <p className="text-slate-400 text-sm">{tagline}</p>
        </div>
      </div>
    </div>
  );
};

export default LegalDocument;
