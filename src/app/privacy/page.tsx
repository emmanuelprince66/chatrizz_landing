import type { Metadata } from "next";
import PrivacyPolicy from "./Privacy";

export const metadata: Metadata = {
  title: "Privacy Policy | Chatrizz",
  description:
    "How Chatrizz collects, uses, stores, protects and shares your personal information.",
};

const page = () => {
  return (
    <>
      <PrivacyPolicy />
    </>
  );
};

export default page;
