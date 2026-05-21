export interface BaseNode {
    direction: string | null;
    format: string;
    indent: number;
    type: string;
    version: number;
}

export interface LexicalTextNode extends BaseNode {
    detail: number;
    mode: string;
    style: string;
    text: string;
    type: "text";
}

export interface LexicalElementNode extends BaseNode {
    children: LexicalNode[];
    tag?: string;
    textFormat?: number;
    textStyle?: string;
}

export interface LexicalRootNode extends BaseNode {
    type: "root";
    children: LexicalElementNode[];
}

export type LexicalNode = LexicalTextNode | LexicalElementNode | LexicalRootNode;

export interface DocBody {
    root: LexicalRootNode;
}