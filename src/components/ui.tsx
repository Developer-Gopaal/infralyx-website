import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ButtonHTMLAttributes, HTMLAttributes, PropsWithChildren } from "react";

export function GlassPanel({ className, children }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return <div className={cn("glass-panel rounded-[28px]", className)}>{children}</div>;
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  tone?: "primary" | "secondary";
};

export function GlassButton({ className, tone = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "group inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium tracking-tight transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-60",
        tone === "primary"
          ? "bg-gradient-to-r from-brand-400 via-cyan-400 to-sky-500 text-slate-950 shadow-[0_14px_30px_rgba(56,189,248,0.35)] hover:-translate-y-0.5 hover:shadow-glow"
          : "glass-panel text-white hover:-translate-y-0.5 hover:border-white/20",
        className
      )}
      {...props}
    />
  );
}

type LinkButtonProps = PropsWithChildren<{
  href: string;
  tone?: "primary" | "secondary";
  className?: string;
}>;

export function GlassLinkButton({ href, tone = "primary", className, children }: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium tracking-tight transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
        tone === "primary"
          ? "bg-gradient-to-r from-brand-400 via-cyan-400 to-sky-500 text-slate-950 shadow-[0_14px_30px_rgba(56,189,248,0.35)] hover:-translate-y-0.5 hover:shadow-glow"
          : "glass-panel text-white hover:-translate-y-0.5 hover:border-white/20",
        className
      )}
    >
      {children}
    </Link>
  );
}

type AnchorButtonProps = PropsWithChildren<{
  href: string;
  tone?: "primary" | "secondary";
  className?: string;
  target?: string;
  rel?: string;
}>;

export function GlassAnchorButton({ href, tone = "primary", className, target, rel, children }: AnchorButtonProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={cn(
        "group inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium tracking-tight transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
        tone === "primary"
          ? "bg-gradient-to-r from-brand-400 via-cyan-400 to-sky-500 text-slate-950 shadow-[0_14px_30px_rgba(56,189,248,0.35)] hover:-translate-y-0.5 hover:shadow-glow"
          : "glass-panel text-white hover:-translate-y-0.5 hover:border-white/20",
        className
      )}
    >
      {children}
    </a>
  );
}
