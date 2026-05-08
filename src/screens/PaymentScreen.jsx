import React from 'react';
import { Icon, icons, StatusBar, Header } from '../components/primitives.jsx';

export default function PaymentScreen({ go }) {
  return (
    <div className="app-screen">
      <StatusBar/>
      <Header
        title="Subscription"
        sub="Auto-renews · paused or cancel anytime"
        left={<div className="icon-btn" onClick={() => go('membership')}><Icon d={icons.chevronLeft} size={18}/></div>}
      />
      <div className="scroll" style={{ paddingBottom: 24 }}>
        <div style={{ padding: '0 20px 16px' }}>
          <div className="card" style={{ padding: 20, background: 'linear-gradient(160deg,#1a0808 0%,#0a0a0a 70%)', borderColor: 'rgba(176,33,18,0.4)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div className="font-display red" style={{ fontSize: 12, letterSpacing: '0.2em' }}>● ACTIVE</div>
                <div className="font-display" style={{ fontSize: 28, marginTop: 8 }}>Yzyflow Member</div>
                <div className="muted" style={{ fontSize: 12, marginTop: 4 }}>Member #YZY-A48 · since Mar 2024</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className="emboss" style={{ fontSize: 32, color: 'var(--yz-paper)' }}>€18</div>
                <div className="muted" style={{ fontSize: 11, letterSpacing: '0.1em', marginTop: 2 }}>PER MONTH</div>
              </div>
            </div>
            <div className="divider" style={{ margin: '18px 0' }}/>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <div className="muted" style={{ fontSize: 10, letterSpacing: '0.14em' }}>NEXT CHARGE</div>
                <div className="font-display" style={{ fontSize: 16, marginTop: 4 }}>Jun 14, 2026</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className="muted" style={{ fontSize: 10, letterSpacing: '0.14em' }}>RENEWS UNTIL</div>
                <div className="font-display" style={{ fontSize: 16, marginTop: 4 }}>Mar 14, 2027</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ padding: '0 20px 8px' }}><div className="sec-title">Payment method</div></div>
        <div style={{ padding: '8px 20px 0' }}>
          <div className="card" style={{ padding: 14, display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 44, height: 30, borderRadius: 5, background: 'linear-gradient(135deg,#1a3a8c,#0a1a4a)', display: 'grid', placeItems: 'center', color: '#fff', fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', flex: '0 0 auto' }}>VISA</div>
            <div style={{ flex: 1 }}>
              <div className="font-mono" style={{ fontSize: 13, letterSpacing: '0.06em' }}>···· ···· ···· 4382</div>
              <div className="muted" style={{ fontSize: 11, marginTop: 4 }}>Expires 11/28 · BCR</div>
            </div>
            <div className="muted" style={{ fontSize: 12 }}>Change</div>
          </div>
        </div>

        <div style={{ padding: '20px 20px 8px' }}><div className="sec-title">Billing history</div></div>
        <div style={{ padding: '8px 20px 0' }}>
          {['May 14 2026','Apr 14 2026','Mar 14 2026','Feb 14 2026','Jan 14 2026'].map((d, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 0', borderBottom: '1px solid var(--yz-line)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span className="status-dot paid" style={{ width: 8, height: 8 }}/>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>Yzyflow Membership</div>
                  <div className="muted" style={{ fontSize: 11, marginTop: 2 }}>{d} · Visa ····4382</div>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className="font-display" style={{ fontSize: 14 }}>€18.00</div>
                <div className="muted" style={{ fontSize: 10 }}>Paid</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ padding: '24px 20px 0' }}>
          <button className="btn-ghost" style={{ borderColor: 'rgba(255,255,255,0.1)', color: 'var(--yz-fog)' }}>Pause subscription</button>
          <div className="muted" style={{ textAlign: 'center', fontSize: 11, marginTop: 14 }}>Need help? Florin: 0739 993 569</div>
        </div>
      </div>
    </div>
  );
}
