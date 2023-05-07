import Head from "next/head";
import styles from "../styles/about.module.css"
export default function About() {
    return (
        <>
            <Head><title>Rental - About</title></Head>
            <div className="h-full min-h-screen overflow-auto pt-4">
                <div className="w-7/12" id={styles["about-item"]}>
                    <div>
                        <h1 className="text-center font-title font-bold text-5xl drop-shadow-lg">About us</h1> <br />
                        <span id={styles["about-text"]}>
                            <p>This website was made by <i className="hover:font-bold hover:drop-shadow-lg">Yunus Poonawala (202000348)</i> for the final year project. Please have fun using it.</p>
                            <p>This system for renting cars is meant to replace current manual systems where persons who want to rent a car need to talk to people to obtain one. This can be very distressing for many people and things that can be done without human interaction should absolutely be done without human interaction.</p>
                            <p>Also since the website is fully automated, it completely eliminates the possibility of human error (at least on our side).</p>
                            <p>Since this project also provides convenience, more people are bound to do business with us naturally since they don’t need to get out of their comfort zone to do something as trivial as rent a car.</p>
                            <p>There is currently no easy and convenient way to rent a car; neither is there a way to make money off of a car someone might already have. This aims to solve this. A system will be provided that lets anyone rent a car which someone else has put up on lease. This does mean that someone has to put up a car for lease first. However, this will be a non-issue as there are a lot of people willing to lend cars (this was found out through extensive research)
                            </p>
                            <p>Thus the purpose of this project falls into place in our comprehension. All it aims to do is be a bridge between these eager parties – who, before the existence of this website had no way of easily meeting each other.
                            </p>
                        </span>
                    </div>
                </div>

            </div>
        </>

    );

}
