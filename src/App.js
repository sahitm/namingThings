import './App.css';
import React, { useState } from 'react'
import icon from './img.png'


const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
     apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);



function App() {

  const [query, setQuery] = useState('')
  const [result, setResult] = useState('')

  async function handleButton(){

    const response = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: query,
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    setResult(response.data.choices[0].text)
    
  }


  return (
    <div className="App">
    <header className='bg-blue-300 p-3 text-purple-900 h-1/6 flex justify-evenly'>
        <div>
            <img src={icon} alt='icon'/>
        </div>
        <div>
          <h1 className='font-extrabold underline flex'>The hardest part of programming is naming things.</h1>
          <p className= 'font-medium flex '>Give a description of variables, classes, objects and methods etc. and get name suggestions
          </p> 
        </div>
    </header>

    <main className="h-4/6 bg-blue-100">

      <div className="input">
      <h1 className='font-black p-3 text-2xl'>Names from Description</h1>
      <textarea placeholder='enter your description' className='border-2 border-sky-200 p-2' rows="4" cols="50" onChange={(e) => setQuery(e.target.value)}></textarea>
      <button onClick={handleButton} className="block m-auto bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        Submit
      </button>
      </div>

      <div className="output ">
      <textarea className='p-2 mt-6 border-2 border-sky-200' rows="4" cols="50" value={result} placeholder='wait for a few seconds after you submit'></textarea>
      </div>

    </main>

    <footer className='bg-blue-100'>

        <p className='p-10'>Built with ❤️ by sahit mandapti</p>
    </footer>  
  </div>
  )
}

export default App