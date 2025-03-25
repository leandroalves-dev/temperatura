import { formatTimestamp } from "../../utils/formatTime"

interface SunProps{
    timestamp: number
    title: string
    label: string
}

const Sun = ({ timestamp, title, label }: SunProps) => {

    const { formattedDay, formattedMonth, formattedTime } = formatTimestamp(timestamp)

    return (
        <div className="w-[50%] bg-white/10 border border-white/15 rounded-[5px] p-3">
            <h4 className="text-white/80 text-[18px] border-b border-white/15 pb-3">{title}</h4>

            <div className="flex flex-col justify-center items-center py-3.5 mb-3.5 border-b border-white/15">
                <div className="flex items-center bg-white/10 rounded-[50%] py-5 px-3">
                    <span className="text-white text-2xl mr-1">{formattedDay}</span>
                    <span className="text-white text-[12px]">/ {formattedMonth}</span>
                </div>
            </div>
            <p className="text-[12px] text-zinc-700">{label}: {formattedTime} hrs</p>        
        </div>
    )
}

export default Sun
