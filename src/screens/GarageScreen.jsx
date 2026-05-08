import React from 'react';
import { Icon, icons, MotoIllustration, StatusBar, Header, TabBar, BigStat } from '../components/primitives.jsx';
import { bikes } from '../data/fixtures.js';

export default function GarageScreen({ go }) {
  return (
    <div className="app-screen">
      <StatusBar/>
      <Header
        title="My Garage"
        sub={`${bikes.length} bikes · 14 services logged`}
        right={<div className="icon-btn"><Icon d={icons.plus} size={20}/></div>}
      />
      <div className="scroll" style={{ paddingBottom: 24 }}>
        <div style={{ padding: '0 20px 16px' }}>
          <div className="card" style={{ padding: 16, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0 }}>
            <BigStat label="Services" value="14"/>
            <BigStat label="This year" value="3" sep/>
            <BigStat label="Lifetime spend" value="42K lei" sep/>
          </div>
        </div>

        {bikes.map((b) => (
          <div key={b.id} style={{ padding: '0 20px 14px' }} onClick={() => go('bike', b.id)}>
            <div className="card" style={{ cursor: 'pointer', position: 'relative' }}>
              <div style={{ position: 'relative' }}>
                <MotoIllustration photo={b.photo}/>
                {b.inService && (
                  <div style={{ position: 'absolute', top: 12, left: 12 }}>
                    <span className="chip solid-amber"><span className="status-dot due" style={{ background: '#0a0a0a' }}></span> IN SERVICE</span>
                  </div>
                )}
                <div style={{ position: 'absolute', top: 12, right: 12 }}>
                  <span className="chip" style={{ background: 'rgba(10,10,10,0.85)', color: '#fff', backdropFilter: 'blur(8px)' }}>{b.year}</span>
                </div>
              </div>
              <div style={{ padding: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <div className="font-display" style={{ fontSize: 24, lineHeight: 1 }}>{b.name}</div>
                    <div className="muted" style={{ fontSize: 12, marginTop: 4 }}>{b.model} · {b.color}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div className="font-display" style={{ fontSize: 18, color: 'var(--yz-bone)' }}>{b.daysSince}d</div>
                    <div className="muted" style={{ fontSize: 10, letterSpacing: '0.1em' }}>SINCE SVC</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 8, marginTop: 12, flexWrap: 'wrap' }}>
                  <span className="chip">{b.engine.split(' ')[0]}</span>
                  <span className="chip">{b.plate}</span>
                  <span className="chip">Last svc: {b.lastService}</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div style={{ padding: '0 20px 8px' }}>
          <div className="card" style={{ padding: 18, borderStyle: 'dashed', borderColor: 'rgba(255,255,255,0.14)', display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer' }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(176,33,18,0.14)', color: 'var(--yz-red)', display: 'grid', placeItems: 'center' }}>
              <Icon d={icons.plus} size={22}/>
            </div>
            <div>
              <div className="font-display" style={{ fontSize: 17 }}>Register a new bike</div>
              <div className="muted" style={{ fontSize: 12, marginTop: 2 }}>Photos, VIN, plate · we'll pull the spec</div>
            </div>
          </div>
        </div>
      </div>
      <TabBar active="garage" onChange={(t) => go(t)}/>
    </div>
  );
}
