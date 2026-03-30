import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { Reveal } from '../hooks/useReveal.jsx'

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

const TEAM = [
  {
    id: 'yash',
    name: 'Yash Patel',
    role: 'Founder',
    tag: 'Research',
    photo: 'yash-bw.png',
    bio: [
      `Currently a research engineer at Harmonic working on post-training and search algorithms for frontier math reasoning models. PhD in Statistics from Michigan (advised by Ambuj Tewari), BA in Mathematics from Princeton. Research spans uncertainty quantification, robust optimization, operator learning, and PDE surrogate modeling.`,
      `Previously an Anthropic research fellow on the Frontier Red Team, a senior software engineer at Meta on real-time 3D reconstruction, and an intern at Waymo on importance sampling for rare-event simulation. His earliest research was at the Princeton Plasma Physics Lab, developing FDTD simulations of the Vlasov equation, work that planted the seed for his interest in PDE-based computation.`,
      `Founded Conformal Labs to pursue the open scientific questions that will determine whether neural PDE solvers can become reliable, scalable tools for engineering design.`,
    ],
    links: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/yash-patel-297b87a1/' },
      { label: 'Personal site', url: 'https://ypatel.io/' },
    ],
  },
]

function ProfileModal({ person, onClose }) {
  const handleBackdrop = useCallback((e) => {
    if (e.target === e.currentTarget) onClose()
  }, [onClose])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="profile-modal__backdrop" onClick={handleBackdrop}>
      <div className="profile-modal">
        <button className="profile-modal__close" onClick={onClose} aria-label="Close">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="profile-modal__header">
          <img
            src={`${import.meta.env.BASE_URL}${person.photo}`}
            alt={person.name}
            className="profile-modal__photo"
          />
          <div>
            <h2 className="profile-modal__name">{person.name}</h2>
            <p className="profile-modal__role">{person.role}</p>
          </div>
        </div>

        <div className="profile-modal__body">
          {person.bio.map((p, i) => (
            <p key={i} className="profile-modal__text">{p}</p>
          ))}
        </div>

        <div className="profile-modal__links">
          {person.links.map(({ label, url }) => (
            <a key={label} href={url} target="_blank" rel="noopener noreferrer"
              className="team-card__link">
              {label} <ExternalIcon />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Team() {
  const [active, setActive] = useState(null)

  return (
    <>
      <header className="page-header" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
        <Reveal>
          <h1 className="page-header__title">
            Defining the next era of PDE&nbsp;simulation
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="page-header__subtitle" style={{ maxWidth: 'none' }}>
            We are researchers and engineers united by the conviction that the
            foundational science of neural PDE solvers deserves sustained,
            focused effort.
          </p>
        </Reveal>
      </header>

      <div className="divider"><hr className="divider__line" /></div>

      <section className="section">
        <Reveal>
          <p className="section__label" style={{ textAlign: 'center' }}>Leadership</p>
        </Reveal>

        <div className="team-grid">
          {TEAM.map((person, i) => (
            <Reveal key={person.id} delay={i * 0.08}>
              <button
                className="team-thumb"
                onClick={() => setActive(person)}
              >
                <img
                  src={`${import.meta.env.BASE_URL}${person.photo}`}
                  alt={person.name}
                  className="team-thumb__photo"
                />
                <span className="team-thumb__tag">{person.tag}</span>
                <h3 className="team-thumb__name">{person.name}</h3>
                <p className="team-thumb__role">{person.role}</p>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="divider"><hr className="divider__line" /></div>

      <section className="section">
        <Reveal>
          <p className="section__label">Join Us</p>
          <h2 className="section__title">We are building the team.</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="section__text">
            We are looking for researchers and engineers with backgrounds in
            numerical PDE methods, operator learning, high-performance computing,
            or the theory of neural scaling. If these questions excite you, we
            want to talk.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="section__text" style={{ marginTop: '1.5rem' }}>
            We are also seeking partnerships with compute providers, national
            labs, and funding bodies who share our conviction that the
            foundational science of PDE surrogate models deserves sustained
            investment.
          </p>
        </Reveal>
      </section>

      <section className="section--full section--alt">
        <div className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <Reveal>
            <p className="section__label">Advisory & Collaboration</p>
            <h2 className="section__title">Open to advisors and collaborators.</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="section__text">
              If you are a researcher working on neural operators, scientific ML,
              or classical numerical methods and are interested in advising or
              collaborating, please reach out via LinkedIn.
            </p>
          </Reveal>
        </div>
      </section>

      {active && createPortal(
        <ProfileModal person={active} onClose={() => setActive(null)} />,
        document.body
      )}
    </>
  )
}
