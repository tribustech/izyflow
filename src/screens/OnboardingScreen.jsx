import React, { useState } from 'react';
import { MotoIllustration, StatusBar } from '../components/primitives.jsx';

const slides = [
  { eyebrow: 'YZYFLOW · CHOPPERS', title: 'Welcome to the club.', body: 'Romanian motorcycle culture, your bike, our shop — in one app.', cta: 'Get started', photo: `${import.meta.env.BASE_URL}assets/images/road_king_army.jpg` },
  { eyebrow: 'YOUR GARAGE', title: 'Every bike. Every service. One place.', body: 'Register your machines, upload photos, track every wrench turned.', cta: 'Continue', photo: `${import.meta.env.BASE_URL}assets/images/ultra_cvo_2016.jpg` },
  { eyebrow: 'AT THE SHOP', title: 'Book service in 30 seconds.', body: 'Pick a slot at Yzyflow Choppers. We confirm the same day.', cta: 'Continue', photo: `${import.meta.env.BASE_URL}assets/images/fat_boy_2009.jpg` },
  { eyebrow: 'THE COMMUNITY', title: 'Ride together.', body: 'Bike nights, group rides, rallies — never miss the next one.', cta: 'Join the club', photo: `${import.meta.env.BASE_URL}assets/images/street_glide_2015.jpg` },
];

export default function OnboardingScreen({ go }) {
  const [step, setStep] = useState(0);
  const s = slides[step];
  const last = step === slides.length - 1;
  return (
    <div className="app-screen hero-onboard">
      <StatusBar/>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '20px 24px 32px' }}>
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 96 }}>
          <img src={`${import.meta.env.BASE_URL}assets/logo.svg`} alt="Yzyflow" style={{ height: 88, filter: 'brightness(0) invert(1)' }}/>
          {!last && <div className="muted" style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', fontSize: 13, letterSpacing: '0.1em', cursor: 'pointer' }} onClick={() => go('home')}>SKIP</div>}
        </div>

        <div style={{ position: 'relative', height: 240, marginTop: 20 }}>
          <MotoIllustration photo={s.photo}/>
          <div style={{ position: 'absolute', inset: 0, borderRadius: 0, background: 'radial-gradient(ellipse at center, transparent 30%, rgba(10,10,10,0.95))' }}/>
        </div>

        <div>
          <div className="font-display red" style={{ fontSize: 12, letterSpacing: '0.2em' }}>{s.eyebrow}</div>
          <div className="h1-display" style={{ fontSize: 44, marginTop: 12, lineHeight: 0.94 }}>{s.title}</div>
          <div className="muted" style={{ fontSize: 15, lineHeight: 1.5, marginTop: 14, maxWidth: 320 }}>{s.body}</div>
        </div>

        <div>
          <div style={{ display: 'flex', gap: 6, marginBottom: 18 }}>
            {slides.map((_, i) => (
              <div key={i} style={{ height: 3, flex: i === step ? 2 : 1, borderRadius: 2, background: i === step ? 'var(--yz-red)' : 'rgba(255,255,255,0.18)', transition: 'all 0.3s' }}/>
            ))}
          </div>
          <button className="btn-primary" onClick={() => last ? go('home') : setStep(step + 1)}>
            {s.cta}
          </button>
          {step === 0 && (
            <div className="muted" style={{ textAlign: 'center', fontSize: 12, marginTop: 14 }}>Already a member? <span className="red" style={{ fontWeight: 600 }}>Sign in</span></div>
          )}
        </div>
      </div>
    </div>
  );
}
