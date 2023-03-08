import Head from "next/head";
import styles from "../styles/about.module.css"
export default function Contact() {
    return (
        <>
            <Head><title>Rental - Contact</title></Head>
            <div className="bg-blue-500 h-screen pt-4">
                <div className="grid justify-center content-center">
                    <h1 className="text-center font-bold text-5xl drop-shadow-lg">Contact us</h1> <br />
                    <span className="self-center grid content-center justify-center pt-4">
                        <form className="grid content-center justify-items-center justify-center pt-4" action="mailto:202000348@vupune.ac.in" method="post" encType="multipart/formdata">
                            <textarea name="message" id="msg" cols={80} rows={10} className="m-4" placeholder="Your message here"></textarea>
                            <br />
                            <input type="submit" value="Submit" className="bg-white inline p-4"/>
                        </form>
                    </span></div>

            </div>
        </>

    );

}