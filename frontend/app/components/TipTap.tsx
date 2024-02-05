import {
  MenuButtonBold,
  MenuButtonItalic,
  MenuControlsContainer,
  MenuDivider,
  MenuSelectHeading,
  RichTextField,
} from "mui-tiptap";

import StarterKit from '@tiptap/starter-kit'
import CharacterCount from "@tiptap/extension-character-count";
import { useEditor } from '@tiptap/react'


//TODO: Finish incorporating menu buttons for the editor
//STRETCH: Implement a Notion-style editor


const Tiptap = (props: {}) => {
  const editor = useEditor({ // TIP
    extensions: [
      StarterKit,
      CharacterCount.configure({
        limit: 10000
      }),],
    content: "<p>Hello <b>world</b>!</p>",
  });
  
  return (
    <>
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
    </>
  )
}

export default Tiptap