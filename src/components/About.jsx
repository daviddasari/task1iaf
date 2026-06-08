import { motion } from 'framer-motion';

const credentials = [
  'Section 8 Registered',
  '80G & 12A Certified',
  'CSR-1 Registered',
  'NITI Aayog',
  'IAF ISO 9001:2015',
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: 'var(--chalk)',
        paddingTop: 'clamp(72px, 9vw, 120px)',
        paddingBottom: 'clamp(64px, 8vw, 112px)',
      }}
    >
      <div className="section-container">
        {/* Grid: 55fr 45fr with clamp gap, align-items: start */}
        <div
          className="about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '55fr 45fr',
            gap: 'clamp(40px, 5vw, 80px)',
            alignItems: 'start',
          }}
        >
          {/* Left text block — full width, no max-width constraint */}
          <motion.div
            style={{ width: '100%', maxWidth: 'unset' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            <motion.div variants={fadeUp} className="section-tag">
              Who We Are
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="section-heading"
              style={{ marginBottom: '24px' }}
            >
              A Certified Non-Profit Driving Nationwide Change
            </motion.h2>

            <motion.p
              variants={fadeUp}
              style={{
                color: 'var(--dust)',
                lineHeight: 1.75,
                marginTop: '0',
              }}
            >
              Founded by <strong style={{ color: 'var(--ink)' }}>Mr. Govind Shukla</strong>,
              InAmigos Foundation is registered under{' '}
              <strong style={{ color: 'var(--ink)' }}>Section 8</strong> of the Companies Act,
              licensed by the Central Government. We operate transparently with
              80G & 12A certifications, ensuring tax-exempt benefits for every donor.
            </motion.p>

            <motion.p
              variants={fadeUp}
              style={{
                color: 'var(--dust)',
                lineHeight: 1.75,
                marginTop: '16px',
              }}
            >
              Our work spans food distribution, education, women's empowerment,
              animal care, environmental conservation, and skill development — all
              aligned with national development goals through NITI Aayog registration.
            </motion.p>
          </motion.div>

          {/* Right — credentials pills, aligned to top of heading */}
          <motion.div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              alignContent: 'start',
              alignSelf: 'start',
              paddingTop: '0',
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {credentials.map((cred, i) => (
              <motion.span
                key={cred}
                className="cred-pill"
                variants={fadeUp}
                style={{
                  marginTop: i % 2 === 1 ? '12px' : '0',
                }}
              >
                ✔ {cred}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Responsive override */}
      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
