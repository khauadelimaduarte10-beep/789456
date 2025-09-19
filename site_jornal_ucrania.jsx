import React from "react";

export default function VozJovemSite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">VOZ JOVEM</h1>
            <p className="text-sm opacity-90">O jornal feito por estudantes para estudantes</p>
          </div>
          <nav className="space-x-4 text-sm">
            <a href="#home" className="hover:underline">Início</a>
            <a href="#sobre" className="hover:underline">Entenda</a>
            <a href="#impactos" className="hover:underline">Impactos</a>
            <a href="#juventude" className="hover:underline">Jovens</a>
            <a href="#recursos" className="hover:underline">Recursos</a>
          </nav>
        </div>
      </header>

      <main id="home" className="max-w-6xl mx-auto px-6 py-10">
        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-extrabold leading-tight mb-4">Guerra na Ucrânia: o mundo em alerta</h2>
            <p className="text-lg mb-6">Edição especial com explicações simples, entrevistas com jovens e recursos para pesquisar fontes confiáveis.</p>
            <div className="flex gap-4">
              <a href="#sobre" className="px-4 py-2 bg-yellow-400 rounded font-semibold">Entenda o conflito</a>
              <a href="#recursos" className="px-4 py-2 border border-gray-300 rounded">Recursos e links</a>
            </div>
          </div>

          <div className="rounded overflow-hidden shadow-lg">
            <img
              alt="Mapa estilizado da Ucrânia e símbolo de paz"
              src="https://source.unsplash.com/featured/?ukraine,map"
              className="w-full h-64 object-cover"
            />
          </div>
        </section>

        {/* SECTIONS */}
        <section id="sobre" className="mt-12">
          <h3 className="text-2xl font-bold mb-3">O que levou à guerra?</h3>
          <div className="prose max-w-none">
            <p>
              O conflito entre Rússia e Ucrânia envolve história, política, e interesses estratégicos. Entre os fatores estão a anexação da Crimeia (2014), as tensões
              em Donbass e o desejo de parte da Ucrânia de aproximar-se de instituições europeias e da OTAN.
            </p>
            <ul>
              <li>Contexto histórico e geopolítico;</li>
              <li>Disputas territoriais e minorias étnicas;</li>
              <li>Impactos econômicos e humanitários.</li>
            </ul>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <article className="bg-white p-4 rounded shadow">
              <img alt="cidade afetada" src="https://source.unsplash.com/featured/?ukraine,city" className="w-full h-36 object-cover rounded mb-3" />
              <h4 className="font-semibold">Cidades afetadas</h4>
              <p className="text-sm">Kiev, Kharkiv, Donetsk e outras regiões sofreram danos, deslocamento e pressões humanitárias.</p>
            </article>

            <article className="bg-white p-4 rounded shadow">
              <img alt="refugiados" src="https://source.unsplash.com/featured/?refugees" className="w-full h-36 object-cover rounded mb-3" />
              <h4 className="font-semibold">Refugiados</h4>
              <p className="text-sm">Milhões de pessoas deixaram suas casas e buscaram refúgio em outros países europeus.</p>
            </article>

            <article className="bg-white p-4 rounded shadow">
              <img alt="impacto economico" src="https://source.unsplash.com/featured/?economy" className="w-full h-36 object-cover rounded mb-3" />
              <h4 className="font-semibold">Impacto global</h4>
              <p className="text-sm">A guerra afetou preços de energia, cadeias de suprimento e trouxe instabilidade econômica.</p>
            </article>
          </div>
        </section>

        <section id="impactos" className="mt-12">
          <h3 className="text-2xl font-bold mb-3">Impactos no mundo</h3>
          <div className="bg-white rounded shadow p-6">
            <p>
              A guerra provocou aumento nos preços dos alimentos e combustíveis, crise energética em vários países europeus e debates sobre segurança
              internacional. Aqui estão alguns destaques para um entendimento rápido:
            </p>
            <ul className="list-disc ml-6 mt-3">
              <li>Aumento do custo de trigo e outros cereais;</li>
              <li>Sanções econômicas e realinhamentos diplomáticos;</li>
              <li>Discussões sobre o papel de organizações internacionais.</li>
            </ul>
          </div>
        </section>

        <section id="juventude" className="mt-12">
          <h3 className="text-2xl font-bold mb-3">A visão dos jovens</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded shadow">
              <h4 className="font-semibold">Entrevista com estudantes</h4>
              <p className="text-sm">"Queremos paz e mais diálogo entre países" — alunos compartilham ações de arrecadação e campanhas de conscientização.</p>
              <a href="#" className="text-blue-600 text-sm hover:underline">Ler entrevista completa →</a>
            </div>

            <div className="bg-white p-4 rounded shadow">
              <h4 className="font-semibold">Arte pela paz</h4>
              <p className="text-sm">Murais, músicas e campanhas digitais mostram solidariedade e pedem apoio humanitário.</p>
              <div className="mt-3 grid grid-cols-3 gap-2">
                <img alt="arte1" src="https://source.unsplash.com/featured/?peace,grafitti" className="w-full h-20 object-cover rounded" />
                <img alt="arte2" src="https://source.unsplash.com/featured/?peace,art" className="w-full h-20 object-cover rounded" />
                <img alt="arte3" src="https://source.unsplash.com/featured/?solidarity" className="w-full h-20 object-cover rounded" />
              </div>
            </div>
          </div>
        </section>

        <section id="recursos" className="mt-12">
          <h3 className="text-2xl font-bold mb-3">Recursos e links confiáveis</h3>
          <div className="bg-white p-6 rounded shadow">
            <p className="mb-4">Se você quiser pesquisar mais, aqui estão fontes confiáveis e organizações que acompanham o conflito:</p>
            <ul className="list-disc ml-6">
              <li><a className="text-blue-600 hover:underline" href="https://www.un.org" target="_blank" rel="noreferrer">Nações Unidas</a> — informações humanitárias e comunicados oficiais</li>
              <li><a className="text-blue-600 hover:underline" href="https://www.icrc.org" target="_blank" rel="noreferrer">Comitê Internacional da Cruz Vermelha</a> — apoio humanitário</li>
              <li><a className="text-blue-600 hover:underline" href="https://www.bbc.com/news" target="_blank" rel="noreferrer">BBC News</a> — cobertura jornalística internacional</li>
            </ul>
          </div>
        </section>

        {/* GALLERY / DOWNLOAD */}
        <section className="mt-12 mb-20 grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h4 className="font-semibold mb-3">Galeria</h4>
            <div className="grid grid-cols-2 gap-3">
              <img alt="gal1" src="https://source.unsplash.com/featured/?ukraine,people" className="w-full h-36 object-cover rounded" />
              <img alt="gal2" src="https://source.unsplash.com/featured/?ukraine,flag" className="w-full h-36 object-cover rounded" />
              <img alt="gal3" src="https://source.unsplash.com/featured/?ukraine,city" className="w-full h-36 object-cover rounded" />
              <img alt="gal4" src="https://source.unsplash.com/featured/?peace" className="w-full h-36 object-cover rounded" />
            </div>
          </div>

          <div className="bg-white p-6 rounded shadow flex flex-col justify-between">
            <div>
              <h4 className="font-semibold mb-3">Baixe a edição</h4>
              <p className="text-sm mb-4">Quer imprimir ou compartilhar? Baixe a versão em PDF com os artigos e imagens para uso escolar.</p>
              <a href="#" className="inline-block px-4 py-2 bg-blue-600 text-white rounded">Baixar PDF</a>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-2">Apoie a divulgação</h4>
              <p className="text-sm">Compartilhe com colegas, professores e use as seções deste site para debates em sala de aula.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 border-t py-6">
        <div className="max-w-6xl mx-auto px-6 text-sm text-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div>© Voz Joven — Jornal Escolar • Projeto educativo</div>
          <div className="mt-2 md:mt-0">
            <a href="#" className="mr-4 hover:underline">Termos</a>
            <a href="#" className="hover:underline">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
