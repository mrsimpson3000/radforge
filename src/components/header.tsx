import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
    const router = useRouter();
    const currentPath = router.pathname;
    const isActive = (path: string) =>
    currentPath === path ? "text-[#707070]" : "text-white";
  return (
    <header className="bg-[#002D9C] text-white">
      <div className=" w-[90%] mx-auto px-4 py-10 flex items-start justify-around">

        {/* Left: Logo + tagline */}
        <div className="flex flex-col leading-tight">
          <Link href="/" className="text-yellow-400 text-[42px] font-bold leading-none">
            RAD
          </Link>
          <span className="text-[11px] text-white tracking-wide">
            SEO | PPC | WEB DESIGN | SOCIAL
          </span>
        </div>

        {/* Center: Nav */}
        <nav className="flex-1 hidden lg:flex justify-center items-center gap-6 text-sm font-bold uppercase tracking-wide">
          <Link href="/" className={`${isActive("/")} transition-colors duration-200 hover:text-[#707070] no-underline`}>Home</Link>
          <Link href="/services" className={`${isActive("/services")} transition-colors duration-200 hover:text-[#707070] no-underline`}>Services</Link>
          <Link href="/testimonials" className="hover:underline">Testimonials</Link>
          <Link href="/resources" className="hover:underline">Resources</Link>
          <Link href="/about-us" className="hover:underline">About Us</Link>
          <Link href="/apply" className="hover:underline">Apply</Link>
          <Link href="/blog" className="hover:underline">Blog</Link>
          <Link href="/contact" className="hover:underline">Contact Us</Link>
        </nav>

        {/* Right: Phone CTA */}
        <div className="hidden lg:flex flex-col items-end leading-tight">
          <span className="text-[14px] uppercase font-medium">Call Now & Schedule Today</span>
          <a href="tel:+18669688171" className="text-white text-[30px] font-extrabold tracking-wide">
            866-968-8171
          </a>
        </div>

      </div>
    </header>
  );
}

