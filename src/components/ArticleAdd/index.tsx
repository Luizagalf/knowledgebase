import "./articleAdd.scss";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

type ArticleAddProps = {
  name: "javascript" | "html" | "css" | "react";
};

const ArticleAdd = ({ name }: ArticleAddProps) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [convertedContent, setConvertedContent] = useState<any>();

  const handleEditorChange = (state: EditorState) => {
    setEditorState(state);
    convertContentToHTML();
  };
  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  };

  console.log(convertedContent);

  return (
    <Editor
      editorState={editorState}
      onEditorStateChange={handleEditorChange}
      wrapperClassName="wrapper-class"
      editorClassName="editor-class"
      toolbarClassName="toolbar-class"
    />
  );
};

export default observer(ArticleAdd);
