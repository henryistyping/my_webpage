// `app.page.tsx` is the UI for the `/` URL
import Image from 'next/image';
import styles from './page.module.scss';

// Tiptap
import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import CharacterCount from "@tiptap/extension-character-count";
import { RichTextEditorProvider } from 'mui-tiptap';

//components
import InputPost from './components/InputPost';

export default function Home() {

  const editor = useEditor({ // TIP
    extensions: [
      StarterKit,
      CharacterCount.configure({
        limit: 10000
      }),],
    content: "<p>Hello <b>world</b>!</p>",
  });

  return (
    <main className={styles.main}>
      <>
        <div className="container">
          <InputPost />
        </div>
      </>
    </main>
  )
}
