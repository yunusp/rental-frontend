import Head from "next/head";
import CarCard from "../components/ui/CarCard";
import { CarCardProps } from "../interfaces/carCardProps";
export default function Index() {
    const cardList: Array<CarCardProps> = [
        {
            name: "maruti suzuki",
            price: 40000,
            dt: "2 months",
        },
        {
            name: "Bugatti",
            price: 10,
            dt: "2 months",
        },
        {
            name: "Toyota",
            price: 10000,
            dt: "6 months",
        },
        {
            name: "Mitsubishi",
            price: 80000,
            dt: "2 months",
        },
        {
            name: "maruti suzuki",
            price: 40000,
            dt: "2 months",
        },
        {
            name: "Bugatti",
            price: 10,
            dt: "2 months",
        },
        {
            name: "Toyota",
            price: 10000,
            dt: "6 months",
        },
        {
            name: "Mitsubishi",
            price: 80000,
            dt: "2 months",
        },
        {
            name: "maruti suzuki",
            price: 40000,
            dt: "2 months",
        },
        {
            name: "Bugatti",
            price: 10,
            dt: "2 months",
        },
        {
            name: "Toyota",
            price: 10000,
            dt: "6 months",
        },
        {
            name: "Mitsubishi",
            price: 80000,
            dt: "2 months",
        },
        {
            name: "maruti suzuki",
            price: 40000,
            dt: "2 months",
        },
        {
            name: "Bugatti",
            price: 10,
            dt: "2 months",
        },
        {
            name: "Toyota",
            price: 10000,
            dt: "6 months",
        },
        {
            name: "Mitsubishi",
            price: 80000,
            dt: "2 months",
        },
        {
            name: "maruti suzuki",
            price: 40000,
            dt: "2 months",
        },
        {
            name: "Bugatti",
            price: 10,
            dt: "2 months",
        },
        {
            name: "Toyota",
            price: 10000,
            dt: "6 months",
        },
        {
            name: "Mitsubishi",
            price: 80000,
            dt: "2 months",
        },
        {
            name: "maruti suzuki",
            price: 40000,
            dt: "2 months",
        },
        {
            name: "Bugatti",
            price: 10,
            dt: "2 months",
        },
        {
            name: "Toyota",
            price: 10000,
            dt: "6 months",
        },
        {
            name: "Mitsubishi",
            price: 80000,
            dt: "2 months",
        },
        {
            name: "maruti suzuki",
            price: 40000,
            dt: "2 months",
        },
        {
            name: "Bugatti",
            price: 10,
            dt: "2 months",
        },
        {
            name: "Toyota",
            price: 10000,
            dt: "6 months",
        },
        {
            name: "Mitsubishi",
            price: 80000,
            dt: "2 months",
        },
        {
            name: "maruti suzuki",
            price: 40000,
            dt: "2 months",
        },
        {
            name: "Bugatti",
            price: 10,
            dt: "2 months",
        },
        {
            name: "Toyota",
            price: 10000,
            dt: "6 months",
        },
        {
            name: "Mitsubishi",
            price: 80000,
            dt: "2 months",
        },
        {
            name: "maruti suzuki",
            price: 40000,
            dt: "2 months",
        },
        {
            name: "Bugatti",
            price: 10,
            dt: "2 months",
        },
        {
            name: "Toyota",
            price: 10000,
            dt: "6 months",
        },
        {
            name: "Mitsubishi",
            price: 80000,
            dt: "2 months",
        },
        
    ];
    return (
        <>
            <Head><title>Rental - Home</title></Head>
            <div className="h-full min-h-screen">
                <div className="flex justify-center flex-wrap [&>*]:m-1">\
                    {cardList.map(x => <CarCard name={x.name} price={x.price} dt={x.dt} />)}
                </div>
            </div>
        </>

    );

}