import React from 'react';

export const Icon = ({ d, size = 22, stroke = 1.7, className = '', fill = 'none' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" className={className}>
    {typeof d === 'string' ? <path d={d} /> : d}
  </svg>
);

export const icons = {
  home: <><path d="M3 11.5 12 4l9 7.5"/><path d="M5 10v10h14V10"/></>,
  garage: <><path d="M3 21V9l9-6 9 6v12"/><path d="M3 13h18"/><rect x="6" y="15" width="12" height="6" rx="1"/></>,
  service: <><path d="M14.7 6.3a4 4 0 0 0-5.2 5.2L3 18l3 3 6.5-6.5a4 4 0 0 0 5.2-5.2l-2.6 2.6-2.4-2.4z"/></>,
  membership: <><rect x="2" y="6" width="20" height="13" rx="2"/><path d="M2 11h20"/><path d="M6 16h4"/></>,
  news: <><rect x="3" y="4" width="18" height="16" rx="1"/><path d="M7 8h10M7 12h10M7 16h6"/></>,
  events: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></>,
  profile: <><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/></>,
  bell: <><path d="M6 8a6 6 0 0 1 12 0c0 7 3 7 3 9H3c0-2 3-2 3-9"/><path d="M10 21a2 2 0 0 0 4 0"/></>,
  bike: <><circle cx="6" cy="17" r="3.5"/><circle cx="18" cy="17" r="3.5"/><path d="M6 17l4-8h4l4 8M10 9l-2-3h-2"/></>,
  plus: <><path d="M12 5v14M5 12h14"/></>,
  chevronRight: <path d="M9 6l6 6-6 6"/>,
  chevronLeft: <path d="M15 6l-6 6 6 6"/>,
  arrowRight: <><path d="M5 12h14M13 5l7 7-7 7"/></>,
  search: <><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.5-4.5"/></>,
  mapPin: <><path d="M12 22s7-7.5 7-13a7 7 0 0 0-14 0c0 5.5 7 13 7 13z"/><circle cx="12" cy="9" r="2.5"/></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  shield: <><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/></>,
  check: <path d="M5 12l5 5 9-12"/>,
  qr: <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3M21 14v3M14 21h3M21 17v4M17 17h4"/></>,
  card: <><rect x="2" y="6" width="20" height="13" rx="2"/><path d="M2 11h20"/></>,
  send: <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>,
  more: <><circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/></>,
  heart: <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.5-7 10-7 10z"/>,
  comment: <path d="M21 15a2 2 0 0 1-2 2H8l-4 4V5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2z"/>,
  share: <><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></>,
  filter: <path d="M3 5h18M6 12h12M10 19h4"/>,
  fuel: <><path d="M3 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"/><path d="M3 21h12M15 9h2a2 2 0 0 1 2 2v6a1.5 1.5 0 0 0 3 0V8l-3-3"/></>,
  speedo: <><path d="M3 14a9 9 0 0 1 18 0"/><path d="M12 14l4-4"/><circle cx="12" cy="14" r="1.5" fill="currentColor"/></>,
  wrench: <path d="M14.7 6.3a4 4 0 0 0-5.2 5.2L3 18l3 3 6.5-6.5a4 4 0 0 0 5.2-5.2l-2.6 2.6-2.4-2.4z"/>,
  road: <><path d="M5 21l3-18M19 21l-3-18M12 4v2M12 10v2M12 16v2"/></>,
  star: <path d="M12 3l2.7 5.7 6.3.9-4.5 4.4 1 6.3L12 17.3l-5.5 3 1-6.3-4.5-4.4 6.3-.9z"/>,
  settings: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1A2 2 0 1 1 4.4 17l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1A2 2 0 1 1 7 4.4l.1.1a1.7 1.7 0 0 0 1.8.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></>,
  logout: <><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/></>,
  camera: <><rect x="3" y="6" width="18" height="14" rx="2"/><circle cx="12" cy="13" r="4"/><path d="M9 6l1.5-2h3L15 6"/></>,
  download: <><path d="M12 3v12M7 10l5 5 5-5M5 21h14"/></>,
};

export const MotoIllustration = ({ photo, className = '' }) => {
  if (!photo) return <div className={`bike-photo ${className}`} style={{ minHeight: 160 }}/>;
  return (
    <div className={`bike-photo ${className}`} style={{ background: '#ffffff', position: 'relative', overflow: 'hidden', width: '100%', height: '100%' }}>
      <img src={photo} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', display: 'block' }}/>
      <div style={{ position: 'absolute', left: 14, right: 14, bottom: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center', pointerEvents: 'none' }}>
        <div style={{ fontFamily: 'Bebas Neue', fontSize: 11, letterSpacing: '0.22em', color: '#b02112' }}>YZYFLOW</div>
        <div style={{ height: 1, flex: 1, margin: '0 10px', background: 'linear-gradient(90deg, rgba(176,33,18,0.5), transparent)' }}/>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, letterSpacing: '0.14em', color: '#5a5550' }}>CHOPPERS · BUC</div>
      </div>
    </div>
  );
};

export const StatusBar = ({ tone = 'light' }) => (
  <div className="yz-statusbar" style={{ height: 54, padding: '14px 28px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flex: '0 0 auto', color: tone === 'light' ? '#fff' : '#000' }}>
    <div style={{ fontSize: 15, fontWeight: 600, fontFamily: 'system-ui', width: 80 }}>9:41</div>
    <div style={{ width: 126, flex: '0 0 auto' }}/>
    <div style={{ width: 80, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 5 }}>
      <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor"><path d="M1 7h2v3H1zM5 5h2v5H5zM9 3h2v7H9zM13 1h2v9h-2z"/></svg>
      <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor"><path d="M7.5 1A8.6 8.6 0 0 0 1 4l1 1.2A6.5 6.5 0 0 1 7.5 3a6.5 6.5 0 0 1 5.5 2.2L14 4A8.6 8.6 0 0 0 7.5 1zm0 3A5.6 5.6 0 0 0 3 6l1 1.1A4 4 0 0 1 7.5 6a4 4 0 0 1 3.5 1.1L12 6a5.6 5.6 0 0 0-4.5-2zm0 3A2.5 2.5 0 0 0 5.5 8L7.5 10 9.5 8A2.5 2.5 0 0 0 7.5 7z"/></svg>
      <svg width="25" height="11" viewBox="0 0 25 11" fill="none" stroke="currentColor" strokeWidth="0.8"><rect x="0.5" y="0.5" width="21" height="10" rx="2.5"/><rect x="2" y="2" width="16" height="7" rx="1" fill="currentColor"/><rect x="22.5" y="3.5" width="1.5" height="4" rx="0.5" fill="currentColor"/></svg>
    </div>
  </div>
);

export const Header = ({ title, left, right, sub }) => (
  <div style={{ padding: '12px 20px 18px', display: 'flex', alignItems: 'center', gap: 12, flex: '0 0 auto' }}>
    {left}
    <div style={{ flex: 1, minWidth: 0 }}>
      <div className="font-display" style={{ fontSize: 24, lineHeight: 1, letterSpacing: '0.02em' }}>{title}</div>
      {sub && <div className="muted" style={{ fontSize: 12, marginTop: 4, letterSpacing: '0.02em' }}>{sub}</div>}
    </div>
    {right}
  </div>
);

export const TabBar = ({ active, onChange }) => {
  const items = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'garage', label: 'Garage', icon: 'garage' },
    { id: 'membership', label: 'Card', icon: 'membership' },
    { id: 'events', label: 'Events', icon: 'events' },
    { id: 'profile', label: 'Profile', icon: 'profile' },
  ];
  return (
    <div className="tabbar">
      {items.map(it => (
        <div key={it.id} className={`tab ${active === it.id ? 'active' : ''}`} onClick={() => onChange(it.id)}>
          <Icon d={icons[it.icon]} size={22} stroke={active === it.id ? 2 : 1.6} />
          <div className="tab-dot"></div>
          <div>{it.label}</div>
        </div>
      ))}
    </div>
  );
};

export const Avatar = ({ size = 32, idx = 0, stack, label, photo }) => {
  const palette = ['#b02112', '#d8a13a', '#3a3a3c', '#7a1109', '#1c1c1e', '#5a5a5e'];
  const baseStyle = { width: size, height: size, borderRadius: '50%', marginLeft: stack && idx > 0 ? -8 : 0, border: '2px solid var(--yz-black)', flex: '0 0 auto', overflow: 'hidden' };
  if (photo) {
    return <div style={{ ...baseStyle, backgroundImage: `url(${photo})`, backgroundSize: 'cover', backgroundPosition: 'center 30%' }}/>;
  }
  return (
    <div style={{ ...baseStyle, background: palette[idx % palette.length], color: '#fff', display: 'grid', placeItems: 'center', fontSize: size * 0.4, fontWeight: 700 }}>
      {label || 'YZ'.slice(0, 2)}
    </div>
  );
};

export const Stat = ({ label, value, accent }) => (
  <div style={{ padding: '4px 10px', textAlign: 'center' }}>
    <div className="muted" style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase' }}>{label}</div>
    <div className="font-display" style={{ fontSize: 16, marginTop: 4, color: accent ? 'var(--yz-amber)' : 'var(--yz-paper)' }}>{value}</div>
  </div>
);

export const BigStat = ({ label, value, sep }) => (
  <div style={{ textAlign: 'center', borderLeft: sep ? '1px solid var(--yz-line)' : 'none', padding: '4px 6px' }}>
    <div className="font-display" style={{ fontSize: 22 }}>{value}</div>
    <div className="muted" style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: 4 }}>{label}</div>
  </div>
);

