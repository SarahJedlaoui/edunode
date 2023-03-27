import React from 'react';
import {Editor, ConvertFromRaw} from 'draft-js';

export default const ReadOnlyEditor = (props) => {
  const storedState =  ConvertFromRaw(JSON.parse(props.storedState));
  return (
     <div className="readonly-editor">
       <Editor editorState={storedState} readOnly={true} /> 
     </div>
  );
}