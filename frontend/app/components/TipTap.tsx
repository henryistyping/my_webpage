
import { Button } from "@mui/material";
import { useState, useRef } from "react"
import {
  MenuButtonBold,
  MenuButtonItalic,
  MenuControlsContainer,
  MenuDivider,
  MenuSelectHeading,
  RichTextEditorProvider,
  RichTextField,
} from "mui-tiptap";
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

//TODO: import other dependencies from Tiptap for paragraph, list, etc.
//TODO: Replace text with icons and make the buttons pretty
//STRETCH: Create a Notion-style editor

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello <b>world</b>!</p>",
  });
  // const rteRef = useRef<RichTextEditorRef>(null);
  const set_editorContent = useState("hello")
  return (
    <>
      <div>
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

        <Button onClick={() => console.log(rteRef.current?.editor?.getHTML())}>
          Save
        </Button>
      </div>
    </>
  )
}

export default Tiptap