export const SpecRow = ({ label, value, mono }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', borderBottom: '1px solid var(--yz-line)' }}>
    <div className="muted" style={{ fontSize: 12, letterSpacing: '0.04em' }}>{label}</div>
    <div className={mono ? 'font-mono' : ''} style={{ fontSize: 13, fontWeight: 500, textAlign: 'right' }}>{value}</div>
  </div>
);

export const SmallRow = ({ label, value, last }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: last ? 'none' : '1px solid var(--yz-line)' }}>
    <div className="muted" style={{ fontSize: 12 }}>{label}</div>
    <div style={{ fontSize: 13, fontWeight: 600, textAlign: 'right' }}>{value}</div>
  </div>
);

export const ActionTile = ({ icon, label, sub, onClick }) => (
  <div className="card" onClick={onClick} style={{ padding: 14, cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 10, minHeight: 96 }}>
    <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(176,33,18,0.14)', color: 'var(--yz-red)', display: 'grid', placeItems: 'center' }}>
      <Icon d={icon} size={18}/>
    </div>
    <div>
      <div className="font-display" style={{ fontSize: 15 }}>{label}</div>
      <div className="muted" style={{ fontSize: 11, marginTop: 2 }}>{sub}</div>
    </div>
  </div>
);

export const QRPattern = () => {
  const cells = [];
  const rng = (i) => (Math.sin(i * 12.9898) * 43758.5453) % 1;
  for (let y = 0; y < 21; y++) for (let x = 0; x < 21; x++) cells.push({ x, y, on: Math.abs(rng(y * 21 + x)) > 0.55 });
  const finder = (cx, cy) => Array.from({ length: 7 * 7 }, (_, i) => {
    const x = cx + i % 7;
    const y = cy + Math.floor(i / 7);
    const o = (i % 7 === 0 || i % 7 === 6 || Math.floor(i / 7) === 0 || Math.floor(i / 7) === 6 || (Math.floor(i / 7) >= 2 && Math.floor(i / 7) <= 4 && (i % 7) >= 2 && (i % 7) <= 4));
    return { x, y, on: o };
  });
  const finders = [...finder(0, 0), ...finder(14, 0), ...finder(0, 14)];
  return (
    <svg viewBox="0 0 21 21" style={{ width: '100%', height: '100%' }}>
      {cells.filter(c => !(c.x < 7 && c.y < 7) && !(c.x > 13 && c.y < 7) && !(c.x < 7 && c.y > 13)).map((c, i) => c.on && <rect key={i} x={c.x} y={c.y} width="1" height="1" fill="#0a0a0a"/>)}
      {finders.map((c, i) => c.on && <rect key={'f' + i} x={c.x} y={c.y} width="1" height="1" fill="#0a0a0a"/>)}
    </svg>
  );
};
