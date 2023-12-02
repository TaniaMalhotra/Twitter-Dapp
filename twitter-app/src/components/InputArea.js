import React, {useState} from 'react';

export default function InputArea(props) {
  const [inputDesc, setInputDesc] = useState('');
  return (
    <div>
      <form>
  <label>
    Text:
    <input type="text" value={inputDesc} onChange={(event) => setInputDesc(event. target. value)}/>
  </label>
  <button onClick={(event) => {
    console.log(event.target)
     event.preventDefault();
     setInputDesc('');
    console.log(inputDesc)
    props.whensubmit(inputDesc)
  }}> Submit </button>
</form>

    </div>
  )
}