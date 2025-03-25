import { Prevision } from "../../interface/Prevision"
import { Temperature } from "../../interface/Temperature"
import Container from "../Container"
import Curiosidades from "./Curiosidades"
import Nuvens from "./Nuvens"
import Sol from "./Sol"
import Umidade from "./Umidade"
import Vento from "./Vento"

interface ListResultsProps{
    temperature: Temperature | null
    prevision: Prevision | null
}

const ListResults = ({ temperature, prevision} : ListResultsProps) => {

    if(! temperature || !prevision) return null

    return (
        <Container>
            <div>

                <div className="flex justify-center items-center w-full mt-10">
                    <div className="flex flex-col items-center text-white">
                        <h2 className="text-2xl">{temperature.name}</h2>
                        <h1 className="text-8xl">{temperature.main.temp.toFixed(0)}º</h1>
                        <span className="text-[14px] py-3">{temperature.weather[0].description}</span>
                        <div className="flex gap-5 text-[18px]">
                            <span>Máxima: {temperature.main.temp_max.toFixed(0)}º</span>
                            <span>Mínima: {temperature.main.temp_min.toFixed(0)}º</span>
                        </div>
                    </div>
                </div> 

                <div className="flex gap-5 p-3 mt-10 w-full">
                    <div className="w-[60%]  flex flex-col gap-5">

                        <div className="flex flex-col w-full bg-white/10 border border-white/15 p-3 rounded-[5px]">

                            <h4 className="text-white/80 text-[20px] border-b border-white/15 pb-3">Previsões para as próximas horas</h4>
                            <ul className="flex mt-10">

                                {prevision.list.slice(0, 5).map((list, index) => {

                                    const date = new Date(list.dt_txt);

                                    const resultDate = date.toLocaleDateString();
                                    const resultTime = date.toLocaleTimeString();

                                    const [hour, seconds] = resultTime.split(":");
                                    const [day, month ] = resultDate.split("/");

                                    const formattedDate = `${day}/${month}`;
                                    const formattedTime = `${hour}:${seconds}`;                        

                                    return (
                                        <li key={index} className="flex justify-between items-center flex-col w-full">
                                            <div className="flex flex-col">
                                                <span>{formattedDate}</span>
                                                <span>{formattedTime}</span>
                                            </div>
                                            <div className="flex item-center">
                                                <img src={`https://openweathermap.org/img/wn/${list.weather[0].icon}.png`} alt={list.weather[0].description} />
                                            </div>
                                            <p>{list.main.temp.toFixed(0)}ºC</p>
                                        </li>
                                    );
                                })}
                            </ul>

                        </div>
                        <div className="flex w-full gap-5">
                            <div className="w-[40%] bg-white/10 border border-white/15 p-3 rounded-[5px]">
                                2
                            </div>
                            <div className="w-[60%]">
                                <Umidade humidity={temperature.main.humidity} />
                                <div className="flex gap-5">
                                    <Sol timestamp={temperature.sys.sunrise} title="Nascer do Sol" label="Amanhecer"  />
                                    <Sol timestamp={temperature.sys.sunset} title="Pôr do Sol" label="Enterdecer" />
                                </div>
                            </div>
                        </div>

                    </div>
                    
                    <div className="w-[40%]">
                        <div className="flex flex-col gap-5">
                            <div className="w-full bg-white/10 border border-white/15 rounded-[5px] p-3">
                                <Curiosidades country={prevision.city.country} name={prevision.city.name} population={prevision.city.population} />
                            </div>
                            <div className="flex gap-5">
                                <Vento deg={temperature.wind.deg} speed={temperature.wind.speed} />
                                <Nuvens clouds={temperature.clouds.all} />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </Container>
    )
}

export default ListResults
