"use client";

import LogoLink from "@/components/LogoLink";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronDown,
  ShieldCheck,
  FileText,
  Clock,
  ArrowRight,
  Pill,
  Tablets,
  Syringe,
  FlaskConical,
  Droplets,
  Package,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { PRODUCT_CATEGORIES } from "@/data/products";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import EnquiryModal from "./EnquiryModal";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products", hasMenu: true },
  { name: "Services", href: "/our-services" },
  { name: "Infrastructure", href: "/infrastructure" },
  { name: "Divisions", href: "/divisions" },
  { name: "Global Exports", href: "/exports" },
  { name: "Contact Us", href: "/contact" },
];

const DOSAGE_FORMS: {
  label: string;
  desc: string;
  count: string;
  icon: LucideIcon;
}[] = [
    {
      label: "Tablets & Dispersibles",
      desc: "Film-coated, SR, MR and dispersible tablets.",
      count: "120+ Brands",
      icon: Tablets,
    },
    {
      label: "Capsules & Pellets",
      desc: "Hard gelatin capsules and enteric pellets.",
      count: "65+ Brands",
      icon: Pill,
    },
    {
      label: "Softgel Formulations",
      desc: "Fast-absorbing softgels for higher bioavailability.",
      count: "35+ Brands",
      icon: Droplets,
    },
    {
      label: "Injectables & Lyophilized",
      desc: "Sterile vials, ampoules and lyophilized powders.",
      count: "40+ Brands",
      icon: Syringe,
    },
    {
      label: "Oral Liquids & Syrups",
      desc: "Syrups, suspensions and paediatric drops.",
      count: "55+ Brands",
      icon: FlaskConical,
    },
    {
      label: "Sachets & Dry Syrups",
      desc: "Ready-to-reconstitute powders and sachets.",
      count: "25+ Brands",
      icon: Package,
    },
  ];

const THERAPEUTIC_AREAS = PRODUCT_CATEGORIES.filter(
  (c) => c !== "All Categories",
).slice(0, 7);

