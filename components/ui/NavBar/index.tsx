import styles from "./header.module.css";
import Link from "next/link";
import Cookies from 'js-cookie';
import { useEffect, useState } from "react";

export default function NavBar() {
    let [userCookie, setUserCookie] = useState("");
    useEffect(() => {
        let cc = Cookies.get("user");
        setUserCookie(cc ?? "");
    }, []);
    let output;
    if (userCookie !== "") {
        output = (<span id={styles.sign}>
            <Link className={styles.hclick} href="/">Welcome, {userCookie}</Link>
        </span>);
    } else {
        output = (<span id={styles.sign}>
            <Link className={styles.hclick} href="/signin">Sign in</Link>
            <Link className={styles.hclick} href="/signup">Sign up</Link>
        </span>);
    }
    return (
        <div id={styles.header}>
            <span id={styles.site}>
                <Link className={styles.hclick} href="/">Home</Link>
                <Link className={styles.hclick} href="/about">About</Link>
                <Link className={styles.hclick} href="/contact">Contact</Link>
            </span>
            {output}
        </div>
    );
}
