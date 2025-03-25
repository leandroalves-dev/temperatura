import './App.css'
import Logo from './components/Logo'
import Form from './components/Form'
import Container from './components/Container'
import ListResults from './components/ListResults'
import { useState } from 'react'
import { Temperature } from './interface/Temperature' 
import { Prevision } from './interface/Prevision'

function App() {
    const [temperature, setTemperature] = useState<Temperature | null>(null)
    const [prevision, setPrevision] = useState<Prevision | null>(null);

      // Agora essa função recebe dois parâmetros: temperature e prevision
      const handleTemperatureChange = (newTemperature: Temperature | null, newPrevision: Prevision | null) => {
        setTemperature(newTemperature);
        setPrevision(newPrevision);
    };

    return (
        <div className='bg-gradient-to-b from-blue-200 to-blue-600 h-[100%]'>
            <div className=' bg-white/10 h-20'>
                <Container className='flex h-20 justify-between items-center'>
                    <Logo />
                    <Form onTemperatureChange={handleTemperatureChange}  />
                </Container>
            </div>
            <ListResults temperature={temperature} prevision={prevision} />
        </div>
    )
}

export default App
