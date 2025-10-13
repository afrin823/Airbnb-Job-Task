import FooterBottom from "./FooterBottom";
import { footerContent, footerData } from "./footerData";
import FooterLinkGroup from "./FooterLinkGroup";
import FooterTabs from "./FooterTabs";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200 w-full">
      {/*  top section */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-10">
        <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center sm:text-left">
          Inspiration for future getaways
        </h2>
        <FooterTabs footerContent={footerContent} />
      </div>

      <hr className="border-gray-200" />

      {/* --- Middle Section --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm">
        <FooterLinkGroup title="Support" links={footerData.support} />
        <FooterLinkGroup title="Hosting" links={footerData.hosting} />
        <FooterLinkGroup title="Airbnb" links={footerData.airbnb} />
      </div>

      {/* --- Bottom Section --- */}
      <FooterBottom />
    </footer>
  );
}
