
import {
  MenuButtonBold,
    MenuButtonItalic,
    MenuControlsContainer,
    MenuDivider,
    MenuSelectHeading,
    RichTextField,
  } from "mui-tiptap";

//TODO: Finish incorporating menu buttons for the editor
//STRETCH: Implement a Notion-style editor


const Tiptap = (props: {
  description: string,
  onChange
}) => {
  

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