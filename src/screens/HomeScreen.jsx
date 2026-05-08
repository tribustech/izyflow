import React from 'react';
import { Icon, icons, MotoIllustration, StatusBar, Header, Stat, ActionTile, Avatar } from '../components/primitives.jsx';
import { bikes, events, news } from '../data/fixtures.js';

export default function HomeScreen({ go }) {
  const myBike = bikes[0];
  const upcoming = events[0];
  return (
    <div className="app-screen">
      <StatusBar/>
      <Header
        title="YZYFLOW"
        sub="CHOPPERS · BUCURESTI"
        right={
          <div style={{ display: 'flex', gap: 8 }}>
            <div className="icon-btn" onClick={() => go('news')}><Icon d={icons.bell} size={18}/></div>
            <div className="icon-btn" onClick={() => go('chat')}><Icon d={icons.comment} size={18}/></div>
          </div>
        }
      />
      <div className="scroll" style={{ paddingBottom: 20 }}>
        <div style={{ padding: '14px 20px 22px' }}>
          <div className="muted" style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Member · A48 · since 03/24</div>
          <div className="h2-display" style={{ marginTop: 8, fontSize: 30, lineHeight: 1.05 }}>Hello, Teutzu.</div>
        </div>

        <div style={{ padding: '0 20px' }}>
          <div className="card" onClick={() => go('bike', myBike.id)} style={{ cursor: 'pointer' }}>
            <div style={{ position: 'relative' }}>
              <MotoIllustration photo={myBike.photo}/>
              <div style={{ position: 'absolute', top: 12, left: 12, right: 12, display: 'flex', justifyContent: 'space-between' }}>
                <span className="chip" style={{ background: '#0a0a0a', color: '#fff', border: '1px solid rgba(0,0,0,0.2)' }}>Daily ride</span>
                <span className="chip solid-red"><span className="status-dot live"></span> ACTIVE</span>
              </div>
            </div>
            <div style={{ padding: '16px 16px 4px', borderTop: '1px solid var(--yz-line)' }}>
              <div className="font-display" style={{ fontSize: 26, lineHeight: 1 }}>{myBike.name}</div>
              <div className="bone" style={{ fontSize: 12, marginTop: 4, letterSpacing: '0.06em' }}>{myBike.year} · {myBike.plate}</div>
            </div>
            <div style={{ padding: 14, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0, borderTop: '1px solid var(--yz-line)', marginTop: 10 }}>
              <Stat label="Last service" value={myBike.lastService} accent/>
              <Stat label="Insurance" value="Apr 2027"/>
              <Stat label="ITP" value="Aug 2026"/>
            </div>
          </div>
        </div>

        <div style={{ padding: '20px 20px 6px' }}>
          <div className="sec-title">Quick actions</div>
        </div>
        <div style={{ padding: '8px 20px 0', display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 10 }}>
          <ActionTile icon={icons.wrench} label="Book service" sub="At Yzyflow Choppers" onClick={() => go('service')}/>
          <ActionTile icon={icons.qr} label="Show card" sub="Tap at the shop" onClick={() => go('membership')}/>
          <ActionTile icon={icons.road} label="Plan a ride" sub="With the club" onClick={() => go('rides')}/>
          <ActionTile icon={icons.card} label="Subscription" sub="€18 · Mar 14" onClick={() => go('payment')}/>
        </div>

        <div style={{ padding: '24px 20px 6px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div className="sec-title">Up next</div>
          <div className="muted" style={{ fontSize: 11, letterSpacing: '0.1em', cursor: 'pointer' }} onClick={() => go('events')}>SEE ALL →</div>
        </div>
        <div style={{ padding: '8px 20px 0' }}>
          <div className="card" onClick={() => go('events')} style={{ display: 'flex', cursor: 'pointer' }}>
            <div style={{ width: 84, flex: '0 0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRight: '1px solid var(--yz-line)', background: 'linear-gradient(180deg,#1a0808,#0a0a0a)' }}>
              <div className="font-display red" style={{ fontSize: 14, letterSpacing: '0.18em' }}>MAY</div>
              <div className="font-display" style={{ fontSize: 38, lineHeight: 1 }}>{upcoming.date.split(' ')[1]}</div>
              <div className="muted" style={{ fontSize: 10, marginTop: 2 }}>{upcoming.time}</div>
            </div>
            <div style={{ flex: 1, padding: 14, minWidth: 0 }}>
              <span className="chip" style={{ marginBottom: 8 }}>{upcoming.tag}</span>
              <div className="font-display" style={{ fontSize: 20, marginTop: 6 }}>{upcoming.title}</div>
              <div className="muted" style={{ fontSize: 12, marginTop: 6, display: 'flex', alignItems: 'center', gap: 5 }}>
                <Icon d={icons.mapPin} size={13}/> {upcoming.location}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 12 }}>
                <div style={{ display: 'flex' }}>
                  {[0,1,2,3,4].map(i => <Avatar key={i} size={22} idx={i} stack/>)}
                  <div className="muted" style={{ fontSize: 12, marginLeft: 6, alignSelf: 'center' }}>{upcoming.going} going</div>
                </div>
                <div className="red font-display" style={{ fontSize: 13, letterSpacing: '0.12em' }}>RSVP →</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ padding: '24px 20px 6px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div className="sec-title">From the shop</div>
          <div className="muted" style={{ fontSize: 11, letterSpacing: '0.1em', cursor: 'pointer' }} onClick={() => go('news')}>SEE ALL →</div>
        </div>
        <div className="h-scroll" style={{ paddingTop: 8, paddingBottom: 8 }}>
          {news.map(n => (
            <div key={n.id} className="card" style={{ width: 240, cursor: 'pointer' }} onClick={() => go('news')}>
              <MotoIllustration photo={n.photo}/>
              <div style={{ padding: 12 }}>
                <span className="chip red" style={{ fontSize: 9 }}>{n.cat}</span>
                <div className="font-display" style={{ fontSize: 16, lineHeight: 1.1, marginTop: 8 }}>{n.title}</div>
                <div className="muted" style={{ fontSize: 11, marginTop: 8 }}>{n.date} · {n.read} read</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
