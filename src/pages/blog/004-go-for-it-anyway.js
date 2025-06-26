import * as React from "react";

// Components
import Header from "../../components/Header";
import Note from "../../components/Note";
import Loader from "../../components/Loader";
import Cursor from "../../components/Cursor";

// Styles
import "../../styles/global.scss";

const Post = () => {
  const [isOpened, setIsOpened] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setIsOpened(false);
    }, 800);
  }, []);

  return (
    <>
      <Cursor />
      <div className="post">
        <Loader isOpened={isOpened} duration={0.5} />
        <Header goBackToHome={true} disableScramble={true} />
        <main className="flex flex-col mb-10 max-w-[900px]">
          <article class="blog-intro">
            <header className="px-[5%] mb-4">
              <p className="mb-3 text-[80px]">➡️</p>
              <h3 className="about-title text-[35px] md:text-[50px] mb-5 font-black w-full leading-[60px] md:mt-0">
                Go for it anyway
              </h3>
              <time
                datetime="2013-03-03"
                className="text-[18px] text-[var(--tw-text-gray-secondary)]"
              >
                August 12, 2013
              </time>
            </header>
            <br />
            <br />
            <div className="text-[var(--color-total)] max-w-full w-full mb-16 px-[5%] leading-[50px] text-[26px]">
              <section class="tldr text-[25px] leading-[45px]">
                <p className="mb-4">
                  <strong>TL;DR</strong>
                </p>
                <ul className="list-disc pl-8">
                  <li className="mb-4">
                    Struggling with abstract Java concepts like SOLID
                    principles, OOP, inheritance, and polymorphism, while
                    managing the strict syntax and red squiggly lines in the
                    IDE.
                  </li>
                  <li className="mb-4">
                    Friends like Peterson and Charles help me keep up, sometimes
                    by doing the assignments for me. Sorry, teacher 😢.
                  </li>
                  <li className="mb-4">
                    Focusing on small wins and trusting that the bigger picture
                    will make sense with time and practice.
                  </li>
                </ul>
                <br />
                <br />
              </section>
              <section class="intro-text">
                <p>
                  Learning Java is feeling like a wild ride. I'm sitting here,
                  trying to make sense of abstract ideas like SOLID principles,
                  OOP, inheritance, and polymorphism, while also wrestling with
                  the more hands-on stuff like JOptionPane (?), loops, arrays,
                  and Java's strict syntax. Honestly, I'm not seeing how it all
                  connects yet, but I'm trusting that it'll click eventually. At
                  least, I hope it will.
                </p>
                <br />
                <p>
                  I have to admit something: Peterson and Charles are
                  lifesavers. They're the reason I'm even keeping up. Sometimes,
                  they straight-up do the assignments for me. If my teacher is
                  reading this after giving me a good grade—sorry! I know I
                  should be doing it all myself, but it's hard to keep up when
                  everything feels so overwhelming. I promise I'm trying to
                  learn, even if it doesn't always look like it.
                </p>
                <br />
                <p>
                  One of the hardest parts is dealing with the red squiggly
                  lines in the IDE. Every time I see them, it feels like the
                  program is yelling at me. They're everywhere, pointing out
                  every little mistake I make, and it's honestly terrifying.
                  It's hard to feel motivated to try again, fail, and try again
                  when the IDE keeps reminding me how much I'm messing up? It's
                  like the red lines are saying, "You're a dumbass".
                </p>
                <br />
                <p>
                  The abstract concepts are still the most confusing. SOLID
                  principles sound like rules I should follow, but I don't know
                  how to apply them yet. OOP feels like this big, important
                  thing, but I'm still figuring out why it's better than just
                  writing everything in one file. Inheritance makes sense in
                  theory, but I don't know when I'll actually need it. And
                  polymorphism? It sounds fancy, but I'm not sure I fully get
                  it. These ideas feel like pieces of a puzzle, but I don't know
                  what the final picture is supposed to look like.
                </p>
                <br />
                <p>
                  The more concrete stuff, like JOptionPane, loops, and arrays,
                  feels a little easier to handle. At least I can see what
                  they're doing. But even then, Java's syntax is so strict that
                  it feels like I'm walking on eggshells every time I write
                  code. One missing semicolon, and the whole thing breaks. It's
                  frustrating, but I'm trying to remind myself that this is part
                  of the process.
                </p>
                <br />
                <p>
                  Right now, I'm just focusing on what I can do today. I write
                  code that works, even if it's messy. I ask for help when I
                  need it (or when Peterson and Charles offer to just do it for
                  me). I try to celebrate the small wins, like getting a program
                  to run without errors or finally understanding how a for loop
                  works. I'm trusting that the abstract stuff like SOLID, OOP,
                  inheritance or polymorphism will start to make sense as I keep
                  practicing. Maybe the next logic class will connect some dots.
                  Maybe it won't. Either way, I'm showing up and doing what I
                  can.
                </p>
                <br />
                <p>
                  It's not easy, but I'm holding onto hope. I don't need to
                  understand everything right now. I just need to keep going,
                  keep asking questions, and trust that the pieces will
                  eventually fall into place. One day, I'll look back and laugh
                  at how scared I was of those red squiggly lines. For now, I'm
                  moving forward, even when it feels messy. Just going for it
                  anyway.
                </p>
                <br />
                <p>
                  See ya.
                </p>
              </section>
            </div>
            <br />
            <br />

            <a href={"/blog/"} className="px-[5%] text-[16px]">
              {"<- "} Back to blog
            </a>
            <br />
            <br />
            <br />
          </article>
        </main>
        <Note />
      </div>
    </>
  );
};

export default Post;

export const Head = () => <title>004. Go fot it anyway | cesarolvr</title>;
