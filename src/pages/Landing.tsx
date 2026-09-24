import type { ReactNode } from "react";
import { Phone, Mail, MapPin, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

/* Colors match the reference: navy sidebar + white main column + blue accents */
const NAVY = "#1b3a7a";
const NAVY_DARK = "#162f63";

const PROFILE_IMG =
  "https://api.dicebear.com/10.x/initials/svg?seed=DUY%20NITA";

function handlePrint() {
  try {
    window.print();
  } catch {
    // print dialog unavailable — no-op
  }
}

/* ------------------------------ building blocks ----------------------------- */

function SidebarHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="ribbon-heading inline-block bg-white px-4 py-1.5 text-[13px] font-bold uppercase tracking-[0.14em] text-[#1b3a7a]">
      {children}
    </h2>
  );
}

function MainHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="ribbon-heading inline-block bg-[#1b3a7a] px-4 py-1.5 text-[13px] font-bold uppercase tracking-[0.14em] text-white">
      {children}
    </h2>
  );
}

function SidebarList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1 text-[11px] leading-snug text-white/90">
      {items.map((item) => (
        <li key={item} className="flex gap-1.5">
          <span className="mt-[6px] size-1 shrink-0 rounded-full bg-white/80" />
          {item}
        </li>
      ))}
    </ul>
  );
}

/* ---------------------------------- page ----------------------------------- */

