import { motion } from 'framer-motion';

export default function CallToAction() {
  return (
    <section
      id="join"
      className="relative overflow-hidden"
      style={{
        background: 'var(--ink)',
        paddingTop: 'clamp(80px, 9vw, 120px)',
        paddingBottom: 'clamp(80px, 9vw, 120px)',
      }}
    >
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="section-tag"
            style={{ color: 'var(--saffron)' }}
          >
            Be The Change
          </div>

          <h2
            className="section-heading mx-auto"
            style={{
              color: 'var(--chalk)',
              borderBottomColor: 'var(--saffron)',
            }}
          >
            Together, We Can Do More
          </h2>

          {/* Text max-width 680px */}
          <p
            style={{
              color: 'var(--dust)',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: 1.75,
              marginTop: '16px',
              marginBottom: 'clamp(36px, 5vw, 52px)',
            }}
          >
            Whether you donate, volunteer, or simply spread the word — every
            action counts. Join a growing community of changemakers across India.
          </p>
        </motion.div>

        {/* Buttons — gap 14px, row on desktop, stack on mobile */}
        <motion.div
          className="flex flex-wrap justify-center"
          style={{ gap: '14px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, delay: 0.14 }}
        >
          <motion.a
            href="https://rzp.io/l/kWQ87HP"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            whileHover={{ scale: 1.02 }}
            id="cta-donate-btn"
          >
            💛 Donate Now
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
            className="btn-forest"
            whileHover={{ scale: 1.02 }}
            id="cta-volunteer-btn"
          >
            🙌 Volunteer With Us
            <motion.span
              className="inline-block"
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              →
            </motion.span>
          </motion.a>

          <motion.a
            href="https://inamigosfoundation.org.in/became-volunteer"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{
              borderColor: 'var(--dust)',
              color: 'var(--chalk)',
            }}
            whileHover={{ scale: 1.02 }}
            id="cta-join-btn"
          >
            🔗 Join InAmigos
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

      {/* Decorative elements */}
      <div
        className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-5"
        style={{
          background: 'radial-gradient(circle, var(--saffron) 0%, transparent 70%)',
          transform: 'translate(-30%, -30%)',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-5"
        style={{
          background: 'radial-gradient(circle, var(--saffron) 0%, transparent 70%)',
          transform: 'translate(30%, 30%)',
        }}
      />
    </section>
  );
}
