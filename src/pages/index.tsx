import Head from 'next/head'
import styles from '../../styles/Home.module.scss'
import Header from '../Components/Header'
import PricingCards from '../Components/PricingCards'



export default function Home() {
  return (
    <div>
      <Head>
        <title>Barber +</title>
      </Head>
      <Header />
      <div className={styles.cardImg} />

      <div className={styles.main}>

        <div className={styles.textContainer}>

          <div className={styles.text}>
            <h1>Experimente cortar o seu cabelo ou fazer sua barba em <span>qualquer lugar do Brasil</span>
          , sem o medo de ter que ficar esperando, ou até mesmo ter que ligar para marcar
           um horário.</h1>
            <div className={styles.conditions}>
              <span>A disponibilidade das barbearias depende exclusivamente do plano assinado  consute as condições e disponibilidade do seu plano</span>
            </div>

          </div>

          <div className={styles.image} />
        </div>

        <div className={styles.textAcess}>

          <div className={styles.imageCorte} />

          <div className={styles.acess}>

            <div className={styles.welcome}>
              <h1>Tenha acesso <span>a mais de 1.000 barbearias</span> em todo o país</h1>

              <div className={styles.promotional}>
                <img src="/img/money-icon.svg" alt="" />

                <div className={styles.payment}>
                  <p>Assinatura anual, sem taxas de  matrícula ou cancelamento.</p>
                </div>

              </div>
              <div className={styles.promotional}>
                <img src="/img/percent-icon.svg" alt="" />

                <div className={styles.payment}>
                  <span>Opções de plano apartir de R$ 199,90</span>
                </div>

              </div>
              <div className={`${styles.promotional} ${styles.cardPay}`}>
                <img src="/img/card-pay.svg" alt="" />

                <div className={`${styles.payment}`}>
                  <span>Parcele em até 12x sem juros </span>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
      <div className={styles.planTitle}>
        <h1 >Confira aqui nossos planos</h1>
      </div>

      <PricingCards />
    </div>
  )
}
