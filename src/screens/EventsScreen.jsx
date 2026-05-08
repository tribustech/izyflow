import React, { useState } from 'react';
import { Icon, icons, MotoIllustration, StatusBar, Header, TabBar, Avatar } from '../components/primitives.jsx';
import { events, rides } from '../data/fixtures.js';

export default function EventsScreen({ go }) {
  const [tab, setTab] = useState('upcoming');
  return (
    <div className="app-screen">
      <StatusBar/>
      <Header
        title="Events & Rides"
        sub={`${events.length} upcoming · ${events.reduce((a, b) => a + b.going, 0)} riders`}
        right={<div className="icon-btn"><Icon d={icons.filter} size={18}/></div>}
      />
      <div style={{ padding: '0 20px', display: 'flex', gap: 24, borderBottom: '1px solid var(--yz-line)' }}>
        {['upcoming','rides','past'].map(t => (
          <div key={t} onClick={() => setTab(t)} style={{ padding: '12px 0', cursor: 'pointer', borderBottom: tab === t ? '2px solid var(--yz-red)' : '2px solid transparent', fontFamily: 'Bebas Neue', letterSpacing: '0.14em', fontSize: 14, color: tab === t ? 'var(--yz-paper)' : 'var(--yz-fog)', textTransform: 'uppercase' }}>
            {t}
          </div>
        ))}
      </div>
      <div className="scroll" style={{ paddingBottom: 24 }}>
        {tab === 'upcoming' && (
          <div style={{ padding: '16px 20px 0', display: 'flex', flexDirection: 'column', gap: 14 }}>
            {events.map((e, i) => (
              <div key={e.id} className="card" style={{ overflow: 'hidden', cursor: 'pointer' }}>
                <div style={{ position: 'relative', height: 160 }}>
                  <MotoIllustration photo={e.photo}/>
                  <div style={{ position: 'absolute', top: 12, left: 12, display: 'flex', gap: 8 }}>
                    <span className="chip solid-red">{e.tag}</span>
                    {i === 0 && <span className="chip solid-amber">FEATURED</span>}
                  </div>
                  <div style={{ position: 'absolute', top: 12, right: 12, background: '#0a0a0a', borderRadius: 10, padding: '8px 12px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div className="font-display red" style={{ fontSize: 11, letterSpacing: '0.16em' }}>{e.date.split(' ')[0].toUpperCase()}</div>
                    <div className="font-display" style={{ fontSize: 22, lineHeight: 1, color: '#fff' }}>{e.date.split(' ')[1]}</div>
                  </div>
                </div>
                <div style={{ padding: '14px 14px 0', borderTop: '1px solid var(--yz-line)' }}>
                  <div className="font-display" style={{ fontSize: 22, lineHeight: 1.05 }}>{e.title}</div>
                  <div className="muted" style={{ fontSize: 12, marginTop: 6, display: 'flex', alignItems: 'center', gap: 5 }}>
                    <Icon d={icons.mapPin} size={12}/> {e.location} · {e.time} · {e.dist}
                  </div>
                </div>
                <div style={{ padding: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex' }}>
                    {[0,1,2,3,4].map(idx => <Avatar key={idx} size={24} idx={idx} stack/>)}
                    <div className="muted" style={{ fontSize: 12, marginLeft: 8, alignSelf: 'center' }}>{e.going} going</div>
                  </div>
                  <button style={{ background: 'transparent', border: '1.5px solid var(--yz-red)', color: 'var(--yz-red)', borderRadius: 8, padding: '8px 14px', fontWeight: 700, fontSize: 12, letterSpacing: '0.06em', cursor: 'pointer' }}>RSVP</button>
                </div>
              </div>
            ))}
          </div>
        )}
        {tab === 'rides' && (
          <div style={{ padding: '16px 20px 0', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {rides.map(r => (
              <div key={r.id} className="card" style={{ padding: 14, cursor: 'pointer' }} onClick={() => go('rides')}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <span className="chip">{r.tag}</span>
                    <div className="font-display" style={{ fontSize: 19, marginTop: 8 }}>{r.title}</div>
                    <div className="muted" style={{ fontSize: 12, marginTop: 4 }}>Lead: {r.lead} · {r.riders} riders</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div className="font-display" style={{ fontSize: 18 }}>{r.km}</div>
                    <div className="muted" style={{ fontSize: 10, letterSpacing: '0.12em' }}>KM · {r.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {tab === 'past' && (
          <div style={{ padding: '40px 20px', textAlign: 'center' }}>
            <div className="muted" style={{ fontSize: 13 }}>You've been to <span className="red font-display" style={{ fontSize: 20 }}>14 events</span> with the club.</div>
            <div className="muted" style={{ fontSize: 12, marginTop: 8 }}>Bike Night & Burgers · Apr 24 · You + 109 others</div>
          </div>
        )}
      </div>
      <TabBar active="events" onChange={(t) => go(t)}/>
    </div>
  );
}
