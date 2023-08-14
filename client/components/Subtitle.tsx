interface Props {
  subtitle: string
}
function Subtitle(props: Props) {
  return (
    <div className="subtitle">
      <h2 className="dog-subtitle">{props.subtitle}</h2>
    </div>
  )
}

export default Subtitle
