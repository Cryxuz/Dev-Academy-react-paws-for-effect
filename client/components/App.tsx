import Dog from './Dog.tsx'
import Subtitle from './Subtitle.tsx'
import Heading from './Heading.tsx'
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

      {/* My dogs */}
      <Dog name="Pudge" breed="Pug" superpower="Humps everything" />
      <img src="/images/bulldog.png" alt="bulldog-silhouette" />

      <Dog
        name="Blink"
        breed="ShihTzu"
        superpower="No Power, just super grumpy"
      />
      <img src="/images/scottie.png" alt="dog-silhouette" />

      <Dog
        name="Brutus"
        breed="Chinese Sharpei"
        superpower="Super strong but dumb as fuck"
      />

      <img
        className="img-url"
        src="https://www.dailypaws.com/thmb/QrdM27YgO0EJuLK5L7ZAJy-_FAE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/shar-pei-profile-rocks-500006764-2000-7c087a4cf56440088fa178b6ca4ea5ef.jpg"
        alt="wrinkly-dog"
      />
    </div>
  )
}

export default App
