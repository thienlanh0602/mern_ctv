import React from 'react'
import { useState } from 'react'

export default function index() {
  const Form = ({ formdata, Submit, handleButton, setFormdata }) => {
    return <form onSubmit={handleButton}>
      <input type="text"
        required
        value={formdata}
        onChange={(e) => setFormdata({ text: e.target.value })}
        >
      </input>
      <br/>
      <button type='submit'>{Submit ? 'Sending' : 'Save'}</button>
    </form>
  }
  const Revision = ({ Formdata }) => {
    return <div>
      <p>{Formdata.text}</p>
    </div>
  }

  const [Submit, setSubmit] = useState(false);
  const [Submited, setSubmited] = useState(false);
  const [Formdata, setFormdata] = useState({text: ''});

  const handleButton = (e) => {
    e.preventDefault()
    setSubmit(true)
    setTimeout(() => {
      setSubmited(true)
    }, 1000)
  }
  if (Submited) {
    return <Revision formdata={formdata}>
    </Revision>
  }
  return (
    <div><Form /></div>
  )
}

