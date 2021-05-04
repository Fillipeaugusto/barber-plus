import styles from './styles.module.scss';

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <img src="/logo.svg" alt="barber +" />

            <p>Faça sua barba de qualquer lugar</p>
            <span>Entrar</span>
        </header>
    )
}