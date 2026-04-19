// diminuição das responsabildiades iniciais "dadas" pelo Vite ao fazer seu download.
// apenas composição de rotas e layout básico para estilizar em arquivos mais específicos. 


import { BrowserRouter, Route, Routes } from 'react-router-dom'

function AppLayout({ children }) {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-10 sm:px-8 lg:px-10">
        {children}
      </div>
    </main>
  )
}

function FeedPage() {
  return (
    <section className="flex flex-1 flex-col justify-center gap-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <span className="text-sm font-medium uppercase tracking-[0.3em] text-slate-500">
        Corp News
      </span>
      <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
        Feed de noticias
      </h1>
      <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
        Esta sera a pagina principal do mural interno da SETHAS.
      </p>
    </section>
  )
}

function NewsDetailPage() {
  return (
    <section className="flex flex-1 flex-col justify-center gap-4 rounded-3xl border border-dashed border-slate-300 bg-white p-8 shadow-sm">
      <span className="text-sm font-medium uppercase tracking-[0.3em] text-slate-500">
        Detalhe
      </span>
      <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
        Detalhe da noticia
      </h1>
      <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
        Esta rota fica pronta para receber a HU03.
      </p>
    </section>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<FeedPage />} />
          <Route path="/noticias/:id" element={<NewsDetailPage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  )
}

export default App
