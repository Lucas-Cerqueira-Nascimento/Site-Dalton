import Conteudo from "./components/Conteudo";

function App() {
  return (
    <main className="container">
      <header>
        <h1>Bem-vindo</h1>
        <h2>Ao meu Site!</h2>
      </header>

      <section className="itens">
        <Conteudo />
      </section>

      <footer>
        <a href="#" className="links" title="instragram">
          <img src="styles/img/instagram.png" alt="instragram" />
        </a>
        <a href="#" className="links" title="X">
          <img src="styles/img/X.png" alt="X(antigo Twitter)" />
        </a>
      </footer>
    </main>
  );
}

export default App;
