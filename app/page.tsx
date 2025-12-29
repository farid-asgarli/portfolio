import Image from 'next/image';
import VantaBackground from './components/VantaBackground';

export default function Home() {
  return (
    <main className="h-screen overflow-y-auto snap-y snap-proximity scroll-smooth bg-black text-white selection:bg-white/20">
      {/* Hero Section */}
      <section className="relative flex min-h-screen h-screen flex-col items-center justify-center px-6 overflow-hidden snap-start">
        {/* 3D Animated Background */}
        <VantaBackground />

        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 pointer-events-none z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none z-[1]" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center w-full">
          {/* Photo - diffuses into the void */}
          <div className="opacity-0 animate-fade-in mb-6 w-full md:w-auto">
            <div className="relative w-full h-[70vh] md:w-[400px] md:h-[500px] lg:w-[480px] lg:h-[600px] xl:w-[560px] xl:h-[700px] 2xl:w-[640px] 2xl:h-[800px]">
              {/* Photo with mask for soft edges */}
              <div
                className="relative w-full h-full"
                style={{
                  maskImage: 'radial-gradient(ellipse 80% 65% at 50% 40%, black 30%, transparent 75%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 80% 65% at 50% 40%, black 30%, transparent 75%)',
                }}
              >
                <Image src="/images/1.jpg" alt="Farid Asgarli" fill className="object-cover object-top" priority />
              </div>
            </div>
          </div>

          {/* Name - massive, cinematic */}
          <div className="opacity-0 animate-fade-in animate-delay-200">
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-light tracking-[0.15em] uppercase text-center">
              Farid
            </h1>
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-bold tracking-[0.02em] uppercase text-center -mt-2 md:-mt-4 xl:-mt-6 2xl:-mt-8">
              Asgarli
            </h1>
          </div>

          {/* Role - minimal, spaced */}
          <div className="opacity-0 animate-fade-in animate-delay-300 mt-10 md:mt-14 xl:mt-16">
            <div className="flex items-center gap-4 md:gap-8 xl:gap-12">
              <span className="text-white/60 text-xs md:text-sm xl:text-base tracking-[0.4em] uppercase">Developer</span>
              <span className="w-12 md:w-20 xl:w-28 h-px bg-white/20"></span>
              <span className="text-white/60 text-xs md:text-sm xl:text-base tracking-[0.4em] uppercase">Athlete</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator - fixed at bottom of screen */}
        <div className="opacity-0 animate-fade-in animate-delay-500 absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <a
            href="#about"
            className="group flex flex-col items-center text-white/20 hover:text-white/50 transition-colors duration-700"
            aria-label="Scroll down"
          >
            <svg className="w-6 h-6 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M7 10l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <section
        id="about"
        className="relative min-h-screen h-screen flex flex-col items-center justify-center px-6 py-24 bg-black overflow-hidden snap-start"
      >
        {/* Subtle gradient at top */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />

        {/* Stats */}
        <div className="relative z-10 flex flex-col items-center max-w-4xl xl:max-w-6xl mx-auto">
          {/* Numbers row */}
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 xl:gap-32 2xl:gap-40 mb-24">
            {/* Years Coding */}
            <div className="flex flex-col items-center group">
              <span className="text-6xl md:text-8xl xl:text-9xl 2xl:text-[10rem] font-extralight text-white/90 tracking-tight">7</span>
              <span className="text-[10px] md:text-xs xl:text-sm text-white/40 tracking-[0.4em] uppercase mt-2 xl:mt-4">Years</span>
              <span className="text-[10px] md:text-xs xl:text-sm text-white/25 tracking-[0.3em] uppercase">Coding</span>
            </div>

            {/* Apps Built */}
            <div className="flex flex-col items-center group">
              <span className="text-6xl md:text-8xl xl:text-9xl 2xl:text-[10rem] font-extralight text-white/90 tracking-tight">10</span>
              <span className="text-[10px] md:text-xs xl:text-sm text-white/40 tracking-[0.4em] uppercase mt-2 xl:mt-4">Grand-Scale</span>
              <span className="text-[10px] md:text-xs xl:text-sm text-white/25 tracking-[0.3em] uppercase">Applications</span>
            </div>

            {/* Years Lifting */}
            <div className="flex flex-col items-center group">
              <span className="text-6xl md:text-8xl xl:text-9xl 2xl:text-[10rem] font-extralight text-white/90 tracking-tight">4</span>
              <span className="text-[10px] md:text-xs xl:text-sm text-white/40 tracking-[0.4em] uppercase mt-2 xl:mt-4">Years</span>
              <span className="text-[10px] md:text-xs xl:text-sm text-white/25 tracking-[0.3em] uppercase">Lifting</span>
            </div>
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-white/10 mb-16"></div>

          {/* Tech Stack */}
          <div className="flex flex-col items-center">
            <span className="text-[10px] xl:text-xs text-white/30 tracking-[0.5em] uppercase mb-8">Fluent In</span>
            <div className="flex flex-wrap justify-center gap-x-8 md:gap-x-12 xl:gap-x-16 gap-y-4">
              <span className="text-sm md:text-base xl:text-lg text-white/70 font-light tracking-wider">.NET</span>
              <span className="text-white/20">·</span>
              <span className="text-sm md:text-base xl:text-lg text-white/70 font-light tracking-wider">Next.js</span>
              <span className="text-white/20">·</span>
              <span className="text-sm md:text-base xl:text-lg text-white/70 font-light tracking-wider">TypeScript</span>
              <span className="text-white/20">·</span>
              <span className="text-sm md:text-base xl:text-lg text-white/70 font-light tracking-wider">Kotlin</span>
              <span className="text-white/20">·</span>
              <span className="text-sm md:text-base xl:text-lg text-white/70 font-light tracking-wider">AI</span>
            </div>
          </div>

          {/* Subtle tagline */}
          <div className="mt-20 xl:mt-24">
            <p className="text-white/20 text-xs md:text-sm xl:text-base tracking-[0.2em] text-center font-light italic">
              Full-stack architect. Mobile engineer. AI integrator.
            </p>
          </div>
        </div>
      </section>

      {/* Two Worlds Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 xl:px-12 py-32 bg-black overflow-hidden snap-start">
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[90rem] mx-auto w-full">
          {/* Section Header */}
          <div className="text-center mb-20 md:mb-32 xl:mb-40">
            <span className="text-[10px] xl:text-xs text-white/30 tracking-[0.5em] uppercase">Two Worlds</span>
            <h2 className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-light tracking-[0.1em] uppercase text-white/90 mt-4">One Mission</h2>
          </div>

          {/* CODE Section */}
          <div className="relative mb-32 md:mb-40 xl:mb-48">
            {/* Background photo - B&W filter */}
            <div className="absolute inset-0 flex justify-start">
              <div
                className="relative w-full md:w-2/3 xl:w-1/2 h-full"
                style={{
                  maskImage: 'linear-gradient(to right, black 20%, transparent 80%)',
                  WebkitMaskImage: 'linear-gradient(to right, black 20%, transparent 80%)',
                }}
              >
                <Image src="/images/code.jpg" alt="Code" fill className="object-cover grayscale opacity-30 xl:opacity-40" />
              </div>
            </div>
            {/* Content */}
            <div className="relative z-10 flex flex-col items-end text-right py-16 md:py-24 xl:py-32">
              <span className="text-[10px] xl:text-xs text-white/30 tracking-[0.5em] uppercase mb-6">01</span>
              <h3 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-extralight tracking-[0.1em] uppercase text-white/90 mb-8">
                Code
              </h3>
              <p className="text-white/50 text-sm md:text-base xl:text-lg font-light leading-relaxed max-w-md xl:max-w-lg mb-8">
                Architecting systems that scale. From mobile apps to AI-driven platforms, I turn complex problems into elegant solutions.
              </p>
              <div className="flex flex-wrap justify-end gap-3 xl:gap-4">
                <span className="text-[10px] xl:text-xs text-white/60 tracking-[0.3em] uppercase px-3 py-1 xl:px-4 xl:py-2 border border-white/20">
                  .NET
                </span>
                <span className="text-[10px] xl:text-xs text-white/60 tracking-[0.3em] uppercase px-3 py-1 xl:px-4 xl:py-2 border border-white/20">
                  React
                </span>
                <span className="text-[10px] xl:text-xs text-white/60 tracking-[0.3em] uppercase px-3 py-1 xl:px-4 xl:py-2 border border-white/20">
                  Kotlin
                </span>
                <span className="text-[10px] xl:text-xs text-white/60 tracking-[0.3em] uppercase px-3 py-1 xl:px-4 xl:py-2 border border-white/20">
                  AI/ML
                </span>
              </div>
            </div>
          </div>

          {/* IRON Section */}
          <div className="relative">
            {/* Background photo - same diffusion as hero */}
            <div className="absolute inset-0 flex justify-end">
              <div
                className="relative w-full md:w-2/3 xl:w-1/2 h-full"
                style={{
                  maskImage: 'linear-gradient(to left, black 20%, transparent 80%)',
                  WebkitMaskImage: 'linear-gradient(to left, black 20%, transparent 80%)',
                }}
              >
                <Image src="/images/2.jpg" alt="Iron" fill className="object-cover opacity-40 xl:opacity-50" />
              </div>
            </div>
            {/* Content */}
            <div className="relative z-10 flex flex-col items-start text-left py-16 md:py-24 xl:py-32">
              <span className="text-[10px] xl:text-xs text-white/30 tracking-[0.5em] uppercase mb-6">02</span>
              <h3 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-extralight tracking-[0.1em] uppercase text-white/90 mb-8">
                Iron
              </h3>
              <p className="text-white/50 text-sm md:text-base xl:text-lg font-light leading-relaxed max-w-md xl:max-w-lg mb-8">
                Discipline forged through repetition. The gym is where excuses die and consistency becomes identity.
              </p>
              <div className="flex flex-wrap justify-start gap-3 xl:gap-4">
                <span className="text-[10px] xl:text-xs text-white/60 tracking-[0.3em] uppercase px-3 py-1 xl:px-4 xl:py-2 border border-white/20">
                  Discipline
                </span>
                <span className="text-[10px] xl:text-xs text-white/60 tracking-[0.3em] uppercase px-3 py-1 xl:px-4 xl:py-2 border border-white/20">
                  Growth
                </span>
                <span className="text-[10px] xl:text-xs text-white/60 tracking-[0.3em] uppercase px-3 py-1 xl:px-4 xl:py-2 border border-white/20">
                  4 Years
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="relative min-h-[60vh] h-screen flex flex-col items-center justify-center px-6 py-24 bg-black snap-start">
        {/* Subtle top line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 xl:h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

        <div className="flex flex-col items-center">
          {/* Header */}
          <span className="text-[10px] xl:text-xs text-white/30 tracking-[0.5em] uppercase mb-12 xl:mb-16">Connect</span>

          {/* Email */}
          <a
            href="mailto:asgarli.farid.0@mail.ru"
            className="text-lg md:text-2xl xl:text-3xl 2xl:text-4xl text-white/70 font-light tracking-wider hover:text-white transition-colors duration-500 mb-6"
          >
            asgarli.farid.0@mail.ru
          </a>

          {/* Phone */}
          <a
            href="tel:+994508668407"
            className="text-sm md:text-base xl:text-lg text-white/40 font-light tracking-widest hover:text-white/70 transition-colors duration-500 mb-16 xl:mb-20"
          >
            +994 50 866 84 07
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-8 xl:gap-12">
            {/* GitHub */}
            <a
              href="https://github.com/farid-asgarli/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white transition-colors duration-500"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5 xl:w-6 xl:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/farid-asgarli-992ab7195/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white transition-colors duration-500"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 xl:w-6 xl:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/farid.asgarli_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white transition-colors duration-500"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5 xl:w-6 xl:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/Farid_Asgrli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white transition-colors duration-500"
              aria-label="Telegram"
            >
              <svg className="w-5 h-5 xl:w-6 xl:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
          </div>

          {/* Footer text */}
          <div className="mt-20 xl:mt-28">
            <p className="text-white/10 text-[10px] xl:text-xs tracking-[0.3em] uppercase">© 2025 Farid Asgarli</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
