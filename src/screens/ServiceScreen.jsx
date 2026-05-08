import React, { useState } from 'react';
import { Icon, icons, MotoIllustration, StatusBar, Header } from '../components/primitives.jsx';
import { bikes, serviceTypes } from '../data/fixtures.js';

export default function ServiceScreen({ go }) {
  const [bike, setBike] = useState(bikes[0].id);
  const [type, setType] = useState('t1');
  const [date, setDate] = useState(13);
  const [slot, setSlot] = useState('10:00');
  const slots = ['09:00', '10:00', '11:30', '14:00', '15:30', '17:00'];
  const days = [11,12,13,14,15,16,17,18,19,20];
  const dayLabels = ['M','T','W','T','F','S','S','M','T','W'];

  return (
    <div className="app-screen">
      <StatusBar/>
      <Header
        title="Book service"
        sub="At Yzyflow Choppers · Șos. Odăii 243"
        left={<div className="icon-btn" onClick={() => go('home')}><Icon d={icons.chevronLeft} size={18}/></div>}
      />
      <div className="scroll" style={{ paddingBottom: 100 }}>
        <div style={{ padding: '0 20px 8px' }}><div className="sec-title">Which bike</div></div>
        <div className="h-scroll" style={{ paddingTop: 8, paddingBottom: 6 }}>
          {bikes.map(b => (
            <div key={b.id} onClick={() => setBike(b.id)} className="card" style={{ width: 200, cursor: 'pointer', borderColor: bike === b.id ? 'var(--yz-red)' : 'var(--yz-line)', borderWidth: bike === b.id ? 1.5 : 1 }}>
              <div style={{ height: 80 }}><MotoIllustration photo={b.photo}/></div>
              <div style={{ padding: 10 }}>
                <div className="font-display" style={{ fontSize: 14 }}>{b.name}</div>
                <div className="muted" style={{ fontSize: 11, marginTop: 2 }}>{b.plate} · last svc {b.lastService}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ padding: '20px 20px 8px' }}><div className="sec-title">What's the work</div></div>
        <div style={{ padding: '8px 20px 0', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {serviceTypes.map(t => (
            <div key={t.id} onClick={() => setType(t.id)} className="card" style={{ padding: 14, display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', borderColor: type === t.id ? 'var(--yz-red)' : 'var(--yz-line)' }}>
              <div style={{ width: 38, height: 38, borderRadius: 10, background: type === t.id ? 'rgba(176,33,18,0.18)' : 'rgba(255,255,255,0.05)', color: type === t.id ? 'var(--yz-red)' : 'var(--yz-bone)', display: 'grid', placeItems: 'center' }}>
                <Icon d={icons[t.icon]} size={18}/>
              </div>
              <div style={{ flex: 1 }}>
                <div className="font-display" style={{ fontSize: 15 }}>{t.label}</div>
                <div className="muted" style={{ fontSize: 11, marginTop: 2 }}>{t.sub}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className="font-display" style={{ fontSize: 13, color: t.price === 'Free' ? '#3ddc84' : 'var(--yz-bone)' }}>{t.price}</div>
              </div>
              <div style={{ width: 18, height: 18, borderRadius: '50%', border: type === t.id ? '5px solid var(--yz-red)' : '1.5px solid var(--yz-line)', flex: '0 0 auto' }}/>
            </div>
          ))}
        </div>

        <div style={{ padding: '20px 20px 8px' }}><div className="sec-title">Pick a day · May 2026</div></div>
        <div className="h-scroll" style={{ paddingTop: 8, paddingBottom: 4 }}>
          {days.map((d, i) => (
            <div key={d} onClick={() => setDate(d)} style={{ width: 56, padding: '12px 0', borderRadius: 12, textAlign: 'center', cursor: 'pointer', background: date === d ? 'var(--yz-red)' : 'rgba(255,255,255,0.04)', border: '1px solid', borderColor: date === d ? 'var(--yz-red)' : 'var(--yz-line)' }}>
              <div style={{ fontSize: 10, letterSpacing: '0.14em', color: date === d ? 'rgba(255,255,255,0.7)' : 'var(--yz-fog)' }}>{dayLabels[i]}</div>
              <div className="font-display" style={{ fontSize: 22, marginTop: 4, color: date === d ? '#fff' : 'var(--yz-paper)' }}>{d}</div>
            </div>
          ))}
        </div>

        <div style={{ padding: '20px 20px 8px' }}><div className="sec-title">Available slots</div></div>
        <div style={{ padding: '8px 20px 0', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
          {slots.map(s => (
            <div key={s} onClick={() => setSlot(s)} style={{ padding: 14, borderRadius: 10, border: '1px solid', borderColor: slot === s ? 'var(--yz-red)' : 'var(--yz-line)', textAlign: 'center', cursor: 'pointer', background: slot === s ? 'rgba(176,33,18,0.14)' : 'transparent' }}>
              <div className="font-display" style={{ fontSize: 16, color: slot === s ? '#fff' : 'var(--yz-paper)' }}>{s}</div>
            </div>
          ))}
        </div>

        <div style={{ padding: '20px 20px 8px' }}><div className="sec-title">Notes for the tech (optional)</div></div>
        <div style={{ padding: '8px 20px 0' }}>
          <textarea className="input" rows={3} placeholder="Anything we should know? Strange noise, oil leak, custom parts…" defaultValue=""/>
        </div>
      </div>
      <div style={{ padding: '14px 20px 22px', borderTop: '1px solid var(--yz-line)', background: 'rgba(10,10,10,0.96)', backdropFilter: 'blur(20px)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
          <div className="muted" style={{ fontSize: 12 }}>Estimated</div>
          <div className="font-display" style={{ fontSize: 16 }}>480 – 720 lei</div>
        </div>
        <button className="btn-primary" onClick={() => go('serviceConfirm')}>Confirm Thu, May {date} · {slot}</button>
      </div>
    </div>
  );
}
