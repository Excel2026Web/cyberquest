export default function Coordinators() {
  return (
    <section id="coordinators" className="relative z-10 flex flex-col items-center w-full px-4 py-8 pb-32">
      <h3 className="text-[#6FEF44] font-mono uppercase tracking-[0.2em] text-xl sm:text-2xl mb-8">Event Coordinators</h3>
      
      <div className="relative w-full max-w-4xl p-[1px]">
        {/* Outer glowing border shape */}
        <div 
          className="absolute inset-0 bg-[#1b3d18]"
          style={{
            clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 40px 100%, 20px calc(100% - 20px), 0 calc(100% - 20px), 0 20px)"
          }}
        >
          {/* Glowing accent bars */}
          <div className="absolute top-0 left-[10%] w-[15%] h-[2px] bg-[#6FEF44] shadow-[0_0_10px_#6FEF44]"></div>
          <div className="absolute top-0 right-[15%] w-[25%] h-[2px] bg-[#6FEF44] shadow-[0_0_10px_#6FEF44]"></div>
          <div className="absolute bottom-0 left-[35%] w-[30%] h-[2px] bg-[#6FEF44] shadow-[0_0_10px_#6FEF44]"></div>
        </div>
        
        {/* Inner dark container */}
        <div 
          className="relative bg-[#030904]/90 backdrop-blur-md w-full h-full p-8 sm:p-12"
          style={{
            clipPath: "polygon(21px 1px, calc(100% - 1px) 1px, calc(100% - 1px) calc(100% - 21px), calc(100% - 21px) calc(100% - 1px), 39px calc(100% - 1px), 19px calc(100% - 21px), 1px calc(100% - 21px), 1px 21px)"
          }}
        >
          {/* Coordinators Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-6 sm:mt-2">
             {/* Coordinator 1 */}
             <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:justify-center">
                <div className="shrink-0 relative w-[90px] h-[100px] flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full text-[#6FEF44]/30" viewBox="0 0 64 74" fill="none">
                    <polygon points="32,1 63,19 63,55 32,73 1,55 1,19" stroke="currentColor" strokeWidth="1" />
                  </svg>
                  <svg className="w-11 h-11 text-[#6FEF44] relative z-10" viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="22" r="8" stroke="currentColor" strokeWidth="3.5" />
                    <path d="M 14 52 C 14 36, 50 36, 50 52" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                    <line x1="14" y1="52" x2="50" y2="52" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="flex flex-col font-mono text-sm tracking-widest text-center sm:text-left mt-2 sm:mt-4">
                  <span className="text-white mb-1">VASANTH R</span>
                  <span className="text-white mb-1">CS5A</span>
                  <span className="text-[#white] opacity-80">783438490</span>
                </div>
             </div>

             {/* Coordinator 2 */}
             <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:justify-center">
                <div className="shrink-0 relative w-[90px] h-[100px] flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full text-[#6FEF44]/30" viewBox="0 0 64 74" fill="none">
                    <polygon points="32,1 63,19 63,55 32,73 1,55 1,19" stroke="currentColor" strokeWidth="1" />
                  </svg>
                  <svg className="w-11 h-11 text-[#6FEF44] relative z-10" viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="22" r="8" stroke="currentColor" strokeWidth="3.5" />
                    <path d="M 14 52 C 14 36, 50 36, 50 52" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                    <line x1="14" y1="52" x2="50" y2="52" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="flex flex-col font-mono text-sm tracking-widest text-center sm:text-left mt-2 sm:mt-4">
                  <span className="text-white mb-1">VASANTH R</span>
                  <span className="text-white mb-1">CS5A</span>
                  <span className="text-[#white] opacity-80">783438490</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
