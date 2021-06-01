import styles from '../../styles/barbershop.module.scss';
import Link from 'next/link';


export default function BarberShop() {
    return (
        <div>
            <header className={styles.headerContainer}>
                <img src="/logo.svg" alt="barber +" />

                <p>Bem vindo Fillipe</p>
            </header>



        </div>

    )
}