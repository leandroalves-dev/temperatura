import { Prevision } from "../../interface/Prevision"
import { Temperature } from "../../interface/Temperature"
import Container from "../Container"
import Message from "../Message"
import Curiosidades from "./Curiosidades"
import Nuvens from "./Nuvens"
import Previsoes from "./Previsoes"
import PrevisoesDias from "./PrevisoesDias"
import Sol from "./Sol"
import Umidade from "./Umidade"
import Vento from "./Vento"

interface ListResultsProps{
    temperature: Temperature | null
    prevision: Prevision | null
}

const ListResults = ({ temperature, prevision} : ListResultsProps) => {

    if(!temperature || !prevision) return <Message />

    return (
        <Container>
                <div>
                    <div className="flex justify-center items-center w-full mt-10 adsadsd">
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

                    <div className="flex gap-5 p-3 mt-10 w-full max-sm:flex-col">
                        <div className="w-[60%] flex flex-col gap-5 max-sm:w-[100%]">

                            <Previsoes prevision={prevision} timestamp={temperature.dt} />

                            <div className="flex w-full gap-5 max-sm:flex-col sm:flex-col md:flex-col lg:flex-row ">
                                <PrevisoesDias prevision={prevision} />
                                <div className="w-[60%] max-sm:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[60%]">
                                    <Umidade humidity={temperature.main.humidity} />
                                    <div className="flex gap-5">
                                        <Sol timestamp={temperature.sys.sunrise} title="Nascer do Sol" label="Amanhecer"  />
                                        <Sol timestamp={temperature.sys.sunset} title="Pôr do Sol" label="Enterdecer" />
                                    </div>
                                </div>
                            </div>

                        </div>
                        
                        <div className="w-[40%] max-sm:w-[100%]">
                            <div className="flex flex-col gap-5">
                                <div className="w-full bg-white/10 border border-white/15 rounded-[5px] p-3">
                                    <Curiosidades country={prevision.city.country} name={prevision.city.name} population={prevision.city.population} />
                                </div>
                                <div className="flex gap-5 sm:flex-col md:flex-col lg:flex-row">
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
