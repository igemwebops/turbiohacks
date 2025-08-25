export default function Tracks() {
  const tracks = [
    { 
      name: 'ONCOLOGY', 
      color: '#FF69B4',
      description: 'This track addresses the urgent need for better cancer detection and treatment. Projects may focus on modeling tumor progression, identifying biomarkers, or designing novel therapeutic interventions with measurable clinical relevance.'
    },
    { 
      name: 'FOOD AND NUTRITION', 
      color: '#9370DB',
      description: 'Global food systems face pressure from climate, health, and sustainability demands. This track emphasizes innovations in alternative proteins, microbiome-informed nutrition, and sustainable agricultural practices.'
    },
    { 
      name: 'BIOMANUFACTURING', 
      color: '#8A2BE2',
      description: 'Biomanufacturing leverages cells and enzymes as production platforms. Teams will develop methods to improve yield, reduce cost, or expand the product space of biologically manufactured medicines, fuels, or materials.'
    },
    { 
      name: 'THERAPEUTICS', 
      color: '#FF1493',
      description: 'Therapeutics are rapidly evolving beyond small molecules. This track highlights RNA-based interventions, engineered immune cells, and synthetic circuits as next-generation approaches to disease treatment.'
    },
    { 
      name: 'DRUG DISCOVERY', 
      color: '#FF69B4',
      description: 'Drug discovery remains constrained by cost and inefficiency. This track challenges participants to design algorithms, models, or biological systems that accelerate target identification, optimize lead compounds, or improve preclinical validation.'
    },
    { 
      name: 'ENVIRONMENT', 
      color: '#FF69B4',
      description: 'Environmental challenges demand scalable biological solutions. Projects in this track may address pollution remediation, biodiversity loss, or climate mitigation through engineered organisms and ecosystems.'
    },
    { 
      name: 'DIAGNOSTICS', 
      color: '#FF69B4',
      description: 'Diagnostics define the boundary between prevention and treatment. This track centers on building biosensors, computational classifiers, and rapid detection tools that enable earlier and more accurate decision-making.'
    },
    { 
      name: 'ASTROBIOLOGU', 
      color: '#FF69B4',
      description: 'Astrobiology examines how life originates, adapts, and persists in extreme conditions. Teams in this track will explore synthetic biology and computational approaches to test life boundaries and inform future space exploration.'
    },
    { 
      name: 'NEUROSCIENCE', 
      color: '#6B73FF',
      description: 'Neuroscience explores the complexities of the brain and nervous system. This track focuses on neural circuit modeling, brain-computer interfaces, neurological disorder research, and computational approaches to understanding cognition and behavior.'
    }
  ];

  return (
    <section className="tracks" id="tracks">
      <div className="section-container">
        <div className="section-header">
          <img
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
