interface NuvensProps{
    clouds: number
}

const Nuvens = ({ clouds }: NuvensProps) => {
    return (
        <div className="bg-white/10 border border-white/15 rounded-[5px] w-[50%] sm:w-[100%] md:w-[100%] p-3">
            <h4 className="text-white/80 text-[18px] border-b border-white/15 pb-3">Nuvens</h4>
            <div className="flex flex-col justify-between">
                <div className="text-white py-4">
                    <p className="text-2xl">{clouds}%</p>
                </div>
                <div className="">
                    <p className="text-[12px] text-white border-b border-white/15 pb-3">O céu está coberto por nuvens no momento atual.</p>
                    <p className="text-zinc-700 text-[12px] mt-4">" A variação pode ser de 0% (céu limpo) até 100% (céu totalmente nublado) "</p>
                </div>
            </div>
        </div>
    )
}

export default Nuvens
