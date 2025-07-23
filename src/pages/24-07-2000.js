import * as React from "react";

// Components
import Header from "../components/Header";
import Note from "../components/Note";
import Loader from "../components/Loader";
import Cursor from "../components/Cursor";
import BoardingPass from "../components/BoardingPass";
import ConfettiComponent from "../components/Confetti";

// Styles
import "../styles/global.scss";

const SecretLetter = () => {
  const [isOpened, setIsOpened] = React.useState(true);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [showBoardingPass, setShowBoardingPass] = React.useState(false);
  const [showConfetti, setShowConfetti] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsOpened(false);
    }, 800);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate a small delay for better UX
    setTimeout(() => {
      // Replace "your-secret-password" with the actual password you want to use
      if (password.toLowerCase() === "seeyouagain") {
        setIsAuthenticated(true);
      } else {
        setError("That's not the right answer... Try again!");
      }
      setIsLoading(false);
    }, 500);
  };

  if (isAuthenticated) {
    return (
      <>
        <Cursor />
        <div className="post">
          <Loader isOpened={isOpened} duration={0.5} />
          <main className="flex flex-col mb-10 max-w-[900px]">
            <article className="blog-intro">
              <header className="px-[5%] mb-4">
                <p className="mb-3 text-[80px]">💌</p>
                <h3 className="about-title text-[35px] md:text-[50px] mb-5 font-black w-full leading-[60px] md:mt-0">
                  Feliz 9.130 dias!
                </h3>
                <time datetime="2024-12-19" className="text-[18px] text-[#bbb]">
                  July 23, 2025
                </time>
              </header>
              <br />
              <br />
              <div className="text-[var(--color-total)] max-w-full w-full mb-16 px-[5%] leading-[50px] text-[26px]">
                <section className="intro-text">
                  <p className="mb-4">Beatriz,</p>
                  <br />
                  <p className="mb-4">
                    Se você está lendo isso, significa que sabe de cor como foi
                    aquele sábado. E isso diz muito sobre sua memória, uma
                    característica sua, pela falta dela em algumas situações e
                    sua precisão em outras.
                    <br />
                    <br />
                    Esse texto hoje será sobre você e apenas você. Nada de nós,
                    nada de mim, nada de nossa relação, nada de sua família,
                    nada... Só você.
                  </p>
                  <br />
                  <p className="mb-4">
                    Quero começar pelo que, na minha opinião, é um de seus
                    maiores encantos: O quão inteligente você é. E quando digo
                    isso, não to dizendo de sua capacidade de calcular
                    porcentagem, ou de pensar robóticamente, ou ler mapas. Isso
                    não é inteligência...
                    <br />
                    <br />
                    Eu to falando de sua capacidade de se conectar com as
                    pessoas, sua maneira de ver o mundo, de planejar coisas
                    (aquilo de você fez no meu aniversário, foi inacreditável. O
                    melhor presente que eu já recebi na minha vida), sua forma
                    de pensar, sua forma de se comunicar, sua forma de se
                    expressar (mesmo durante uma conversa mais difícil), sua
                    maneira de sentir empatia por problemas que nem são seus
                    haha.
                    <br />
                    <br />
                    Por vezes, você não consegue enxergar a fluidez com que lida
                    com essas situações da vida, mas eu olhando de fora noto
                    claramente o quanto você é brilhante apenas vivendo.
                    <br />
                    <br />
                    Você consegue perceber nuances no ar, consegue perceber meu
                    humor com apenas uma sílaba minha, percebe às vezes que tô
                    ansioso sem mesmo eu perceber. E isso é muito impressionante
                    porque não é só comigo (dado que moramos juntos) mas com
                    pessoas que acabou de conhecer.
                  </p>
                  <br />
                  <p className="mb-4">
                    Outro ponto que te tenho com inspiração e de certa maneira
                    te invejo (a boa inveja) é sua capacidade de se manter
                    otimista em situações contrárias. Você parece um tanque
                    sólido e cheio de entusiasmo e esperança. Se o mundo
                    acabasse hoje, pessoas como você seriam as responsáveis por
                    reconstruir um mundo com sonhos novamente.
                    <br />
                    <br />
                    Você costuma dizer que num apocalipse zumbi, você seria a
                    primeira se entregar. <strong>Duvido</strong>.
                    <br />
                    <br />
                    Provavelmente estaria liderando grupos de sobreviventes em
                    busca de um novo mundo haha. Isso é claro para mim. Cheia de
                    vida, humor, energia, disposição... Eu me inspiro em você,
                    Bia.
                  </p>
                  <br />
                  <p className="mb-4">
                    Minha mãe certa vez me puxou a atenção para uma
                    característica que você tem: Força. Não física (apesar de eu
                    passar mal treinando contigo), mas mental. Você é o símbolo
                    de mulher forte em meu modelo mental. Penso em mulher forte,
                    penso em você na infância, agora e no seu futuro. Esse texto
                    não é sobre mim, mas eu quero estar do seu lado e beber de
                    sua força.
                  </p>
                  <br />
                  <p className="mb-4">
                    Não baixa a cabeça quando sabe que está no caminho certo,
                    não passa por cima de valores próprios para agradar
                    terceiros, luta pelo que acredita, prova seus pontos mesmo
                    quando não precisa e finalmente tem humildade para
                    reconhecer suas vitórias. Nós já discutimos várias vezes, e
                    eu sei que estou argumentando com uma pessoa justa e
                    correta. Que jamais trairá os seus.
                  </p>
                  <br />
                  <p className="mb-4">
                    No começo da semana te pedi para que listasse e valorizasse
                    todos os seus feitos do ano. Numa tentativa de deixar claro
                    tudo o que tem feito, de toda sua grandeza e das histórias
                    que está escrevendo para si mesma. Tenho certeza que se
                    orgulhará dela e caso isso não aconteça, te prometo estar ao
                    seu lado para te forçar a comemorar seus troféus (que não
                    são poucos).
                  </p>
                  <br />
                  <p className="mb-4">
                    Por último, gostaria de te ajudar a listar todas as
                    montanhas que você escalou e você poder ver que você é
                    ímpar, é incomum, única, um raio que atinge duas vezes a
                    mesma formiga, ganhar na loteria, seus primos acertarem um
                    passe e uma aurora boreal na linha do equador.
                  </p>
                  <br />
                  <ul className="list-disc list-inside mb-4">
                    <li>1. Levou sua mãe pro exterior</li>
                    <li>2. Levou seu irmão pro exterior</li>
                    <li>3. Fez um curso avançado de comunicação corporativa</li>
                    <li>4. Viajou para seu lugar dos sonhos</li>
                    <li>5. Tirou fotos com big five</li>
                    <li>6. Fez +20 sessões de terapia</li>
                    <li>6. Treinou o ano todo</li>
                    <li>7. Alcançou seus objetivos físicos</li>
                    <li>8. Solidificou sua segunda língua</li>
                    <li>
                      9. Criou uma figura de amor na cabeça de um bebê (Zé)
                    </li>
                    <li>10. Me deu meu melhor presente da minha vida</li>
                    <li>11. Se arriscou em esportes novos</li>
                    <li>12. Se tornou um porto seguro para seu irmão</li>
                    <li>
                      13. Foi diva demais em um casamento e criou uma imagem
                      inenarrável de noiva na minha cabeça
                    </li>
                    <li>
                      14. Levou sua vózinha para o melhor final de ano dela
                    </li>
                    <li>
                      15. Se tornou uma referência para várias novas gerações
                      (Lavi, Sofi, Ana Julia, Alicia e Gabi)
                    </li>
                    <li>16. Parou de beber</li>
                    <li>
                      17. Decorou uma casa inteira e me mostrou o que é o
                      aconchego de um lar
                    </li>
                    <li>
                      18. Foi constantemente reconhecida por uma dos maiores
                      CEOs do Brasil
                    </li>
                    <li>
                      19. Trocou de liderança e esteve em um ambiente caótico no
                      trabalho mas sempre com 110% de desempenho
                    </li>
                    <li>
                      20. Viu o Abapuru. E provou pro babaca do seu lado que era
                      o original
                    </li>
                    <li>
                      21. Subiu uma montanha de 1km e ajudou o coitado do seu
                      lado a não passar mal
                    </li>
                    <li>22. Recebeu sua amiga gringa no seu país</li>
                    <li>23. Se pós-graduou</li>
                  </ul>
                  <br />
                  <p className="mb-4">
                    Esses são só os que lembrei em 20 min. Imagina parando para
                    realmente pensar nisso...
                  </p>
                  <br />
                  <p className="mb-4">Feliz 25 anos.</p>
                  <p className="mb-4">
                    Com idolatria,
                    <br />
                    Cesar
                  </p>
                  <br />
                  <div className="text-center mt-8">
                    <button
                      onClick={() => {
                        setShowBoardingPass(true);
                        // Reset confetti first, then trigger it again
                        setShowConfetti(false);
                        setTimeout(() => {
                          setShowConfetti(true);
                          // Auto-hide after 5 seconds
                          setTimeout(() => {
                            setShowConfetti(false);
                          }, 5000);
                        }, 100);
                      }}
                      className="hover:bg-[var(--color-total)] hover:scale-105 transition-all duration-300 bg-[var(--color-total)] text-[var(--bg-primary)] px-8 py-4 rounded-lg font-bold text-[18px] cursor-pointer"
                    >
                      👀 Não esquece de checar seu presente 👀
                    </button>
                  </div>
                </section>
              </div>
            </article>
          </main>
          <Note />
          <BoardingPass
            isVisible={showBoardingPass}
            onClose={() => setShowBoardingPass(false)}
          />
          <ConfettiComponent isVisible={showConfetti} />
        </div>
      </>
    );
  }

  return (
    <>
      <Cursor />
      <div className="post">
        <Loader isOpened={isOpened} duration={0.5} />
        <main className="flex flex-col items-center justify-center min-h-screen max-w-[700px] mx-auto px-[5%]">
          <div className="text-center">
            <p className="mb-8 text-[80px]">🔐</p>
            <h3 className="about-title text-[35px] md:text-[50px] mb-7 leading-[50px] font-black">
              Only for Beatriz's access...
            </h3>

            <form
              onSubmit={handleSubmit}
              className="w-full max-w-[400px] mx-auto"
            >
              <div className="mb-6">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Nem ouse escrever Justin Bieber 🙄"
                  className="w-full bg-[var(--bg-primary)] text-[var(--color-total)] px-4 py-3 rounded border border-[var(--border-primary)] focus:outline-none focus:border-[var(--border-primary)] text-[16px]"
                  disabled={isLoading}
                />
              </div>

              {error && (
                <p className="text-red-500 mb-4 text-[14px]">{error}</p>
              )}

              <button
                type="submit"
                disabled={isLoading || !password.trim()}
                className="w-full bg-[var(--color-total)] text-[var(--bg-primary)] px-6 py-3 rounded font-bold text-[16px] hover:opacity-80 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Checking..." : "Enter"}
              </button>
            </form>

            <p className="mt-8 text-[14px] text-[#777]">
              Hint: Ouvimos muito fazendo uma viagem juntos 🇳🇱🇧🇷
            </p>
          </div>
        </main>
      </div>
    </>
  );
};

export default SecretLetter;

export const Head = () => (
  <>
    <link
      rel="icon"
      href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👩🏽‍🦱</text></svg>"
    />
    <title>🎉 Feliz 2️⃣5️⃣! 🥳🍾🎊🪅🎁</title>
    <meta name="robots" content="noindex, nofollow" />
    <meta name="description" content="A secret page with a special message." />
  </>
);
