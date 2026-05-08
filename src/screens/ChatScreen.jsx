import React from 'react';
import { Icon, icons, StatusBar, Header, Avatar } from '../components/primitives.jsx';
import { directory } from '../data/fixtures.js';

const previewSnippets = ['"sent you the dyno chart"', '"see you Saturday 🤘"', '"that exhaust though"', '"how was Sinaia?"', '"got the part in"', '"club shirt size?"'];
const previewTimes = ['9:21', 'yesterday', 'Mon', 'Apr 28', 'Apr 22', 'Apr 14'];

export default function ChatScreen({ go }) {
  return (
    <div className="app-screen">
      <StatusBar/>
      <Header
        title="Club chat"
        sub={`${directory.filter(m => m.online).length} online`}
        left={<div className="icon-btn" onClick={() => go('home')}><Icon d={icons.chevronLeft} size={18}/></div>}
        right={<div className="icon-btn"><Icon d={icons.search} size={18}/></div>}
      />
      <div className="scroll" style={{ paddingBottom: 24 }}>
        <div style={{ padding: '0 20px 14px' }}>
          <div className="card" style={{ padding: 14, display: 'flex', alignItems: 'center', gap: 12, borderColor: 'rgba(176,33,18,0.4)', background: 'linear-gradient(120deg,#1a0808,#0a0a0a)' }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--yz-red)', display: 'grid', placeItems: 'center' }}>
              <span className="font-display" style={{ fontSize: 16, color: '#fff' }}>YZ</span>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700 }}>Yzyflow Club</div>
              <div className="muted" style={{ fontSize: 12, marginTop: 2 }}><span className="red font-display" style={{ letterSpacing: '0.06em' }}>FLORIN</span> · ”Anyone bringing a sidecar to Sunday's ride?”</div>
            </div>
            <span className="chip red" style={{ fontSize: 10 }}>12</span>
          </div>
        </div>

        <div style={{ padding: '0 20px 6px' }}><div className="sec-title">Direct messages</div></div>
        {directory.map(m => {
          const i = m.id.charCodeAt(1) % 6;
          return (
            <div key={m.id} style={{ padding: '0 20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderBottom: '1px solid var(--yz-line)' }}>
                <div style={{ position: 'relative' }}>
                  <Avatar size={40} idx={m.id.charCodeAt(1)} label={m.initials}/>
                  {m.online && <div style={{ position: 'absolute', bottom: 0, right: 0, width: 11, height: 11, borderRadius: '50%', background: '#3ddc84', border: '2px solid var(--yz-black)' }}/>}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ fontSize: 14, fontWeight: 600 }}>{m.name}</div>
                    <div className="muted" style={{ fontSize: 10 }}>{previewTimes[i]}</div>
                  </div>
                  <div className="muted" style={{ fontSize: 12, marginTop: 3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{previewSnippets[i]}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
