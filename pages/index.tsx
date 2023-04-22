import Head from "next/head";
import 'aos/dist/aos.css';
import CarCard from "../components/ui/CarCard";
import { CarCardPropObject } from "../interfaces/carCardProps";
export default function Index(props: { cars: any; data: any[]; }) {
    const prop = props.cars;
    return (
        <>
            <Head>
                <title>Rental - Home</title>
            </Head>
            <div className="h-full min-h-screen pb-2">
                <div className="text-center text-5xl font-title pt-4 font-bold drop-shadow-lg">Browse our selection of cars <a href="/lend" className="text-blue-600">(or add to it)</a></div> <br />
                <div className="flex justify-center flex-wrap [&>*]:m-1">
                    {props.data.map((data, index) => <CarCard
                        key={index}
                        {...data}
                    />)}
                </div>
            </div>
        </>
    );
}

export async function getServerSideProps(_: any) {
    const jsonData = await fetch("http://localhost:8000/cars", { method: "get" });
    const data: CarCardPropObject = await jsonData.json();
    return {
        props: { data: data }
    };
}
