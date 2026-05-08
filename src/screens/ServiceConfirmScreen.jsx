import React from 'react';
import { Icon, icons, StatusBar, SmallRow } from '../components/primitives.jsx';

export default function ServiceConfirmScreen({ go }) {
  return (
    <div className="app-screen">
      <StatusBar/>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 28px', textAlign: 'center' }}>
        <div style={{ width: 96, height: 96, borderRadius: '50%', background: 'rgba(176,33,18,0.14)', border: '1px solid rgba(176,33,18,0.3)', margin: '0 auto', display: 'grid', placeItems: 'center', color: 'var(--yz-red)' }}>
          <Icon d={icons.check} size={42} stroke={2.5}/>
        </div>
        <div className="h1-display" style={{ fontSize: 38, marginTop: 28 }}>You're booked.</div>
        <div className="muted" style={{ fontSize: 14, marginTop: 10, lineHeight: 1.5 }}>We'll text you a reminder the day before. Florin's got your bike.</div>
        <div className="card" style={{ marginTop: 28, padding: 18, textAlign: 'left' }}>
          <SmallRow label="Bike" value="Iron 883 · B-217-YZY"/>
          <SmallRow label="Service" value="Full service"/>
          <SmallRow label="When" value="Thu, May 13 · 10:00"/>
          <SmallRow label="Where" value="Yzyflow Choppers · Șos. Odăii 243" last/>
        </div>
        <button className="btn-primary" style={{ marginTop: 22 }} onClick={() => go('home')}>Done</button>
        <button className="btn-ghost" style={{ marginTop: 10 }}>Add to calendar</button>
      </div>
    </div>
  );
}
