"use client"
import styles from './page.module.css'
import { FiUserPlus } from "react-icons/fi";

import Table from 'layouts/Table';
import Form from 'layouts/form';

import { useState } from "react";

export default function Home() {

  const [visible, setVisible] = useState(false);

  const handler = () => {
    setVisible(visible ? false : true)
  }


  return (

    <main className='py-5'>
      <h1 className='text-xl md:text-5xl text-center  py-10 '>Sistemas Cadastro<sup></sup>  </h1>
      <div className='container mx-auto flex-between py-5 border-b'>
        <div className='left flex gap-3'>
          <button onClick={handler} className='flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-grary-50 hover:border-indigo-500 hover:text-gray-800'>
            <span className='px-1'>
              <FiUserPlus size={20} />
            </span>
            Adicionar novo usuário
          </button>
        </div>

        {/** Form */}
        {visible ? <Form /> : <></>}
        {/** Form */}


      </div>



      {/**tabela */}
      <div className='container mx-auto py-5 '>
        <Table />
      </div >
      {/**Tabela */}
    </main >

  )

}
