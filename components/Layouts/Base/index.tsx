import React from "react";
import NavBar from "../../ui/NavBar";
import styles from './Base.module.css';
export default function BaseLayout({ children }: any) {
    return (
        <React.Fragment>
            <NavBar />
            <main className={styles.base}>{children}</main>
        </React.Fragment>
    )
}
