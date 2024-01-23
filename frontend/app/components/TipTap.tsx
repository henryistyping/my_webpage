'use client'
import { Button } from "@mui/material";
import { useState, useRef } from "react"
import {
  MenuButtonBold,
  MenuButtonItalic,
  MenuControlsContainer,
  MenuDivider,
  MenuSelectHeading,
  RichTextEditor,
  type RichTextEditorRef,
} from "mui-tiptap";
// import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

//TODO: import other dependencies from Tiptap for paragraph, list, etc.
//TODO: Replace text with icons and make the buttons pretty
//STRETCH: Create a Notion-style editor

const Tiptap = () => {
  const rteRef = useRef<RichTextEditorRef>(null);
  const set_editorContent = useState("hello")
  return (
    <>
      <div>
        <RichTextEditor
          ref={rteRef}
          extensions={[StarterKit]} // Or any Tiptap extensions you wish!
          content="<p>Hello world</p>" // Initial content for the editor
          // Optionally include `renderControls` for a menu-bar atop the editor:
          renderControls={() => (
            <MenuControlsContainer>
              <MenuSelectHeading />
              <MenuDivider />
              <MenuButtonBold />
              <MenuButtonItalic />
              {/* Add more controls of your choosing here */}
            </MenuControlsContainer>
          )}
        />

        <Button onClick={() => console.log(rteRef.current?.editor?.getHTML())}>
          Save
        </Button>
      </div>
    </>
  )
}

export default Tiptap