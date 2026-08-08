export default function ReportCard(){
    return (
        <div className="absolute" style={{right: '3%', bottom: '3%', zIndex: 20, width:240, transform: 'rotate(4deg)'}}>
            <div style={{ animation: 'float-up 9s ease-in-out 0.6s infinite' }}>
          <div className="glass p-4" style={{ width: 240 }}>
            <div className="flex gap-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(93,174,255,0.12)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="#5DAEFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="#5DAEFF" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-semibold" style={{ color: '#0B132B' }}>Report Received</div>
                <div className="text-xs mt-0.5 leading-relaxed" style={{ color: '#6B7280' }}>"Your lights are on in the parking lot!"</div>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <span className="text-xs font-medium" style={{ color: '#5DAEFF' }}>CA · 8LMX941</span>
                  <span style={{ color: '#D1D5DB' }}>·</span>
                  <span className="text-xs" style={{ color: '#9CA3AF' }}>2 min ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}