import { motion } from "framer-motion";
import type { ReactNode } from "react";
import {
  Printer,
  MapPin,
  Phone,
  Mail,
  GraduationCap,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const PROFILE_IMG =
  "https://api.dicebear.com/10.x/initials/svg?seed=DUY%20NITA";

function handlePrint() {
  try {
    window.print();
  } catch {
    // print dialog unavailable — no-op
  }
}

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
      {children}
    </h2>
  );
}

function Divider() {
  return <div className="mt-2.5 h-px bg-border" />;
}

const personalInfo: [string, string][] = [
  ["Full Name", "DUY NITA"],
  ["Gender", "Female"],
  ["Date of Birth", "April 08, 2007"],
  ["Nationality", "Cambodian"],
  ["Marital Status", "Single"],
  ["Place of Birth", "Daunyoy, Daunyoy Commune, Chhuk District, Kampot Province"],
];

const education = [
  {
    period: "Present",
    title: "Year 1 — Information Technology",
    place: "Royal University of Phnom Penh",
  },
  { period: "2024", title: "Passed BacII Examination", place: "" },
  { period: "2021 — 2023", title: "High School", place: "Mreasprow High School" },
  {
    period: "2018 — 2021",
    title: "Secondary School",
    place: "Chhuk Secondary School",
  },
  { period: "2012 — 2018", title: "Primary School", place: "Chhuk Primary School" },
];

const languages = [
  { name: "Khmer", level: "Mother Tongue", width: "100%" },
  { name: "English", level: "Intermediate", width: "55%" },
];

const experience = {
  company: "Today Solution, Stueng Meanchey",
  role: "Call Center Agent",
  period: "18/07/2025 — Present",
  bullets: [
    "Handled customer inquiries and provided accurate information regarding services.",
    "Resolved customer complaints efficiently while maintaining a professional attitude.",
    "Logged call details and updated customer records in the system.",
  ],
};

const hobbies = ["Reading books", "Listening to music"];

