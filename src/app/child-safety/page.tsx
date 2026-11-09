import type { Metadata } from "next";
import ChildSafety from "./ChildSafety";

export const metadata: Metadata = {
  title: "Child Safety Standards | Chatrizz",
  description:
    "Chatrizz's standards against child sexual abuse and exploitation, how to report it, and what we do when we receive a report.",
};

const page = () => {
  return (
    <>
      <ChildSafety />
    </>
  );
};

export default page;
