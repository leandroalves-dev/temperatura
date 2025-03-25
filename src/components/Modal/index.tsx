import { ReactNode } from "react";

interface ModalProps {
    title: string; 
    children: ReactNode;
}

const Modal = ({ title, children }: ModalProps) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50" style={{ background: "rgba(236, 236, 236, 0.5)" }}>
            <div className='relative  p-5 bg-white text-zinc-800 max-w-[550px] min-h-[200px] w-full'>
                <h2 className="text-2xl mb-3 border-b-zinc-500 border-b-1 pb-2 leading-7">{title}</h2>
                {children}
            </div>
        </div>
    )
}

export default Modal