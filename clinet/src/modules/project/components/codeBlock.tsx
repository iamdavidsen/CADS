import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import codeStyle from "react-syntax-highlighter/dist/esm/styles/prism/prism";

interface IProps {
    language: string,
    value: string
}

export const CodeBlock: React.FC<IProps> = ({ language, value }) => {
        return (
            <SyntaxHighlighter language={language} style={codeStyle}>
                {value}
            </SyntaxHighlighter>
        );
}

