import type { ReactNode } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

/* Colors match the reference: navy sidebar + white main column + blue accents */
const NAVY = "#1b3a7a";
const NAVY_DARK = "#162f63";

const PROFILE_IMG =
  "https://api.dicebear.com/10.x/initials/svg?seed=DUY%20NITA";

/* ------------------------------ building blocks ----------------------------- */

function SidebarHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="ribbon-heading inline-block bg-white px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#1b3a7a] sm:px-4 sm:text-[13px]">
      {children}
    </h2>
  );
}

function MainHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="ribbon-heading inline-block bg-[#1b3a7a] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white sm:px-4 sm:text-[13px]">
      {children}
    </h2>
  );
}

function SidebarList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1 text-[12px] leading-snug text-white/90 sm:text-[11px]">
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
    <div className="print-reset min-h-screen bg-slate-200 sm:px-4 sm:py-8">
      {/* A4 sheet — stacked on phones, side-by-side from sm up; print keeps A4 */}
      <div className="resume-sheet mx-auto flex flex-col bg-white shadow-[0_2px_8px_rgba(0,0,0,0.12),0_16px_48px_rgba(0,0,0,0.12)] sm:flex-row">
        {/* ============================ MAIN COLUMN ============================ */}
        <main className="w-full shrink-0 sm:w-[62%]">
          {/* Name header */}
          <div className="px-5 pb-5 pt-7 sm:px-10 sm:pb-6 sm:pt-10">
            <h1 className="font-display text-[27px] font-extrabold uppercase leading-[1.05] tracking-tight text-[#1b3a7a] sm:text-[34px]">
              Duy Nita
            </h1>
            <p className="font-display mt-1.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#2563eb] sm:text-[15px] sm:tracking-[0.28em]">
              Call Center Agent
            </p>
          </div>

          {/* Contact strip */}
          <div className="bg-[#1b3a7a] px-5 py-3.5 sm:px-10 sm:py-4">
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-white sm:text-[13px]">
              Contact
            </p>
            <div className="mt-2.5 flex flex-wrap gap-x-6 gap-y-2 text-[11px] text-white/90 sm:gap-x-10">
              <span className="flex items-center gap-2">
                <Phone className="size-3.5 shrink-0" /> (855) 97 350 9225
              </span>
              <span className="flex items-center gap-2">
                <Mail className="size-3.5 shrink-0" /> duynita1@gmail.com
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="size-3.5 shrink-0" /> Kampot Province, Cambodia
              </span>
            </div>
          </div>

          {/* Profile */}
          <section className="resume-section px-5 py-5 sm:px-10 sm:py-6">
            <MainHeading>Profile</MainHeading>
            <p className="mt-4 text-[12.5px] leading-relaxed text-slate-700 sm:text-[11.5px]">
              Dedicated Call Center Agent with experience handling customer
              inquiries, resolving complaints, and keeping records accurate in a
              fast-paced support environment. Information Technology student who
              enjoys problem-solving, working in teams, presenting clearly, and
              writing technical documentation. Focused on professional, patient
              service and continuous learning.
            </p>
          </section>

          {/* Experience */}
          <section className="resume-section px-5 py-5 sm:px-10 sm:py-6">
            <MainHeading>Experience</MainHeading>
            <div className="mt-4">
              <h3 className="text-[13px] font-bold text-[#1b3a7a] sm:text-[12.5px]">
                Call Center Agent
              </h3>
              <p className="text-[11.5px] text-slate-600 sm:text-[11px]">
                Today Solution, Stueng Meanchey{" "}
                <span className="text-slate-500">| 18/07/2025 — Present</span>
              </p>
              <ul className="mt-2 space-y-1 text-[12px] leading-relaxed text-slate-700 sm:text-[11px]">
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
          <section className="resume-section px-5 py-5 sm:px-10 sm:py-6">
            <MainHeading>Education</MainHeading>
            <div className="mt-4">
              <h3 className="text-[13px] font-bold text-[#1b3a7a] sm:text-[12.5px]">
                Year 1 — Information Technology
              </h3>
              <p className="text-[11.5px] text-slate-600 sm:text-[11px]">
                Royal University of Phnom Penh{" "}
                <span className="text-slate-500">| Present</span>
              </p>
              <ul className="mt-2 space-y-1 text-[12px] leading-relaxed text-slate-700 sm:text-[11px]">
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

          {/* Footer */}
          <footer className="resume-section border-t border-slate-200 px-5 py-4 sm:px-10">
            <p className="text-[10.5px] text-slate-500 sm:text-[10px]">
              Copyright © 2026 by DUY NITA. All rights reserved.
            </p>
          </footer>
        </main>

        {/* ============================== SIDEBAR ============================== */}
        <aside
          className="w-full shrink-0 px-5 pb-9 pt-7 text-white sm:w-[38%] sm:px-7 sm:pb-10 sm:pt-8"
          style={{
            background: `linear-gradient(180deg, ${NAVY} 0%, ${NAVY_DARK} 100%)`,
          }}
        >
          {/* Circular photo */}
          <div className="flex justify-center">
            <div className="rounded-full bg-white p-1 shadow-lg sm:p-1.5">
              <img
                src={PROFILE_IMG}
                alt="Duy Nita"
                width={150}
                height={150}
                className="size-[120px] rounded-full object-cover sm:size-[150px]"
              />
            </div>
          </div>

          {/* Technical skills */}
          <section className="resume-section mt-8">
            <SidebarHeading>Technical Skills</SidebarHeading>
            <div className="mt-3 grid grid-cols-1 gap-y-3 sm:grid-cols-2 sm:gap-x-4">
              <div>
                <p className="text-[12px] font-bold text-white sm:text-[11px]">
                  Software
                </p>
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
                <p className="text-[12px] font-bold text-white sm:text-[11px]">
                  Technical
                </p>
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

          {/* Hobbies & Interests */}
          <section className="resume-section mt-7">
            <SidebarHeading>Hobbies & Interests</SidebarHeading>
            <div className="mt-3">
              <SidebarList items={["Reading books", "Listening to music"]} />
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
