import React, { Component } from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';

class MyEditor extends Component {
    constructor(props) {
      super(props);
      this.state = {editorState: EditorState.createEmpty()};
      this.onChange = (editorState) => this.setState({editorState});
    }

    handleKeyCommand = (command, editorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
          this.onChange(newState);
          return 'handled';
        }
        return 'not-handled';
    }

    _onBoldClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
    }

    _onItalicClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
    }

    _onUnderlineClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
    }

    _onOlClick = () => {
        this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'OL'));
    }


    render () {
      return (
        <div>
            <button onClick={this._onBoldClick.bind(this)}>Bold</button>
            <button onClick={this._onItalicClick.bind(this)}>Italic</button>
            <button onClick={this._onUnderlineClick.bind(this)}>Underline</button>
            <button onClick={this._onOlClick.bind(this)}>OL</button>
            <Editor editorState={this.state.editorState} onChange={this.onChange} handleKeyCommand={this.handleKeyCommand}/>
        </div>    
        );
    }
}

export default MyEditor;