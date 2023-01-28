import NavBar from "../../ui/Header";
import styles from './Base.module.css';
export default function BaseLayout({ children }: any) {
    return (
        <>
            <NavBar />
            <main className={styles.base}>{children}</main>
        </>
    )
}