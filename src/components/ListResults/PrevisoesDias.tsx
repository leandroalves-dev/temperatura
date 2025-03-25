    import { Prevision } from "../../interface/Prevision";

    interface PrevisoesDiasProps {
        prevision: Prevision;
    }

    const PrevisoesDias = ({ prevision }: PrevisoesDiasProps) => {

        const previsoesAgrupadas = prevision.list.reduce((acc, previsao) => {
            const date = previsao.dt_txt.split(" ")[0];
            
            let newDate = acc.find(d => d.date === date);
            
            if (!newDate) {
            newDate = { 
                date, 
                maxTemp: previsao.main.temp_max, 
                minTemp: previsao.main.temp_min, 
                forecasts: []
            };
            acc.push(newDate);
            } else {
            
            newDate.maxTemp = Math.max(newDate.maxTemp, previsao.main.temp_max);
            newDate.minTemp = Math.min(newDate.minTemp, previsao.main.temp_min);
            }
        
            newDate.forecasts.push(previsao);
            return acc;
        }, [] as { date: string; maxTemp: number; minTemp: number; forecasts: typeof prevision.list }[]);
        
        const dias = Object.values(previsoesAgrupadas);

        console.log(dias)
        

        return (
            <div className="bg-white/10 border border-white/15 rounded-[5px] w-[50%] max-sm:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[50%] p-3">
                <h4 className="text-white/80 text-[18px] border-b border-white/15 pb-3">Previsão para os proximos dias</h4>
                {dias.map((dia, index) => (
                    
                    <div key={index} className="flex justify-between items-center">
                        <h3 className="text-white capitalize w-8">
                            {(() => {
                                const data = new Date(dia.date);
                                data.setDate(data.getDate() + 1); 
                                return data.toLocaleDateString("pt-BR", { weekday: "short" });
                            })()}
                        </h3>
                        {dia.forecasts.length > 0 && (
                            <img 
                                src={`https://openweathermap.org/img/wn/${dia.forecasts[0].weather[0].icon}.png`} 
                                alt={dia.forecasts[0].weather[0].description}
                                className="w-10" 
                            />
                        )}
                        <p className="text-white/50">{dia.minTemp.toFixed(0)}º</p>
                        <span className="bg-gradient-to-tl from-yellow-100 to-yellow-600 h-1.5 w-1/3 rounded-[4px]"></span>
                        <p className="text-white">{dia.maxTemp.toFixed(0)}º</p>
                    </div>
                ))}

            </div>
        );
    };

    export default PrevisoesDias;
