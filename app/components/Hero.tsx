import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="stars-background">
        <div className="star star-1"></div>
        <div className="star star-2"></div>
        <div className="star star-3"></div>
        <div className="star star-4"></div>
        <div className="star star-5"></div>
        <div className="star star-6"></div>
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">TURBIOHACKS</h1>
          <h2 className="hero-subtitle">THE BIGGEST BIOHACKATHON IN THE WORLD</h2>
          
          <div className="hero-astronaut">
            {/* Background sphere - stationary */}
            <div className="background-sphere">
              <Image
                src="/astronaut_background_sphere.png"
                alt="Background sphere"
                width={400}
                height={400}
                priority
              />
            </div>
            
            {/* Main astronaut - central with gentle float */}
            <div className="astronaut-main">
              <Image
                src="/astronaut.png"
                alt="Astronaut reading"
                width={280}
                height={280}
                priority
              />
            </div>
            
            {/* Left floating cube */}
            <div className="floating-element left-cube">
              <Image
                src="/left_floating_cube.png"
                alt="Left floating cube"
                width={120}
                height={120}
              />
            </div>
            
            {/* Right floating cube */}
            <div className="floating-element right-cube">
              <Image
                src="/right_floating_cube.png"
                alt="Right floating cube"
                width={120}
                height={120}
              />
            </div>
            
            {/* Right floating disk */}
            <div className="floating-element floating-disk-right">
              <Image
                src="/floating_disk.png"
                alt="Right floating disk"
                width={100}
                height={100}
              />
            </div>
            
            {/* Left floating disk */}
            <div className="floating-element floating-disk-left">
              <Image
                src="/floating_disk.png"
                alt="Left floating disk"
                width={100}
                height={100}
              />
            </div>
          </div>
          
          <div className="signup-section">
            <a 
              href="https://turbiohacks2025.devpost.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="signup-button"
            >
              CLICK HERE TO REGISTER!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
