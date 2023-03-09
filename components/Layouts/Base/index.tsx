import NavBar from "../../ui/NavBar";
import styles from './Base.module.css';
export default function BaseLayout({ children }: any) {
    return (
        <>
            <NavBar />
            <main className={styles.base}>{children}</main>
        </>
    )
}