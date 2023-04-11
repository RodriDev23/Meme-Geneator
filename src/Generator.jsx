import React, { useState } from 'react'
import memesData from "./memesData"

function Generator() {


  
  const [allMemeImage, setAllMemeImage] = useState(memesData)
  
  
  const [meme, setMeme] = useState({
    topText:"",
    bottomText:"",
    randomImage:"http://i.imgflip.com/1bij.jpg" 
 
  })

  
  
  
  
  function getMemeImage() {
    console.log("getMemeImage function called");
    const memesArray = allMemeImage.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage:url
    }))
  }
  
   function handleChange(event){
    const {name, value} = event.target
    setMeme((prevMeme) =>({
      ...prevMeme,
      [name] : value
    }))
   }



  return (
    <main>
     <div className='content'>
      <input className='input-uno' 
      type="text" 
      name="topText"
      value={meme.topText}
      onChange={handleChange}
      
      />
      <input className='input-dos'
       type="text" 
       name="bottomText"
       value={meme.bottomText}
       onChange={handleChange}
       
       />
     </div>
     
     <button className='button' onClick={getMemeImage}>Get a new meme image 🖼</button>
     
     
     <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
     </div>


    </main>  
  )
}

export default Generator