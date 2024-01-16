'use client'

import { MDXEditor, MDXEditorMethods, headingsPlugin, UndoRedo, BoldItalicUnderlineToggles, toolbarPlugin } from "@mdxeditor/editor"
import { FC } from 'react'
import '@mdxeditor/editor/style.css'


interface EditorProps {
  markdown: string
  editorRef?: React.MutableRefObject<MDXEditorMethods | null>
}

/**
 * Extend this Component further with the necessary plugins or props you need.
 * proxying the ref is necessary. Next.js dynamically imported components don't support refs. 
*/
const Editor: FC<EditorProps> = ({ markdown, editorRef }) => {
  return <MDXEditor ref={editorRef} markdown="Hello world"
    plugins={[
      toolbarPlugin({
        toolbarContents: () => (
          <>
            <UndoRedo />
            <BoldItalicUnderlineToggles />
          </>
        )
      })
    ]} />
}

export default Editor