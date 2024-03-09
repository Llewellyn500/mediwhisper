"use client";

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const Form = () => {
  const [name, setName] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setIsLoading(true);
    const options = {
      method: 'POST',
      body: JSON.stringify({
        message: `Hello, give me the history of my name, ${name}`
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const res = await fetch('http://localhost:8000/gemini', options);
    const data = await res.text(); 
    console.log(data);
    setResponse(data);
    setIsLoading(false);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name" 
          className='text-black'
        />
        <button type="submit">Submit</button>
      </form>
      {isLoading ? <p>Loading...</p> : response && <ReactMarkdown children={response} />}
    </div>
  );
}

export default Form;