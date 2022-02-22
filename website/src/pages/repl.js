"use strict";

const React = require("react");
import Head from '@docusaurus/Head';
import Layout from "@theme/Layout";

const styles = [
  "https://unpkg.com/codemirror@5.56.0/lib/codemirror.css",
  "https://unpkg.com/codemirror@5.56.0/theme/darcula.css",
];

const scripts = [
  "https://unpkg.com/react@16.3.2/umd/react.production.min.js",
  "https://unpkg.com/react-dom@16.3.2/umd/react-dom.production.min.js",
  "https://unpkg.com/codemirror@5.56.0/lib/codemirror.js",
  "https://unpkg.com/codemirror@5.56.0/mode/javascript/javascript.js",
  "https://unpkg.com/codemirror@5.56.0/mode/xml/xml.js",
  "https://unpkg.com/codemirror@5.56.0/mode/jsx/jsx.js",
  "https://unpkg.com/codemirror@5.56.0/keymap/sublime.js",
  "https://unpkg.com/codemirror@5.56.0/addon/comment/comment.js",
  "https://unpkg.com/codemirror@5.56.0/addon/display/placeholder.js",
  "https://unpkg.com/codemirror@5.56.0/addon/edit/matchbrackets.js",
  "https://unpkg.com/codemirror@5.56.0/addon/search/searchcursor.js",
  "https://unpkg.com/codemirror@5.56.0/addon/selection/active-line.js",
  "https://unpkg.com/lz-string@1.4.4/libs/base64-string.js",
  "https://unpkg.com/lz-string@1.4.4/libs/lz-string.min.js",
  "/js/build/repl.js",
];

function REPL() {
  return (
    <Layout>
      <Head>
        {styles.map(url => (
          <link rel="stylesheet" type="text/css" href={url} key={url} />
        ))}
        {scripts.map(url => (
          <script src={url} key={url} />
        ))}
      </Head>
      <div id="root">
        <noscript>You need to enable JavaScript to run this app.</noscript>
      </div>
    </Layout>
  );
}

export default REPL;