export default function Landing() {
  return (
    <div className="print-reset min-h-screen bg-muted/40 px-4 py-8 sm:py-12">
      {/* Toolbar */}
      <div className="no-print mx-auto mb-8 flex w-full max-w-[210mm] items-center justify-between">
        <p className="text-xs tracking-wide text-muted-foreground">
          Résumé — A4
        </p>
        <Button
          onClick={handlePrint}
          variant="outline"
          size="sm"
          className="rounded-none border-foreground/20 bg-white text-foreground hover:bg-foreground hover:text-background"
        >
          <Printer className="size-3.5" />
          Print / Save as PDF
        </Button>
      </div>

      {/* A4 sheet */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="resume-sheet mx-auto bg-white px-[18mm] py-[16mm] text-foreground shadow-[0_1px_3px_rgba(0,0,0,0.08),0_12px_40px_rgba(0,0,0,0.06)]"
      >
        {/* Header */}
        <header className="resume-section flex items-start justify-between gap-8">
          <div>
            <h1 className="font-display text-4xl font-medium tracking-tight">
              DUY NITA
            </h1>
            <p className="mt-2 text-sm tracking-wide text-muted-foreground">
              Call Center Agent
            </p>
            <div className="mt-6 space-y-2 text-[13px] leading-relaxed text-foreground/80">
              <p className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-3.5 shrink-0 text-muted-foreground" />
                <span>
                  Trpeang Tonle, Daunyoy Commune, Chhuk District, Kampot Province
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="size-3.5 shrink-0 text-muted-foreground" />
                <span>(855) 97 350 9225</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="size-3.5 shrink-0 text-muted-foreground" />
                <a
                  href="mailto:duynita1@gmail.com"
                  className="underline-offset-4 hover:underline"
                >
                  duynita1@gmail.com
                </a>
              </p>
            </div>
          </div>
          <img
            src={PROFILE_IMG}
            alt="Duy Nita"
            width={88}
            height={88}
            className="size-[88px] shrink-0 rounded-full border border-border object-cover grayscale"
          />
        </header>

        <div className="my-10 h-px bg-border" />

        {/* Two-column body */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-[1.6fr_1fr]">
          {/* Left column */}
          <div className="space-y-10">
            {/* Experience */}
            <section className="resume-section">
              <SectionHeading>Experience</SectionHeading>
              <Divider />
              <div className="mt-4">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-sm font-medium">
                    {experience.role}
                    <span className="text-muted-foreground">
                      {" "}
                      · {experience.company}
                    </span>
                  </h3>
                  <span className="text-[11px] tabular-nums text-muted-foreground">
                    {experience.period}
                  </span>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {experience.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-3 text-[13px] leading-relaxed text-foreground/80"
                    >
                      <span className="mt-[7px] size-1 shrink-0 rounded-full bg-muted-foreground/50" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Education */}
            <section className="resume-section">
              <SectionHeading>Education</SectionHeading>
              <Divider />
              <div className="mt-4 space-y-4">
                {education.map((e) => (
                  <div key={e.period} className="flex gap-4">
                    <span className="w-24 shrink-0 pt-0.5 text-[11px] tabular-nums text-muted-foreground">
                      {e.period}
                    </span>
                    <div>
                      <p className="text-[13px] font-medium leading-snug">
                        {e.title}
                      </p>
                      {e.place && (
                        <p className="text-[12px] text-muted-foreground">
                          {e.place}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section className="resume-section">
              <SectionHeading>Skills &amp; Technical Abilities</SectionHeading>
              <Divider />
              <dl className="mt-4 space-y-2.5 text-[13px] leading-relaxed">
                {[
                  ["Software", "Microsoft Word, Excel, PowerPoint"],
                  ["Technical", "HTML, CSS, JavaScript, Responsive Web Design"],
                  [
                    "Soft Skills",
                    "Problem-solving, Teamwork, Presentation, Technical Writing",
                  ],
                ].map(([k, v]) => (
                  <div key={k} className="flex gap-4">
                    <dt className="w-24 shrink-0 text-muted-foreground">{k}</dt>
                    <dd className="text-foreground/80">{v}</dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>

          {/* Right column */}
          <div className="space-y-10 md:border-l md:border-border md:pl-10">
            {/* Personal Information */}
            <section className="resume-section">
              <SectionHeading>Personal</SectionHeading>
              <Divider />
              <dl className="mt-4 space-y-2.5 text-[12px] leading-relaxed">
                {personalInfo.map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-muted-foreground">{k}</dt>
                    <dd className="text-foreground/85">{v}</dd>
                  </div>
                ))}
              </dl>
            </section>

            {/* Languages */}
            <section className="resume-section">
              <SectionHeading>Languages</SectionHeading>
              <Divider />
              <div className="mt-4 space-y-3.5">
                {languages.map((l) => (
                  <div key={l.name}>
                    <div className="flex items-baseline justify-between text-[12px]">
                      <span className="font-medium">{l.name}</span>
                      <span className="text-muted-foreground">{l.level}</span>
                    </div>
                    <div className="mt-1.5 h-px w-full bg-border">
                      <div
                        className="h-px bg-foreground/50"
                        style={{ width: l.width }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Hobbies */}
            <section className="resume-section">
              <SectionHeading>Interests</SectionHeading>
              <Divider />
              <ul className="mt-4 space-y-1.5 text-[13px] text-foreground/80">
                {hobbies.map((h) => (
                  <li key={h} className="flex items-center gap-3">
                    <span className="size-1 rounded-full bg-muted-foreground/50" />
                    {h}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {/* Footer */}
        <footer className="resume-section mt-14 border-t border-border pt-5">
          <p className="text-[11px] text-muted-foreground">
            Copyright © 2026 by DUY NITA. All rights reserved.
          </p>
        </footer>
      </motion.div>

      {/* Bottom hint */}
      <p className="no-print mx-auto mt-8 max-w-[210mm] text-center text-[11px] text-muted-foreground">
        <GraduationCap className="mr-1 inline size-3.5 align-[-3px]" />
        Currently studying Information Technology at the Royal University of
        Phnom Penh ·
        <Globe className="ml-1 mr-1 inline size-3.5 align-[-3px]" />
        Kampot, Cambodia
      </p>
    </div>
  );
}
