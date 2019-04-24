import * as React from "react";
import * as CMEditor from "codemirror";
import "codemirror/lib/codemirror.css";
import "./index.less";
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
export declare class CodeMirror extends React.Component<ICodeMirrorPorps> {
    render(): JSX.Element;
    private element;
    private value;
    private editor;
    private setElement;
    componentDidMount(): void;
    componentDidUpdate(): void;
    private bindEvents;
}
export { CodeMirror as CodeMirrorEditor, CodeMirror as Editor };
export default CodeMirror;
