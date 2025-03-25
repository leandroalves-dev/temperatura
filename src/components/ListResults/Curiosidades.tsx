
interface CuriosidadesProps{
    country: string
    name: string
    population: number
}

const Curiosidades = ({ country, name, population }: CuriosidadesProps) => {

    const habitants = population
    const qtdaPopulation = habitants.toLocaleString('pt-BR')

    const countryCode = country
    const flag = `https://flagpedia.net/data/flags/h80/${countryCode.toLowerCase()}.png`;

    return (
        <div>
            <h4 className="text-white/80 text-[20px] border-b border-white/15 pb-3">Curiosidade da cidade!</h4>
            <div className="mt-4">

                <div className="flex justify-center items-center m-4">
                    <img src={flag} alt={`Bandeira ${country}`} className="rounded-full w-36.5 h-36.5 object-cover" />
                </div>

                <p className="text-sm text-white">Sabia que <strong>{name}</strong> é uma cidade localizada no <strong>{country}</strong>? Com uma
                população de aproximadamente **<strong>{qtdaPopulation}</strong>** habitantes</p>
            </div>
        </div>
    )
}

export default Curiosidades
