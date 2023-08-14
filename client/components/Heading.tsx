interface Props {
  text: string
}

function Heading(props: Props) {
  return (
    <div className="Heading">
      <h1 className="heading-text">{props.text}</h1>
    </div>
  )
}

export default Heading
