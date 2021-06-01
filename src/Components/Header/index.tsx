import styles from './styles.module.scss';
import Link from 'next/link';
export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <img src="/logo.svg" alt="barber +" />

            <p>Faça sua barba de qualquer lugar</p>

            <span className={styles.loginButton} ><Link href="/">Entrar</Link></span>

        </header>
    )
}