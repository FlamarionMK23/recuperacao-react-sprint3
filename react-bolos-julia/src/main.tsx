import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CadastroBolo from './pages/CadastroBolo';
import ListaBolo from './pages/ListaBolo';

// Rotas
import { BrowserRouter, Routes, Route } from "react-router-dom"

// BrowserRouter = Indica que terá uma config de rotas (colocar em ordem = )
// Routes = Indica que terá uma lista de rotas
// Route = Indica uma rota de um respectivo compponente

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode> {/* é uma ferramenta para sinalizar potenciais problemas em uma aplicação. */}

    {/* Rotas */} {/* Componentes */} {/* Path - da o  nome da rota */} {/* element - coloca o elemento que vai ser exibido */}

    <BrowserRouter>
      <Header /> {/* Exibe o conteúdo do componente */}

      <Routes>
        <Route path='/' element={<Home />} />  {/* ao exibir a (/) indica a page principal */}
        <Route path='CadastroBolo' element={<CadastroBolo />} />
        <Route path='ListaBolo' element={<ListaBolo />} />
      </Routes>

      <Footer />
    </BrowserRouter>

  </React.StrictMode>,
);