export default function Header() {
  const pathname = usePathname();
  // Store the path the drawer was opened on so it auto-closes on navigation.
  const [menuOpenedAt, setMenuOpenedAt] = useState<string | null>(null);
  const mobileMenuOpen = menuOpenedAt === pathname;
  const setMobileMenuOpen = (open: boolean | ((o: boolean) => boolean)) => {
    const next = typeof open === "function" ? open(mobileMenuOpen) : open;
    setMenuOpenedAt(next ? pathname : null);
  };
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Collapse the info bar and tighten the nav once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full bg-white/95 backdrop-blur transition-shadow duration-300 supports-backdrop-filter:bg-white/85",
          scrolled ? "shadow-[0_8px_30px_rgba(15,118,110,0.10)]" : "shadow-xs",
        )}
      >
        {/* Top Info Bar */}
        <div
          className={cn(
            "grid overflow-hidden bg-slate-900 text-xs text-slate-200 transition-[grid-template-rows,opacity] duration-300",
            scrolled ? "grid-rows-[0fr] opacity-0" : "grid-rows-[1fr] opacity-100",
          )}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="border-b border-slate-800 px-4 py-2 sm:px-6 lg:px-8">
              <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4">
                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 md:justify-start">
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="flex items-center gap-1.5 transition-colors hover:text-white"
                  >
                    <Mail className="h-3.5 w-3.5 text-teal-400" />
                    <span>{COMPANY_INFO.email}</span>
                  </a>
                  <a
                    href={`tel:+${COMPANY_INFO.whatsapp}`}
                    className="flex items-center gap-1.5 transition-colors hover:text-white"
                  >
                    <Phone className="h-3.5 w-3.5 text-teal-400" />
                    <span>{COMPANY_INFO.phone}</span>
                  </a>
                  <div className="hidden items-center gap-1.5 text-slate-400 xl:flex">
                    <MapPin className="h-3.5 w-3.5 text-teal-400" />
                    <span>{COMPANY_INFO.address}</span>
                  </div>
                </div>

                <div className="hidden items-center gap-5 md:flex">
                  <div className="flex items-center gap-1.5 font-medium text-emerald-400">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    <span>WHO-GMP &amp; ISO 9001:2015 Accredited</span>
                  </div>
                  <div className="hidden items-center gap-1.5 text-slate-400 lg:flex">
                    <Clock className="h-3.5 w-3.5" />
                    <span>Mon - Sat: 9am - 6:30pm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div
            className={cn(
              "flex items-center justify-between gap-4 transition-[height] duration-300",
              scrolled ? "h-[64px]" : "h-[76px]",
            )}
          >
            {/* Logo */}
            <LogoLink className="group flex shrink-0 items-center gap-3">
              <div className="relative flex h-12 w-12 items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Incredible Medicare Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col leading-tight">
                <div className="flex items-center gap-1.5 whitespace-nowrap font-extrabold tracking-tight text-slate-900 transition-colors group-hover:text-teal-800 text-2xl sm:text-3xl">
                  <span>Incredible</span>
                  <span className="font-bold text-teal-700">Medicare</span>
                </div>
                <span className="hidden whitespace-nowrap text-[11px] font-semibold uppercase tracking-widest text-slate-500 2xl:block">
                  Pharma Formulations &amp; Healthcare
                </span>
              </div>
            </LogoLink>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden xl:flex">
              <NavigationMenuList>
                {NAV_LINKS.map((link) =>
                  link.hasMenu ? (
                    <NavigationMenuItem key={link.name}>
                      <NavigationMenuTrigger
                        data-active={isActive(link.href) ? "" : undefined}
                      >
                        {link.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="p-0">
                        <ProductsMegaMenu />
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={link.name}>
                      <NavigationMenuLink
                        asChild
                        active={isActive(link.href)}
                        className={navigationMenuTriggerStyle()}
                      >
                        <Link href={link.href}>{link.name}</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ),
                )}
              </NavigationMenuList>
            </NavigationMenu>

            {/* CTA */}
            <div className="hidden shrink-0 xl:flex">
              <button
                type="button"
                onClick={() => setEnquiryModalOpen(true)}
                className="btn-shine inline-flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-[4px] bg-[#0f766e] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#115e59] hover:shadow"
              >
                <FileText className="h-4 w-4" />
                <span className="2xl:hidden">Get Quote</span>
                <span className="hidden 2xl:inline">Request Quotation</span>
              </button>
            </div>

            {/* Mobile controls */}
            <div className="flex items-center gap-2 xl:hidden">
              <button
                type="button"
                onClick={() => setEnquiryModalOpen(true)}
                className="rounded-[4px] bg-[#0f766e] px-3 py-1.5 text-xs font-semibold text-white"
              >
                Quote
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen((o) => !o)}
                className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Certification strip, stays pinned under the nav */}
        <div className="relative overflow-hidden border-t border-white/10 bg-gradient-to-r from-[#0f2a3a] via-[#0b192c] to-[#1c1a17]">
          <div className="pointer-events-none absolute -left-24 -top-16 h-40 w-72 rounded-full bg-teal-500/20 blur-2xl" />
          <div className="pointer-events-none absolute -right-24 -top-16 h-40 w-72 rounded-full bg-amber-400/15 blur-2xl" />
          <div className="relative mx-auto flex max-w-[1440px] items-center justify-center gap-2 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-teal-300 sm:text-[11px] sm:tracking-[0.22em]">
            <Image src="/who.png" alt="WHO-GMP" width={541} height={462} className="h-9 w-auto shrink-0 object-contain sm:h-11" />
            <span>WHO-GMP &amp; ISO 9001:2015 Certified &middot; DCGI Cleared</span>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="max-h-[calc(100vh-7rem)] overflow-y-auto border-t border-slate-200 bg-white px-4 pb-6 pt-3 shadow-xl animate-in slide-in-from-top-2 duration-200 xl:hidden">
            <nav className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                const itemClass = cn(
                  "rounded-lg px-3 py-2.5 text-base font-semibold transition",
                  active
                    ? "bg-teal-50 font-bold text-teal-800"
                    : "text-slate-700 hover:bg-slate-50",
                );

                if (link.hasMenu) {
                  return (
                    <div key={link.name}>
                      <button
                        type="button"
                        onClick={() => setMobileProductsOpen((o) => !o)}
                        aria-expanded={mobileProductsOpen}
                        className={cn(
                          itemClass,
                          "flex w-full items-center justify-between",
                        )}
                      >
                        {link.name}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 text-slate-400 transition-transform",
                            mobileProductsOpen && "rotate-180",
                          )}
                        />
                      </button>
                      {mobileProductsOpen && (
                        <div className="ml-3 mt-1 space-y-0.5 border-l border-slate-200 pl-3">
                          {DOSAGE_FORMS.map((item) => (
                            <Link
                              key={item.label}
                              href="/products"
                              className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-800"
                            >
                              <span>{item.label}</span>
                              <span className="text-[11px] text-slate-400">
                                {item.count}
                              </span>
                            </Link>
                          ))}
                          <Link
                            href="/products"
                            className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-teal-700"
                          >
                            View complete catalog
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link key={link.name} href={link.href} className={itemClass}>
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-5 space-y-3 border-t border-slate-200 pt-5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setEnquiryModalOpen(true);
                }}
                className="flex w-full items-center justify-center gap-2 rounded-[4px] bg-[#0f766e] py-3 font-semibold text-white shadow-sm"
              >
                <FileText className="h-4 w-4" />
                <span>Request Quotation / Franchise Terms</span>
              </button>

              <div className="space-y-2 px-1 pt-1 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-teal-600" />
                  <a href={`mailto:${COMPANY_INFO.email}`}>
                    {COMPANY_INFO.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-teal-600" />
                  <a href={`tel:+${COMPANY_INFO.whatsapp}`}>
                    {COMPANY_INFO.phone}
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
                  <span>{COMPANY_INFO.address}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
      />
    </>
  );
}

