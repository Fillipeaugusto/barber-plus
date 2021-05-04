
import styles from './styles.module.scss';



export default function PricingCards() {
    return (
        <div className={styles.container}>
            <div className={styles.background}>
                <div className={styles.container}>
                    <div className={`${styles.panel} ${styles.pricingTable}`}>

                        <div className={styles.pricingPlan}>
                            <img src="https://s22.postimg.cc/8mv5gn7w1/paper-plane.png" alt="" className={styles.pricingImg} />
                            <h2 className={styles.pricingHeader}>Básico</h2>
                            <ul className={styles.pricingFeatures}>
                                <li className={styles.pricingFeaturesItem}>Custom domains</li>
                                <li className={styles.pricingFeaturesItem}>Sleeps after 30 mins of inactivity</li>
                            </ul>
                            <span className={styles.pricingPrice}>R$ 199,90</span>
                            <a href="#/" className={styles.pricingButton}>Assinar</a>
                        </div>

                        <div className={styles.pricingPlan}>
                            <img src="https://s28.postimg.cc/ju5bnc3x9/plane.png" alt="" className={styles.pricingImg} />
                            <h2 className={styles.pricingHeader}>Prata</h2>
                            <ul className={styles.pricingFeatures}>
                                <li className={styles.pricingFeaturesItem}>Never sleeps</li>
                                <li className={styles.pricingFeaturesItem}>Multiple workers for more powerful apps</li>
                                <li className={styles.pricingFeaturesItem}>Multiple workers for more powerful apps</li>
                                <li className={styles.pricingFeaturesItem}>Multiple workers for more powerful apps</li>
                                <li className={styles.pricingFeaturesItem}>Multiple workers for more powerful apps</li>
                            </ul>
                            <span className={styles.pricingPrice}>$150</span>
                            <a href="#/" className={`${styles.pricingButton} ${styles.isFeatured}`}>Assinar</a>
                        </div>

                        <div className={styles.pricingPlan}>
                            <img src="https://s21.postimg.cc/tpm0cge4n/space-ship.png" alt="" className={styles.pricingImg} />
                            <h2 className={styles.pricingHeader}>Premium</h2>
                            <ul className={styles.pricingFeatures}>
                                <li className={styles.pricingFeaturesItem}>Acesso á todas as barbearias da rede</li>
                                <li className={styles.pricingFeaturesItem}>Simple horizontal scalability</li>
                                <li className={styles.pricingFeaturesItem}>Simple horizontal scalability</li>
                                <li className={styles.pricingFeaturesItem}>Simple horizontal scalability</li>
                                <li className={styles.pricingFeaturesItem}>Simple horizontal scalability</li>
                                <li className={styles.pricingFeaturesItem}>Simple horizontal scalability</li>
                                <li className={styles.pricingFeaturesItem}>Simple horizontal scalability</li>
                                <li className={styles.pricingFeaturesItem}>Simple horizontal scalability</li>
                            </ul>
                            <span className={styles.pricingPrice}>R$400</span>
                            <a href="#/" className={styles.pricingButton}>Assinar</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}