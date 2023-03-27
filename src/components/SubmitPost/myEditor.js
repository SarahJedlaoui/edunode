import React, { Component } from 'react';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import {Button} from "@material-ui/core"
import { convertToHTML, convertFromHTML } from 'draft-convert';
// import HtmlToReactParser from "html-to-react"
import createHashtagPlugin from "draft-js-hashtag-plugin"

const hashtagPlugin = createHashtagPlugin()

export default class MyEditor extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  }

  onEditorStateChange: Function = (editorState) => {
    this.setState({
      editorState,
    });
  };

  convertToRaw = (e) => {
    e.preventDefault()
  //  const rawText = this.setState({ convertedContent: convertToRaw(this.state.editorState.getCurrentContent()) });
  //  const { editorState } = this.state;
  // const contentState = JSON.stringify(editorState.getCurrentContent())
  
  // const newContentState = convertFromRaw(contentState);
  // const newEditorState = contentState.createWithContent(newContentState)
  
  // const contentStateWithEntity = contentState.createEntity('LINK', 'MUTABLE', {
  //   url: 'https://edunode.org/',
  // });
  // console.log(newEditorState)
  }

  exportHTML = (e) => {

    e.preventDefault()

    
   
    // const { editorState } = this.state;
    // const html = convertToHTML(editorState.getCurrentContent()) 

  }

  render() {
   
    const { editorState } = this.state;
    const texto = editorState.getCurrentContent().getPlainText('\u0001')
    // console.log(this.state.editorState.getCurrentContent()) // .getPlainText('\u0001')
    // console.log(<pre>{JSON.stringify( )}</pre>)
    // const html = convertToHTML(editorState.getCurrentContent()) 
console.log(texto)
    return (
      <>
      {/* <button onClick={this.convertToRaw}>Convert to raw</button>
      <button onClick={this.exportHTML}>Export HTML</button>
      <div>{html}</div> */}
      <div>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
          plugins={[hashtagPlugin]}
          
        />
          {/* <Editor editorState={editorState} readOnly={true} />
      */}
        {/* <textarea
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        /> */}
        
      </div>
     
      </>
    );
  }
}