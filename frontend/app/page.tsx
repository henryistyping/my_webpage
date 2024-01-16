// `app.page.tsx` is the UI for the `/` URL
import Image from 'next/image';
import styles from './page.module.scss';

//components
import InputPost from './components/InputPost';

export default function Home() {
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
