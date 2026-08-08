export default function VehicleCard() {
  return (
    <div>

      {/* ── Vehicle Profile Card — center ── */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div style={{ animation: 'float-up 7s ease-in-out infinite' }}>
          <div className="glass p-5" style={{ width: 310 }}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold tracking-wide uppercase" style={{ color: '#9CA3AF' }}>Vehicle Profile</span>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ boxShadow: '0 0 5px #34d399' }} />
                <span className="text-xs font-medium" style={{ color: '#5DAEFF' }}>Active</span>
              </div>
            </div>
            {/* Car illustration */}
            <div className="rounded-xl flex items-center justify-center mb-4" style={{ height: 90, background: 'linear-gradient(135deg, rgba(93,174,255,0.08), rgba(93,174,255,0.18))' }}>
              <svg width="180" height="70" viewBox="0 0 180 70" fill="none">
                <rect x="10" y="36" width="160" height="24" rx="6" fill="white" opacity="0.9" />
                <path d="M38 36 Q44 16 58 14 L122 14 Q136 16 142 36Z" fill="white" opacity="0.85" />
                <path d="M44 36 Q50 21 60 18 L88 18 L88 36Z" fill="rgba(147,210,255,0.55)" />
                <path d="M90 18 L120 18 Q130 21 136 36 L90 36Z" fill="rgba(147,210,255,0.55)" />
                <circle cx="44" cy="59" r="10" fill="rgba(11,19,43,0.1)" />
                <circle cx="44" cy="59" r="7" fill="white" />
                <circle cx="44" cy="59" r="3.5" fill="rgba(93,174,255,0.4)" />
                <circle cx="136" cy="59" r="10" fill="rgba(11,19,43,0.1)" />
                <circle cx="136" cy="59" r="7" fill="white" />
                <circle cx="136" cy="59" r="3.5" fill="rgba(93,174,255,0.4)" />
                <rect x="10" y="40" width="16" height="9" rx="2" fill="rgba(255,220,80,0.8)" />
                <rect x="154" y="40" width="16" height="9" rx="2" fill="rgba(255,80,70,0.7)" />
              </svg>
            </div>
            <div className="font-semibold text-base" style={{ color: '#0B132B' }}>2023 Tesla Model 3</div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm font-mono font-medium px-2 py-0.5 rounded-md" style={{ background: 'rgba(93,174,255,0.1)', color: '#5DAEFF' }}>CA · 8LMX941</span>
              <span className="text-xs" style={{ color: '#9CA3AF' }}>Long Range AWD</span>
            </div>
            <div className="flex items-center justify-between mt-4 pt-3" style={{ borderTop: '1px solid rgba(11,19,43,0.06)' }}>
              <span className="text-xs" style={{ color: '#9CA3AF' }}>12 notifications this month</span>
              <button className="text-xs font-semibold px-3 py-1.5 rounded-lg text-white" style={{ background: 'linear-gradient(135deg,#5DAEFF,#3B9FFF)' }}>View Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
