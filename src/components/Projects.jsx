import { motion } from 'framer-motion';

const projects = [
  {
    id: 'seva',
    icon: '🍛',
    name: 'Project Seva',
    tagline: 'Food & Clothing',
    title: 'Serving Humanity with Compassion',
    desc: 'Providing food and clothing to underprivileged communities across India. No one should sleep hungry — that\'s our promise.',
    impact: '50,000+ meals & clothing distributed',
    accent: 'var(--saffron)',
  },
  {
    id: 'bachpanshala',
    icon: '📚',
    name: 'Project BachpanShala',
    tagline: 'Education & Digital Literacy',
    title: 'Nurturing Young Minds, Bright Futures',
    desc: 'Bridging educational gaps through digital literacy, life skills training, and school education support for underprivileged children.',
    impact: 'Quality education for thousands of children',
    accent: 'var(--forest)',
  },
  {
    id: 'jeev',
    icon: '🐾',
    name: 'Project Jeev',
    tagline: 'Animal Welfare & Rescue',
    title: 'Empowering Lives, Spreading Compassion',
    desc: 'Dedicated to animal welfare through rescue, protection, and daily feeding of stray animals by our volunteer network.',
    impact: '50+ stray animals fed daily',
    accent: 'var(--forest)',
  },
  {
    id: 'udaan',
    icon: '👩‍💼',
    name: 'Project Udaan',
    tagline: 'Women Empowerment',
    title: 'Soaring Towards a Brighter Future',
    desc: 'Empowering rural women through self-help groups, skill development, financial independence, and menstrual hygiene awareness programs.',
    impact: 'Women empowerment across rural India',
    accent: 'var(--saffron)',
  },
  {
    id: 'prakriti',
    icon: '🌿',
    name: 'Project Prakriti',
    tagline: 'Environment',
    title: 'Plant for a Better Tomorrow',
    desc: 'Driving environmental conservation and sustainability through tree plantation drives and supporting eco-friendly agriculture practices.',
    impact: '20,000+ saplings planted across India',
    accent: 'var(--forest)',
  },
  {
    id: 'vikas',
    icon: '💼',
    name: 'Project Vikas',
    tagline: 'Internships & Skilling',
    title: 'Enhancing Employability & Skills',
    desc: 'Facilitating internships and skill development in data operations, finance, content writing, digital marketing, social work, and more.',
    impact: '30,000+ interns trained in 4 years',
    accent: 'var(--saffron)',
  },
];

function ProjectCard({ project, index }) {
  const isOdd = index % 2 === 0; // 0-indexed, so even index = odd card (1st, 3rd, 5th)

  return (
    <motion.div
      className="relative overflow-hidden"
      style={{
        background: 'var(--aged-paper)',
        border: '1.5px solid var(--dust)',
        borderRadius: '4px',
        padding: '28px 26px',
        width: '100%',
        minHeight: 'unset',
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: isOdd ? -12 : 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      whileHover={{
        scale: 1.02,
        boxShadow: '0 12px 32px rgba(28, 20, 16, 0.12)',
      }}
      id={`project-card-${project.id}`}
    >
      {/* Tape corner pseudo-element */}
      <div
        className="absolute top-0 left-0 w-10 h-10 pointer-events-none"
        style={{
          background: 'var(--saffron)',
          opacity: 0.3,
          transform: 'rotate(45deg) translate(-50%, -50%)',
          transformOrigin: 'center',
          top: '-4px',
          left: '-4px',
        }}
      />

      {/* icon mb 14px */}
      <div className="text-3xl" style={{ marginBottom: '14px' }}>{project.icon}</div>

      {/* tag mb 6px */}
      <div
        className="font-mono text-xs tracking-[1.5px] uppercase inline-block px-2 py-0.5 rounded-sm"
        style={{
          color: project.accent,
          border: `1.5px dashed ${project.accent}`,
          marginBottom: '6px',
        }}
      >
        {project.tagline}
      </div>

      {/* name */}
      <h3
        className="font-display text-lg"
        style={{
          color: 'var(--ink)',
          fontVariationSettings: '"opsz" 36',
          marginTop: '10px',
          marginBottom: '4px',
        }}
      >
        {project.name}
      </h3>

      {/* title mb 10px */}
      <h4
        className="font-display text-base font-normal"
        style={{ color: 'var(--soil)', marginBottom: '10px' }}
      >
        {project.title}
      </h4>

      {/* description mb 14px */}
      <p
        className="text-sm"
        style={{
          color: 'var(--dust)',
          lineHeight: 1.7,
          marginBottom: '14px',
        }}
      >
        {project.desc}
      </p>

      <div
        className="flex items-center gap-1.5 text-xs font-medium font-mono"
        style={{ color: 'var(--saffron)' }}
      >
        <span>★</span> {project.impact}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        background: 'var(--parchment)',
        paddingTop: 'clamp(64px, 8vw, 112px)',
        paddingBottom: 'clamp(64px, 8vw, 96px)',
      }}
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          {/* tag mb 8px (from CSS), heading mb 12px (from CSS) */}
          <div className="section-tag">Our Initiatives</div>
          <h2 className="section-heading">Six Projects. One Mission.</h2>
          {/* subtext mb clamp */}
          <p
            style={{
              color: 'var(--dust)',
              maxWidth: '560px',
              lineHeight: 1.75,
              marginTop: '8px',
              marginBottom: 'clamp(36px, 5vw, 56px)',
            }}
          >
            Each project targets a specific gap in society — from hunger to
            education, from animal welfare to environmental sustainability.
          </p>
        </motion.div>

        {/* 3-col grid, 24px gap */}
        <div
          className="projects-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>

      {/* Wavy divider — zero-gap wrapper */}
      <div style={{ display: 'block', lineHeight: 0, fontSize: 0, margin: 0, padding: 0, overflow: 'hidden', width: '100%' }}>
        <svg
          viewBox="0 0 1440 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: 'auto', margin: 0, padding: 0 }}
        >
          <path
            d="M0 15 C 180 0, 360 30, 540 15 S 900 0, 1080 15 S 1320 30, 1440 15"
            stroke="var(--dust)"
            strokeWidth="1"
            strokeDasharray="6 4"
            fill="none"
          />
        </svg>
      </div>

      {/* Responsive override */}
      <style>{`
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
