import React, { useEffect } from "react";

function WysiwygEditor(props) {
  useEffect(() => {
    tinymce.init({
      selector: `#wysiwygContent${props.index}`,
      setup: (editor) => {
        editor.on("input", (e) =>
          props.setWysiwygData(tinymce.activeEditor.getContent())
        );
        editor.on("change", (e) =>
          props.setWysiwygData(tinymce.activeEditor.getContent())
        );
      },
    });
  }, []);
  return (
    <>
      <textarea
        placeholder="WYSIWYG"
        id={`wysiwygContent${props.index}`}
        name={`wysiwygContent${props.index}`}
      ></textarea>
    </>
  );
}

export default WysiwygEditor;
