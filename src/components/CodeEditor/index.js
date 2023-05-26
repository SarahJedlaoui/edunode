import React, { useState } from 'react';
import axios from 'axios';
import Editor from '@monaco-editor/react';

const CodeEditor = () => {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [output, setOutput] = useState('');

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post('/execute', { code, language });
      setOutput(data.output);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Editor height="90vh" defaultLanguage="rust" defaultValue="// some comment" />
      <form onSubmit={handleSubmit}>
        <textarea value={code} onChange={handleCodeChange} />
        <br />
        <select value={language} onChange={handleLanguageChange}>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
        </select>
        <br />
        <button type="submit">Execute</button>
      </form>
      <br />
      <pre>{output}</pre>
    </div>
  );
};

export default CodeEditor;
