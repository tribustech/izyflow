import React from 'react';
import { Icon, icons, MotoIllustration, StatusBar, Header } from '../components/primitives.jsx';
import { news } from '../data/fixtures.js';

export default function NewsScreen({ go }) {
  return (
    <div className="app-screen">
      <StatusBar/>
      <Header
        title="The Workshop"
        sub="Stories, drops, builds"
        left={<div className="icon-btn" onClick={() => go('home')}><Icon d={icons.chevronLeft} size={18}/></div>}
      />
      <div className="scroll" style={{ paddingBottom: 24 }}>
        <div style={{ padding: '0 20px 16px' }}>
          <div className="card" style={{ overflow: 'hidden', cursor: 'pointer' }}>
            <div style={{ height: 200, position: 'relative' }}>
              <MotoIllustration photo="/assets/images/fat_boy_2009_after.jpg"/>
              <div style={{ position: 'absolute', top: 14, left: 14 }}>
                <span className="chip solid-red">Featured · Build</span>
              </div>
            </div>
            <div style={{ padding: '16px 18px', borderTop: '1px solid var(--yz-line)' }}>
              <div className="h2-display" style={{ fontSize: 26, lineHeight: 1.05 }}>{news[0].title}</div>
              <div className="muted" style={{ fontSize: 12, marginTop: 8 }}>{news[0].date} · {news[0].read} read · by Yzy</div>
            </div>
          </div>
        </div>

        <div style={{ padding: '4px 20px 8px' }}><div className="sec-title">Latest</div></div>

        {news.slice(1).concat(news).map((n, i) => (
          <div key={i} style={{ padding: '0 20px 12px' }}>
            <div className="card" style={{ display: 'flex', cursor: 'pointer' }}>
              <div style={{ width: 110, flex: '0 0 auto' }}><MotoIllustration photo={n.photo}/></div>
              <div style={{ padding: 12, flex: 1, minWidth: 0 }}>
                <span className="chip red" style={{ fontSize: 9 }}>{n.cat}</span>
                <div className="font-display" style={{ fontSize: 16, lineHeight: 1.1, marginTop: 8 }}>{n.title}</div>
                <div className="muted" style={{ fontSize: 11, marginTop: 8 }}>{n.date} · {n.read} read</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
