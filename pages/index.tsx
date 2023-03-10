import Head from "next/head";
import 'aos/dist/aos.css';
import CarCard from "../components/ui/CarCard";
import { CarCardPropObject } from "../interfaces/carCardProps";
export default function Index(props: CarCardPropObject) {
    const prop = props.cars;
    return (
        <>
            <Head>
                <title>Rental - Home</title>

            </Head>
            <div className="h-full min-h-screen pb-2">
                <div className="text-center text-5xl font-title pt-4 font-bold drop-shadow-lg">Browse our selection of cars</div> <br />
                <div className="flex justify-center flex-wrap [&>*]:m-1">
                    {prop.map((data, index) => <CarCard data-aos="fade-in" id={index} key={index} name={data.name} dt={data.dt} price={data.price} description={data.description} picture={data.picture} />)}
                </div>
            </div>
        </>

    );

}

export async function getServerSideProps(_: any) {
    const jsonData = await fetch("http://localhost:3000/info.json", { method: "get" });
    const data: CarCardPropObject = await jsonData.json();
    return {
        props: data
    };
}