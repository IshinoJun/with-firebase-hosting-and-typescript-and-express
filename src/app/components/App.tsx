import React from 'react'
import Header from './Header'

const App:React.FC = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  )
}

export default App
