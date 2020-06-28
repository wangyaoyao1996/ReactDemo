import React from 'react';
import logo from './logo.svg';
import './App.css';
import CommentBox from './Comment/CommentBox'


function App() {
    let commentList=[
        {"name":"小王","date":"2009-9-9","content":"开心啊，放假了"},
        {"name":"小朱","date":"2009-9-9","content":"开心啊，放假了"},
        {"name":"小邓","date":"2009-9-9","content":"开心啊，放假了"}
    ]
  return (
    <div className="App">
      <header className="App-header">
          <CommentBox />
      </header>
    </div>
  );
}

export default App;
