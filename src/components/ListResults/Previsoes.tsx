import { Prevision } from "../../interface/Prevision";
import { formatTimestamp } from "../../utils/formatTime";

interface PrevisoesProps{
    timestamp: number
    prevision: Prevision
}


const Previsoes = ({ prevision, timestamp }: PrevisoesProps) => {

    const { formattedDay, formattedMonth, formattedTime } = formatTimestamp(timestamp)

    return (
        <div className="flex flex-col w-full bg-white/10 border border-white/15 p-3 rounded-[5px]">

            <h4 className="text-white/80 text-[20px] border-b border-white/15 pb-3">Previsões para as próximas horas</h4>
            <ul className="flex mt-4">

                {prevision.list.slice(0, 5).map((list, index) => {
                                           
                    return (
                        <li key={index} className="flex justify-between items-center flex-col w-full">
                            <div className="flex flex-col items-center gap-2">
                                <span className="text-sm text-white">{formattedDay}/{formattedMonth}</span>
                                <span className="text-[12px] text-zinc-700">{formattedTime}</span>
                            </div>
                            <div className="flex item-center">
                                <img className="w-10" src={`https://openweathermap.org/img/wn/${list.weather[0].icon}.png`} alt={list.weather[0].description} />
                            </div>
                            <p className="text-sm text-white">{list.main.temp.toFixed(0)}º</p>
                        </li>
                    );
                })}
            </ul>

        </div>
    )
}

export default Previsoes
