// Renders a raw SVG/HTML string (used for the category icons in data).
export default function RawSvg({ html, className, style }) {
  return <span className={className} style={style} dangerouslySetInnerHTML={{ __html: html }} />
}
