import { motion } from 'framer-motion';
import { useCountUp } from '../hooks/useCountUp';

function AnimatedGradientText({ children }) {
  return (
    <motion.span
      className="inline-block font-mono text-xs tracking-[2.5px] uppercase px-4 py-1.5 rounded-full"
      style={{
        border: '1.5px dashed var(--saffron)',
        color: 'var(--saffron)',
        background: 'rgba(212, 98, 10, 0.08)',
      }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      {children}
    </motion.span>
  );
}

function StatCard({ number, suffix, label, delay }) {
  const { count, ref } = useCountUp(number, 2000);
  return (
    <motion.div
      ref={ref}
      className="stat-chip text-center"
      style={{
        background: 'var(--aged-paper)',
        border: '1px solid var(--dust)',
        borderRadius: '4px',
        padding: '20px 16px',
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay }}
    >
      <span
        className="font-mono font-medium block"
        style={{
          color: 'var(--saffron)',
          fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
        }}
      >
        {count.toLocaleString()}{suffix}
      </span>
      <div
        className="text-xs mt-1.5 font-body"
        style={{ color: 'var(--dust)' }}
      >
        {label}
      </div>
    </motion.div>
  );
}

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{
        background: 'var(--parchment)',
        paddingTop: 'clamp(80px, 10vw, 130px)',
        paddingBottom: 'clamp(64px, 8vw, 100px)',
      }}
    >
      {/* Top spacer for fixed navbar */}
      <div style={{ height: '56px' }} />

      <motion.div
        className="section-container"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {/* Hero grid: 1fr 420px desktop, gap clamp(40px, 5vw, 72px) */}
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 420px',
            gap: 'clamp(40px, 5vw, 72px)',
            alignItems: 'start',
          }}
        >
          {/* Left content */}
          <div>
            <motion.div variants={fadeUp} style={{ marginBottom: '20px' }}>
              <AnimatedGradientText>
                Est. September 23, 2020 · Chhattisgarh, India
              </AnimatedGradientText>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display"
              style={{
                color: 'var(--ink)',
                fontVariationSettings: '"opsz" 144',
                fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
                lineHeight: 1.1,
                marginBottom: '20px',
              }}
            >
              Empowering Lives,
              <br />
              <span style={{ color: 'var(--saffron)' }}>Building</span> a Better
              India
            </motion.h1>

            <motion.p
              variants={fadeUp}
              style={{
                color: 'var(--dust)',
                fontSize: '1rem',
                lineHeight: 1.75,
                maxWidth: '520px',
                marginBottom: '48px',
              }}
            >
              InAmigos Foundation is a Section 8 non-profit operating across 28
              states, delivering education, nutrition, women empowerment, animal
              welfare, and environmental sustainability to those who need it most.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <motion.a
                href="https://rzp.io/l/kWQ87HP"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                id="hero-donate-btn"
                whileHover={{ scale: 1.02 }}
              >
                Donate Now
                <motion.span
                  className="inline-block"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  →
                </motion.span>
              </motion.a>
              <motion.a
                href="https://forms.gle/AB4c1hLaDDmtrKGU7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                id="hero-volunteer-btn"
                whileHover={{ scale: 1.02 }}
              >
                Become a Volunteer
                <motion.span
                  className="inline-block"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          </div>

          {/* Right — Stats panel: position relative, aligned to top */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 gap-4"
            style={{
              position: 'relative',
              marginTop: 0,
              alignSelf: 'start',
            }}
          >
            <StatCard number={50000} suffix="+" label="Beneficiaries Reached" delay={0.3} />
            <StatCard number={200} suffix="+" label="Active Volunteers" delay={0.42} />
            <StatCard number={28} suffix="" label="States Covered" delay={0.54} />
            <StatCard number={6} suffix="" label="Key Projects" delay={0.66} />
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative element — bottom wavy edge */}
      <div className="wavy-divider" style={{ marginTop: 'clamp(32px, 4vw, 48px)' }}>
        <svg
          viewBox="0 0 1440 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: 'auto' }}
        >
          <path
            d="M0 20 C 240 5, 480 35, 720 20 S 1200 5, 1440 20 L 1440 40 L 0 40 Z"
            fill="var(--chalk)"
            stroke="var(--dust)"
            strokeWidth="0.5"
            strokeDasharray="8 4"
          />
        </svg>
      </div>

      {/* Responsive override */}
      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
