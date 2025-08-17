import Image from 'next/image';

export default function EducationalMaterial() {
  const materials = [
    { name: 'BIO MANUFACTURING', color: '#4A90E2' },
    { name: 'FOOD AND NUTRITION', color: '#5CB3CC' },
    { name: 'ONCOLOGY', color: '#6B73FF' },
    { name: 'THERAPEUTICS', color: '#9B59B6' }
  ];

  return (
    <section className="educational-material" id="educational-material">
      <div className="section-container">
        <div className="section-header">
          <Image
            src="/brown_planet.webp"
            alt="Brown planet"
            width={80}
            height={80}
            className="planet-icon"
          />
          <h2 className="section-title">EDUCATIONAL MATERIAL</h2>
        </div>
        
        <div className="materials-grid">
          {materials.map((material, index) => (
            <div key={index} className="material-button" style={{ backgroundColor: material.color }}>
              {material.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
