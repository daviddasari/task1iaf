import { motion } from 'framer-motion';
import { useCountUp } from '../hooks/useCountUp';

const stats = [
  { number: 50000, suffix: '+', label: 'Beneficiaries Impacted' },
  { number: 28, suffix: '', label: 'States of Operation' },
  { number: 200, suffix: '+', label: 'Dedicated Volunteers' },
  { number: 20000, suffix: '+', label: 'Saplings Planted' },
  { number: 30000, suffix: '+', label: 'Interns Trained' },
];

function NumberTicker({ number, suffix }) {
  const { count, ref } = useCountUp(number, 2200);
  return (
    <span
      ref={ref}
      style={{
        fontFamily: "'Martian Mono', monospace",
        fontSize: 'clamp(2rem, 3.5vw, 3rem)',
        fontWeight: 500,
        color: '#ffffff',
        display: 'block',
        lineHeight: 1,
        marginBottom: '10px',
      }}
    >
      {count.toLocaleString()}{suffix}
    </span>
  );
}

function StatItem({ stat, index, isLast }) {
  return (
    <motion.div
      className="impact-stat-item"
      style={{
        flex: '1 1 0',
        minWidth: 0,
        textAlign: 'center',
        borderRight: isLast ? 'none' : '1px solid rgba(255,255,255,0.15)',
        padding: '0 clamp(8px, 1.5vw, 20px)',
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
    >
      <NumberTicker number={stat.number} suffix={stat.suffix} />
      <div
        style={{
          fontFamily: "'Instrument Sans', sans-serif",
          fontSize: 'clamp(0.75rem, 1.2vw, 0.875rem)',
          color: 'rgba(255, 255, 255, 0.65)',
          letterSpacing: '0.5px',
        }}
      >
        {stat.label}
      </div>
    </motion.div>
  );
}

export default function ImpactBanner() {
  return (
    <section
      id="impact"
      className="relative overflow-hidden"
      style={{
        background: 'var(--forest)',
      }}
    >
      {/* Section wrapper — centered column layout */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: 'clamp(72px, 9vw, 110px) clamp(24px, 6vw, 80px)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          style={{ width: '100%', maxWidth: '700px' }}
        >
          <div
            className="section-tag"
            style={{
              color: 'rgba(250, 246, 238, 0.6)',
              textAlign: 'center',
            }}
          >
            Our Reach
          </div>
          <h2
            className="section-heading"
            style={{
              color: 'var(--chalk)',
              borderBottomColor: 'rgba(250, 246, 238, 0.3)',
              textAlign: 'center',
              margin: '0 auto 12px',
            }}
          >
            The Numbers That Drive Us
          </h2>
          <p
            style={{
              color: 'rgba(250, 246, 238, 0.6)',
              maxWidth: '560px',
              margin: '0 auto',
              lineHeight: 1.75,
              marginTop: '12px',
              marginBottom: 'clamp(40px, 5vw, 60px)',
              textAlign: 'center',
            }}
          >
            Every number represents a real person whose life has been touched by
            the collective effort of our volunteers and partners.
          </p>
        </motion.div>

        {/* Stats row — single row of 5 on desktop */}
        <div
          className="impact-stats-row"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 'clamp(16px, 3vw, 40px)',
            flexWrap: 'nowrap',
            width: '100%',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          {stats.map((stat, i) => (
            <StatItem
              key={stat.label}
              stat={stat}
              index={i}
              isLast={i === stats.length - 1}
            />
          ))}
        </div>
      </div>

      {/* Decorative circles */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, var(--chalk) 0%, transparent 70%)',
          transform: 'translate(30%, -30%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-60 h-60 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, var(--chalk) 0%, transparent 70%)',
          transform: 'translate(-30%, 30%)',
        }}
      />

      {/* Mobile responsive: wrap at 640px, remove separators */}
      <style>{`
        @media (max-width: 640px) {
          .impact-stats-row {
            flex-wrap: wrap !important;
          }
          .impact-stat-item {
            flex: 1 1 40% !important;
            border-right: none !important;
            margin-bottom: 24px;
          }
        }
      `}</style>
    </section>
  );
}
