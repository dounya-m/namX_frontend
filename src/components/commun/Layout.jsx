import React from 'react'
import Header from './itemes/Header'

function Layout({children}) {
  return (
    <main>
      <header>
        <Header />
      </header>
      <div>
        <article>{children}</article>
      </div>
      <footer></footer>
    </main>
  )
}

export default Layout