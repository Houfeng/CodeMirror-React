import React from 'react';
import ReactDOM from 'react-dom';
import CodeMirror from './';

class App extends React.Component {

  state = { value: '//demo' }

  setValue = () => {
    this.setState({ value: '//test' });
  }

  onChange = (value) => {
    this.setState({ value });
  }

  render() {
    return <div>
      <CodeMirror
        value={this.state.value}
        mode='javascript'
        theme='duotone-light'
        tabSize={2}
        lineNumbers={true}
        onChange={this.onChange}
      />
      <button onClick={this.setValue}>设置内容</button>
    </div>;
  }
}

ReactDOM.render(<App />, root);