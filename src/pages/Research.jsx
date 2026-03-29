import MeshBackground from '../components/MeshBackground'
import EquationBackground from '../components/EquationBackground'
import { Reveal } from '../hooks/useReveal.jsx'

export default function Research() {
  return (
    <>
      <header className="page-header" style={{ position: 'relative', overflow: 'hidden' }}>
        <EquationBackground />
        <Reveal>
          <h1 className="page-header__title">Research</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="page-header__subtitle">
            We focus on three interconnected questions that sit at the
            intersection of numerical analysis, machine learning, and
            engineering design.
          </p>
        </Reveal>
      </header>

      <div className="divider"><hr className="divider__line" /></div>

      <section className="section">
        {/* ── Pillar 1 ──────────────────────────────────── */}
        <Reveal>
          <div className="pillar">
            <p className="pillar__number">01</p>
            <h2 className="pillar__title">
              Scaling Laws and the Bitter Lesson for PDEs
            </h2>
            <p className="pillar__text">
              Large language models have demonstrated that simple pretraining
              objectives, scaled with compute and data, produce predictably
              improving performance on downstream tasks. The relationship is
              remarkably clean: a power law in pretraining loss that translates
              log-linearly to task performance.
            </p>
            <p className="pillar__text">
              Does an analogous phenomenon hold for PDE solvers? If so, the
              implications are profound — it would mean that the path to
              general-purpose, high-accuracy surrogate models is primarily a
              matter of scale, not architectural innovation. The bitter lesson
              would apply once more.
            </p>
            <p className="pillar__text">
              We conduct systematic experiments across model sizes, dataset
              scales, and PDE families to determine whether such scaling laws
              exist, what their exponents are, and where they break down.
            </p>
            <div className="pillar__subpoints">
              <div className="pillar__subpoint">
                <p className="pillar__subpoint-title">
                  Compute-optimal training
                </p>
                <p className="pillar__subpoint-text">
                  Given a fixed compute budget, how should resources be allocated
                  between model size, dataset diversity, and dataset volume? We
                  seek the PDE equivalent of Chinchilla-optimal scaling.
                </p>
              </div>
              <div className="pillar__subpoint">
                <p className="pillar__subpoint-title">
                  Downstream transfer
                </p>
                <p className="pillar__subpoint-text">
                  Does pretraining loss on a mix of PDE families predict
                  performance on unseen physics? We evaluate transfer across
                  elliptic, parabolic, hyperbolic, and coupled systems.
                </p>
              </div>
              <div className="pillar__subpoint">
                <p className="pillar__subpoint-title">
                  Emergent capabilities
                </p>
                <p className="pillar__subpoint-text">
                  Do PDE foundation models exhibit qualitative capability jumps at
                  certain scales — for example, suddenly handling shocks or
                  turbulence that smaller models cannot?
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── Pillar 2 ──────────────────────────────────── */}
        <Reveal>
          <div className="pillar">
            <p className="pillar__number">02</p>
            <h2 className="pillar__title">
              Data Generation and Tokenization
            </h2>
            <p className="pillar__text">
              If the scaling hypothesis holds, the critical bottleneck shifts from
              architecture design to data. Unlike language models, which train on
              the naturally occurring internet, PDE training data must be
              deliberately generated. This makes the data pipeline a first-class
              research problem.
            </p>
            <p className="pillar__text">
              Equally important is the question of representation. Language models
              tokenize text into a discrete vocabulary that enables a single
              architecture to process all of human language. What is the analogous
              tokenization for PDE data — solutions on meshes of varying
              resolution, different dimensionalities, and heterogeneous physics?
            </p>
            <div className="pillar__subpoints">
              <div className="pillar__subpoint">
                <p className="pillar__subpoint-title">
                  Optimal data generation
                </p>
                <p className="pillar__subpoint-text">
                  What mix of PDE families, parameter ranges, and boundary
                  conditions produces the most transferable pretrained
                  representations? How should classical solver fidelity trade off
                  against dataset volume?
                </p>
              </div>
              <div className="pillar__subpoint">
                <p className="pillar__subpoint-title">
                  Unified tokenization
                </p>
                <p className="pillar__subpoint-text">
                  Can we define a shared representation for PDE data that spans
                  different spatial dimensions, mesh types, and physical
                  domains — analogous to BPE for text?
                </p>
              </div>
              <div className="pillar__subpoint">
                <p className="pillar__subpoint-title">
                  Active data curation
                </p>
                <p className="pillar__subpoint-text">
                  Can the model's own uncertainty guide which simulations to run
                  next, creating a virtuous cycle between data generation and
                  model improvement?
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── Pillar 3 ──────────────────────────────────── */}
        <Reveal>
          <div className="pillar">
            <p className="pillar__number">03</p>
            <h2 className="pillar__title">
              Reliability and Out-of-Distribution Guarantees
            </h2>
            <p className="pillar__text">
              The entire value proposition of surrogate models for engineering
              design rests on a paradox: we want to use them to explore novel
              configurations — which are, by definition, out of distribution.
              A model that is only trustworthy on interpolation is useful for
              acceleration but not for discovery.
            </p>
            <p className="pillar__text">
              We study methods for quantifying when a neural PDE solver's
              predictions can be relied upon and when they cannot, with the goal
              of enabling safe integration into autonomous design loops.
            </p>
            <div className="pillar__subpoints">
              <div className="pillar__subpoint">
                <p className="pillar__subpoint-title">
                  Uncertainty quantification
                </p>
                <p className="pillar__subpoint-text">
                  Bayesian neural operators, ensemble methods, and conformal
                  prediction for function-valued outputs. The goal is calibrated,
                  computationally tractable uncertainty at every point in the
                  solution field.
                </p>
              </div>
              <div className="pillar__subpoint">
                <p className="pillar__subpoint-title">
                  Residual-based error certification
                </p>
                <p className="pillar__subpoint-text">
                  Plugging neural solutions back into the governing equations
                  provides a physics-based error signal without ground truth.
                  We investigate how tight these bounds can be made in practice.
                </p>
              </div>
              <div className="pillar__subpoint">
                <p className="pillar__subpoint-title">
                  Adaptive solver fallback
                </p>
                <p className="pillar__subpoint-text">
                  Hybrid strategies that use the surrogate when confident and
                  fall back to classical solvers when not — optimizing the
                  speed–reliability tradeoff for each query.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section--full section--dark">
        <MeshBackground />
        <div className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <Reveal>
            <p className="section__label">Looking Ahead</p>
            <h2 className="section__title" style={{ color: 'var(--color-text-light)' }}>
              Toward a science of PDE foundation models.
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="section__text">
              The field of neural PDE solving is roughly where language modeling
              was in 2019: there is suggestive evidence that scale helps, transfer
              works in some regimes, and several groups are building foundation
              models. But no one has yet produced the equivalent of the Kaplan or
              Chinchilla papers — a clean, quantitative, predictive relationship
              between pretraining compute and downstream performance across a
              broad range of tasks.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section__text">
              Establishing whether such relationships exist — and characterizing
              them precisely — would be a landmark result in scientific machine
              learning. This is the problem we are working on.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
