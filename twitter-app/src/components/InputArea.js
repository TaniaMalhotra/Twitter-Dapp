import React, {useState} from 'react';

export default function InputArea(props) {
  const [inputTitle, setInputTitle] = useState('');
  const [inputDesc, setInputDesc] = useState('');
  return (
    <div>
      <form>
  <label>
    Title:
    <input type="text" value={inputTitle} onChange={(event) => {setInputTitle(event. target. value)}}/>
  </label>
  <label>
    Text:
    <input type="text" value={inputDesc} onChange={(event) => setInputDesc(event. target. value)}/>
  </label>
  <button onClick={(event) => {
    console.log(event.target)
     event.preventDefault();
     setInputTitle('');
     setInputDesc('');

    props.whensubmit({
      title:inputTitle,
      body: inputDesc,
    })
  }}> Submit </button>
</form>

    </div>
  )
}