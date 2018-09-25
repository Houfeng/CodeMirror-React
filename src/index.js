import React from 'react';
import CMEditor from 'codemirror';
import 'codemirror/lib/codemirror.css';
import './index.less';

const noop = () => { };
const requireAll = req => req.keys().map(req);
const modeReq = require.context('codemirror/mode', true, /\.js$/);
const themeReq = require.context('codemirror/theme', true, /\.css$/);
requireAll(modeReq);
requireAll(themeReq);

export class CodeMirror extends React.Component {

  render() {
    return <div ref={this.setElement}
      className="codemirror-editor">
    </div>;
  }

  setElement = (ref) => this.element = ref;

  componentDidMount() {
    const {
      defaultValue = this.value, value = defaultValue,
      mode = 'javascript', theme = 'duotone-light',
      tabSize = 2, lineNumbers = true, ...others
    } = this.props;
    this.editor = new CMEditor(this.element, {
      ...others, value, mode, theme, tabSize, lineNumbers
    });
    this.bindEvents();
  }

  componentDidUpdate() {
    const { value } = this.props;
    if (value === this.value) return;
    console.log(value, this.value);
    this.editor.setValue(value);
  }

  bindEvents = () => {
    if (!this.editor) return;
    const { onChange = noop, onReady = noop } = this.props;
    this.editor.on('change', () => {
      this.value = this.editor.getValue();
      onChange(this.value);
    });
    onReady(this.editor, this);
  }

}

export {
  CodeMirror as CodeMirrorEditor,
  CodeMirror as Editor
};
export default CodeMirror;