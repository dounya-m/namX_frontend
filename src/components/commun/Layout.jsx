import React from 'react'

function Layout({children}) {
  return (
    <main>
      <header></header>
      <div>
        <article>{children}</article>
      </div>
      <footer></footer>
    </main>
  )
}

export default Layout