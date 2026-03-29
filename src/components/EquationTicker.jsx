import { useState, useEffect, useMemo } from 'react'
import katex from 'katex'
import 'katex/dist/katex.min.css'

const EQUATIONS = [
  { latex: '\\frac{\\partial \\mathbf{u}}{\\partial t} + (\\mathbf{u} \\cdot \\nabla)\\mathbf{u} = -\\nabla p + \\nu \\nabla^2 \\mathbf{u}', label: 'Navier\u2013Stokes' },
  { latex: '\\nabla^2 \\phi = f', label: 'Poisson' },
  { latex: '\\frac{\\partial u}{\\partial t} = \\alpha \\nabla^2 u', label: 'Heat equation' },
  { latex: '\\frac{\\partial^2 u}{\\partial t^2} = c^2 \\nabla^2 u', label: 'Wave equation' },
  { latex: '\\frac{\\partial u}{\\partial t} + \\mathbf{v} \\cdot \\nabla u = D \\nabla^2 u', label: 'Advection\u2013diffusion' },
  { latex: 'i\\hbar \\frac{\\partial \\psi}{\\partial t} = -\\frac{\\hbar^2}{2m}\\nabla^2 \\psi + V\\psi', label: 'Schr\u00f6dinger' },
  { latex: '\\frac{\\partial u}{\\partial t} + u \\frac{\\partial u}{\\partial x} = \\nu \\frac{\\partial^2 u}{\\partial x^2}', label: 'Burgers' },
  { latex: '\\frac{\\partial \\rho}{\\partial t} + \\nabla \\cdot (\\rho \\mathbf{u}) = 0', label: 'Euler (continuity)' },
  { latex: '\\mathcal{G}_\\theta : \\mathcal{A} \\to \\mathcal{U}, \\quad a \\mapsto u', label: 'Operator learning' },
  { latex: 'L(N, D) = \\alpha N^{-\\beta} + \\gamma D^{-\\delta}', label: 'Scaling law' },
]

export default function EquationTicker() {
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)

  const rendered = useMemo(() =>
    EQUATIONS.map(({ latex, label }) => ({
      html: katex.renderToString(latex, { throwOnError: false, displayMode: true }),
      label,
    })),
  [])

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setIndex(prev => (prev + 1) % rendered.length)
        setFade(true)
      }, 400)
    }, 4000)
    return () => clearInterval(interval)
  }, [rendered.length])

  return (
    <div className="eq-ticker">
      <div
        className={`eq-ticker__display ${fade ? 'eq-ticker__display--visible' : ''}`}
      >
        <div
          className="eq-ticker__math"
          dangerouslySetInnerHTML={{ __html: rendered[index].html }}
        />
        <span className="eq-ticker__label">{rendered[index].label}</span>
      </div>
    </div>
  )
}
