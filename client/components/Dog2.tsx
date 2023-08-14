interface Props {
  name: string
  breed: string
  superpower: string
}

function Dog2(props: Props) {
  return (
    <div className="dog-wrapper">
      <div className="dog">
        <div className="dog-name-plate">
          <h3 className="dog-name">{props.name}</h3>
          <span className="dog-breed">{props.breed}</span>
        </div>
        <span className="dog-superpower">{props.superpower}</span>
        <div className="dog-pic">
          <img
            className="dog-img"
            src="./images/hound.png"
            alt="hound named jake"
          />
        </div>
      </div>
    </div>
  )
}

export default Dog2
