// main App.jsx component that will receive the data from Form.jsx and pass
// it to <Output /> for display to user.

// import { useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Output from './components/Output'


function App() {


  const dataRetrieval = () => {
  }

  return (
    <>
      <Header />
      <Form dataProcessing={dataRetrieval} />
      <Output />
    </>
  )
}

export default App
