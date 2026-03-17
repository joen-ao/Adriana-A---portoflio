export default function SectionLabel({ text, className = '' }) {
  return (
    <span className={`text-eyebrow block mb-4 ${className}`}>
      {text}
    </span>
  )
}
