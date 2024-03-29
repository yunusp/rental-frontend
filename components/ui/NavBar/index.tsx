import styles from "./header.module.css";
import Link from "next/link";
import Cookies from 'js-cookie';
import { useCookies } from 'react-cookie';
import { useEffect, useState } from "react";

export default function NavBar() {
    const [cookie, setCookie] = useCookies(["user"]);
    function signoutHandler() {
        setCookie("user", "", { expires: new Date(0) });

    }
    let [userCookie, setUserCookie] = useState("");
    useEffect(() => {
        let cc = Cookies.get("user");
        setUserCookie(cc ?? "");
    }, []);
    let output;
    if (userCookie !== "") {
        output = (<span id={styles.sign}>
            <Link className={styles.hclick} href="/profiles/me">Welcome, {userCookie}</Link>
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
