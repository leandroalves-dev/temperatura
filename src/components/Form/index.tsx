import { useState } from "react"
//icons
import { BsSearch } from 'react-icons/bs'
//interface
import { Temperature } from "../../interface/Temperature"
import { Prevision } from "../../interface/Prevision";
//serviços
import { getTemperatura } from "../../services/temperaturaServices"



interface FormProps {
    onChangeModal: () => void
    onTemperatureChange: (temperature: Temperature | null, prevision: Prevision | null) => void;
}

const Form = ({ onTemperatureChange, onChangeModal }: FormProps) => {
    const [city, setCity] = useState('');
    

    const handleTemperature = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            
            const { response, prevision } = await getTemperatura(city);
            onTemperatureChange(response, prevision);

        } catch (err) {
            if (err instanceof Error) {
                onChangeModal()
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
