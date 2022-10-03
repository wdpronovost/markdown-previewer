import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data'
import { javascript } from '@codemirror/lang-javascript';
import { xcodeDark } from '@uiw/codemirror-theme-xcode'

export default function Editor(props) {

  return (    
    <CodeMirror
      value={props.value}
      height='100%'
      theme={xcodeDark}
      extensions={[markdown({ base: markdownLanguage, codeLanguages: languages}), javascript({ jsx: true })]}
      onChange={ props.handleChange }
    />
  );
} 