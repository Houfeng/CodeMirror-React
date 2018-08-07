import React from 'react';
import ReactDOM from 'react-dom';
import CodeMirror from './';

function App() {
  return <div>
    <CodeMirror
      value='//demo'
      mode='javascript'
      theme='duotone-light'
      tabSize={2}
      lineNumbers={true}
    />
  </div>;
}

ReactDOM.render(<App />, root);