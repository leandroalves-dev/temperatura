interface UmidadeProps{
    humidity: number
}

const Umidade = ({ humidity }: UmidadeProps) => {

    return (
        <div className="w-full bg-white/10 border border-white/15 rounded-[5px] mb-3 p-3">
            <h4 className="text-white/80 text-[20px] border-b border-white/15 pb-3">Umidade</h4>
            <p className="text-[12px] py-3 text-white">A umidade do ar está em <span className="font-bold border-b-2 border-white">{humidity}%</span>, influenciando diretamente na sensação térmica.</p>
        </div>
    )
}

export default Umidade
