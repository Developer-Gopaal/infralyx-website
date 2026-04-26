"use client";

import { navigationLinks } from "@/lib/content";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { GlassAnchorButton, GlassLinkButton } from "./ui";
import { LogoMark } from "./icons";

const callHref = "tel:+917998576009";

function MenuGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 7.5h14M5 12h14M5 16.5h14" strokeLinecap="round" />
    </svg>
  );
}

function CloseGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
    </svg>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 80], [0, 10]);

  return (
    <motion.header style={{ y }} className="sticky top-0 z-50 px-3 pt-3 sm:px-4 lg:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-slate-950/55 px-4 py-3 shadow-[0_18px_50px_rgba(2,8,23,0.26)] backdrop-blur-2xl backdrop-saturate-150 sm:px-5">
        <Link href="#top" className="flex items-center gap-3">
          <LogoMark className="h-9 w-9 drop-shadow-[0_8px_20px_rgba(59,130,246,0.24)]" />
          <div className="leading-none">
            <div className="text-[15px] font-semibold tracking-[-0.04em] text-white sm:text-[17px]">Infralyx</div>
            <div className="text-[11px] uppercase tracking-[0.32em] text-white/50">Technologies</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navigationLinks.slice(0, 4).map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-white/72 transition hover:bg-white/8 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <GlassAnchorButton href={callHref} tone="secondary" className="px-4 py-2.5 text-sm">
            +91 7998576009
          </GlassAnchorButton>
          <GlassLinkButton href="#book" className="px-4 py-2.5 text-sm">
            Book Repair
          </GlassLinkButton>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <GlassAnchorButton href={callHref} tone="secondary" className="px-3 py-2 text-xs">
            Call
          </GlassAnchorButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white transition hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <CloseGlyph className="h-5 w-5" /> : <MenuGlyph className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "mx-auto mt-3 max-w-7xl overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/80 px-3 shadow-glass backdrop-blur-2xl transition-all duration-300 md:hidden",
          open ? "max-h-96 py-3 opacity-100" : "max-h-0 py-0 opacity-0"
        )}
      >
        <div className="grid gap-2 pb-3 pt-1">
          {navigationLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm text-white/80 transition hover:bg-white/8 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <GlassAnchorButton href={callHref} tone="secondary" className="w-full justify-center">
            Call +91 7998576009
          </GlassAnchorButton>
          <GlassLinkButton href="#book" className="mt-1 w-full" tone="primary">
            Book Repair
          </GlassLinkButton>
        </div>
      </div>
    </motion.header>
  );
}
