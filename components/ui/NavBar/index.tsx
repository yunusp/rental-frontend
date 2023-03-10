import styles from "./header.module.css";
import Link from "next/link";
export default function NavBar() {
    return (
            <div id={styles.header}>
                <span id={styles.site}>
                    <Link className={styles.hclick} href="/">Home</Link>
                    <Link className={styles.hclick} href="/about">About</Link>
                    <Link className={styles.hclick} href="/contact">Contact</Link>
                </span>
                <span id={styles.sign}>
                    <Link className={styles.hclick} href="/signin">Sign in</Link>
                    <Link className={styles.hclick} href="/signup">Sign up</Link>
                </span>
            </div>
    );
}