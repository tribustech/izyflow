import React from 'react';
import { Icon, icons, MotoIllustration, StatusBar, Header, TabBar, Avatar } from '../components/primitives.jsx';
import { bikes, member, directory } from '../data/fixtures.js';

export default function ProfileScreen({ go }) {
  return (
    <div className="app-screen">
      <StatusBar/>
      <Header
        title="Profile"
        right={<div className="icon-btn"><Icon d={icons.settings} size={18}/></div>}
      />
      <div className="scroll" style={{ paddingBottom: 24 }}>
        <div style={{ padding: '0 20px 18px' }}>
          <div className="card" style={{ padding: 22, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, right: 0, width: 200, height: 200, background: 'radial-gradient(circle, rgba(176,33,18,0.18), transparent 60%)', pointerEvents: 'none' }}/>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, position: 'relative' }}>
              <div style={{ position: 'relative' }}>
                <div style={{ width: 76, height: 76, borderRadius: '50%', backgroundImage: `url(${member.photo})`, backgroundSize: 'cover', backgroundPosition: 'center 28%', border: '2px solid var(--yz-amber)' }}/>
                <div style={{ position: 'absolute', bottom: -2, right: -2, width: 24, height: 24, borderRadius: '50%', background: 'var(--yz-amber)', color: '#0a0a0a', display: 'grid', placeItems: 'center', border: '2px solid var(--yz-black)' }}>
                  <Icon d={icons.check} size={12} stroke={3}/>
                </div>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="h2-display" style={{ fontSize: 26 }}>{member.name}</div>
                <div className="muted" style={{ fontSize: 12, marginTop: 4 }}>{member.handle} · {member.city}</div>
                <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
                  <span className="chip red">YZYFLOW MEMBER</span>
                  <span className="chip">FOUNDING 100</span>
                </div>
              </div>
            </div>
            <div className="divider" style={{ margin: '18px 0' }}/>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
              <div style={{ textAlign: 'center' }}>
                <div className="font-display" style={{ fontSize: 22 }}>{member.rides}</div>
                <div className="muted" style={{ fontSize: 10, letterSpacing: '0.14em', marginTop: 2 }}>RIDES</div>
              </div>
              <div style={{ textAlign: 'center', borderLeft: '1px solid var(--yz-line)', borderRight: '1px solid var(--yz-line)' }}>
                <div className="font-display" style={{ fontSize: 22 }}>{member.services}</div>
                <div className="muted" style={{ fontSize: 10, letterSpacing: '0.14em', marginTop: 2 }}>SERVICES</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div className="font-display" style={{ fontSize: 22 }}>{bikes.length}</div>
                <div className="muted" style={{ fontSize: 10, letterSpacing: '0.14em', marginTop: 2 }}>BIKES</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ padding: '0 20px 8px' }}><div className="sec-title">My bikes</div></div>
        <div className="h-scroll" style={{ paddingTop: 8, paddingBottom: 8 }}>
          {bikes.map(b => (
            <div key={b.id} className="card" style={{ width: 180, cursor: 'pointer' }} onClick={() => go('bike', b.id)}>
              <div style={{ height: 90 }}><MotoIllustration photo={b.photo}/></div>
              <div style={{ padding: 10 }}>
                <div className="font-display" style={{ fontSize: 14 }}>{b.name}</div>
                <div className="muted" style={{ fontSize: 10, marginTop: 2 }}>{b.year} · last svc {b.lastService}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ padding: '12px 20px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div className="sec-title">Members you ride with</div>
          <div className="muted" style={{ fontSize: 11, letterSpacing: '0.1em' }}>SEE ALL →</div>
        </div>
        <div style={{ padding: '8px 20px 0', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {directory.slice(0, 4).map(m => (
            <div key={m.id} className="card" style={{ padding: 12, display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ position: 'relative' }}>
                <Avatar size={40} idx={m.id.charCodeAt(1)} label={m.initials}/>
                {m.online && <div style={{ position: 'absolute', bottom: 0, right: 0, width: 12, height: 12, borderRadius: '50%', background: '#3ddc84', border: '2px solid var(--yz-black)' }}/>}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{m.name}</div>
                <div className="muted" style={{ fontSize: 11, marginTop: 2 }}>{m.bike} · {m.city} · since {m.since}</div>
              </div>
              <div className="icon-btn" style={{ width: 32, height: 32 }}><Icon d={icons.send} size={14}/></div>
            </div>
          ))}
        </div>

        <div style={{ padding: '20px 20px 0' }}>
          {[
            { i: icons.bell, t: 'Notifications', s: 'Service reminders, events' },
            { i: icons.shield, t: 'Privacy & data', s: 'Manage what you share' },
            { i: icons.card, t: 'Subscription', s: '€18/mo · renews Jun 14', go: 'payment' },
            { i: icons.logout, t: 'Sign out', s: '', danger: true },
          ].map((row, i) => (
            <div key={i} onClick={() => row.go && go(row.go)} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 0', borderBottom: '1px solid var(--yz-line)', cursor: 'pointer' }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: row.danger ? 'rgba(176,33,18,0.14)' : 'rgba(255,255,255,0.04)', display: 'grid', placeItems: 'center', color: row.danger ? 'var(--yz-red)' : 'var(--yz-bone)' }}>
                <Icon d={row.i} size={16}/>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: row.danger ? 'var(--yz-red)' : 'inherit' }}>{row.t}</div>
                {row.s && <div className="muted" style={{ fontSize: 11, marginTop: 2 }}>{row.s}</div>}
              </div>
              <Icon d={icons.chevronRight} size={16} className="muted"/>
            </div>
          ))}
        </div>
      </div>
      <TabBar active="profile" onChange={(t) => go(t)}/>
    </div>
  );
}
