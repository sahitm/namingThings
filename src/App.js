import './App.css';
import React, { useState } from 'react'
// import OPENAI_API_KEY from './apikey'

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  // apiKey: OPENAI_API_KEY,
     apiKey: "",
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
    console.log(result)
    
  }


  return (
    <div className="App h-screen">
    <header className='bg-blue-800 p-3 text-white h-1/6'>
        <h1 className='font-extrabold underline'>The hardest part of programming is naming things.</h1>
        <p className= 'font-medium '>Give a description of variables, classes, objects and methods etc. and get suggestions
        </p>
    </header>

    <main className="h-4/6">

      <div className="input h-1/2">
      <textarea rows="4" cols="50" onChange={(e) => setQuery(e.target.value)}></textarea>
      <button onClick={handleButton} className="block m-auto bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        Submit
      </button>
      </div>

      <div className="output h-1/2 ">
      {result}

      </div>

    </main>

    <footer className="h-1/6">

        <p>Built with ❤️ by sahit mandapti</p>
    </footer>  
  </div>
  )
}

export default App
