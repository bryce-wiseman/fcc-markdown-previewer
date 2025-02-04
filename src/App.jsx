import { useState } from 'react'
import './App.css'
import ReactMarkdown from 'react-markdown'


const initialMarkdown = `
# Header

## Subheader

Inline code: \`<div></div>\`

\`\`\`
// code block
\`\`\`

__bold text__

[a link](/)

> block quote

![image]()

* list item`

function App() {
  const [input, setInput] = useState(initialMarkdown)

  function handleChange(e) {
    setInput(e.target.value)
  }

  return (
    <>
    <div className="half">
      <h2>Editor:</h2>
      <textarea name="editor" id="editor" rows="60" onChange={handleChange} value={input}></textarea>
    </div>
    <div className="half">
      <h2>Display:</h2>
      <div id="preview">
        <ReactMarkdown>{input}</ReactMarkdown>
      </div>
    </div>
    </>
  )
}

export default App
