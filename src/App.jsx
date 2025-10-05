import Conteudo from "./components/Conteudo";
import instagram from "./styles/img/instagram.png";
import Twitter from "./styles/img/X.png";
function App() {
  return (
    <main className="container Fade">
      <header>
        <h1 className="text-4xl">Bem-vindo</h1>
        <h2 className="text-4xl">Ao meu Site!</h2>
      </header>

      <section className="itens">
        <Conteudo />
      </section>

      <footer>
        <a href="#" className="links" title="instragram">
          <img src={instagram} />
        </a>
        <a href="#" className="links" title="X">
          <img src={Twitter} alt="X(antigo Twitter)" />
        </a>
      </footer>
    </main>
  );
}

export default App;