export default function Landing() {
  return (
    <div className="print-reset min-h-screen bg-slate-200 px-4 py-8 sm:py-12">
      {/* Toolbar */}
      <div className="no-print mx-auto mb-8 flex w-full max-w-[210mm] items-center justify-between">
        <p className="text-xs tracking-wide text-slate-600">Résumé — A4</p>
        <Button
          onClick={handlePrint}
          variant="outline"
          size="sm"
          className="rounded-none border-slate-300 bg-white text-slate-800 hover:bg-slate-800 hover:text-white"
        >
          <Printer className="size-3.5" />
          Print / Save as PDF
        </Button>
      </div>

      {/* A4 sheet */}
      <div className="resume-sheet mx-auto flex bg-white shadow-[0_2px_8px_rgba(0,0,0,0.12),0_16px_48px_rgba(0,0,0,0.12)]">
        {/* ============================ MAIN COLUMN ============================ */}
        <main className="w-[62%] shrink-0">
          {/* Name header */}
          <div className="px-10 pb-6 pt-10">
            <h1 className="font-display text-[34px] font-extrabold uppercase leading-[1.05] tracking-tight text-[#1b3a7a]">
              Duy Nita
            </h1>
            <p className="font-display mt-1.5 text-[15px] font-semibold uppercase tracking-[0.28em] text-[#2563eb]">
              Call Center Agent
            </p>
          </div>

          {/* Contact strip */}
          <div className="bg-[#1b3a7a] px-10 py-4">
            <p className="font-display text-[13px] font-bold uppercase tracking-[0.2em] text-white">
              Contact
            </p>
            <div className="mt-2.5 flex flex-wrap gap-x-10 gap-y-2 text-[11px] text-white/90">
              <span className="flex items-center gap-2">
                <Phone className="size-3.5" /> (855) 97 350 9225
              </span>
              <span className="flex items-center gap-2">
                <Mail className="size-3.5" /> duynita1@gmail.com
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="size-3.5" /> Kampot Province, Cambodia
              </span>
            </div>
          </div>

          {/* Profile */}
          <section className="resume-section px-10 py-6">
            <MainHeading>Profile</MainHeading>
            <p className="mt-4 text-[11.5px] leading-relaxed text-slate-700">
              Dedicated Call Center Agent with experience handling customer
              inquiries, resolving complaints, and keeping records accurate in a
              fast-paced support environment. Information Technology student who
              enjoys problem-solving, working in teams, presenting clearly, and
              writing technical documentation. Focused on professional, patient
              service and continuous learning.
            </p>
          </section>

          {/* Experience */}
          <section className="resume-section px-10 py-6">
            <MainHeading>Experience</MainHeading>
            <div className="mt-4">
              <h3 className="text-[12.5px] font-bold text-[#1b3a7a]">
                Call Center Agent
              </h3>
              <p className="text-[11px] text-slate-600">
                Today Solution, Stueng Meanchey{" "}
                <span className="text-slate-500">| 18/07/2025 — Present</span>
              </p>
              <ul className="mt-2 space-y-1 text-[11px] leading-relaxed text-slate-700">
                {[
                  "Handled customer inquiries and provided accurate information regarding services.",
                  "Resolved customer complaints efficiently while maintaining a professional attitude.",
                  "Logged call details and updated customer records in the system.",
                ].map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-[6px] size-1 shrink-0 rounded-full bg-slate-500" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Education */}
          <section className="resume-section px-10 py-6">
            <MainHeading>Education</MainHeading>
            <div className="mt-4">
              <h3 className="text-[12.5px] font-bold text-[#1b3a7a]">
                Year 1 — Information Technology
              </h3>
              <p className="text-[11px] text-slate-600">
                Royal University of Phnom Penh{" "}
                <span className="text-slate-500">| Present</span>
              </p>
              <ul className="mt-2 space-y-1 text-[11px] leading-relaxed text-slate-700">
                {[
                  "Passed BacII Examination — 2024",
                  "Mreasprow High School — 2021 to 2023",
                  "Chhuk Secondary School — 2018 to 2021",
                  "Chhuk Primary School — 2012 to 2018",
                ].map((e) => (
                  <li key={e} className="flex gap-2">
                    <span className="mt-[6px] size-1 shrink-0 rounded-full bg-slate-500" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </main>

        {/* ============================== SIDEBAR ============================== */}
        <aside
          className="w-[38%] shrink-0 px-7 pb-10 pt-8 text-white"
          style={{
            background: `linear-gradient(180deg, ${NAVY} 0%, ${NAVY_DARK} 100%)`,
          }}
        >
          {/* Circular photo */}
          <div className="flex justify-center">
            <div className="rounded-full bg-white p-1.5 shadow-lg">
              <img
                src={PROFILE_IMG}
                alt="Duy Nita"
                width={150}
                height={150}
                className="size-[150px] rounded-full object-cover"
              />
            </div>
          </div>

          {/* Technical skills */}
          <section className="resume-section mt-8">
            <SidebarHeading>Technical Skills</SidebarHeading>
            <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-3">
              <div>
                <p className="text-[11px] font-bold text-white">Software</p>
                <div className="mt-1.5">
                  <SidebarList
                    items={[
                      "Microsoft Word",
                      "Microsoft Excel",
                      "Microsoft PowerPoint",
                    ]}
                  />
                </div>
              </div>
              <div>
                <p className="text-[11px] font-bold text-white">Technical</p>
                <div className="mt-1.5">
                  <SidebarList
                    items={["HTML & CSS", "JavaScript", "Responsive Design"]}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Soft skills */}
          <section className="resume-section mt-7">
            <SidebarHeading>Soft Skills</SidebarHeading>
            <div className="mt-3">
              <SidebarList
                items={[
                  "Problem Solving",
                  "Teamwork",
                  "Presentation",
                  "Technical Writing",
                ]}
              />
            </div>
          </section>

          {/* Personal information */}
          <section className="resume-section mt-7">
            <SidebarHeading>Personal</SidebarHeading>
            <div className="mt-3">
              <SidebarList
                items={[
                  "Female · Born April 08, 2007",
                  "Cambodian nationality",
                  "Single",
                  "Born in Daunyoy, Chhuk District, Kampot",
                ]}
              />
            </div>
          </section>

          {/* Languages */}
          <section className="resume-section mt-7">
            <SidebarHeading>Languages</SidebarHeading>
            <div className="mt-3">
              <SidebarList
                items={["Khmer — Mother Tongue", "English — Intermediate"]}
              />
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
