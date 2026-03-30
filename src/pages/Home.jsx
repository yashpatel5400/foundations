import { Link } from 'react-router-dom'
import FlowField from '../components/FlowField'
import MeshBackground from '../components/MeshBackground'
import EquationTicker from '../components/EquationTicker'
import { Reveal } from '../hooks/useReveal.jsx'

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

const PILLARS = [
  {
    num: '01',
    title: 'Scaling Laws for PDEs',
    text: 'Do neural PDE solvers follow predictable power-law scaling with compute, data, and parameters, the way large language models do? We run systematic experiments to find out.',
  },
  {
    num: '02',
    title: 'Data & Tokenization',
    text: 'What is the optimal way to generate, curate, and tokenize PDE data for foundation model pretraining? We study how data diversity, resolution, and representation affect downstream performance.',
  },
  {
    num: '03',
    title: 'Guarantees Under Distribution Shift',
    text: 'Novel design lives out of distribution. We investigate methods for uncertainty quantification and error certification so surrogate models can be trusted where it matters most.',
  },
]

export default function Home() {
  return (
    <>
      <div className="hero-wrapper">
        <FlowField />
        <section className="hero">
          <Reveal>
            <p className="hero__label">Focused Research Organization</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="hero__title">
              The science of scaling PDE&nbsp;surrogates.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="hero__subtitle">
              We investigate scaling laws, data strategies, and reliability
              guarantees to make neural PDE solvers genuinely useful for
              engineering design.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Link to="/research" className="hero__cta">
              Our research <ArrowRight />
            </Link>
          </Reveal>
          <Reveal delay={0.4}>
            <EquationTicker />
          </Reveal>
        </section>
      </div>

      <section className="section">
        <Reveal>
          <p className="section__label">Why This Matters</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="section__title">
            AI-driven design iteration is bottlenecked by simulation.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="section__text">
            Even as autonomous agents become capable enough to drive the
            engineering design loop, they remain bound by the same constraint
            humans face: the time it takes to solve partial differential equations.
            Surrogate models that are fast, accurate, and trustworthy would
            remove this bottleneck, accelerating progress by orders of magnitude.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="section__text">
            We believe the path forward requires answering fundamental questions
            about how neural operators scale, what data they need, and when their
            predictions can be relied upon.
          </p>
        </Reveal>
      </section>

      <section className="section--full section--alt">
        <div className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <Reveal>
            <p className="section__label">Research Pillars</p>
            <h2 className="section__title">Three open questions.</h2>
          </Reveal>
          <div className="card-grid">
            {PILLARS.map(({ num, title, text }, i) => (
              <Reveal key={num} delay={i * 0.1}>
                <div className="card">
                  <p className="card__number">{num}</p>
                  <h3 className="card__title">{title}</h3>
                  <p className="card__text">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Reveal>
        <div className="pullquote">
          <hr className="pullquote__rule" />
          <p className="pullquote__text">
            "The biggest lesson that can be read from 70 years of AI research
            is that general methods that leverage computation are ultimately
            the most effective, and by a large margin."
          </p>
          <p className="pullquote__attribution">
            - Rich Sutton, <em>The Bitter Lesson</em> (2019)
          </p>
        </div>
      </Reveal>

      <section className="section--full section--dark">
        <MeshBackground />
        <div className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <Reveal>
            <p className="section__label">The Landscape</p>
            <h2 className="section__title" style={{ color: 'var(--color-text-light)' }}>
              Where neural PDE solving stands today.
            </h2>
          </Reveal>
          <div className="stat-row">
            <Reveal className="stat" delay={0}>
              <div className="stat__value">10&sup3;&times;</div>
              <div className="stat__label">Speedup over classical solvers</div>
            </Reveal>
            <Reveal className="stat" delay={0.1}>
              <div className="stat__value">~2019</div>
              <div className="stat__label">Equivalent LLM maturity stage</div>
            </Reveal>
            <Reveal className="stat" delay={0.2}>
              <div className="stat__value">0</div>
              <div className="stat__label">Chinchilla-style scaling studies for PDEs</div>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="section__text" style={{ marginTop: '3rem' }}>
              Neural PDE solvers can already evaluate orders of magnitude faster
              than classical methods. But we have no systematic understanding of
              how they scale, no standardized evaluation suite, and no reliable
              way to certify their outputs. The foundational science is missing.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="divider"><hr className="divider__line" /></div>

      <section className="section">
        <Reveal>
          <p className="section__label">Get Involved</p>
          <h2 className="section__title">We are just getting started.</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="section__text">
            Conformal Labs is a new organization. If you are a researcher, engineer,
            or funder interested in the science of PDE surrogate models at scale,
            we would like to hear from you.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div style={{ marginTop: '2rem' }}>
            <Link to="/team" className="hero__cta">
              Meet the team <ArrowRight />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
