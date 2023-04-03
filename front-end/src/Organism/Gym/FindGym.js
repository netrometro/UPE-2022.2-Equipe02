import { useState } from "react";
import { Buttons } from "../../Atomic/Buttons/Buttons";

export function FindGym(){

    const gymList = {
        "0":{
           "name":[""],
           "link":[""],
        },
        "1":{
            "name":["Duo Academia","Happy Fit","Hit Academia", "FIIT Academia", "Selfit"],
            "link":[    "https://www.google.com.br/maps/place/DUO+Academia+-+Unidade+Heli%C3%B3polis/@-8.8804528,-36.48695,17z/data=!3m1!4b1!4m6!3m5!1s0x7070cd95441d757:0x6e01c3530f0762d2!8m2!3d-8.8804581!4d-36.4847613!16s%2Fg%2F11cs6g060k",
                        "https://www.google.com.br/maps/place/ACADEMIA+HAPPY+FIT+GARANHUNS/@-8.88787,-36.4918529,17z/data=!3m1!4b1!4m6!3m5!1s0x7070d4bdacb3917:0x6b06157047e39341!8m2!3d-8.8878753!4d-36.4896642!16s%2Fg%2F11rspf21gk",
                        "https://www.google.com.br/maps/place/Hit+Academia/@-8.88787,-36.4918529,17z/data=!4m6!3m5!1s0x7070d20c05f5a33:0x1f6a88e03b2c5753!8m2!3d-8.882636!4d-36.477076!16s%2Fg%2F11f3c8z763",
                        "https://www.google.com.br/maps/place/FIIT+Academia/@-8.8861459,-36.5024898,17z/data=!3m1!4b1!4m6!3m5!1s0x7070d7111fe795f:0x70dde98cfc79b4de!8m2!3d-8.8861512!4d-36.5003011!16s%2Fg%2F11ny0xvs15",
                        "https://www.google.com.br/maps/place/Selfit/@-8.886221,-36.4888906,17z/data=!3m1!4b1!4m6!3m5!1s0x7070d4679a13e51:0xbadcdf753fdf53b1!8m2!3d-8.8862263!4d-36.4867019!16s%2Fg%2F11tbwnx51z"
        ],
         },
         "2":{
            "name":[""],
            "link":[""],
         },
         "3":{
            "name":[""],
            "link":[""],
         },
    }

    const [gym, setGym] = useState("");
    const [gymRes, setGymRes] = useState("0");

    const handleGymChange = (e) => setGym(e.target.value);

    function selectGym(){
        if(gym === "1"){
            setGymRes("1")
        }else if(gym === "2"){
            setGymRes("2")
        }else if(gym === "3"){
            setGymRes("3")
        }else{
            alert("selecione uma cidade para ver o resultado")
        }
    }

    return(
        <div>
            <div>Cidade disponíveis</div>

            <select name="" id="" onChange={handleGymChange}>
                <option value="">Selecione uma cidade</option>
                <option value="1">Garanhuns</option>
                <option value="2">Caruaru</option>
                <option value="3">Recife</option>
            </select>

            <Buttons name="Pesquisar"/>
        </div>
    )
}