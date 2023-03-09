export interface CarCardProps {
    id? : number,   /*Unique id. Filled in by the map index for now*/
    name: string,   /*Name of car*/
    year?: number,  /*How old?*/
    dt: string,  /*For how long*/
    price: number,  /*price of rent*/
    picture?: string,   /*url to pic of car*/
    description?: string,   /*misc descriptions*/
}

export interface CarCardPropObject {
    cars: Array<CarCardProps>
}