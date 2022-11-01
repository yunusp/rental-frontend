import styles from "./Base.module.css";
export default function BaseLayout({ children }: any) {
    return (<div className={styles.base}>{children}</div>)
}