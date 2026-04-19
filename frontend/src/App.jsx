// responsabilidades: composição de rotas e layout base.
// cada página fica no seu próprio arquivo em src/pages/.

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import FeedNoticias from './pages/feedNoticias'
import DetalhesNoticias from './pages/detalhesNoticias'
import CadastroNoticias from './pages/cadastroNoticias'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<FeedNoticias />} />
        <Route path="/noticias/:id" element={<DetalhesNoticias />} />
        <Route path="/cadastro" element={<CadastroNoticias />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
