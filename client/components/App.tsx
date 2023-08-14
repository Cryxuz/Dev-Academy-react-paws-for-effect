import Dog from './Dog.tsx'
import Subtitle from './Subtitle.tsx'
import Heading from './Heading.tsx'
import Dog2 from './Dog2.tsx'
function App() {
  return (
    <div className="container">
      <img
        className="spinner"
        alt="a spinning paw-print"
        src="/images/paw.png"
      />
      {/* {Header} */}
      <Heading text="Welcome to this page" />
      {/* Subtitle */}
      <Subtitle subtitle="My dogs using their useless superpowers for nothing" />
      {/* dogs */}
      <Dog2 name="Jake" breed="hound" superpower="Humps everything" />

      <Dog
        name="Pudge"
        breed="Bulldog"
        superpower="No Power, just super grumpy"
      />

      <Dog name="Scott" breed="Scottie" superpower="laser beam" />
    </div>
  )
}

export default App
