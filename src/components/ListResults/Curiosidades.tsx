
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
                <p className="text-sm text-white">Sabia que <strong className="border-b-2 border-white">{name}</strong> é uma cidade localizada no <strong className="border-b-2 border-white">{country}</strong>? Com uma
                população de aproximadamente **<strong className="border-b-2 border-white">{qtdaPopulation}</strong>** habitantes</p>

                <div className="flex justify-center items-center mt-4">
                    <img src={flag} alt={`Bandeira ${country}`} className="rounded-full w-27 h-27 object-cover" />
                </div>
            </div>
        </div>
    )
}

export default Curiosidades
