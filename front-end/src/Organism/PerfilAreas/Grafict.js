import React, {useState, useEffect } from "react";
import Chart from "react-apexcharts";
const{userId} = require('../../getUser/getId')

function Barchart(){

    const [peso, setPeso]= useState([]);
  const [pesoValue, setPesoValue]= useState([]);

  useEffect( ()=>{

    const pesoname=[];
    const pesovalue=[];

    const getPesorecord= async()=>{
      const token = JSON.parse(localStorage.getItem("powerup")).token; // obter token do localStorage
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const dataReq= await fetch(`http://localhost:3001/perfil/${userId}`, config);
      const dataRes= await dataReq.json();
      console.log(dataRes);

      for(let i=0; i<dataRes.length; i++)
      {
        pesoname.push(dataRes[i].peso);
        pesovalue.push(dataRes[i].peso);

      }

      console.log("teste peso" + pesoname)
      console.log("teste peso" + pesovalue)
      setPeso(pesoname)
      setPesoValue(pesovalue)
      
 }
  getPesorecord();

  },[]);
    
    
    return (
        <React.Fragment>
          <div className="container-fluid mb-5">
            <Chart
              type="bar"
              width={500}
              height={300}
              series={[
                {
                  name: "Social Media Subscriber",
                  data: pesoValue,
                },
              ]}
              options={{
    
                colors: ["#f90000"],
                theme: { mode: "light" },
    
                xaxis: {
                  tickPlacement: "on",
                  categories: peso,
                  title: {
                    text: "Peso",
                    style: { color: "#f90000", fontSize: 10 },
                  },
                },
    
                yaxis: {
                    labels: {
                      formatter: (val) => {
                      return `${val}`;
                      },
                    style: { fontSize: "10", colors: ["#f90000"] },
                  },
                     title: {
                     text: "Peso",
                     style: { color: "#f90000", fontSize: 10 },
                  },
                },
    
                legend: {
                  show: true,
                  position: "right",
                },
    
                dataLabels: {
                  formatter: (val) => {
                    return `${val}`;
                  },
                  style: {
                    colors: ["#f4f4f4"],
                    fontSize: 10,
                  },
                },
              }}
            ></Chart>
          </div>
        </React.Fragment>
      );
    }
    
export default Barchart;
