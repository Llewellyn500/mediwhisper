"use client";

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setIsLoading(true);
    const options = {
      method: 'POST',
      body: JSON.stringify({
        message: `You are a medical professional giving me possible sicknesses that i might have, you are to give me details of what i'm experiencing based of the information i gave you, These are the details: "My name is ${name}, I am ${age} years old, I weigh ${weight} kg and I'm ${height} cm tall. My symptoms are: ${symptoms}"`,
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
          className='text-black p-5 mb-5 mr-3'
        />
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter your age" 
          className='text-black p-5 mb-5 mr-3'
        />
        <input
          type="text"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          placeholder="Enter your gender" 
          className='text-black p-5 mb-5 mr-3'
        />
        <input
          type="text"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter your weight" 
          className='text-black p-5 mb-5 mr-3'
        />
        <input
          type="text"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter your height" 
          className='text-black p-5 mb-5 mr-3'
        />
        <input
          type="text"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          placeholder="Enter your symptoms" 
          className='text-black p-5 mb-5 mr-3'
        />

        <button type="submit">Submit</button>
      </form>
      {isLoading ? <p>Loading...</p> : response && (
      <>
        <ReactMarkdown children={response} />
        <p>It is advisable you contact a Medical professional for further enquiries and prescriptions.</p>
        <button onClick={() => { /* handle contact professional action here */ }}>Contact Professional</button>
      </>
    )}
    </div>
  );
}

export default Form;