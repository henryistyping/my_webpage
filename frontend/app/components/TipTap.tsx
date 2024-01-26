import {
  MenuButtonBold,
  MenuButtonItalic,
  MenuControlsContainer,
  MenuDivider,
  MenuSelectHeading,
  RichTextField,
} from "mui-tiptap";

//TODO: Use state management (context) to allow form submission in the parenet component OR figure out a way to pass down as prop to child component
//TODO: Replace text with icons and make the buttons pretty
//STRETCH: Create a Notion-style editor


const Tiptap = () => {
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