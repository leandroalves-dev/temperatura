 //Icons
 import { BsInfoCircle } from "react-icons/bs"

const Message = () => {
    return (
        <div className="min-h-[calc(100vh-150px)] flex flex-col max-sm:text-center items-center justify-center text-white/70 text-[24px]  m-4 mb-10">
            <BsInfoCircle size={45}  className="text-white/20" />
            <p className="text-2xl">No momento não há pesquisas realizadas.</p>
            <p className="text-[20px]">Faça uma busca por cidades</p>
        </div> 
    )
}

export default Message