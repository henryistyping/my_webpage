
import { Button } from "@mui/material";
import { useState, useRef } from "react"
import {
  MenuButtonBold,
  MenuButtonItalic,
  MenuControlsContainer,
  MenuDivider,
  MenuSelectHeading,
  RichTextEditorProvider,
  type RichTextEditorRef,
  RichTextField,
} from "mui-tiptap";
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import CharacterCount from "@tiptap/extension-character-count";

//TODO: Replace text with icons and make the buttons pretty
//STRETCH: Create a Notion-style editor


const Tiptap = () => {

  const editor = useEditor({
    extensions: [
      StarterKit,
      CharacterCount.configure({
        limit: 10000
      }),],
    content: "<p>Hello <b>world</b>!</p>",
  });

  const submit = editor?.getJSON();

  const set_editorContent = useState("hello")
  return (
    <>
      {/* <form action="a certain url" method="post"> */}
      <RichTextEditorProvider editor={editor}>
        <RichTextField
          controls={
            <MenuControlsContainer>
              <MenuSelectHeading />
              <MenuDivider />
              <MenuButtonBold />
              <MenuButtonItalic />
              {/* Add more controls of your choosing here */}
            </MenuControlsContainer>
          }
        />
      </RichTextEditorProvider>

      {/* <Button type="submit" onClick={() => console.log(editor)}>
          Save
        </Button> */}
      <Button onClick={() => console.log(submit)}>
        Save
      </Button>
      {/* </form> */}
    </>
  )
}

export default Tiptap