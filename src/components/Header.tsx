import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/#tours", label: "Tours" },
  { href: "/#packages", label: "Packages" },
  { href: "/#custom-tour", label: "Build Your Trip" },
  { href: "/#about", label: "Our Guide" },
  { href: "/#reviews", label: "Reviews" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-5 md:px-10 lg:px-20 bg-cream/92 backdrop-blur-md border-b border-deep-green/12">
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/images/ecutrek-logo.png"
          alt="EcuTrek"
          width={40}
          height={40}
          className="h-10 w-10 rounded-full"
          priority
        />
        <span className="font-brand text-sm tracking-wide text-deep-green">
          EcuTrek
        </span>
      </Link>
      <nav className="hidden items-center gap-8 md:flex">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[15px] font-medium text-ink hover:text-accent-dark"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/#custom-tour"
          className="rounded-lg bg-accent-btn px-[22px] py-[11px] text-sm font-medium tracking-wide text-white"
        >
          Build Your Own Trip
        </Link>
      </nav>
      <Link
        href="/#custom-tour"
        className="rounded-lg bg-accent-btn px-4 py-2 text-sm font-medium text-white md:hidden"
      >
        Build Your Own Trip
      </Link>
    </header>
  );
}
