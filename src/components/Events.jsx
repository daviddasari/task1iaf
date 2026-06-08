import { motion } from 'framer-motion';

const events = [
  {
    id: 'water-day',
    emoji: '💧',
    date: 'March 22, 2025',
    title: 'World Water Day 2025',
    desc: 'Highlighting the importance of water conservation and collective action to ensure clean water for all communities.',
    gradient: 'linear-gradient(135deg, #2C5F3A 0%, #3d8a52 100%)',
  },
  {
    id: 'happiness-day',
    emoji: '😊',
    date: 'March 20, 2025',
    title: 'International Day of Happiness 2025',
    desc: 'Spreading joy, positivity, and well-being through engaging activities and inspiring community discussions.',
    gradient: 'linear-gradient(135deg, #D4620A 0%, #e8873a 100%)',
  },
  {
    id: 'science-day',
    emoji: '🔬',
    date: 'February 11, 2025',
    title: 'Women & Girls in Science Day',
    desc: 'Celebrating the achievements of women and girls in science, inspiring the next generation of changemakers.',
    gradient: 'linear-gradient(135deg, #3D2B1F 0%, #6b4f3a 100%)',
  },
];

export default function Events() {
  return (
    <section
      id="events"
      style={{
        background: 'var(--parchment)',
        paddingTop: 'clamp(64px, 8vw, 112px)',
        paddingBottom: 'clamp(64px, 8vw, 112px)',
      }}
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-tag">Recent Events</div>
          <h2 className="section-heading">Campaigns & Highlights</h2>
          <p
            style={{
              color: 'var(--dust)',
              maxWidth: '560px',
              lineHeight: 1.75,
              marginTop: '8px',
              marginBottom: 'clamp(36px, 5vw, 56px)',
            }}
          >
            From water conservation drives to celebrating science — our events
            create awareness and community action.
          </p>
        </motion.div>

        {/* 3-col grid for events */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              className="overflow-hidden"
              style={{
                background: 'var(--aged-paper)',
                border: '1.5px solid var(--dust)',
                borderRadius: '4px',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 12px 32px rgba(28, 20, 16, 0.1)',
              }}
              id={`event-card-${event.id}`}
            >
              {/* Event image area — height: 180px */}
              <div
                className="flex items-center justify-center text-5xl"
                style={{
                  background: event.gradient,
                  height: '180px',
                  width: '100%',
                }}
              >
                {event.emoji}
              </div>

              {/* Card body padding: 20px 22px 26px */}
              <div style={{ padding: '20px 22px 26px' }}>
                {/* date mb 6px */}
                <div
                  className="font-mono text-xs font-medium"
                  style={{ color: 'var(--saffron)', marginBottom: '6px' }}
                >
                  {event.date}
                </div>
                {/* title mb 8px */}
                <h4
                  className="font-display text-base"
                  style={{
                    color: 'var(--ink)',
                    fontVariationSettings: '"opsz" 36',
                    marginBottom: '8px',
                  }}
                >
                  {event.title}
                </h4>
                <p
                  className="text-sm"
                  style={{ color: 'var(--dust)', lineHeight: 1.6 }}
                >
                  {event.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
