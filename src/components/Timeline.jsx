import { Reveal } from '../hooks/useReveal.jsx'

const MILESTONES = [
  {
    date: 'Q2 2026',
    title: 'Standardized PDE evaluation suite',
    text: 'Define and open-source a benchmark of 20+ downstream PDE tasks spanning elliptic, parabolic, hyperbolic, and coupled systems.',
  },
  {
    date: 'Q3 2026',
    title: 'First systematic scaling study',
    text: 'Train operator-learning models at 10\u201315 scales across multiple PDE families. Characterize whether power-law scaling holds and measure exponents.',
  },
  {
    date: 'Q4 2026',
    title: 'Data generation and tokenization report',
    text: 'Publish findings on optimal data mix, resolution strategies, and unified PDE tokenization schemes for foundation model pretraining.',
  },
  {
    date: 'Q1 2027',
    title: 'Pretraining loss \u2192 downstream transfer',
    text: 'Determine whether pretraining loss on a diverse PDE mix predicts downstream task performance in a log-linear fashion, analogous to LLM scaling.',
  },
  {
    date: 'Q2 2027',
    title: 'Reliability and UQ framework',
    text: 'Release a toolkit for residual-based error certification and conformal uncertainty quantification for neural PDE surrogates.',
  },
  {
    date: '2027+',
    title: 'Toward compute-optimal PDE foundation models',
    text: 'Synthesize scaling, data, and reliability findings into a Chinchilla-style recommendation for PDE foundation model training.',
  },
]

export default function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline__line" />
      {MILESTONES.map((m, i) => (
        <Reveal key={m.date} delay={i * 0.08}>
          <div className={`timeline__item ${i % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'}`}>
            <div className="timeline__dot" />
            <div className="timeline__card">
              <span className="timeline__date">{m.date}</span>
              <h3 className="timeline__title">{m.title}</h3>
              <p className="timeline__text">{m.text}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
