import React, { useState } from 'react';

// Os ícones Eye e EyeOff foram removidos conforme solicitado.

function Home() {
  // 1. O estado armazena a string que define o tipo do input ('password' ou 'text').
  const [pass, setPass] = useState('password');

  function changePass() {
    // Verifica o valor atual do estado 'pass'
    if (pass === 'password') {
      // Se for 'password', muda para 'text' (exibe a senha)
      setPass('text');
    } else {
      // Caso contrário (se for 'text'), muda para 'password' (oculta a senha)
      setPass('password');
    }
  };

  return (
    <div className="flex flex-col justify-center min-h-screen items-center bg-gray-100 p-4">

      <div className="flex flex-col w-full max-w-md p-8 bg-white rounded-xl shadow-2xl space-y-6">

        {/* Título */}
        <h1 className="text-4xl font-extrabold text-center text-gray-800">
          Acesso
        </h1>

        {/* Input de Email */}
        <input
          type="email"
          placeholder="Email"
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-200 transition duration-150"
        />

        {/* Input de Senha (Apenas o campo) */}
        <div className="">
          <input
            // O 'type' é controlado diretamente pelo estado 'pass'
            type={pass}
            placeholder="Senha"
            // Classe simplificada, sem o padding direito para o ícone
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-200 transition duration-150"
          />
        </div>


        {/* Secção de Exibir Senha e Esqueci a Senha */}
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center">
            {/* Checkbox para Exibir Senha */}
            <input
              id="displayPassword"
              name="displayPassword"
              type="checkbox"
              onChange={changePass} 
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
            />
            <label htmlFor="displayPassword" className="ml-2 block text-sm font-medium text-gray-900 select-none cursor-pointer">
              Exibir Senha
            </label>
          </div>

          {/* Link para Esqueci a Senha */}
          <a href="#" className="text-blue-600 hover:text-blue-700 font-medium transition duration-300">
            Esqueci a senha
          </a>
        </div>

        {/* Botão de Login */}
        <button className="w-full p-3 text-white bg-blue-600 rounded-lg font-bold text-lg hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg">
          Entrar
        </button>

        {/* Link para Criar Conta */}
        <div className="text-center text-base mt-2">
          <p className='text-gray-500'>Não tem conta? 
            <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold ml-1 transition duration-300">
              Criar conta
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home;
