import { useState } from "react"
import { BsSearch } from 'react-icons/bs'
import { Temperature } from "../../interface/Temperature"
import { getTemperatura } from "../../services/temperaturaServices"
import { Prevision } from "../../interface/Prevision";


interface FormProps {
    // Aqui, a função onTemperatureChange agora recebe dois parâmetros: temperature e prevision
    onTemperatureChange: (temperature: Temperature | null, prevision: Prevision | null) => void;
}

const Form = ({ onTemperatureChange }: FormProps) => {
    const [city, setCity] = useState('');
    

    const handleTemperature = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            
            const { response, prevision } = await getTemperatura(city);
            onTemperatureChange(response, prevision);

        } catch (err) {
            if (err instanceof Error) {
                console.log('Cidade não encontrada: ' + err.message);
            } else {
                console.log('Erro desconhecido');
            }
        }
    }

    return (
        <div>
            <form onSubmit={handleTemperature} className="w-82 bg-white/20 flex flex-row-reverse p-2 rounded-[5px]">
                <input
                    type="text"
                    placeholder="Pesquise a temperatura da sua cidade..."
                    className="focus:outline-none text-[12px] text-zinc-600 w-full"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button type="submit" className="mr-2"><BsSearch size={16} color="#FFF" /></button>
            </form>
        </div>
    )
}

export default Form
