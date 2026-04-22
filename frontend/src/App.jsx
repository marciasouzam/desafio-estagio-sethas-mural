import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import FeedNoticias from './pages/feedNoticias'
import DetalhesNoticias from './pages/detalhesNoticias'
import CadastroNoticias from './pages/cadastroNoticias'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<FeedNoticias />} />
          <Route path="/noticias/:id" element={<DetalhesNoticias />} />
          <Route path="/cadastro" element={<CadastroNoticias />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
