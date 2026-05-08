import React, { useState } from 'react';
import { Icon, icons, MotoIllustration, StatusBar, SpecRow } from '../components/primitives.jsx';
import { bikes, serviceHistory } from '../data/fixtures.js';

export default function BikeDetailScreen({ go, params }) {
  const b = bikes.find(x => x.id === params) || bikes[0];
  const [tab, setTab] = useState('specs');
  return (
    <div className="app-screen">
      <StatusBar/>
      <div style={{ position: 'relative' }}>
        <MotoIllustration photo={b.photo}/>
        <div style={{ position: 'absolute', inset: 0, padding: '12px 16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="icon-btn" onClick={() => go('garage')} style={{ background: 'rgba(10,10,10,0.85)', backdropFilter: 'blur(8px)', color: '#fff' }}><Icon d={icons.chevronLeft} size={18}/></div>
            <div style={{ display: 'flex', gap: 8 }}>
              <div className="icon-btn" style={{ background: 'rgba(10,10,10,0.85)', backdropFilter: 'blur(8px)', color: '#fff' }}><Icon d={icons.share} size={16}/></div>
              <div className="icon-btn" style={{ background: 'rgba(10,10,10,0.85)', backdropFilter: 'blur(8px)', color: '#fff' }}><Icon d={icons.more} size={18}/></div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            {[0,1,2,3].map(i => <div key={i} style={{ flex: 1, height: 3, borderRadius: 2, background: i === 0 ? '#0a0a0a' : 'rgba(10,10,10,0.25)' }}/>)}
          </div>
        </div>
      </div>
      <div className="scroll" style={{ paddingBottom: 24 }}>
        <div style={{ padding: '18px 20px 10px' }}>
          <div className="muted" style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase' }}>{b.year} · {b.model}</div>
          <div className="h1-display" style={{ fontSize: 44, marginTop: 4 }}>{b.name}</div>
          <div className="muted" style={{ fontSize: 13, marginTop: 6 }}>{b.color} · {b.plate}</div>
        </div>

        <div style={{ padding: '8px 20px 14px' }}>
          <div className="card" style={{ padding: 18, display: 'flex', gap: 18, alignItems: 'center' }}>
            <div style={{ position: 'relative', width: 92, height: 92, flex: '0 0 auto' }}>
              <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
                <circle cx="50" cy="50" r="42" fill="none" className="ring-track" strokeWidth="6"/>
                <circle cx="50" cy="50" r="42" fill="none" className="ring-progress" strokeWidth="6" strokeLinecap="round" strokeDasharray="263.9" strokeDashoffset="58"/>
              </svg>
              <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', textAlign: 'center' }}>
                <div>
                  <div className="font-display" style={{ fontSize: 22, lineHeight: 1 }}>{b.daysSince}</div>
                  <div className="muted" style={{ fontSize: 9, letterSpacing: '0.12em' }}>DAYS</div>
                </div>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div className="font-display" style={{ fontSize: 16 }}>Last serviced {b.lastService}</div>
              <div className="muted" style={{ fontSize: 12, marginTop: 4, lineHeight: 1.5 }}>Most riders book the next visit around 90 days. We've got an opening Thursday.</div>
              <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
                <button className="btn-primary" style={{ padding: '10px 14px', fontSize: 13, width: 'auto' }} onClick={() => go('service')}>Book it</button>
                <button className="btn-ghost" style={{ padding: '9px 14px', fontSize: 13, width: 'auto' }}>Remind later</button>
              </div>
            </div>
          </div>
        </div>

        <div style={{ padding: '0 20px', display: 'flex', gap: 24, borderBottom: '1px solid var(--yz-line)', marginBottom: 16 }}>
          {['specs','history','documents'].map(t => (
            <div key={t} onClick={() => setTab(t)} style={{ padding: '12px 0', cursor: 'pointer', borderBottom: tab === t ? '2px solid var(--yz-red)' : '2px solid transparent', fontFamily: 'Bebas Neue', letterSpacing: '0.14em', fontSize: 14, color: tab === t ? 'var(--yz-paper)' : 'var(--yz-fog)', textTransform: 'uppercase' }}>
              {t}
            </div>
          ))}
        </div>

        {tab === 'specs' && (
          <div style={{ padding: '0 20px' }}>
            <SpecRow label="Engine" value={b.engine}/>
            <SpecRow label="Year" value={String(b.year)}/>
            <SpecRow label="Last service" value={b.lastService}/>
            <SpecRow label="Color" value={b.color}/>
            <SpecRow label="Plate" value={b.plate}/>
            <SpecRow label="VIN" value={b.vin} mono/>
            <SpecRow label="Registered with Yzyflow" value={b.registered}/>
            <SpecRow label="Insurance (RCA)" value="Allianz · Apr 2027"/>
            <SpecRow label="ITP" value="Aug 2026"/>
          </div>
        )}

        {tab === 'history' && (
          <div style={{ padding: '0 20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {serviceHistory.map((s) => (
                <div key={s.id} className="card" style={{ padding: 14 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <div className="muted" style={{ fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase' }}>{s.date}</div>
                      <div className="font-display" style={{ fontSize: 17, marginTop: 4 }}>{s.title}</div>
                    </div>
                    <span className="chip" style={{ background: 'rgba(61,220,132,0.12)', color: '#3ddc84', borderColor: 'rgba(61,220,132,0.25)' }}>{s.status}</span>
                  </div>
                  <div className="muted" style={{ fontSize: 12, marginTop: 8 }}>By {s.tech} · {s.cost}</div>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 10 }}>
                    {s.items.map(it => <span key={it} className="chip" style={{ fontSize: 10 }}>{it}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 'documents' && (
          <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { t: 'Talon (Vehicle Registration)', d: 'PDF · 2.1 MB', exp: '—' },
              { t: 'RCA Insurance', d: 'Allianz · PDF · 0.8 MB', exp: 'Expires Apr 2027' },
              { t: 'CASCO', d: 'Groupama · PDF · 1.2 MB', exp: 'Expires Apr 2027' },
              { t: 'ITP Inspection', d: 'PDF · 0.4 MB', exp: 'Expires Aug 2026' },
              { t: 'Purchase invoice', d: 'PDF · 0.6 MB', exp: 'Mar 2024' },
            ].map((doc, i) => (
              <div key={i} className="card" style={{ padding: 14, display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 40, height: 48, borderRadius: 6, background: 'linear-gradient(180deg,#1c1c1e,#0a0a0a)', border: '1px solid var(--yz-line)', display: 'grid', placeItems: 'center' }}>
                  <span className="font-display red" style={{ fontSize: 10, letterSpacing: '0.14em' }}>PDF</span>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{doc.t}</div>
                  <div className="muted" style={{ fontSize: 11, marginTop: 3 }}>{doc.d} · {doc.exp}</div>
                </div>
                <Icon d={icons.download} size={18} className="muted"/>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
