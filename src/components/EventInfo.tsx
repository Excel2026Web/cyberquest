export default function EventInfo() {
  return (
    <>
      {/* ── Event Details Section ── */}
      <section id="event-info" className="relative z-10 flex flex-col items-center w-full px-4 py-8 pb-24">
        <div className="relative w-full max-w-5xl p-[1px]">
          {/* Outer glowing border shape */}
          <div 
            className="absolute inset-0 bg-[#1b3d18]"
            style={{
              clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 60px 100%, 40px calc(100% - 20px), 0 calc(100% - 20px), 0 20px)"
            }}
          >
            {/* Glowing accent bars */}
            <div className="absolute top-0 left-[20%] w-[35%] h-[2px] bg-[#6FEF44] shadow-[0_0_10px_#6FEF44,0_0_15px_#6FEF44]"></div>
            <div className="absolute bottom-0 left-[25%] w-[15%] h-[2px] bg-[#6FEF44] shadow-[0_0_10px_#6FEF44,0_0_15px_#6FEF44]"></div>
            <div className="absolute bottom-0 right-[25%] w-[10%] h-[2px] bg-[#6FEF44] shadow-[0_0_10px_#6FEF44,0_0_15px_#6FEF44]"></div>
            <div className="absolute top-[20%] left-0 w-[2px] h-[25%] bg-[#6FEF44] shadow-[0_0_10px_#6FEF44,0_0_15px_#6FEF44]"></div>
          </div>
          
          {/* Inner dark container */}
          <div 
            className="relative bg-[#030904]/90 backdrop-blur-md w-full h-full p-6 sm:p-10"
            style={{
              clipPath: "polygon(21px 1px, calc(100% - 1px) 1px, calc(100% - 1px) calc(100% - 21px), calc(100% - 21px) calc(100% - 1px), 59px calc(100% - 1px), 39px calc(100% - 21px), 1px calc(100% - 21px), 1px 21px)"
            }}
          >
            {/* Top Row: Date and Format */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              
              {/* Event Date */}
              <div className="flex-1">
                <div className="text-[#6FEF44] uppercase text-sm tracking-[0.2em] font-mono mb-4 flex items-center gap-2">
                  {/* Decorative Icon */}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="10" y="2" width="4" height="4" transform="rotate(45 12 4)" />
                    <rect x="4" y="10" width="4" height="4" transform="rotate(45 6 12)" />
                    <rect x="16" y="10" width="4" height="4" transform="rotate(45 18 12)" />
                    <rect x="10" y="18" width="4" height="4" transform="rotate(45 12 20)" />
                    <rect x="10" y="10" width="4" height="4" transform="rotate(45 12 12)" />
                  </svg>
                  Event Date
                </div>
                
                <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
                  {/* Calendar Icon */}
                  <svg className="w-10 h-10 text-[#6FEF44] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                    <circle cx="8" cy="15" r="1" fill="currentColor" stroke="none"></circle>
                    <circle cx="12" cy="15" r="1" fill="currentColor" stroke="none"></circle>
                    <circle cx="16" cy="15" r="1" fill="currentColor" stroke="none"></circle>
                  </svg>
                  
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="text-4xl sm:text-5xl font-bebas-neue text-[#6FEF44] leading-none mt-1">26</div>
                    <div className="flex flex-col text-xs sm:text-sm font-josefin-sans leading-tight text-white uppercase tracking-wider">
                      <span>September 2025</span>
                      <span>10:00 AM — 5:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Format */}
              <div className="md:w-[35%] md:pl-8 md:border-l border-[#1b3d18]">
                <div className="text-[#6FEF44] uppercase text-sm tracking-[0.2em] font-mono mb-3">
                  Format
                </div>
                <div className="text-white font-josefin-sans text-lg uppercase tracking-wider">
                  Full-Day Workshop
                </div>
              </div>

            </div>

            {/* Divider line */}
            <div className="w-full h-[1px] bg-[#1b3d18] my-8"></div>

            {/* Bottom Row: Location, Registration */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              
              {/* Location */}
              <div>
                <div className="text-[#6FEF44] uppercase text-sm tracking-[0.2em] font-mono mb-3">
                  Location
                </div>
                <div className="text-white font-josefin-sans text-base leading-relaxed uppercase tracking-wider">
                  ASA HALL<br/>Nippon Centre
                </div>
              </div>

              {/* Registration */}
              <div className="sm:border-l sm:border-[#1b3d18] sm:pl-8">
                <div className="text-[#6FEF44] uppercase text-sm tracking-[0.2em] font-mono mb-2">
                  Registration
                </div>
                <div className="text-white font-bebas-neue text-4xl sm:text-5xl flex items-center gap-2 mt-1">
                  <span className="text-[#6FEF44] text-3xl sm:text-4xl mb-1">₹</span> 599
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
