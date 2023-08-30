import { useState } from 'react'
import Nav from "./components/Nav.jsx";
import ContentContainer from "./components/ContentContainer.jsx";
import Counter from "./components/Counter.jsx";
function App() {

  return (
    <>

    <Nav/>

      <ContentContainer>
        <div>
          <Counter/>
          <Counter/>
        </div>

      </ContentContainer>
      <ContentContainer>
        <h1>Sell some crap</h1>
      </ContentContainer>


    </>
  )
}

export default App
