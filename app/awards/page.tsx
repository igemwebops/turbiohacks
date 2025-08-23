import type { Metadata } from "next";
import styles from "./Awards.module.css";

export const metadata: Metadata = {
  title: "Awards | TurBioHacks 2025",
  description: "Hackathon awards and recognition for TurBioHacks 2025",
};

type Award = { title: string; desc: string };

const trackAwards: Award[] = [
  { title: "Best Astrobiology Project", desc: "Advances exploration of life beyond Earth, planetary habitability, or space biosciences." },
  { title: "Best Oncology Project", desc: "Most promising approach to cancer detection, treatment, or patient care." },
  { title: "Best Drug Discovery Project", desc: "Effectively accelerates or innovates therapeutic discovery pipelines." },
  { title: "Best Environment Project", desc: "Greatest potential to address environmental challenges through biotech." },
  { title: "Best Therapeutics Project", desc: "Innovates in disease treatment with clear translational relevance." },
  { title: "Best Diagnostics Project", desc: "Novel, accessible, and impactful diagnostic solution." },
  { title: "Best Food & Nutrition Project", desc: "Meaningful contribution to food security, nutrition, or sustainable agriculture." },
  { title: "Best Biomanufacturing Project", desc: "Reimagines scalable, efficient, and sustainable biological production." },
];

const crossTrack: Award[] = [
  { title: "Best Overall Project", desc: "Excellence across innovation, feasibility, and presentation." },
  { title: "Most Innovative Solution", desc: "Boldest and most original idea, regardless of maturity." },
  { title: "Best Impact Potential", desc: "Clearest pathway to real-world application and societal benefit." },
  { title: "Best Technical Implementation", desc: "Most rigorous, complete, and technically impressive build." },
  { title: "Best Presentation & Storytelling", desc: "Most compelling, clear, and engaging communication." },
  { title: "Community Choice Award", desc: "Voted favorite by participants and attendees." },
];

const funAwards: Award[] = [
  { title: "Spirit of the Hackathon", desc: "Most positivity, inclusivity, and helpfulness." },
  { title: "Midnight Hacker Award", desc: "Biggest overnight breakthrough." },
  { title: "Best Meme Award", desc: "Funniest hackathon-related cultural contribution." },
];

export default function AwardsPage() {
  return (
    <div className="page">
      <main className="main">
        <header className={styles.header}>
          <h1 className={styles.title}>🏆 Hackathon Awards</h1>
          <p className={styles.subtitle}>
            Track winners + cross-track standouts to recognize innovation, impact, and team spirit.
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Track Awards</h2>
          <ul className={styles.grid}>
            {trackAwards.map((a) => (
              <li key={a.title} className={styles.card}>
                <h3 className={styles.cardTitle}>{a.title}</h3>
                <p className={styles.cardDesc}>{a.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Cross-Track Awards</h2>
          <ul className={styles.grid}>
            {crossTrack.map((a) => (
              <li key={a.title} className={styles.card}>
                <h3 className={styles.cardTitle}>{a.title}</h3>
                <p className={styles.cardDesc}>{a.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Fun Awards</h2>
          <ul className={styles.grid}>
            {funAwards.map((a) => (
              <li key={a.title} className={styles.card}>
                <h3 className={styles.cardTitle}>{a.title}</h3>
                <p className={styles.cardDesc}>{a.desc}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
