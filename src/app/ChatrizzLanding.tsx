import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function ChatrizzLanding() {
  return (
    <div className="w-full min-h-screen h-full bg-[#02141c]">
      <div className="text-white md:w-[70%] w-[99%] mx-auto">
        {/* Header */}
        <header className="flex items-center justify-between px-2 sm:px-6 py-4 mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-full h-full rounded-lg flex items-center justify-center">
              <Image src="/assets/n1.png" alt="Logo" width={32} height={32} />
            </div>
            <p className="text-2xl font-cabinet">
              <span className="font-[600]">Chat</span>rizz
            </p>
          </div>
          <button className="bg-gradient-to-r cursor-pointer from-[#00d0f5] to-[#0892d0] text-[#fafafa] px-4 sm:px-6 py-2 sm:py-4 flex justify-center items-center rounded-full font-inter font-medium hover:opacity-90 transition-opacity">
            Download App
          </button>
        </header>

        {/* Hero Section with Background Pattern */}
        <div className="relative">
          {/* Background Pattern - Full Width & Height */}
          <div className="absolute  w-full h-full ">
            <Image
              src="/assets/hero_pattern.png"
              alt="Background Pattern"
              height={1000}
              width={2000}
              className="object-cover"
            />
          </div>

          {/* Hero Content */}
          <section className="px-2 sm:px-6 pt-16 pb-4 w-full mx-auto mt-16 relative z-10">
            <div className="grid grid-cols-1 gap-12 items-center justify-center">
              <div className="flex flex-col mx-auto text-center items-center justify-center">
                <p className="text-5xl gradient-text-hero font-[600] font-work-sans lg:text-7xl font-cabinet font-bold leading-tight mb-6">
                  Meet. Vibe. Hustle.
                </p>
                <span className="text-[#0892d0] mx-auto text-5xl lg:text-7xl font-[600]">
                  All in one Tap.
                </span>
                <p className="text-[16px] font-inter font-[400] md:max-w-[500px] text-gray-300 mt-5 leading-relaxed">
                  Your people, your city, your community. ChatRizz brings the
                  streets, the stories, and the side hustles straight to your
                  feed.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-5">
                  <button className="bg-gradient-to-r cursor-pointer from-[#00d0f5] to-[#0892d0] text-[#fafafa] px-8 py-3 rounded-full font-inter font-medium hover:opacity-90 transition-opacity">
                    Download App
                  </button>
                  <button className="text-[#00d0f5] cursor-pointer px-8 py-3 rounded-full border border-[#00d0f5] hover:bg-gradient-to-r hover:from-[#00d0f5] hover:to-[#0892d0] hover:text-[#fafafa] transition-all flex items-center justify-center gap-2 font-inter font-medium group">
                    Explore Features
                    <ArrowRight className="w-4 h-4 transform transition-transform ease-in-out group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
              <div className="flex justify-center w-full">
                <Image
                  src={"/assets/hero_main.png"}
                  alt="Hero"
                  height={1200}
                  width={1200}
                  className=""
                />
              </div>
            </div>
          </section>

          {/* What is Chatrizz Section */}
          <section className="px-2 sm:px-6 w-full mx-auto mt-2 lg:-mt-8 relative z-10">
            <div className="text-center mb-12">
              {/* <p className="text-[#00d0f5] font-inter bg-[#03212E] px-3 py-2 w-fit mx-auto rounded-full text-sm font-medium mb-4">
                What is Chatrizz?
              </p> */}
              <h2 className="text-4xl font-work-sans gradient-text-hero text-[30px] font-[500] mb-6">
                More Than Just Social. It's Local.
              </h2>
              <p className="text-gray-300 font-inter w-full mx-auto leading-relaxed md:w-2/3">
                Chatrizz helps you connect with people around you based on
                shared interests, location, and good vibes. Post, chat, promote
                your business, or drop a little rizz — it's all in one place.
              </p>
            </div>

            <div className="flex justify-center mt-10 w-full">
              <Image
                src={"/assets/main_one.png"}
                alt="Hero"
                height={1000}
                width={1000}
                className=""
              />
            </div>

            {/* add it here */}

            <div className="w-full mt-12 md:mt-16 flex items-center justify-center">
              <div className="max-w-7xl w-full  p-3 rounded-2xl bg-[#022732] ">
                {/* Grid Container - Mobile: 1 col, Desktop: 3 cols */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                  {/* COLUMN 1 - 3 rows (short, tall, short) */}
                  <div className="flex flex-col gap-4 sm:gap-6">
                    {/* Card 1 - Short */}
                    <Image
                      src={"/assets/reel_four.png"}
                      alt="Hero"
                      height={1000}
                      width={1000}
                      className=""
                    />

                    {/* Card 2 - Tall (Middle) */}
                    <Image
                      src={"/assets/reel_two.png"}
                      alt="Hero"
                      height={1000}
                      width={1000}
                      className=""
                    />

                    {/* Card 3 - Short */}
                    <Image
                      src={"/assets/reel_three.png"}
                      alt="Hero"
                      height={1000}
                      width={1000}
                      className="hidden lg:block h-[206px] w-full"
                    />
                  </div>

                  {/* COLUMN 2 - 2 rows (same height) */}
                  <div className="flex flex-col gap-4 sm:gap-6">
                    {/* Card 4 - Top */}
                    <Image
                      src={"/assets/reel_one.png"}
                      alt="Hero"
                      height={1000}
                      width={1000}
                      className=""
                    />

                    {/* Card 5 - Bottom */}
                    <Image
                      src={"/assets/reel_five.png"}
                      alt="Hero"
                      height={1000}
                      width={1000}
                      className=""
                    />
                  </div>

                  {/* COLUMN 3 - 3 rows (small, tall, tall) */}
                  <div className="flex flex-col gap-4 sm:gap-6">
                    {/* Card 6 - Small */}

                    <Image
                      src={"/assets/reel_three.png"}
                      alt="Hero"
                      height={100}
                      width={100}
                      className="hidden lg:block h-[99px] w-full"
                    />

                    {/* Card 7 - Tall */}
                    <Image
                      src={"/assets/reel_six.png"}
                      alt="Hero"
                      height={1000}
                      width={1000}
                      className=""
                    />

                    {/* Card 8 - Tall */}
                    <Image
                      src={"/assets/reel_seven.png"}
                      alt="Hero"
                      height={1000}
                      width={1000}
                      className=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Who's it for Section */}
        <section className="px-2 sm:px-6 py-16 mx-auto">
          <div className="text-center mb-12">
            {/* <p className="text-[#00d0f5] font-inter bg-[#03212E] px-3 py-2 w-fit mx-auto rounded-full text-sm font-medium mb-4">
              Who's it for?
            </p> */}

            <h2 className="text-4xl font-work-sans gradient-text-hero text-[30px] font-[500] mb-6">
              Start selling beyond borders
            </h2>

            <p className="text-gray-300 font-inter w-full mx-auto leading-relaxed md:w-2/3">
              Create a store that helps you find customers from anywhere in the
              world and grow your business.
            </p>
          </div>
          <div className="bg-[#00D0F51A] w-full rounded-2xl px-1 py-3 sm:px-10 sm:py-6 md:py-10 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center px-2 sm:px-6">
              <div className="flex flex-col gap-4 items-center lg:items-start ">
                <p className="font-work-sans text-[28px] md:text-[40px] lg:text-[36px] xl:text-[40px] font-[500] leading-tight text-center lg:text-left text-white">
                  Discover Products & Services
                </p>
                <p className="font-inter text-[15px] font-[400] text-white text-center lg:text-left">
                  Find what’s trending in your area
                </p>

                <button className="bg-gradient-to-r w-fit cursor-pointer from-[#00d0f5] to-[#0892d0] text-[#fafafa] px-8 py-3 rounded-full font-inter font-medium hover:opacity-90 transition-opacity">
                  Get Started
                </button>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="w-80 h-80 sm:w-96 sm:h-96  overflow-hidden">
                  <Image
                    src="/assets/s-one.png"
                    alt="Person using Chatrizz app"
                    height={500}
                    width={500}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="px-2 sm:px-6 py-16 max-w-full mx-auto">
          <div className="rounded-3xl border-[3px] border-[#00CEF2] bg-gradient-to-b from-[#021A23] to-[#017086] px-6 md:px-16 py-10 sm:py-14 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-work-sans font-semibold mb-3 text-white">
              Start Vibing Today.
            </h2>
            <p className="text-sm sm:text-lg font-inter mb-8 text-white/90">
              Available on Android (iOS coming soon)
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-6">
                {/* Google Play Button */}
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-3 w-[180px] h-[60px] bg-black text-white rounded-xl border border-[#A6A6A6] transition-transform hover:scale-105"
                  style={{ backgroundColor: "#000000" }}
                >
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92z"
                      fill="url(#a)"
                    />
                    <path
                      d="m13.792 12-2.72 2.72 3.048 3.048 5.16-2.94a1.001 1.001 0 0 0 0-1.656l-5.16-2.94-3.048 3.048L13.792 12z"
                      fill="url(#b)"
                    />
                    <path
                      d="M14.12 12.28L3.609 1.814 17.28 9.112l-3.16 1.8 3.16 1.8-3.16 1.8z"
                      fill="url(#c)"
                    />
                    <path
                      d="m14.12 11.72 3.16-1.8L3.61 1.814l10.51 9.906z"
                      fill="url(#d)"
                    />
                    <defs>
                      <linearGradient
                        id="a"
                        x1="9.867"
                        y1="3.903"
                        x2="-1.758"
                        y2="15.528"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#00D3FF" />
                        <stop offset="1" stopColor="#0075FF" />
                      </linearGradient>
                      <linearGradient
                        id="b"
                        x1="18.445"
                        y1="12"
                        x2="2.556"
                        y2="12"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FFE000" />
                        <stop offset="1" stopColor="#FFBD00" />
                      </linearGradient>
                      <linearGradient
                        id="c"
                        x1="11.827"
                        y1="5.574"
                        x2="1.267"
                        y2="16.134"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FF4141" />
                        <stop offset="1" stopColor="#C50000" />
                      </linearGradient>
                      <linearGradient
                        id="d"
                        x1="-0.149"
                        y1="23.228"
                        x2="8.447"
                        y2="14.632"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#00F076" />
                        <stop offset="1" stopColor="#00AD5A" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="text-left leading-tight">
                    <p className="text-xs">GET IT ON</p>
                    <p className="text-xl font-medium">Google Play</p>
                  </div>
                </a>

                {/* App Store Button */}
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-3 w-[180px] h-[60px] bg-black text-white rounded-xl border border-[#A6A6A6] transition-transform hover:scale-105"
                  style={{ backgroundColor: "#000000" }}
                >
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  <div className="text-left leading-tight">
                    <p className="text-xs">Download on the</p>
                    <p className="text-xl font-medium">App Store</p>
                  </div>
                </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 text-white py-12 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {/* Column 1 - Logo and Description */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-full h-full rounded-lg flex items-center gap-2">
                    <Image
                      src="/assets/n1.png"
                      alt="Logo"
                      width={32}
                      height={32}
                      className="-ml-2"
                    />
                    <p className="text-2xl font-cabinet">
                      <span className="font-[600]">Chat</span>rizz
                    </p>
                  </div>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  Meet new people, growing your vibe, and promoting your hustle
                  all happens in one tap.
                </p>
              </div>

              {/* Column 2 - Company Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold font-cabinet">Company</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/terms"
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/child-safety"
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      Child Safety Standards
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3 - Contact Info */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold font-cabinet">
                  Contact Info
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm">
                    <svg
                      className="w-4 h-4 flex-shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <a
                      href="mailto:info@chatrizz.co"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      info@chatrizz.co
                    </a>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <svg
                      className="w-4 h-4 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className="text-white/70">3 Akron Drive, Wolverhampton, WV10 6EG</span>
                  </li>
                </ul>

                {/* Social Media Icons */}
                <div className="flex gap-3 pt-2">
                  {/* Facebook */}
                  <a
                    href="#"
                    className="w-9 h-9 bg-[#0A3540] hover:bg-[#00D0F5] rounded-lg flex items-center justify-center transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>

                  {/* X (Twitter) */}
                  <a
                    href="#"
                    className="w-9 h-9 bg-[#0A3540] hover:bg-[#00D0F5] rounded-lg flex items-center justify-center transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="#"
                    className="w-9 h-9 bg-[#0A3540] hover:bg-[#00D0F5] rounded-lg flex items-center justify-center transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="#"
                    className="w-9 h-9 bg-[#0A3540] hover:bg-[#00D0F5] rounded-lg flex items-center justify-center transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="#"
                    className="w-9 h-9 bg-[#0A3540] hover:bg-[#00D0F5] rounded-lg flex items-center justify-center transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-12 pt-8 border-t border-white/10 text-center">
              <p className="text-white/60 text-sm">Copyright © Chatrizz {new Date().getFullYear()}</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
