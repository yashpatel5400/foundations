const SYMBOLS = [
  '\u2202u/\u2202t', '\u2207\u00b2\u03c6', '\u222b\u2126', '\u2207\u00b7F',
  '\u0394x', '\u2202\u00b2/\u2202x\u00b2', '\u03bb\u2099', '\u03b1\u2207\u00b2u',
  '\u2211\u1d62', '\u222e', 'div(u)', 'curl(B)',
  '\u2202\u03c1/\u2202t', '\u03bd\u2207\u00b2u', 'Re\u207b\u00b9', '\u03c9\u00d7u',
  '\u222b\u222bdA', 'f\u0302(\u03be)', '\u03b4\u1d62\u2c7c', '\u2207p',
  'L(N,D)', '\u03b1N\u207b\u1d5d', '\u2016u\u2016\u2082', '\u27e8\u03c6,\u03c8\u27e9',
  'Du/Dt', '\u2202\u03c8/\u2202t', '\u03b5\u1d62\u2c7c\u2096', 'd\u03a9',
]

export default function EquationBackground({ dark = false }) {
  return (
    <div className={`eq-bg ${dark ? 'eq-bg--dark' : ''}`} aria-hidden="true">
      <div className="eq-bg__grid">
        {SYMBOLS.map((s, i) => (
          <span
            key={i}
            className="eq-bg__symbol"
            style={{
              animationDelay: `${(i * 1.7) % 12}s`,
              animationDuration: `${18 + (i % 5) * 4}s`,
            }}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}
