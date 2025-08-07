import React from 'react';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <title>Aviator - Jogo Online Premium | Ganhe Até 50.000 Cruzeiros</title>
        <meta name="description" content="Experimente o melhor jogo Aviator online. Interface premium, bônus exclusivos e chances reais de ganhar até 50.000 cruzeiros. Cadastre-se agora!" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
        {/* Enhanced React components can be added here for additional interactivity */}
        <div className="flex items-center justify-center min-h-screen p-4">
          <div className="text-center space-y-6 max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Aviator Premium
            </h1>
            <p className="text-xl text-gray-300">
              Interface React carregada para funcionalidades avançadas
            </p>
            <div className="text-sm text-gray-500">
              Esta versão React complementa a versão HTML otimizada para performance
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;