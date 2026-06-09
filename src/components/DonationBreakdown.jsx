import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const impacts = [
  {
    threshold: 100,
    emoji: '🐾',
    project: 'Project Jeev',
    color: '#2C5F3A',
    singular: 'Feeds 2 stray animals for a full day',
    plural: (n) => `Feeds ${n * 2} stray animals for a full day`,
    unit: 100,
  },
  {
    threshold: 200,
    emoji: '🍛',
    project: 'Project Seva',
    color: '#D4620A',
    singular: 'Provides 4 nutritious meals to the underprivileged',
    plural: (n) => `Provides ${n * 4} nutritious meals`,
    unit: 200,
  },
  {
    threshold: 500,
    emoji: '📚',
    project: 'Project BachpanShala',
    color: '#3B5FA0',
    singular: 'School supplies for 1 underprivileged child',
    plural: (n) => `School supplies for ${n} children`,
    unit: 500,
  },
  {
    threshold: 1000,
    emoji: '🌱',
    project: 'Project Prakriti',
    color: '#2C5F3A',
    singular: 'Plants 3 saplings — one for each decade of India',
    plural: (n) => `Plants ${n * 3} saplings across India`,
    unit: 1000,
  },
  {
    threshold: 2000,
    emoji: '👩‍💼',
    project: 'Project Udaan',
    color: '#7A3FA0',
    singular: 'Funds 1 skill workshop session for rural women',
    plural: (n) => `Funds ${n} skill workshop sessions`,
    unit: 2000,
  },
  {
    threshold: 5000,
    emoji: '🎓',
    project: 'Project Vikas',
    color: '#A0622C',
    singular: 'Sponsors a full internship training module',
    plural: (n) => `Sponsors ${n} internship training modules`,
    unit: 5000,
  },
];

