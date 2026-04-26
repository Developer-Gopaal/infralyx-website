"use client";

import { BookingForm } from "@/components/booking-form";
import { ArrowRightIcon, BatteryIcon, ChipIcon, ClockIcon, HomeIcon, MessageIcon, PhoneIcon, ScreenIcon, ShieldIcon, SparkIcon } from "@/components/icons";
import { deviceItems, processSteps, serviceItems, testimonials, whyChooseItems } from "@/lib/content";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteHeader } from "./site-header";
import { GlassAnchorButton, GlassLinkButton, GlassPanel } from "./ui";

const whatsappHref =
  "https://wa.me/919903334513?text=Hello%20Infralyx%20Technologies%2C%20I%20need%20a%20mobile%20repair%20service";
const callHref = "tel:+917998576009";

const heroStats = [
  { value: "24-48h", label: "Fast turnaround" },
  { value: "4.9/5", label: "Average satisfaction" },
  { value: "Doorstep", label: "Home repair service" }
];

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function HomePage() {
  const reduceMotion = useReducedMotion();

  return (
    <div id="top" className="relative overflow-hidden">
      <SiteHeader />

      <main className="mx-auto flex max-w-7xl flex-col gap-20 px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:gap-24 lg:pb-28 lg:pt-12">
        <section className="relative">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-400/18 blur-3xl" />
            <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-indigo-500/18 blur-3xl" />
            <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-sky-400/10 blur-3xl" />
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-10">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs font-medium tracking-[0.28em] text-white/60 backdrop-blur-xl">
                <SparkIcon className="h-4 w-4 text-cyan-300" />
                PREMIUM MOBILE REPAIR
              </div>

              <div className="space-y-4">
                <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl lg:text-7xl">
                  Fast & Reliable Mobile Repair at Your Doorstep
                </h1>
                <p className="max-w-2xl text-pretty text-base leading-7 text-white/72 sm:text-lg">
                  Infralyx Technologies delivers premium screen repair, battery replacement, and software troubleshooting for iPhone,
                  Samsung flagship, and Android devices with the polish of a modern Apple-style experience.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <GlassAnchorButton href={whatsappHref} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                  <MessageIcon className="mr-2 h-4 w-4" />
                  WhatsApp Booking
                </GlassAnchorButton>
                <GlassAnchorButton href={callHref} tone="secondary" className="w-full sm:w-auto">
                  <PhoneIcon className="mr-2 h-4 w-4" />
                  Call Now
                </GlassAnchorButton>
                <GlassLinkButton href="#services" tone="secondary" className="w-full sm:w-auto">
                  Explore Services
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </GlassLinkButton>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <GlassPanel key={stat.label} className="p-4">
                    <div className="text-2xl font-semibold tracking-[-0.04em] text-white">{stat.value}</div>
                    <div className="mt-1 text-sm text-white/60">{stat.label}</div>
                  </GlassPanel>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <GlassPanel className="relative overflow-hidden p-5 sm:p-6 lg:p-7">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(76,195,255,0.22),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.16),transparent_26%)]" />
                <div className="relative grid gap-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm uppercase tracking-[0.28em] text-white/50">Luxury Service Experience</div>
                      <div className="mt-1 text-xl font-semibold text-white">Book in minutes, repair at your door.</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/8 px-3 py-2 text-xs text-white/72 backdrop-blur-xl">
                      Live support
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <GlassPanel className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="rounded-2xl bg-cyan-400/15 p-3 text-cyan-200">
                          <ScreenIcon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">Screen Repair</div>
                          <div className="text-xs text-white/54">Curved display expertise</div>
                        </div>
                      </div>
                    </GlassPanel>
                    <GlassPanel className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="rounded-2xl bg-cyan-400/15 p-3 text-cyan-200">
                          <BatteryIcon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">Battery Health</div>
                          <div className="text-xs text-white/54">Reliable replacement parts</div>
                        </div>
                      </div>
                    </GlassPanel>
                  </div>

                  <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/55 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_40%)]" />
                    <div className="relative flex items-end justify-between gap-4">
                      <div>
                        <div className="text-xs uppercase tracking-[0.3em] text-white/45">Supported devices</div>
                        <div className="mt-2 text-3xl font-semibold tracking-[-0.06em] text-white">iPhone • Samsung • Android</div>
                        <p className="mt-2 max-w-sm text-sm leading-6 text-white/60">
                          Premium repair coverage for flagship, mid-range, and budget devices with doorstep convenience.
                        </p>
                      </div>
                      <div className="hidden h-28 w-28 rounded-full border border-cyan-300/18 bg-[radial-gradient(circle,rgba(76,195,255,0.42),rgba(76,195,255,0.06)_60%,transparent_70%)] sm:block" />
                    </div>
                  </div>
                </div>
              </GlassPanel>
            </motion.div>
          </div>
        </section>

        <SectionShell id="services" eyebrow="SERVICES" title="Everything your device needs, wrapped in a premium service experience." description="Repair offers that feel fast, transparent, and trustworthy across the most common mobile failure points.">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {serviceItems.map((item, index) => (
              <motion.article
                key={item.title}
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.28 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <GlassPanel className="h-full p-5 transition duration-200 hover:-translate-y-1 hover:border-white/18">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/8 text-cyan-200">
                    {item.icon === "screen" ? <ScreenIcon className="h-5 w-5" /> : null}
                    {item.icon === "battery" ? <BatteryIcon className="h-5 w-5" /> : null}
                    {item.icon === "software" ? <ChipIcon className="h-5 w-5" /> : null}
                    {item.icon === "home" ? <HomeIcon className="h-5 w-5" /> : null}
                  </div>
                  <h3 className="text-lg font-semibold tracking-[-0.03em] text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/66">{item.description}</p>
                </GlassPanel>
              </motion.article>
            ))}
          </div>
        </SectionShell>

        <SectionShell id="devices" eyebrow="SUPPORTED DEVICES" title="Built for iPhone, Samsung, and the Android devices people actually use every day." description="We cover flagship experiences and value-tier Android phones without changing the premium standard of service.">
          <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
            <GlassPanel className="p-5 sm:p-6 lg:p-7">
              <div className="grid gap-4 sm:grid-cols-3">
                {deviceItems.map((device, index) => (
                  <motion.div
                    key={device.title}
                    initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                  >
                    <div className="rounded-[24px] border border-white/10 bg-white/7 p-5">
                      <div className="text-xl font-semibold tracking-[-0.04em] text-white">{device.title}</div>
                      <div className="mt-2 text-sm leading-6 text-white/64">{device.detail}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>

            <GlassPanel className="grid gap-4 p-5 sm:p-6 lg:p-7">
              <div className="grid gap-3 sm:grid-cols-2">
                <FeaturePill title="Curved displays" icon={<ScreenIcon className="h-4 w-4" />} />
                <FeaturePill title="Battery swaps" icon={<BatteryIcon className="h-4 w-4" />} />
                <FeaturePill title="OS recovery" icon={<ChipIcon className="h-4 w-4" />} />
                <FeaturePill title="At-home visits" icon={<HomeIcon className="h-4 w-4" />} />
              </div>
              <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.03))] p-5">
                <div className="text-sm uppercase tracking-[0.28em] text-white/46">Why it works</div>
                <p className="mt-3 text-sm leading-7 text-white/66">
                  The service model is tuned for trust: quick diagnostics, predictable pricing, and a repair experience that feels more like a premium concierge than a shop counter.
                </p>
              </div>
            </GlassPanel>
          </div>
        </SectionShell>

        <SectionShell id="why" eyebrow="WHY CHOOSE US" title="A repair experience that feels intentionally designed, not transactional." description="The brand promise is simple: clarity, speed, affordability, and technical confidence without sacrificing premium polish.">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {whyChooseItems.map((item, index) => (
              <GlassPanel key={item.title} className="p-5" >
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/8 text-cyan-200">
                    <ShieldIcon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-[-0.03em] text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/66">{item.description}</p>
                </motion.div>
              </GlassPanel>
            ))}
          </div>
        </SectionShell>

        <SectionShell id="process" eyebrow="HOW IT WORKS" title="A clean booking flow from first tap to final handoff." description="The experience is deliberately short and clear so people can book without friction on mobile.">
          <div className="grid gap-4 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <GlassPanel key={step.step} className="p-5">
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-semibold tracking-[-0.06em] text-white/95">{step.step}</div>
                  <ClockIcon className="h-5 w-5 text-cyan-200" />
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-[-0.03em] text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/66">{step.description}</p>
                <div className="mt-6 h-px w-full bg-white/10" />
                <div className="mt-4 text-xs uppercase tracking-[0.25em] text-white/42">Step {index + 1}</div>
              </GlassPanel>
            ))}
          </div>
        </SectionShell>

        <SectionShell id="reviews" eyebrow="TESTIMONIALS" title="Real trust signals, presented with the same care as the rest of the interface." description="Short, specific testimonials make the service feel credible without overwhelming the page.">
          <div className="grid gap-4 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <GlassPanel key={testimonial.name} className="p-5">
                <div className="text-sm leading-7 text-white/74">“{testimonial.quote}”</div>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <div>
                    <div className="font-medium text-white">{testimonial.name}</div>
                    <div className="text-xs uppercase tracking-[0.24em] text-white/45">{testimonial.label}</div>
                  </div>
                  <div className="rounded-full border border-cyan-300/20 bg-cyan-400/12 px-3 py-1 text-xs text-cyan-100">Verified</div>
                </div>
              </GlassPanel>
            ))}
          </div>
        </SectionShell>

        <SectionShell id="book" eyebrow="BOOKING" title="Book a repair with a form that feels polished and direct." description="The booking module validates user input, submits to the API route, and is built for mobile-first conversion.">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <GlassPanel className="p-5 sm:p-6 lg:p-7">
              <div className="space-y-4">
                <div className="text-sm uppercase tracking-[0.3em] text-white/45">Quick contact</div>
                <h3 className="text-2xl font-semibold tracking-[-0.05em] text-white">Choose the fastest path to support.</h3>
                <div className="rounded-[24px] border border-white/10 bg-white/6 p-4">
                  <div className="text-xs uppercase tracking-[0.28em] text-white/45">Call us now</div>
                  <a href={callHref} className="mt-2 block text-lg font-semibold tracking-[-0.04em] text-white transition hover:text-cyan-200">
                    +91 7998576009
                  </a>
                  <p className="mt-2 text-sm leading-6 text-white/60">Instant phone support for quick booking and urgent device issues.</p>
                </div>
                <p className="text-sm leading-7 text-white/66">
                  Send a booking request or use WhatsApp / call support for immediate assistance. The experience is designed to make contacting the team feel effortless on mobile.
                </p>

                <div className="grid gap-3 pt-2">
                  <GlassAnchorButton href={whatsappHref} target="_blank" rel="noreferrer" className="w-full justify-start">
                    <MessageIcon className="mr-2 h-4 w-4" />
                    Chat on WhatsApp
                  </GlassAnchorButton>
                  <GlassAnchorButton href={callHref} tone="secondary" className="w-full justify-start">
                    <PhoneIcon className="mr-2 h-4 w-4" />
                    Call the repair desk
                  </GlassAnchorButton>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-white/6 p-4">
                  <div className="text-xs uppercase tracking-[0.28em] text-white/45">What happens next</div>
                  <ul className="mt-3 grid gap-2 text-sm text-white/66">
                    <li>• We validate the request and confirm the service window.</li>
                    <li>• A technician reaches out with pricing and availability.</li>
                    <li>• Repairs are completed on-site when the device and issue allow it.</li>
                  </ul>
                </div>
              </div>
            </GlassPanel>

            <BookingForm />
          </div>
        </SectionShell>
      </main>

      <footer className="border-t border-white/10 bg-white/4 px-4 py-8 backdrop-blur-xl sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="font-medium text-white">Infralyx Technologies</div>
            <div>Doorstep mobile repair for premium phones and everyday devices.</div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="#services" className="transition hover:text-white">
              Services
            </Link>
            <Link href="#book" className="transition hover:text-white">
              Book Now
            </Link>
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="transition hover:text-white">
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-6"
    >
      <div className="max-w-3xl space-y-3">
        <div className="text-xs uppercase tracking-[0.32em] text-white/42">{eyebrow}</div>
        <h2 className="text-balance text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">{title}</h2>
        <p className="max-w-2xl text-pretty text-sm leading-7 text-white/65 sm:text-base">{description}</p>
      </div>
      {children}
    </motion.section>
  );
}

function FeaturePill({ title, icon }: { title: string; icon: ReactNode }) {
  return (
    <div className="flex items-center gap-3 rounded-[20px] border border-white/10 bg-white/6 px-4 py-3">
      <div className="text-cyan-200">{icon}</div>
      <div className="text-sm font-medium text-white">{title}</div>
    </div>
  );
}
