import './App.css'
import * as React from 'react';
import { useState } from 'react';
import Editor from './components/Editor'
import Previewer from './components/Previewer'
import { placeholder } from './placeholder.jsx'

export default function App() {
  const [content, setContent] = useState(placeholder)

  const handleChange = (value) => {
    console.log(value)
    setContent(value);
  }


  return (

    <div

      style={{
        overflow: "hidden",
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'darkgrey'
      }}
    >

      <div
        style={{
          overflow: "hidden",
          height: '80%',
          width: '80%',
          margin: 'auto',
          backgroundColor: '#f1f1f1',
          boxShadow: "5px 5px 5px 5px rgba(0, 0, 0, 0.2)"
        }}
      >

        <div className={"row"} style={{height: '2%'}}>
          <div className={"column left"}>
            <span className={"dot"} style={{background:"#Ef694A"}}></span>
            <span className={"dot"} style={{background:"#FDD800"}}></span>
            <span className={"dot"} style={{background:"#5AC05A"}}></span>
          </div>
          <div className={"column middle"}>
            <h3>Markdown Previewer</h3>
          </div>
        </div>
        
        <div 
          id={"editor"}
          component={'textarea'}
          style={{
          height: '49%',
          width: '100%',
          overflow: "auto",
          backgroundColor: "#292A30"
        }}>
          <Editor

            value={content}
            handleChange={handleChange}
            style={{minHeight: '100%'}}
          />
        </div>
        <div
                      id={'preview'}
          className={'markdown-body'}
          style={{
            paddingLeft: "10px",
            height: '49%',
            width: '100%',
            overflow: "auto",
          }}>
          <Previewer

            value={content}
            style={{height: "100%"}}
          />
        </div>
      </div>


    </div>
  )
}


