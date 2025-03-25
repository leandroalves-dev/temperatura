import './App.css'
import Logo from './components/Logo'
import Form from './components/Form'
import Container from './components/Container'
import ListResults from './components/ListResults'
import { useState } from 'react'
import { Temperature } from './interface/Temperature' 
import { Prevision } from './interface/Prevision'
import Modal from './components/Modal'

function App() {
    const [temperature, setTemperature] = useState<Temperature | null>(null)
    const [prevision, setPrevision] = useState<Prevision | null>(null);
    const [showModal, setShowModal] = useState(false);
     
      const handleTemperatureChange = (newTemperature: Temperature | null, newPrevision: Prevision | null) => {
        setTemperature(newTemperature);
        setPrevision(newPrevision);
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div className='bg-gradient-to-b from-blue-200 to-blue-600 min-h-screen flex flex-col'>
            <div className=' bg-white/10 h-20'>
                <Container className='flex h-20 justify-between items-center px-3'>
                    <Logo />
                    <Form onTemperatureChange={handleTemperatureChange} onChangeModal={toggleModal}  />
                </Container>
            </div>
            <ListResults temperature={temperature} prevision={prevision} />
            {showModal && (
                <Modal title="Desculpe!!!">
                    <button className="absolute top-0 right-0 text-white bg-zinc-900 px-3 pb-1 text-xl cursor-pointer" onClick={() => setShowModal(false)}>x</button>
                    <div className='text-black-700 flex flex-col items-center justify-center mt-10'>
                        <h2 className='text-2xl'>Não encontramos essa cidade.</h2>
                        <h3 className='text-[20px]'>Por favor, tente novamente!</h3>    
                    </div>
                </Modal>
            )}
        </div>
    )
}

export default App
