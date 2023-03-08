import styles from "./header.module.css";
import Link from "next/link";
export default function NavBar() {
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