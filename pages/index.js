import Head from 'next/head'
import styles from '../styles/Home.module.css'
import messages from './messages/messages.json';

export default function Home() {

  console.log(messages.length)
  return (
    <div className={styles.container}>
      <div className={styles.fixed}>
        🎂🎈🎁🌟
      </div>
      <Head>
        <title>Feliz Aniversário, Yayahuz</title>
        <link rel="icon" href="/yayahCoracao.png" />
      </Head>
      <h1 className={styles.title}>
        💖 Feliz Aniversário, <strong>Yayahuz</strong>! 🎉
      </h1>
      <h2 className={styles.subtitle}>
        Yayah, aqui estão algumas das mensagens escritas com muito carinho pela sua comunidade.
      </h2>
      <main className={styles.main}>
        {messages.map((message) => (
          <article className={styles.article} key={message.nick}>
            <h3 className={styles.nick}>{message.nick}</h3>
            <main className={styles.text}>
              {message.message}
            </main>
            <img src={`/${message.icon}.png`} alt="" className={styles.emote}/>
          </article>
        ))}
      </main>
      <footer className={styles.footer}>
        <img src="/yayahCoracao.png" alt="" className={styles.footerEmote}/>
        Feito com muito amor por amigos, mods e grupos.
        <img src="/yayahCoracao.png" alt="" className={styles.footerEmote}/>
      </footer>
    </div>
  )
}
