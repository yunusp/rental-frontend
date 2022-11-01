import styles from "./header.module.css";

export default function Header() {
    return (
            <div id={styles.header}>
                <span id={styles.site}>
                    <a className={styles.hclick} href="/">Home</a>
                    <a className={styles.hclick} href="/">About</a>
                    <a className={styles.hclick} href="/">Contact</a>
                </span>
                <span id={styles.sign}>
                    <a className={styles.hclick} href="/signin">Sign in</a>
                    <a className={styles.hclick} href="/signup">Sign up</a>
                </span>
            </div>
    );
}