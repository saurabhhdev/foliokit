import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { WhatYouGet } from './components/WhatYouGet'
import { CliCommands } from './components/CliCommands'
import { WhatsInside } from './components/WhatsInside'
import { Creator } from './components/Creator'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="site-wrapper">
      <Navbar />
      <main>
        <Hero />
        <hr className="section-divider" style={{ marginTop: '16px' }} />
        <WhatYouGet />
        <hr className="section-divider" />
        <CliCommands />
        <hr className="section-divider" />
        <WhatsInside />
        <hr className="section-divider" />
        <Creator />
      </main>
      <Footer />
    </div>
  )
}

export default App
