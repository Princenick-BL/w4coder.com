import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs';

function CodeHighlighter(props) {
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [props.text]);

  const highlightedText = props.text.replace(/<code>(.*?)<\/code>/gs, (match, p1) => {
    const highlightedCode = Prism.highlight(p1, Prism.languages[props.language], props.language);
    return `<code class="language-${props.language}">${highlightedCode}</code>`;
  });

  return (
    <div dangerouslySetInnerHTML={{ __html: highlightedText }} />
  );
}

export default CodeHighlighter;
