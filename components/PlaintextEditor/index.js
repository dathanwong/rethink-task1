import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";

import css from "./style.css";

function PlaintextEditor({ file, write }) {
  
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
        type: "text/plain",
        lastModified: new Date()
      }
    );
    write(newFile);
  }

  return (
    <div className={css.editor}>
      <textarea rows="30" cols="70" value={value} onChange={(e) => setValue(e.target.value)}></textarea>
      <button onClick={saveFile}>Save</button>
    </div>
  );
}


PlaintextEditor.propTypes = {
  file: PropTypes.object,
  write: PropTypes.func
};

export default PlaintextEditor;
