'use client'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit
    ],
    content: '<p>Hello World! 🌎️</p>',
  })

  if (!editor) {
    return null;
  }

  return (
    <>
      <div>
        <button onClick={() => editor.chain().focus().toggleBold().run()}>
          Bold
        </button>
      </div>
      <EditorContent editor={editor} />
    </>
  )
}

export default Tiptap