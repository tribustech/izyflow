import React from 'react';
import { Icon, icons, StatusBar, Header, BigStat, QRPattern } from '../components/primitives.jsx';
import { member } from '../data/fixtures.js';

export default function MembershipScreen({ go }) {
  return (
    <div className="app-screen">
      <StatusBar/>
      <Header
        title="Membership"
        sub="Your key to the club"
        left={<div className="icon-btn" onClick={() => go('home')}><Icon d={icons.chevronLeft} size={18}/></div>}
      />
      <div className="scroll" style={{ paddingBottom: 24 }}>
        <div style={{ padding: '8px 20px 24px', perspective: 1000 }}>
          <div className="member-card metallic" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
              <div>
                <div className="font-display" style={{ fontSize: 18, letterSpacing: '0.18em', color: '#e8e6df' }}>YZYFLOW</div>
                <div style={{ fontSize: 9, letterSpacing: '0.3em', color: '#9c988e', marginTop: 2 }}>CHOPPERS · BUCURESTI</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className="font-display" style={{ fontSize: 11, letterSpacing: '0.16em', color: '#d8a13a' }}>● ACTIVE</div>
                <div style={{ fontSize: 9, letterSpacing: '0.18em', color: '#9c988e', marginTop: 4 }}>SINCE 03/24</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, position: 'relative', zIndex: 1 }}>
              <div style={{ width: 44, height: 34, borderRadius: 5, background: 'linear-gradient(135deg,#d8a13a,#9c7a1e 60%,#5a4a14)', display: 'grid', placeItems: 'center', position: 'relative' }}>
                <svg viewBox="0 0 44 34" style={{ position: 'absolute', inset: 0 }}>
                  <path d="M0 17h14M30 17h14M22 0v8M22 26v8M14 8v18M30 8v18M14 8h16M14 26h16" stroke="rgba(0,0,0,0.4)" strokeWidth="0.6" fill="none"/>
                </svg>
              </div>
              <div className="emboss" style={{ fontSize: 22, letterSpacing: '0.12em', color: '#d8d4cc' }}>4911 0072 ····</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', position: 'relative', zIndex: 1 }}>
              <div>
                <div style={{ fontSize: 9, letterSpacing: '0.18em', color: '#9c988e' }}>MEMBER</div>
                <div className="emboss" style={{ fontSize: 16, marginTop: 4, color: '#e8e6df', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{member.name}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 9, letterSpacing: '0.18em', color: '#9c988e' }}>RENEWS</div>
                <div className="emboss" style={{ fontSize: 14, marginTop: 4, color: '#e8e6df' }}>03 / 27</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ padding: '0 20px 20px' }}>
          <div className="card" style={{ padding: 18, display: 'flex', gap: 16, alignItems: 'center' }}>
            <div style={{ width: 96, height: 96, background: '#fff', borderRadius: 8, padding: 6, flex: '0 0 auto' }}>
              <QRPattern/>
            </div>
            <div style={{ flex: 1 }}>
              <div className="font-display" style={{ fontSize: 18 }}>Tap at the shop</div>
              <div className="muted" style={{ fontSize: 12, marginTop: 6, lineHeight: 1.5 }}>Show this QR at checkout for 15% off parts & equipment.</div>
              <div className="font-mono red" style={{ fontSize: 11, marginTop: 10, letterSpacing: '0.06em' }}>YZY-A48-MIH-2027</div>
            </div>
          </div>
        </div>

        <div style={{ padding: '0 20px 20px' }}>
          <div className="card" style={{ padding: 18, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0 }}>
            <BigStat label="Rides logged" value={String(member.rides)}/>
            <BigStat label="Services" value={String(member.services)} sep/>
            <BigStat label="Rallies" value={String(member.rallies)} sep/>
          </div>
        </div>

        <div style={{ padding: '0 20px 8px' }}><div className="sec-title">Member perks</div></div>
        <div style={{ padding: '8px 20px 0', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {member.perks.map((p, i) => (
            <div key={i} className="card" style={{ padding: 14, display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(176,33,18,0.18)', color: 'var(--yz-red)', display: 'grid', placeItems: 'center', flex: '0 0 auto' }}>
                <Icon d={icons.check} size={14} stroke={2.5}/>
              </div>
              <div style={{ fontSize: 14 }}>{p}</div>
            </div>
          ))}
        </div>

        <div style={{ padding: '20px 20px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <button className="btn-primary" onClick={() => go('payment')}>Manage subscription · €18 / mo</button>
          <button className="btn-ghost">Add to Apple Wallet</button>
        </div>
      </div>
    </div>
  );
}
