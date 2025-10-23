import './App.css'

function App() {
  return (
    <div className="app-container">
      {/* Seção 1 – Banner */}
      <section className="banner">
        <h1>Cloud Computing</h1>
      </section>

      {/* Seção 2 – Explicativo sobre Nuvens */}
      <section className="cloud-types">
        <h2>Tipos de Nuvem</h2>
        <p>
          A computação em nuvem pode ser dividida em três categorias principais:
        </p>
        <ul>
          <li>
            <strong>Nuvem Pública:</strong> Infraestrutura compartilhada entre
            várias organizações, fornecida por empresas como AWS, Azure e Google
            Cloud.
          </li>
          <li>
            <strong>Nuvem Privada:</strong> Exclusiva para uma única
            organização, oferecendo mais controle e segurança.
          </li>
          <li>
            <strong>Nuvem Híbrida:</strong> Combina elementos das nuvens
            públicas e privadas para maior flexibilidade.
          </li>
        </ul>
      </section>

      {/* Seção 3 – Cards IaaS / PaaS / SaaS */}
      <section className="service-models">
        <h2>Modelos de Serviço em Cloud</h2>
        <div className="cards-container">
          <div className="card">
            <h3>IaaS</h3>
            <p>
              (Infrastructure as a Service) oferece infraestrutura de TI sob
              demanda, como servidores, redes e armazenamento.
            </p>
          </div>
          <div className="card">
            <h3>PaaS</h3>
            <p>
              (Platform as a Service) fornece uma plataforma completa para
              desenvolvimento e implantação de aplicações.
            </p>
          </div>
          <div className="card">
            <h3>SaaS</h3>
            <p>
              (Software as a Service) disponibiliza softwares prontos via
              internet, sem necessidade de instalação local.
            </p>
          </div>
        </div>
      </section>

      {/* Seção 4 – Empresas que OFERECEM serviços em Cloud */}
      <section className="cloud-providers">
        <h2>Principais Provedores de Cloud</h2>
        <div className="logos">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg" alt="Azure" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" alt="Google Cloud" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/3a/IBM_Cloud_logo.svg" alt="IBM Cloud" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Oracle_Cloud_Logo.svg" alt="Oracle Cloud" />
        </div>
      </section>

      {/* Seção 5 – Empresas que USAM serviços em Cloud */}
      <section className="cloud-users">
        <h2>Empresas que Usam Cloud Computing</h2>
        <div className="logos">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Netflix_2015_logo.svg" alt="Netflix" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Airbnb_Logo_Bélo.svg" alt="Airbnb" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" alt="Uber" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Spotify_logo_with_text.svg" alt="Spotify" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/TikTok_logo.svg" alt="TikTok" />
        </div>
      </section>

      <footer>
        <p>© 2025 - Página de demonstração sobre Cloud Computing</p>
      </footer>
    </div>
  )
}

export default App
