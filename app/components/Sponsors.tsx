import Image from 'next/image';

export default function Sponsors() {
  return (
    <section className="sponsors" id="sponsors">
      <div className="section-container">
        <div className="section-header">
          <Image
            src="/red_planet.webp"
            alt="Red planet"
            width={80}
            height={80}
            className="planet-icon"
          />
          <h2 className="section-title">SPONSORS</h2>
        </div>
        
        <div className="sponsor-showcase">
          {/* Main sponsor showcase area; to be filled later. */}
        </div>
      </div>
    </section>
  );
}
