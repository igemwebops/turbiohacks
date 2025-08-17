import Image from 'next/image';

export default function Tracks() {
  const tracks = [
    { 
      name: 'ONCOLOGY', 
      color: '#FF69B4',
      description: 'Develop innovative solutions for cancer research, diagnosis, and treatment using cutting-edge biotechnology.'
    },
    { 
      name: 'FOOD AND NUTRITION', 
      color: '#9370DB',
      description: 'Create sustainable food systems and nutritional solutions to address global food security challenges.'
    },
    { 
      name: 'BIO MANUFACTURING', 
      color: '#8A2BE2',
      description: 'Design scalable bio-manufacturing processes for sustainable production of biologics and biomaterials.'
    },
    { 
      name: 'THERAPEUTICS', 
      color: '#FF1493',
      description: 'Engineer novel therapeutic approaches including gene therapy, drug delivery, and personalized medicine.'
    }
  ];

  return (
    <section className="tracks" id="tracks">
      <div className="section-container">
        <div className="section-header">
          <Image
            src="/blue_planet.webp"
            alt="Blue planet"
            width={80}
            height={80}
            className="planet-icon"
          />
          <h2 className="section-title">TRACKS</h2>
        </div>
        
        <div className="tracks-grid">
          {tracks.map((track, index) => (
            <div key={index} className="track-card">
              <div className="track-label">
                {track.name}
              </div>
              <div className="track-content">
                <p className="track-description">{track.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
