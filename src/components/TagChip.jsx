export default function TagChip({ label, active, onClick }) {
  return (
    <span
      className={`tag${active ? ' active' : ''}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? e => e.key === 'Enter' && onClick() : undefined}
    >
      {label}
    </span>
  )
}
