interface VentoProps{
    deg: number
    speed: number
}

const Vento = ({ deg, speed }: VentoProps) => {
    return (
        <div className="bg-white/10 border border-white/15 rounded-[5px] w-[50%] sm:w-[100%] md:w-[100%] p-3">
            <h4 className="text-white/80 text-[18px] border-b border-white/15 pb-3">Vento</h4>
            <div className="flex flex-col mt-1">
                <p className="text-[12px] text-zinc-700 pt-3">Direção: {deg}°</p>
                <span className="text-zinc-700 text-sm">Velocidade: </span>
                <div className="text-2xl py-4 flex flex-col justify-center items-center leading-6">
                    <span className="text-white bg-white/15 rounded-full min-w-[75px] text-center py-6 px-4">{speed.toFixed(0)}</span>
                    <span className="text-sm text-zinc-700 mt-2">m/s</span>
                </div>
            </div>
        </div>
    )
}

export default Vento
