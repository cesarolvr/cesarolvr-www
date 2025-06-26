import * as React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

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
              <p className="mb-3 text-[80px]">🐧</p>
              <h3 className="about-title text-[35px] md:text-[50px] mb-5 font-black w-full leading-[60px] md:mt-0">
                First time using a Linux machine
              </h3>
              <time datetime="2014-05-20" className="text-[18px] text-[#bbb]">
                May 20, 2014
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
                    My initial skepticism about Linux users being "hipsters"
                  </li>
                  <li className="mb-4">
                    Discovering why people actually use Linux beyond showing off
                  </li>
                  <li className="mb-4">
                    The shocking speed difference between Windows and Linux file systems
                  </li>
                  <li className="mb-4">
                    My teacher's enthusiasm finally making sense
                  </li>
                </ul>
                <br />
              </section>
              <section class="intro-text">
                <p className="mb-4">
                  I can't see why Linux users are so hipsters. I'm using Windows.
                </p>
                <br />
                <p className="mb-4">
                  That's what I was thinking when my teacher started talking about Linux like it was the best thing ever. All the computers at my school run Windows. I've never used macOS. And here comes this guy, super enthusiastic about Linux, talking about how amazing it is.
                </p>
                <br />
                <p className="mb-4">
                  Are these people just trying to show off? What's the big deal?
                </p>
                <br />
                <p className="mb-4">
                  But then I actually tried it. And wow, was I wrong.
                </p>
                <br />
                <p className="mb-4">
                  The first thing that hit me was the speed. I mean, I knew Windows could be slow sometimes, but I didn't realize how much of a difference there could be. Opening folders, copying files, installing programs - everything just felt... snappy. Like, really snappy.
                </p>
                <br />
                <p className="mb-4">
                  My teacher explained that Linux has a different file system architecture. Windows uses NTFS, which apparently has some overhead that Linux file systems like ext4 don't have. I don't understand all the technical details yet, but I can definitely feel the difference.
                </p>
                <br />
                <p className="mb-4">
                  Then there's the package management thing. On Windows, you download installers from random websites, hope they're safe, and then deal with uninstallers that never really clean up properly. On Linux, you just type something like:
                </p>
                <br />
                <SyntaxHighlighter
                  language="bash"
                  style={darcula}
                  className="my-4 overflow-scroll rounded-3xl"
                >
                  {`sudo apt install firefox`}
                </SyntaxHighlighter>
                <br />
                <p className="mb-4">
                  And boom, it's installed. No random popups, no "Would you like to install this toolbar?", no leftover files everywhere. It's like having a proper app store, but for everything.
                </p>
                <br />
                <p className="mb-4">
                  I also discovered that a lot of development tools just work better on Linux. When I was trying to set up my PHP development environment, everything was so much smoother. No weird permission issues, no antivirus software blocking things, no registry problems.
                </p>
                <br />
                <p className="mb-4">
                  The command line is actually useful here. On Windows, I always felt like the command prompt was this ancient thing that nobody really used. But on Linux, the terminal is powerful. You can do everything from there if you want to.
                </p>
                <br />
                <p className="mb-4">
                  I'm still learning, and I'm definitely not a Linux expert yet. But I'm starting to understand why my teacher was so excited about it. It's not about being a hipster or showing off - it's about having a system that actually works the way you expect it to.
                </p>
                <br />
                <p className="mb-4">
                  The funny thing is, now when I go back to Windows, I notice all these little annoyances that I never paid attention to before. The slow file operations, the random slowdowns, the way programs install and uninstall...
                </p>
                <br />
                <p className="mb-4">
                  I'm not saying Windows is bad or that everyone should switch to Linux. But I'm definitely seeing why some people prefer it, especially for development work.
                </p>
                <br />
                <p className="mb-4">
                  My teacher was right. Sometimes you just have to try something to understand why people are so passionate about it.
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

export const Head = () => (
  <>
    <title>First time using a Linux machine - Cesar Oliveira</title>
    <meta name="description" content="My journey from skepticism to understanding: discovering why Linux users aren't just hipsters and experiencing the real performance benefits." />
  </>
); 