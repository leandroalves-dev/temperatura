import Container from "../Container"
import { BsSearch } from 'react-icons/bs'

const Header = () => {
    return (
        <header className="bg-white/10 h-20">
            <Container  className="flex justify-between items-center h-20">
                <div className="flex gap-2">
                    <span className="bg-red-600 w-2 h-2 flex"></span>
                    <span className="bg-orange-600 w-2 h-2 flex"></span>
                    <span className="bg-green-600 w-2 h-2 flex"></span>
                </div>
                <div>
                    <form className="w-82 bg-white/20 flex flex-row-reverse p-2 rounded-[5px]">
                        <input type="text" placeholder="Pesquise a temperatura da sua cidade..." className="focus:outline-none text-[14px] text-zinc-600 w-full" />
                        <button type="submit" className="mr-2"><BsSearch size={16} color="#FFF" /></button>
                    </form>
                </div>
            </Container>  
        </header>
    )
}

export default Header
