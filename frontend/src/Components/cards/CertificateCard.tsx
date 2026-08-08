export default function CertificateCard()
{
    return (
        <div className="absolute" style={{top: '2%', left: '6%', zIndex: 20,width: 240, transform: 'rotate(-4deg)'}}>
            <div style={{ animation: 'float-drift 9s ease-in-out 0.6s infinite' }}>
            <div className="rounded-2xl p-5" style={{ width: 200, background: 'linear-gradient(135deg,#0B132B 0%,#162352 100%)', boxShadow: '0 20px 48px rgba(11,19,43,0.28)' }}>
            <div className="flex items-start justify-between mb-5">
              <div>
                <div className="text-white text-xs font-bold tracking-widest uppercase opacity-70">DriveID</div>
                <div className="text-white text-xs mt-0.5 opacity-35">Digital Certificate</div>
              </div>
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'rgba(93,174,255,0.22)' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#5DAEFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className="text-white font-bold text-lg tracking-widest font-mono">8LMX941</div>
            <div className="text-white text-xs opacity-40 mt-0.5">California · Model 3</div>
            <div className="mt-4 flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-white text-xs opacity-50">Verified Identity</span>
            </div>
          </div>
        </div>
    </div>
    );
}
