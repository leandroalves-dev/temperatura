 //Icons
 import { BsInfoCircle } from "react-icons/bs"

const Message = () => {
    return (
        <div className="min-h-[calc(100vh-150px)] flex flex-col items-center justify-center text-white/70 text-[24px]  m-4 mb-10">
            <BsInfoCircle size={45}  className="text-white/20" />
            <p>No momento não há pesquisas realizadas.</p>
            <p>Faça uma busca por cidades</p>
        </div> 
    )
}

export default Message