function ProductsMegaMenu() {
  return (
    <div className="grid w-[860px] grid-cols-3 divide-x divide-slate-100">
      <div className="col-span-2 p-4 pr-3">
        <h6 className="pl-2.5 text-xs font-bold uppercase tracking-wider text-slate-400">
          Browse Dosage Forms
        </h6>
        <ul className="mt-2.5 grid grid-cols-2 gap-1.5">
          {DOSAGE_FORMS.map(({ label, desc, count, icon: Icon }) => (
            <li key={label}>
              <NavigationMenuLink asChild>
                <Link
                  href="/products"
                  className="group/item flex gap-3 rounded-lg p-3 no-underline outline-hidden transition-colors hover:bg-teal-50 focus:bg-teal-50"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center text-teal-700">
                    <Icon className="h-[18px] w-[18px]" />
                  </span>
                  <span className="min-w-0">
                    <span className="flex items-center justify-between gap-2 text-sm font-semibold text-slate-900">
                      {label}
                    </span>
                    <span className="mt-1 block text-xs leading-snug text-slate-500">
                      {desc}
                    </span>
                    <span className="mt-1.5 block text-[11px] font-semibold text-teal-700">
                      {count}
                    </span>
                  </span>
                </Link>
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col bg-slate-50/60 p-4 pl-5">
        <h6 className="text-xs font-bold uppercase tracking-wider text-slate-400">
          Therapeutic Areas
        </h6>
        <ul className="mt-2.5 space-y-0.5">
          {THERAPEUTIC_AREAS.map((area) => (
            <li key={area}>
              <NavigationMenuLink asChild>
                <Link
                  href="/products"
                  className="block rounded-md px-2 py-1.5 text-[13px] font-medium text-slate-700 no-underline outline-hidden transition-colors hover:bg-white hover:text-teal-800 focus:bg-white"
                >
                  {area}
                </Link>
              </NavigationMenuLink>
            </li>
          ))}
        </ul>

        <NavigationMenuLink asChild>
          <Link
            href="/products"
            className="mt-auto flex items-center justify-between gap-2 rounded-[4px] bg-[#0f766e] px-3.5 py-3 text-sm font-semibold text-white no-underline outline-hidden transition-colors hover:bg-[#115e59] focus:bg-[#115e59]"
          >
            <span className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              Full Catalog (650+)
            </span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </NavigationMenuLink>
      </div>
    </div>
  );
}
