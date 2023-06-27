
import Phrase from "./components/Phrases"
import './App.css'
import phrases from './phrases/phrases.json'
import { useState } from 'react'

function App() {


const [index, setIndex] = useState(0)

const changePhrase = () => {
    (index < phrases.length - 1)

    setIndex(Math.floor(Math.random() * phrases.length))

}

const backgroundImages = [
  "url(./images/fondo1.jpg)",
  "url(./images/fondo2.jpg)",
  "url(./images/fondo3.jpg)",
  "url(./images/fondo4.jpg)"
]



  document.body.style = `background-image: ${backgroundImages[Math.floor(Math.random() * backgroundImages.length)]}`

  return (
    <>
      <Phrase
      phrase = {phrases[index]}
      />
      <button onClick={changePhrase}><i className='button'></i>Prueba tu suerte</button>
    </>
  )
}

export default App