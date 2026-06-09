import { motion } from 'framer-motion';

const galleryItems = [
  {
    src: 'https://inamigosfoundation.org.in/public/storage/gallery/1743051485.jpg',
    caption: 'Field Activity',
    gridArea: { gridColumn: '1 / 7', gridRow: '1 / 2' },
  },
  {
    src: 'https://inamigosfoundation.org.in/public/storage/gallery/1743051466.jpg',
    caption: 'Community Outreach',
    gridArea: { gridColumn: '7 / 10', gridRow: '1 / 2' },
  },
  {
    src: 'https://inamigosfoundation.org.in/public/storage/gallery/1743051449.jpg',
    caption: 'Project Prakriti',
    gridArea: { gridColumn: '10 / 13', gridRow: '1 / 2' },
  },
  {
    src: 'https://inamigosfoundation.org.in/public/storage/gallery/1743051438.jpg',
    caption: 'Project Seva',
    gridArea: { gridColumn: '1 / 5', gridRow: '2 / 3' },
  },
  {
    src: 'https://inamigosfoundation.org.in/public/storage/events/1738238109.jpg',
    caption: 'World Water Day 2025',
    gridArea: { gridColumn: '5 / 9', gridRow: '2 / 3' },
  },
  {
    src: 'https://inamigosfoundation.org.in/public/storage/events/1738135259.jpeg',
    caption: 'Happiness Drive 2025',
    gridArea: { gridColumn: '9 / 13', gridRow: '2 / 3' },
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

export default function Gallery() {
  return (
    <section
      id="gallery"
      style={{
        background: 'var(--chalk)',
        paddingTop: 'clamp(72px, 9vw, 110px)',
        paddingBottom: 'clamp(72px, 9vw, 110px)',
      }}
    >
      <div className="section-container">
        {/* Section Header — left-aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 'clamp(32px, 4vw, 48px)' }}
        >
          <div className="section-tag">Our Work on the Ground</div>
          <h2 className="section-heading">Moments That Matter</h2>
          <p
            style={{
              color: 'var(--dust)',
              maxWidth: '560px',
              lineHeight: 1.75,
              marginTop: '12px',
            }}
          >
            A glimpse into the lives we've touched, the hands we've held, and
            the change we're building — one moment at a time.
          </p>
          <div
            style={{
              width: '80px',
              borderBottom: '2px dashed var(--saffron)',
              marginTop: '16px',
            }}
          />
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="gallery-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className="gallery-item"
              variants={itemVariants}
              viewport={{ once: true, margin: '-60px' }}
              style={item.gridArea}
            >
              <img
                src={item.src}
                alt={item.caption}
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="gallery-caption">{item.caption}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button — right-aligned */}
        <motion.div
          style={{ marginTop: '32px', textAlign: 'right' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <motion.a
            href="https://inamigosfoundation.org.in/gallery"
            target="_blank"
            rel="noopener noreferrer"
            className="gallery-view-link"
            whileHover="hover"
          >
            View Full Gallery{' '}
            <motion.span
              className="inline-block"
              variants={{ hover: { x: 4 } }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>

      {/* Scoped Styles */}
      <style>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-template-rows: 280px 280px;
          gap: 14px;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 4px;
          border: 1.5px dashed transparent;
          transition: border-color 0.3s ease;
          cursor: pointer;
        }

        .gallery-item:hover {
          border-color: var(--dust);
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 4px;
          display: block;
          transition: transform 0.45s ease;
        }

        .gallery-item:hover img {
          transform: scale(1.04);
        }

        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(28, 20, 8, 0.65) 0%,
            transparent 55%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: flex-end;
          padding: 16px;
          border-radius: 4px;
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        .gallery-caption {
          font-family: 'Martian Mono', monospace;
          font-size: 0.72rem;
          color: #fff;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .gallery-view-link {
          color: var(--saffron);
          font-family: 'Instrument Sans', sans-serif;
          font-weight: 500;
          text-decoration: none;
          font-size: 0.95rem;
          transition: text-decoration 0.2s;
        }

        .gallery-view-link:hover {
          text-decoration: underline;
        }

        @media (max-width: 767px) {
          .gallery-grid {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
          }
          .gallery-item {
            grid-column: auto !important;
            grid-row: auto !important;
            height: 200px;
          }
        }
      `}</style>
    </section>
  );
}
