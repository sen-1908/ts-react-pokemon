import { memo, useEffect, useState } from "react"
import axios from "axios";

type pokemonData = {
    name : string;
    sprites : {
        back_default : any;
    } 
} 
export const Index: React.FC = memo(() => {
    const [datas, setDatas] = useState([]);
    
    const wantNumber = 100;

    const urlAPI = "https://pokeapi.co/api/v2/pokemon/25";
    useEffect( () => {
        axios.get(urlAPI).then((res)=> {
        setDatas(res.data);
        })
    },[])
    console.log(datas.sprites.back_default);
    return (
        <div>
            <div>
                {Object.values(datas).map((data: pokemonData,id: number) => (
                <div key={id}  >
                    <p>{data.name}</p>
                    <img src={data.sprites.back_default} />  
                    <p>{data.name}</p>
                </div>
                ))}
            </div>
        </div>
    )

});