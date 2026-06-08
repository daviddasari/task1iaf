import { motion } from 'framer-motion';

const credentials = [
  {
    icon: '📜',
    title: 'Section 8',
    desc: 'Licensed non-profit by the Central Government of India',
  },
  {
    icon: '💰',
    title: '80G & 12A',
    desc: 'Tax-exempt donations with full transparency & accountability',
  },
  {
    icon: '🏢',
    title: 'CSR-1',
    desc: 'Eligible for corporate CSR partnerships and funding',
  },
  {
    icon: '🇮🇳',
    title: 'NITI Aayog',
    desc: 'Aligned with India\'s national development goals',
  },
  {
    icon: '🏆',
    title: 'ISO 9001:2015',
    desc: 'IAF certified for high-quality operational standards',
  },
];

export default function Credentials() {
  return (
    <section
      style={{
        background: 'var(--chalk)',
        paddingTop: 'clamp(64px, 8vw, 112px)',
        paddingBottom: 'clamp(64px, 8vw, 112px)',
      }}
      id="credentials"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-tag">Trust & Recognition</div>
          <h2 className="section-heading">Certified, Transparent & Accountable</h2>
          <p
            style={{
              color: 'var(--dust)',
              maxWidth: '560px',
              lineHeight: 1.75,
              marginTop: '8px',
              marginBottom: 'clamp(36px, 5vw, 52px)',
            }}
          >
            Our certifications ensure every rupee you donate goes exactly where it
            should — with full government oversight and tax benefits.
          </p>
        </motion.div>

        {/* auto-fit grid wraps gracefully */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '20px',
          }}
        >
          {credentials.map((cred, i) => (
            <motion.div
              key={cred.title}
              className="text-center"
              style={{
                background: 'var(--parchment)',
                border: '1.5px dashed var(--dust)',
                borderRadius: '4px',
                padding: '28px 20px',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 8px 24px rgba(28, 20, 16, 0.08)',
              }}
              id={`cred-card-${i}`}
            >
              <div className="text-3xl mb-3">{cred.icon}</div>
              <h4
                className="font-display text-base mb-2"
                style={{ color: 'var(--ink)' }}
              >
                {cred.title}
              </h4>
              <p
                className="text-xs"
                style={{ color: 'var(--dust)', lineHeight: 1.6 }}
              >
                {cred.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
