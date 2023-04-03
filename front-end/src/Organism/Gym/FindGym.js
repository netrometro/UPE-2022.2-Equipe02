import { useState } from "react";
import { Buttons } from "../../Atomic/Buttons/Buttons";
import { Link } from "react-router-dom";

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
            "name":["Cross Experience","Musculo em boa forma","Alto Fitness","Happy Fit","Selfit"],
            "link":[    "https://www.google.com.br/maps/place/Cross+Experience:+Academia,+Treinos,+Suplementa%C3%A7%C3%A3o,+Caruaru+PE/@-8.2958166,-35.9808942,17z/data=!3m1!4b1!4m6!3m5!1s0x7a98b5400b7ce59:0x19e47537a6f99de3!8m2!3d-8.2958219!4d-35.9787055!16s%2Fg%2F11nn2051vb",
                        "https://www.google.com.br/maps/place/M%C3%BAsculo+em+Boa+Forma+Academia/@-8.2915848,-35.98179,17z/data=!3m1!4b1!4m6!3m5!1s0x7a98ba202a90015:0x6d4f8ea6128f935e!8m2!3d-8.2915901!4d-35.9796013!16s%2Fg%2F11b6_skcfv",
                        "https://www.google.com.br/maps/place/Academia+Alto+Fitness/@-8.294669,-35.9828671,17z/data=!3m1!4b1!4m6!3m5!1s0x7a98b9f84527be7:0xdd7baeafa2d57fb4!8m2!3d-8.2946743!4d-35.9806784!16s%2Fg%2F11c40qz4kp",
                        "https://www.google.com.br/maps/place/ACADEMIA+HAPPY+FIT+CARUARU/@-8.2829135,-35.9757014,17z/data=!3m1!4b1!4m6!3m5!1s0x7a98b6c632b4ae5:0x6bcf934e8034df97!8m2!3d-8.2829188!4d-35.9735127!16s%2Fg%2F11sdz7s53j",
                        "https://www.google.com.br/maps/place/Selfit/@-8.2806859,-35.9732313,17z/data=!3m1!4b1!4m6!3m5!1s0x7a98bb845970203:0x3d0c5da702855ead!8m2!3d-8.2806912!4d-35.9710426!16s%2Fg%2F11b_3h44w9"
                    ],
         },
         "3":{
            "name":["","","","",""],
            "link":[    "",
                        "",
                        "",
                        "",
                        ""],
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

    const listAllGym = gymList[gymRes].name.map((name,index) => (
        <div className="shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl " key={index}>
            <Link to={gymList[gymRes].link[index]}>
                {name}
            </Link>
        </div>
    ));

    return(
        <div className="flex flex-col items-center justify-center pt-[20px]">
            <div>
                <p className="text-2xl font-bold text-[#8854d0]">Cidade disponíveis</p>
            </div>

            <div className=" w-max h-max p-[50px] shadow-2xl rounded-[12px] my-[30px] " >

            <select name="" id="" onChange={handleGymChange} className="mx-[10px]">
                <option value="">Selecione uma cidade</option>
                <option value="1">Garanhuns</option>
                <option value="2">Caruaru</option>
                <option value="3">Recife</option>
            </select>

            <Buttons name="Pesquisar" func={selectGym}/>

           

            </div>
            <div className=" w-[1300px] h-max p-[50px]  rounded-[12px] my-[30px]">
                <p className="mx-[20px]">Clique para visualizar sua localidade</p>
                {listAllGym}
            </div>

        </div>
    )
}