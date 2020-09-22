import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
const ReactMarkdown = require('react-markdown');

import css from "./style.css";

function MarkdownEditor({ file, write }) {
  
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log(file);
    file.text()
    .then(res =>{
      setValue(res);
    })
  }, [file]);

  function saveFile(e){
    let newFile = new File(
      [value],
      file.name,
      {
        type: "text/markdown",
        lastModified: new Date()
      }
    );
    write(newFile);
  }

  return (
    <div className={css.editor}>
      <textarea rows="25" cols="70" value={value} onChange={(e) => setValue(e.target.value)}></textarea>
      <button onClick={saveFile}>Save</button>
      <ReactMarkdown source={value} />
    </div>
  );
}

MarkdownEditor.propTypes = {
  file: PropTypes.object,
  write: PropTypes.func
};

export default MarkdownEditor;
