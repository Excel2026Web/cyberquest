export default function Experts() {
  return (
    <section id="experts" className="relative z-10 flex flex-col items-center w-full px-4 py-16 pb-24">
      {/* Title Section */}
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="font-bebas-neue flex flex-col uppercase items-center">
          <span className="text-xl sm:text-2xl tracking-widest text-[#6FEF44] mb-2 font-mono">EXPERTS</span>
          <span className="text-3xl sm:text-4xl md:text-5xl tracking-wider text-white">Learn From Security Researchers</span>
        </h2>
        {/* Decorative underline */}
        <div className="mt-4 flex items-center gap-2">
          <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-[#6FEF44]"></div>
          <div className="h-[2px] w-8 bg-[#6FEF44]"></div>
          <div className="h-[2px] w-3 bg-[#6FEF44]"></div>
          <div className="h-[2px] w-1.5 bg-[#6FEF44]"></div>
        </div>
      </div>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Expert 1 */}
        <div className="relative p-[1px] group h-full">
          <div 
            className="absolute inset-0 bg-[#1b3d18] transition-colors duration-500 group-hover:bg-[#6FEF44]"
            style={{ clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)" }}
          >
            <div className="absolute top-0 left-[20%] w-[35%] h-[2px] bg-[#6FEF44] shadow-[0_0_10px_#6FEF44] opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 right-[20%] w-[25%] h-[2px] bg-[#6FEF44] shadow-[0_0_10px_#6FEF44] opacity-50 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div 
            className="relative bg-[#030904]/90 backdrop-blur-md w-full h-full p-8 flex flex-col"
            style={{ clipPath: "polygon(21px 1px, calc(100% - 1px) 1px, calc(100% - 1px) calc(100% - 21px), calc(100% - 21px) calc(100% - 1px), 1px calc(100% - 1px), 1px 21px)" }}
          >
            <h3 className="text-[#6FEF44] font-bebas-neue text-4xl sm:text-5xl tracking-wider">KRISHNADEV P</h3>
            <div className="text-white font-mono text-sm tracking-widest uppercase mb-6 opacity-90 border-l-2 border-[#6FEF44] pl-3">
              Independent Security Researcher
            </div>
            
            <p className="font-josefin-sans text-white text-base leading-relaxed mb-4">
              A security researcher recognized by NASA and the Dutch Tax Administration for responsible disclosure of security vulnerabilities.
            </p>
            <p className="font-josefin-sans text-white text-base leading-relaxed mb-8 flex-grow">
              His experience in vulnerability research brings a practical perspective to cybersecurity and security testing.
            </p>

            <div className="flex flex-wrap gap-3 mt-auto">
              <span className="border border-[#6FEF44]/50 text-[#6FEF44] px-4 py-1.5 text-[11px] sm:text-xs font-mono tracking-widest uppercase bg-[#6FEF44]/10 rounded-sm">
                NASA Hall of Fame
              </span>
              <span className="border border-[#6FEF44]/50 text-[#6FEF44] px-4 py-1.5 text-[11px] sm:text-xs font-mono tracking-widest uppercase bg-[#6FEF44]/10 rounded-sm">
                Responsible Disclosure
              </span>
            </div>
          </div>
        </div>

        {/* Expert 2 */}
        <div className="relative p-[1px] group h-full">
          <div 
            className="absolute inset-0 bg-[#1b3d18] transition-colors duration-500 group-hover:bg-[#6FEF44]"
            style={{ clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))" }}
          >
            <div className="absolute top-0 right-[20%] w-[35%] h-[2px] bg-[#6FEF44] shadow-[0_0_10px_#6FEF44] opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 left-[20%] w-[25%] h-[2px] bg-[#6FEF44] shadow-[0_0_10px_#6FEF44] opacity-50 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div 
            className="relative bg-[#030904]/90 backdrop-blur-md w-full h-full p-8 flex flex-col"
            style={{ clipPath: "polygon(1px 1px, calc(100% - 21px) 1px, calc(100% - 1px) 21px, calc(100% - 1px) calc(100% - 1px), 21px calc(100% - 1px), 1px calc(100% - 21px))" }}
          >
            <h3 className="text-[#6FEF44] font-bebas-neue text-4xl sm:text-5xl tracking-wider">JERIN MANOJ</h3>
            <div className="text-white font-mono text-sm tracking-widest uppercase mb-6 opacity-90 border-l-2 border-[#6FEF44] pl-3">
              Cybersecurity Researcher
            </div>
            
            <p className="font-josefin-sans text-white text-base leading-relaxed flex-grow">
              With experience in cybersecurity consulting and security analysis, Jerin brings an industry-oriented perspective to cybersecurity and defensive security practices.
            </p>

            <div className="flex flex-wrap gap-3 mt-8 mt-auto">
              <span className="border border-[#6FEF44]/50 text-[#6FEF44] px-4 py-1.5 text-[11px] sm:text-xs font-mono tracking-widest uppercase bg-[#6FEF44]/10 rounded-sm">
                Security Analysis
              </span>
              <span className="border border-[#6FEF44]/50 text-[#6FEF44] px-4 py-1.5 text-[11px] sm:text-xs font-mono tracking-widest uppercase bg-[#6FEF44]/10 rounded-sm">
                Consulting
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
