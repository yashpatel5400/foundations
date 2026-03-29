import MeshBackground from '../components/MeshBackground'
import EquationBackground from '../components/EquationBackground'
import Timeline from '../components/Timeline'
import { Reveal } from '../hooks/useReveal.jsx'

export default function Mission() {
  return (
    <>
      <header className="page-header" style={{ position: 'relative', overflow: 'hidden' }}>
        <EquationBackground />
        <Reveal>
          <h1 className="page-header__title">Mission</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="page-header__subtitle">
            Establish the scientific foundations needed to make neural PDE solvers
            reliable enough for real engineering use.
          </p>
        </Reveal>
      </header>

      <div className="divider"><hr className="divider__line" /></div>

      <section className="section">
        <Reveal>
          <p className="section__label">The Problem</p>
          <h2 className="section__title">
            Simulation is the bottleneck of engineering progress.
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="section__text">
            Every engineered system — aircraft, turbines, reactors, chips — is
            designed through iterative simulation of partial differential
            equations. Each cycle can take hours, days, or weeks. This cost
            fundamentally limits how much of the design space we can explore and
            how quickly we can innovate.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="section__text">
            Autonomous AI agents promise to accelerate the design loop, but they
            will hit the same wall. No matter how capable the agent, if the
            forward simulation takes twelve hours, progress stays at twelve hours
            per iteration. The verification side of the loop must be accelerated
            in parallel.
          </p>
        </Reveal>
      </section>

      <section className="section--full section--dark">
        <MeshBackground />
        <div className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <Reveal>
            <p className="section__label">The Opportunity</p>
            <h2 className="section__title" style={{ color: 'var(--color-text-light)' }}>
              Learned surrogates could change the economics of simulation.
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="section__text">
              Neural PDE solvers — models that learn to approximate the
              input-output mapping of a differential equation — can evaluate
              orders of magnitude faster than classical solvers. If they can be
              made accurate and trustworthy enough, they would transform the
              design iteration cycle from hours to seconds.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section__text">
              The foundational results from language modeling offer a tantalizing
              template: simple pretraining objectives, scaled with compute and
              data, yield predictably improving performance on a wide range of
              downstream tasks. Whether an analogous phenomenon holds for PDEs is
              one of the most important open questions in scientific machine
              learning.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <Reveal>
          <p className="section__label">Roadmap</p>
          <h2 className="section__title">Research milestones.</h2>
        </Reveal>
        <Timeline />
      </section>

      <div className="divider"><hr className="divider__line" /></div>

      <section className="section">
        <Reveal>
          <p className="section__label">Principles</p>
          <h2 className="section__title">How we work.</h2>
        </Reveal>

        <div className="card-grid">
          {[
            {
              title: 'Open science',
              text: 'Our datasets, models, and experimental results will be published openly. The questions we are asking are too important to be answered behind closed doors.',
            },
            {
              title: 'Classical grounding',
              text: 'We build on decades of numerical analysis, not just ML trends. Understanding the structure of PDEs — their symmetries, conservation laws, and spectral properties — informs every experiment we run.',
            },
            {
              title: 'Empirical rigor',
              text: 'Claims about scaling require systematic evidence across multiple orders of magnitude. We invest in reproducible experimental infrastructure before drawing conclusions.',
            },
          ].map((card, i) => (
            <Reveal key={card.title} delay={i * 0.1}>
              <div className="card">
                <h3 className="card__title">{card.title}</h3>
                <p className="card__text">{card.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
