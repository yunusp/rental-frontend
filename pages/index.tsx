import styles from "../styles/Index.module.css";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import BaseLayout from "../components/Layouts/Base";
export default function Index() {
    return (
        <BaseLayout>
            <Header></Header>
            <h1 className="text-3xl underline font-bold text-sky-600 h-full">Hello world!</h1>
            <Footer></Footer>
        </BaseLayout>
    );

}