export default function About() {
  return (
    <section id="about" className="relative z-10 flex flex-col items-center w-full px-4 py-16">
      <div className="w-full max-w-6xl rounded-3xl border border-[#1b3d18] bg-[#030904]/80 p-8 sm:p-12 backdrop-blur-sm shadow-[0_0_30px_rgba(27,61,24,0.3)]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-16">
          
          {/* Left Column: Heading */}
          <div className="flex-1">
            <h2 className="font-bebas-neue flex flex-col uppercase">
              <span className="text-2xl sm:text-3xl tracking-widest text-[#6FEF44]">What Is</span>
              <span className="text-4xl sm:text-5xl md:text-6xl tracking-wider text-[#6FEF44]">Cyberquest?</span>
            </h2>
            {/* Decorative underline */}
            <div className="mt-4 flex items-center gap-2">
              <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-[#6FEF44]"></div>
              <div className="h-[2px] w-8 bg-[#6FEF44]"></div>
              <div className="h-[2px] w-3 bg-[#6FEF44]"></div>
              <div className="h-[2px] w-1.5 bg-[#6FEF44]"></div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="flex-1 font-josefin-sans font-medium text-sm sm:text-base leading-relaxed text-white">
            <p className="mb-4">
              <strong className="text-[#6FEF44]">CyberQuest</strong> is a full-day workshop by Excel MEC designed to introduce participants to the practical side of cybersecurity. It explores Vulnerability Assessment &amp; Penetration Testing (VAPT) alongside the fundamentals of Capture The Flag (CTF) challenges.
            </p>
            <p className="mb-6">
              The workshop guides you through the core concepts of VAPT, followed by a hands-on introduction to CTFs and the strategies needed to approach and solve them.
            </p>
            <p className="text-[#6FEF44] font-semibold text-sm sm:text-base">
              The focus is simple:<br/>
              <span className="text-white">Understand the vulnerability. Think through the problem. Learn how to solve it.</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
