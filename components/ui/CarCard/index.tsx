import { CarCardProps } from "../../../interfaces/carCardProps"
export default function CarCard(props: CarCardProps) {
    const carImgUrl: string = props.picture ?? "/favicon.ico";
    const carYear: string = (props.year ?? "???").toString();
    const carDesc: string = props.description ?? "No description given";
    return (
        <div className=" p-1 border border-black w-64 h-64 flex flex-col content-between justify-start items-center bg-slate-400">
            <img src={carImgUrl} alt={carDesc} className="h-1/2" />
            <p className="text-2xl text-center truncate w-60">{props.name}</p>
            <p className="text-center truncate w-60">{props.dt}</p>
            <p className="text-xl">₹{props.price}</p>
            <p className="text-center">{carDesc}</p>
        </div>
    );
}