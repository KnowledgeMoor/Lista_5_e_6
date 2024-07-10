import React from 'react'
import Titulo from './componentes/Titulo'
import Caixa from './componentes/Caixa'


function App() {

  let msgDasCaixas = ['Plano de Desenvolvimento Institucional', 'Pesquisa pública process iftm', 'Licitações e contratos', 'Receitas e despesas', 'Dados abertos', 'Transparência e prestação de contas', 'Servidores', 'Perguntas frequentes'];

  function getCaixas(){
    return msgDasCaixas.map(msg => <Caixa texto={msg}/>);
  }

  return (
    <>
      <Titulo/>
      <div className='boxContainer'>
      {getCaixas()}
      </div>
    </>
  )
}

export default App
