import { Reveal } from '../hooks/useReveal.jsx'
import EquationBackground from '../components/EquationBackground'

const SECTIONS = [
  {
    category: 'Scaling Laws',
    papers: [
      {
        title: 'Scaling Laws for Neural Language Models',
        authors: 'Kaplan, J. et al.',
        venue: 'arXiv, 2020',
        url: 'https://arxiv.org/abs/2001.08361',
        note: 'The foundational paper establishing power-law relationships between compute, data, parameters, and loss for language models.',
      },
      {
        title: 'Training Compute-Optimal Large Language Models',
        authors: 'Hoffmann, J. et al. (Chinchilla)',
        venue: 'NeurIPS, 2022',
        url: 'https://arxiv.org/abs/2203.15556',
        note: 'Demonstrated that most LLMs were undertrained relative to their size, and derived compute-optimal scaling ratios.',
      },
      {
        title: 'Neural Scaling Laws in Robotics',
        authors: 'Kaplan, J. et al.',
        venue: 'arXiv, 2024',
        url: 'https://arxiv.org/abs/2405.14005',
        note: 'Meta-analysis of 327 papers showing robot foundation models follow power-law scaling with steeper exponents than language.',
      },
      {
        title: 'Neural Scaling Laws of Deep ReLU and Deep Operator Network',
        authors: 'Various',
        venue: 'arXiv, 2024',
        url: 'https://arxiv.org/abs/2410.00357',
        note: 'Theoretical scaling analysis for DeepONet, quantifying how approximation and generalization errors scale with network and data size.',
      },
    ],
  },
  {
    category: 'Neural Operators',
    papers: [
      {
        title: 'Fourier Neural Operator for Parametric Partial Differential Equations',
        authors: 'Li, Z. et al.',
        venue: 'ICLR, 2021',
        url: 'https://arxiv.org/abs/2010.08895',
        note: 'Introduced the FNO architecture that learns in Fourier space, enabling resolution-invariant operator learning for PDEs.',
      },
      {
        title: 'Learning Nonlinear Operators via DeepONet',
        authors: 'Lu, L. et al.',
        venue: 'Nature Machine Intelligence, 2021',
        url: 'https://arxiv.org/abs/1910.03193',
        note: 'Proposed DeepONet based on the universal approximation theorem for operators. A foundational architecture for operator learning.',
      },
      {
        title: 'Learning to Simulate Complex Physics with Graph Networks',
        authors: 'Sanchez-Gonzalez, A. et al. (MeshGraphNets)',
        venue: 'ICML, 2020',
        url: 'https://arxiv.org/abs/2002.09405',
        note: 'DeepMind\u2019s graph-based approach for learning physics simulations on irregular meshes, enabling complex geometry handling.',
      },
      {
        title: 'Continuum Transformers Perform In-Context Learning by Operator Gradient Descent',
        authors: 'Patel, Y.*, Mishra, A.*, Tewari, A.',
        venue: 'ICLR, 2026',
        url: 'https://arxiv.org/abs/2310.02015',
        note: 'Shows that transformers can learn PDE operators in-context through an implicit gradient descent on the operator space.',
      },
    ],
  },
  {
    category: 'Foundation Models for PDEs',
    papers: [
      {
        title: 'Poseidon: Efficient Foundation Models for PDEs',
        authors: 'Herde, M. et al. (ETH Zurich)',
        venue: 'NeurIPS, 2024',
        url: 'https://arxiv.org/abs/2405.19101',
        note: 'The most complete PDE foundation model to date. Multiscale operator transformer pretrained on fluid dynamics, evaluated on 15 downstream tasks.',
      },
      {
        title: 'CompNO: A Compositional Neural Operator for Parametric PDEs',
        authors: 'Various',
        venue: 'arXiv, 2025',
        url: 'https://arxiv.org/abs/2601.07384',
        note: 'Learns a library of specialized operator building blocks that can be assembled into task-specific solvers, offering a compositional alternative to monolithic pretraining.',
      },
      {
        title: 'Strategies for Pretraining Neural Operators',
        authors: 'Various',
        venue: 'OpenReview, 2025',
        url: 'https://openreview.net/forum?id=9vEVeX9oIv',
        note: 'Systematic comparison of pretraining strategies for neural operators, finding that physics-based and transfer-learning approaches work best.',
      },
    ],
  },
  {
    category: 'Uncertainty Quantification & Guarantees',
    papers: [
      {
        title: 'Conformal Prediction for Ensembles: Improving Efficiency via Score-Based Aggregation',
        authors: 'Rivera, E.O.*, Patel, Y.*, Tewari, A.',
        venue: 'NeurIPS, 2025',
        url: null,
        note: 'Distribution-free uncertainty quantification for ensemble models, directly applicable to neural PDE solver ensembles.',
      },
      {
        title: 'Variational Inference with Coverage Guarantees in Simulation-Based Inference',
        authors: 'Patel, Y. et al.',
        venue: 'ICML, 2024',
        url: null,
        note: 'Combines variational inference with conformal calibration to provide coverage-guaranteed posteriors for simulation-based problems.',
      },
      {
        title: 'A Greedy PDE Router for Blending Neural Operators and Classical Methods',
        authors: 'Rayan, S., Patel, Y., Tewari, A.',
        venue: 'In Submission',
        url: null,
        note: 'Adaptive routing between neural surrogates and classical solvers, optimizing the speed\u2013reliability tradeoff per query.',
      },
      {
        title: 'Conformal Contextual Robust Optimization',
        authors: 'Patel, Y., Rayan, S., Tewari, A.',
        venue: 'AISTATS, 2024 (Oral)',
        url: null,
        note: 'Distribution-free robust optimization framework applicable to PDE-constrained design under uncertainty.',
      },
    ],
  },
  {
    category: 'Classical References & The Bitter Lesson',
    papers: [
      {
        title: 'The Bitter Lesson',
        authors: 'Sutton, R.',
        venue: 'Blog post, 2019',
        url: 'http://www.incompleteideas.net/IncIdeas/BitterLesson.html',
        note: 'The argument that general methods leveraging computation are ultimately more effective than methods that leverage human knowledge.',
      },
      {
        title: 'Attention Is All You Need',
        authors: 'Vaswani, A. et al.',
        venue: 'NeurIPS, 2017',
        url: 'https://arxiv.org/abs/1706.03762',
        note: 'The transformer architecture. Its success across domains raises the question: is it the right architecture for PDEs too?',
      },
      {
        title: 'Finite Elements: Theory, Fast Solvers, and Applications',
        authors: 'Braess, D.',
        venue: 'Cambridge University Press, 2007',
        url: null,
        note: 'Standard reference for classical FEM. Understanding what neural operators must match or beat.',
      },
    ],
  },
]

export default function Reading() {
  return (
    <>
      <header className="page-header" style={{ position: 'relative', overflow: 'hidden' }}>
        <EquationBackground />
        <Reveal>
          <h1 className="page-header__title">Reading List</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="page-header__subtitle">
            A curated collection of the papers and references that shape our
            thinking. Annotated with context on why each matters.
          </p>
        </Reveal>
      </header>

      <div className="divider"><hr className="divider__line" /></div>

      <section className="section">
        {SECTIONS.map((group, gi) => (
          <Reveal key={group.category} delay={gi * 0.06}>
            <div className="paper-group">
              <h3 className="paper-group__title">{group.category}</h3>
              <ul className="paper-list">
                {group.papers.map((paper) => (
                  <li className="paper" key={paper.title}>
                    <div className="paper__venue">{paper.venue}</div>
                    <h4 className="paper__title">
                      {paper.url ? (
                        <a href={paper.url} target="_blank" rel="noopener noreferrer">
                          {paper.title}
                        </a>
                      ) : (
                        paper.title
                      )}
                    </h4>
                    <p className="paper__authors">{paper.authors}</p>
                    {paper.note && <p className="paper__note">{paper.note}</p>}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </section>
    </>
  )
}
