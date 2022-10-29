import './App.css';
import React, { useState } from 'react'
// import OPENAI_API_KEY from './apikey'

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  // apiKey: OPENAI_API_KEY,
     apiKey: "",chore
});
const openai = new OpenAIApi(configuration);



function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  );
}

export default App;
