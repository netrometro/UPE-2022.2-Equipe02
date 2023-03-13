import { Footers } from "../Footers/Footers";
import { Headers } from "../Headers.js/Headers";
import { Link } from "react-router-dom";
import { BackButtons } from "../../Atomic/Buttons/BackButtons";
import { Buttons } from "../../Atomic/Buttons/Buttons";
import axios, { isCancel, AxiosError } from "axios";
import response from "react";
import { useEffect, useState } from "react";
import jsPDF from 'jspdf';
const{userId} = require("../CriarDieta/getId")


export function GetDiet(){

    return(
        <div>
             <Headers/>
            <div className="m-[20px]">
                <Link to="/Diet">
                    <BackButtons name="<-"/>
                </Link>
            </div>
        </div>
       
        
    )
}