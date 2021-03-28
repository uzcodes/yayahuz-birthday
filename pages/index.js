import Head from 'next/head'
import styles from '../styles/Home.module.css'
import messages from './messages/messages.json';

export default function Home() {
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
      <div className={styles.group}>
        <h3>Grupo 1.2</h3>
        <strong> OI, Yayah!</strong>
        <p>
         Nós do grupo 1.2 queremos parabenizá-la nessa data tão especial que é o seu aniversário. Como membros anciões e futuro da live, gostaríamos de desejar muitos anos de vida, que você cresça ainda mais na twitch e dizer que sempre estaremos aqui para apoiá-la em tudo. Agradecemos por todos os momentos felizes que você nos proporcionou com as lives:
        </p>
        <p>
          Livezinhas da cadeira com a net do hotel, jogando um lolzinho com 30 fps, luz improvisada e os filmes da madrugada;
        </p>
        <p>Gameplays de phasmophobia com a Mayumi, Yulla e Bonner;</p>
        <p>Lives da Bad Yayah (vulgo mosquito ou messi de óculos);</p>
        <p>Jogos do melhor duo do CS global (VIVA YADINHO);</p>
        <p>Lives culinárias, que consistem em intoxicar a família inteira (que massa com queijo nojenta paporeto);</p>
        <p>Participações da Sensei (maravilhosa) que sempre salvam a qualidade deste canal precário;</p>
        <p>Devemos lembrar também da vez que você carregou o seu time no Twitch Rivals, aposentando o Fer de vez (Kappa), e daquela vez que você se mediu com a cadeira pra ver quem era maior. Após relembrar de vários momentos memoráveis, desejamos que você se sinta realizada pelo que você está fazendo, saiba que estaremos lhe apoiando independente do que escolher fazer. Muitos de nós te conhecemos das primeiras lives e sabemos o quanto você evoluiu não só como streamer, mas também como pessoa.</p>
        <p>Por fim, feliz aniversário Yayah, vulgo esquisita, cachaceira, anã de jardim, cantora de rádio de pilha, salva-vidas de aquário, carcereira de gaiola, chaveiro de judoca, playmobil, alpinista de poltrona, corretora de banco imobiliário, escaladora de meio-fio, escultora de suspiro, gandula de pebolim, pintora de rodapé, goleira de futebol de botão, lenhadora de bonsai, mecânica de hot wheels, cachachera, enfim.</p>  
        <p>Esperamos ansiosamente o dia que você devolverá nossos pontos de Q.I perdidos durante esse tempo todo. Até lá, continuaremos sendo esquisitões do chat, já que o chat é o espelho da streamer.</p>  
        <p className={styles.sign}>Com carinho,<br/>
           Grupo 1.2 #seremosofuturo</p> 
      </div>
      <div className={styles.group}>
        <h3>Grupo 2</h3>
        <p>Yasmin, sei que não gosta que te chamemos assim mas esse é o nosso jeito esquisito de ser. Vamos fazer as considerações: Nós odiamos sua live: check. Nós não gostamos da sua gameplay: check. Não gostamos de você ter trocado o Brasil pelo Paraguai: check. Enfim, existem N coisas que podemos te criticar, mas hoje queremos focar em dizer o quanto você, sua ESQUISITA, é INCRÍVEL! </p>
        <p>Quando tu não capota caminhão, tu ta bangando o time todo e acabando com os rounds. A sua burrice nos surpreende cada dia mais, mas o seu coração é muito maior e é por isso estamos aqui com você todos os dias. Perdemos as contas de quantas as vezes já saímos da live com a bochecha cansanda de tanto rir. Você pode não botar tanta fé, mas faz as noites, e agora tardes, de muita gente mais leve e divertida.</p>
        <p>Também perdemos as contas de quantas vezes já pedimos "ARMA NA MÃO YAYAH" ou um "É SÓ FREIAR" e você não consegue corresponder, mas é justamente essa relação, como a de um irmão mais velho que adora a irmã e só tenta protegê-la, que faz a gente sempre estar lá por você. Ás vezes exageramos, mas nunca na maldade.</p>
        <p>Você é a prova que com autenticidade e coragem, podemos chegar a qualquer lugar. Por mais que te taxem de esquisito(a), estranho, diferente, basta ser você mesmo(a) que vai encontrar seu lugar no mundo. Enfim, o que nós queremos dizer é: gostamos muito de ti e te apoiaremos SEMPRE, apesar de você ser uma Judas. </p>  
        <p>Parabéns e obrigado por tudo! Que venham muito mais momentos inesquecíveis.<br/> A sua felicidade é a nossa.</p>
        <p className={styles.sign}>Ass: Grupo Dois.</p> 
      </div>
      <div className={styles.group}>
        <h3>Grupo 3</h3>
        <strong>AOS 22 ANOS DA MAIOR ANÃ DA TWITCH</strong>
        <p>OI! Yasmim "Yayah" Ingrid Larissa Souza... Tudo bem com você? Esperamos que sim! Está é uma pequena homenagem à nossa Anãzinha do chat, a esquisitinha de 1,54 M.</p>
        <p>Em nome de todo o GRUPO 3, nós estamos aqui para lhe dar Parabéns, desejar um Feliz Aniversário e agradecer muito, mas muito mesmo por você existir! Graças a você fizemos amigos, comparsas de games, parceiros no crime organizado e também uma família virtual onde você é essencial!</p>
        <p>Desde o “uuuUUuuUUU” no começo da live, até o “obrigada por hoje’’ no grupo, você torna o nosso dia melhor, é isso que te transforma em uma pessoa gigante, por dentro óbvio. Sempre que você estiver para baixo lembre-se que você criou uma comunidade fortíssima e unida que vai estar lá sempre por você, por tanto orgulhe-se disso.</p>
        <p>Problemas sempre vão aparecer e isso é normal, o que realmente importa é seguir em busca do que te faz feliz, com coragem e com pessoas que querem o seu bem e torcem pela sua felicidade!</p>
        <p>Nunca desista de seus sonhos, nós sabemos que você é capaz e estaremos te apoiando em todas as suas decisões... Os seus sonhos se tornaram os nossos sonhos!!! Apesar de todas as brincadeiras, nós te amamos.</p>
        <p>“Daqui à 50 anos estaremos sentados em nossas cadeiras de balanço lembrando de você”, das suas lives, das risadas que demos juntos, das pinadas do CS, dos tiros mentirosos que a Yallen acertava, dos momentos difíceis que foram superados quando o “oi” ecoou nos fones e nos deu a garantia de bons momentos juntos. Jamais nos esqueceremos de como você foi e é importante para nossos dias.</p>
        <p>Obrigado por nos proporcionar momentos incríveis em sua companhia durante às tardes e noites, obrigado por nos presentear com uma comunidade incrível que é o grupo 3!!! </p>
        <strong>VIVA YAYAH!!!!! </strong>
        <p className={styles.sign}>Ass: Comparsas do Valdão, Grupo 3....</p>
      </div>
    </div>
  )
}
