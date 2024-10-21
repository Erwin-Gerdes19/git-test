import { useState } from 'react'
import Header from './components/Header'
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import './App.css'

function App() {
  return (
    <>
      <PrimeReactProvider>
        <Header />
      </PrimeReactProvider>
    </>
  )
}

export default App
