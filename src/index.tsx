import * as React from "react";
import * as CMEditor from "codemirror";
import "codemirror/lib/codemirror.css";
import "./index.less";

const noop = () => {};
const requireAll = req => req.keys().map(req);
const modeReq = require.context("codemirror/mode", true, /\.js$/);
const themeReq = require.context("codemirror/theme", true, /\.css$/);
requireAll(modeReq);
requireAll(themeReq);

export interface ICodeMirrorPorps {
  defaultValue?: string;
  value?: string;
  mode?: string;
  theme?: string;
  tabSize?: number;
  lineNumbers?: boolean;
  readOnly?: boolean;
  onReady?: (originEditor: CMEditor, editor?: CodeMirror) => void;
  onChange?: (value: string) => void;
  [name: string]: any;
}

export class CodeMirror extends React.Component<ICodeMirrorPorps> {
  render() {
    return <div ref={this.setElement} className="codemirror-editor" />;
  }

  private element: HTMLElement;
  private value: string;
  private editor: CMEditor;

  private setElement = ref => (this.element = ref);

  componentDidMount() {
    const {
      defaultValue = this.value,
      value = defaultValue,
      mode = "javascript",
      theme = "elegant",
      tabSize = 2,
      lineNumbers = true,
      ...others
    } = this.props;
    this.editor = new CMEditor(this.element, {
      ...others,
      value,
      mode,
      theme,
      tabSize,
      lineNumbers
    });
    this.bindEvents();
    setTimeout(() => this.editor.refresh(), 0);
  }

  componentDidUpdate() {
    const { value } = this.props;
    if (value === this.value) return;
    console.log(value, this.value);
    this.editor.setValue(value);
  }

  private bindEvents = () => {
    if (!this.editor) return;
    const { onChange = noop, onReady = noop } = this.props;
    this.editor.on("change", () => {
      this.value = this.editor.getValue();
      onChange(this.value);
    });
    onReady(this.editor, this);
  };
}

export { CodeMirror as CodeMirrorEditor, CodeMirror as Editor };

export default CodeMirror;