export default function DonationBreakdown() {
  const [amount, setAmount] = useState(500);
  const [amountKey, setAmountKey] = useState(0);
  const sliderRef = useRef(null);

  const handleSliderChange = (e) => {
    const val = Number(e.target.value);
    setAmount(val);
    setAmountKey((k) => k + 1);
  };

  // Update the slider fill on every change
  useEffect(() => {
    if (sliderRef.current) {
      const pct = ((amount - 100) / (5000 - 100)) * 100;
      sliderRef.current.style.setProperty('--slider-pct', `${pct}%`);
    }
  }, [amount]);

  const visibleImpacts = impacts.filter((item) => amount >= item.threshold);

  return (
    <section
      id="donation-breakdown"
      style={{
        background: 'var(--parchment)',
        paddingTop: 'clamp(72px, 9vw, 110px)',
        paddingBottom: 'clamp(72px, 9vw, 110px)',
      }}
    >
      <motion.div
        className="section-container"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {/* ─── Section Header (centered) ─── */}
        <div style={{ textAlign: 'center' }}>
          <div className="section-tag">Make It Count</div>
          <h2
            className="section-heading"
            style={{ margin: '0 auto 12px' }}
          >
            See Exactly Where Your Money Goes
          </h2>
          <p
            style={{
              color: 'var(--dust)',
              maxWidth: '560px',
              margin: '0 auto',
              lineHeight: 1.75,
              marginTop: '12px',
              marginBottom: 'clamp(48px, 6vw, 72px)',
            }}
          >
            Every rupee is tracked, accounted for, and directed to the people
            and causes that need it most.
          </p>
        </div>

        {/* ─── Slider ─── */}
        <div style={{ textAlign: 'center' }}>
          <p
            style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: '0.85rem',
              color: 'var(--dust)',
              marginBottom: '12px',
            }}
          >
            Move the slider to see your impact
          </p>

          <input
            ref={sliderRef}
            type="range"
            min={100}
            max={5000}
            step={100}
            value={amount}
            onChange={handleSliderChange}
            className="donation-slider"
            id="donation-slider"
            style={{
              width: 'clamp(280px, 60%, 560px)',
              display: 'block',
              margin: '0 auto',
            }}
          />

          {/* Amount display */}
          <motion.div
            key={amountKey}
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            style={{ marginTop: '24px' }}
          >
            <span
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: 'clamp(2.8rem, 5vw, 4rem)',
                color: 'var(--saffron)',
                display: 'block',
                lineHeight: 1.1,
              }}
            >
              ₹{amount.toLocaleString('en-IN')}
            </span>
            <span
              style={{
                fontFamily: "'Martian Mono', monospace",
                fontSize: '0.75rem',
                color: 'var(--dust)',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                marginTop: '6px',
                display: 'block',
              }}
            >
              Your Donation
            </span>
          </motion.div>
        </div>

        {/* ─── Impact Cards ─── */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '16px',
            maxWidth: '900px',
            margin: '48px auto 0',
          }}
        >
          <AnimatePresence mode="popLayout">
            {visibleImpacts.map((item) => {
              const count = Math.floor(amount / item.unit);
              const text = count > 1 ? item.plural(count) : item.singular;
              return (
                <motion.div
                  key={item.project}
                  layout
                  initial={{ opacity: 0, scale: 0.92, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: 12 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  style={{
                    width: 'clamp(240px, 28%, 300px)',
                    padding: '24px 22px',
                    background: 'var(--chalk)',
                    border: '1.5px dashed var(--dust)',
                    borderRadius: '4px',
                    borderTop: `3px solid ${item.color}`,
                    position: 'relative',
                  }}
                >
                  {/* Project tag row */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <span style={{ fontSize: '1.6rem' }}>{item.emoji}</span>
                    <span
                      style={{
                        fontFamily: "'Martian Mono', monospace",
                        fontSize: '0.7rem',
                        textTransform: 'uppercase',
                        letterSpacing: '1.5px',
                        color: item.color,
                      }}
                    >
                      {item.project}
                    </span>
                  </div>

                  {/* Impact text — re-mount on count change */}
                  <motion.p
                    key={count}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      fontFamily: "'Fraunces', serif",
                      fontSize: '1.05rem',
                      color: 'var(--ink)',
                      marginTop: '10px',
                      lineHeight: 1.45,
                    }}
                  >
                    {text}
                  </motion.p>

                  {/* Quantity chip */}
                  <div
                    style={{
                      fontFamily: "'Martian Mono', monospace",
                      fontSize: '0.72rem',
                      color: 'var(--dust)',
                      marginTop: '8px',
                    }}
                  >
                    ×{count} with your ₹{amount.toLocaleString('en-IN')}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* ─── Receipt Note ─── */}
        <div
          style={{
            border: '1.5px dashed var(--dust)',
            padding: '16px 28px',
            maxWidth: '420px',
            margin: '36px auto 0',
            borderRadius: '2px',
            background: 'transparent',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontFamily: "'Martian Mono', monospace",
              fontSize: '0.72rem',
              color: 'var(--dust)',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            100% of donations go directly to projects
          </div>
          <div
            style={{
              fontFamily: "'Martian Mono', monospace",
              fontSize: '0.68rem',
              color: 'var(--dust)',
              opacity: 0.7,
              marginTop: '6px',
            }}
          >
            80G certified · Tax deductible · NITI Aayog registered
          </div>
        </div>

        {/* ─── Donate CTA ─── */}
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <motion.a
            href="https://rzp.io/l/kWQ87HP"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            whileHover={{ scale: 1.02 }}
            style={{ padding: '14px 36px', height: 'auto' }}
            id="breakdown-donate-btn"
          >
            Donate ₹{amount.toLocaleString('en-IN')} Now{' '}
            <motion.span
              className="inline-block"
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              →
            </motion.span>
          </motion.a>
        </div>
      </motion.div>

      {/* ─── Custom Slider Styles ─── */}
      <style>{`
        .donation-slider {
          -webkit-appearance: none;
          appearance: none;
          height: 3px;
          background: linear-gradient(
            to right,
            var(--saffron) 0%,
            var(--saffron) var(--slider-pct, 8.16%),
            var(--aged-paper) var(--slider-pct, 8.16%),
            var(--aged-paper) 100%
          );
          border-radius: 0;
          outline: none;
          cursor: pointer;
        }

        .donation-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          background: var(--ink);
          border-radius: 2px;
          cursor: grab;
          border: none;
          box-shadow: none;
        }

        .donation-slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: var(--ink);
          border-radius: 2px;
          cursor: grab;
          border: none;
          box-shadow: none;
        }

        .donation-slider::-moz-range-track {
          height: 3px;
          background: var(--aged-paper);
          border-radius: 0;
          border: none;
        }

        .donation-slider::-moz-range-progress {
          height: 3px;
          background: var(--saffron);
          border-radius: 0;
        }

        .donation-slider:active::-webkit-slider-thumb {
          cursor: grabbing;
        }

        .donation-slider:active::-moz-range-thumb {
          cursor: grabbing;
        }
      `}</style>
    </section>
  );
}
