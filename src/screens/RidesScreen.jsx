import React from 'react';
import { Icon, icons, StatusBar, Header, Avatar } from '../components/primitives.jsx';
import { directory } from '../data/fixtures.js';

export default function RidesScreen({ go }) {
  return (
    <div className="app-screen">
      <StatusBar/>
      <Header
        title="Ride planner"
        sub="May 16 · Spring opening · 84 going"
        left={<div className="icon-btn" onClick={() => go('home')}><Icon d={icons.chevronLeft} size={18}/></div>}
        right={<div className="icon-btn"><Icon d={icons.share} size={16}/></div>}
      />
      <div className="map-bg" style={{ height: 260, position: 'relative', flex: '0 0 auto', borderTop: '1px solid var(--yz-line)', borderBottom: '1px solid var(--yz-line)' }}>
        <svg viewBox="0 0 380 260" style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
          <path d="M 40 220 C 80 200, 100 160, 140 150 S 220 130, 250 90 T 340 50" fill="none" stroke="rgba(176,33,18,0.3)" strokeWidth="10" strokeLinecap="round"/>
          <path d="M 40 220 C 80 200, 100 160, 140 150 S 220 130, 250 90 T 340 50" fill="none" stroke="var(--yz-red)" strokeWidth="3" strokeLinecap="round" strokeDasharray="0"/>
          {[[40,220,'A'],[140,150,'B'],[250,90,'C'],[340,50,'D']].map(([x,y,l], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="14" fill="var(--yz-black)" stroke="var(--yz-red)" strokeWidth="2"/>
              <text x={x} y={y + 4} textAnchor="middle" fontSize="11" fontFamily="Bebas Neue" fill="#fff" fontWeight="700">{l}</text>
            </g>
          ))}
          {[[120,160],[180,140],[240,100]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="4" fill="#3ddc84">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" begin={`${i * 0.3}s`}/>
            </circle>
          ))}
        </svg>
        <div style={{ position: 'absolute', top: 14, left: 14, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)', borderRadius: 10, padding: '8px 12px' }}>
          <div className="muted" style={{ fontSize: 10, letterSpacing: '0.14em' }}>DISTANCE · ETA</div>
          <div className="font-display" style={{ fontSize: 20, marginTop: 2 }}>184 km · 3h 20m</div>
        </div>
        <div style={{ position: 'absolute', bottom: 14, right: 14, display: 'flex', gap: 6 }}>
          <div className="icon-btn" style={{ background: 'rgba(0,0,0,0.7)' }}><Icon d={icons.plus} size={16}/></div>
          <div className="icon-btn" style={{ background: 'rgba(0,0,0,0.7)' }}><Icon d="M5 12h14" size={16}/></div>
        </div>
      </div>

      <div className="scroll" style={{ paddingBottom: 24 }}>
        <div style={{ padding: '18px 20px 8px' }}><div className="sec-title">The route</div></div>
        <div style={{ padding: '8px 20px 0' }}>
          {[
            { l: 'A', t: 'Yzyflow HQ', s: '09:00 · gather', sub: 'Șos. Odăii 243' },
            { l: 'B', t: 'Comarnic — coffee', s: '10:30 · 30 min', sub: '78 km' },
            { l: 'C', t: 'Sinaia — lunch', s: '12:40 · 90 min', sub: 'Casa Pescarului' },
            { l: 'D', t: 'Bâlea Lac', s: '17:00', sub: '184 km · End point' },
          ].map((w, i, arr) => (
            <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', position: 'relative' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '0 0 auto' }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--yz-black)', border: '2px solid var(--yz-red)', display: 'grid', placeItems: 'center', fontFamily: 'Bebas Neue', fontSize: 12, fontWeight: 700 }}>{w.l}</div>
                {i < arr.length - 1 && <div style={{ width: 2, height: 36, background: 'var(--yz-line)' }}/>}
              </div>
              <div style={{ paddingTop: 2, paddingBottom: 16, flex: 1 }}>
                <div className="font-display" style={{ fontSize: 17 }}>{w.t}</div>
                <div className="muted" style={{ fontSize: 12, marginTop: 3 }}>{w.s} · {w.sub}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ padding: '12px 20px 8px' }}><div className="sec-title">Who's coming · 84 riders</div></div>
        <div style={{ padding: '8px 20px 0', display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {directory.slice(0, 6).map(m => (
            <div key={m.id} className="card" style={{ padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
              <Avatar size={28} idx={m.id.charCodeAt(1)} label={m.initials}/>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600 }}>{m.name}</div>
                <div className="muted" style={{ fontSize: 10 }}>{m.bike}</div>
              </div>
            </div>
          ))}
          <div className="card" style={{ padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 6 }}>
            <div className="muted" style={{ fontSize: 12 }}>+78 more</div>
          </div>
        </div>
      </div>

      <div style={{ padding: '14px 20px 22px', borderTop: '1px solid var(--yz-line)', display: 'flex', gap: 10 }}>
        <button className="btn-ghost" style={{ flex: 1 }}>Maybe</button>
        <button className="btn-primary" style={{ flex: 2 }}>I'm in</button>
      </div>
    </div>
  );
}
