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
                  <p className="mb-4">My love,</p>
                  <br />
                  <p className="mb-4">
                    If you're reading this, it means you found the secret path
                    and remembered the answer. Just like you always find your
                    way to my heart, you found your way here too.
                  </p>
                  <br />
                  <p className="mb-4">
                    Every day with you feels like discovering something new and
                    beautiful. You make me want to be better, to create more, to
                    love deeper.
                  </p>
                  <br />
                  <p className="mb-4">
                    This little secret page is just one more way I wanted to
                    show you how much you mean to me. Even in my code, I'm
                    thinking of you.
                  </p>
                  <br />
                  <p className="mb-4">
                    Thank you for being my inspiration, my support, my
                    everything.
                  </p>
                  <br />
                  <p className="mb-4">
                    I love you more than words can express.
                  </p>
                  <br />
                  <p className="mb-4">
                    Forever yours,
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
                      🎫 Click here for a surprise...
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
    <meta name="description" content="A secret page with a special message." />
  </>
);
