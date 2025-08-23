import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TurBioHacks Awards 2025",
  description: "Awards page",
};

export default function AwardsPage() {
  return (
    <div className="page">
      <main className="main">
        <h1>🏆 Awards</h1>
        <p>If you can see this, the /awards route is working.</p>
      </main>
    </div>
  );
}
