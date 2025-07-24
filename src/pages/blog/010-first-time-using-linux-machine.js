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
          <article className="blog-intro">
            <header className="px-[5%] mb-4">
              <p className="mb-3 text-[80px]">🐧</p>
              <h3 className="about-title text-[35px] md:text-[50px] mb-5 font-black w-full leading-[60px] md:mt-0">
                First time using Linux machine
              </h3>
              <time datetime="2014-04-20" className="text-[18px] text-[#bbb]">
                May 20, 2014
              </time>
            </header>
            <br />
            <br />
            <div className="text-[var(--color-total)] max-w-full w-full mb-16 px-[5%] leading-[50px] text-[26px]">
              <section className="tldr text-[25px] leading-[45px]">
                <p className="mb-4">
                  <strong>TL;DR</strong>
                </p>

                <ul className="list-disc pl-8">
                  <li className="mb-4">
                    Discovering that there's more than one operating system
                  </li>
                  <li className="mb-4">
                    Learning about Linux as a movement, not just an OS
                  </li>
                  <li className="mb-4">
                    Understanding the difference between kernel and
                    distributions
                  </li>
                  <li className="mb-4">
                    Comparing Linux vs Windows and planning to experiment
                  </li>
                </ul>
                <br />
              </section>
              <section className="intro-text">
                <p className="mb-4">
                  Until I met Junior, I thought there was only one default
                  system running inside all computers. After all, why should we
                  worry about the OS if we can open the browser and just
                  navigate the internet?
                </p>
                <br />
                <p className="mb-4">
                  Junior is my hardware and network teacher, and already in the
                  first class, I noticed his passion for Operating Systems.
                  Linux especially stands out in his speech.
                </p>
                <br />
                <p className="mb-4">
                  These first classes have given me a lot of "aha" moments, and
                  then I started to expand my mind across OSs. Here's what I
                  found:
                </p>
                <br />
                <p className="mb-4">
                  <strong>
                    Linux is not just an OS; it actually represents an entire
                    movement and way of thinking. Sometimes it's even political.
                  </strong>
                </p>
                <br />
                <p className="mb-4">
                  For example, the GNU project, started by Richard Stallman in
                  the 80s, pushed the idea of free software—meaning freedom, not
                  just price (very sophisticated idea even nowadays). The Free
                  Software Foundation, also founded by Stallman, fights for
                  users to have the right to run, study, modify, and share
                  software. This is a big part of the Linux vibe.
                </p>
                <br />
                <p className="mb-4">
                  Think of Linux's origins! It all started with Linus Torvalds,
                  a student guy, who in 1991 began working on a kernel as a
                  hobby. He shared his work, and the open-source community
                  jumped in, contributing and developing it further. This
                  collaborative spirit is a core part of the Linux philosophy.
                  You see this reflected in the many different distributions
                  available today, each catering to different needs and
                  preferences.
                </p>
                <br />
                <p className="mb-4">
                  And we can check it out by ourselves here:{" "}
                  <a
                    href="https://github.com/torvalds/linux/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 font-bold underline"
                  >
                    https://github.com/torvalds/linux/
                  </a>{" "}
                  (thats sick)
                </p>
                <br />
                <p className="mb-4">
                  Understanding the topology of Linux helped me figure out (at
                  least a little bit) how a machine works and what a kernel is.
                  With that, people from all over the world can contribute and
                  build on your ideas.
                </p>
                <br />
                <p className="mb-4">
                  These abstractions bring different characteristics to each
                  system.
                </p>
                <br />
                <p className="mb-4">
                  The kernel is the core of the OS, the part that talks directly
                  to the hardware. Distributions, on the other hand, are
                  complete operating systems built around the Linux kernel. They
                  include the kernel, system utilities, desktop environments
                  (like GNOME or KDE), and applications. Think of the kernel as
                  the engine of a car, and the distribution as the whole
                  car—engine, chassis, interior, and all the features that make
                  it usable.
                </p>
                <br />
                <p className="mb-4">
                  So I thought how can one distribution be "smarter" or better
                  prepared for a specific topic than another? Why is this one
                  for hacking, and another for server duty for example?
                </p>
                <br />
                <p className="mb-4">
                  That's where customization comes in (even not understanding
                  yet in the code itself). Distribution can be tailored with
                  specific software, settings, and security tweaks for certain
                  tasks. For example, Kali Linux is packed with security tools
                  for penetration testing, while CentOS is popular for servers
                  because of its stability and long-term support.
                </p>
                <br />
                <p className="mb-4">
                  Just a daydream I had while writing this: Why are all the
                  movies and culture about hacking and programming so
                  exaggerated? A nerd sits in front of the computer, types some
                  random Linux commands like <code>mv</code>, <code>cp</code>,{" "}
                  <code>ls</code>, and then, voilà, system hacked and all
                  credentials stolen. I can't wait for something more realistic
                  (and maybe boring) involving social engineering and stuff.
                </p>
                <br />
                <p className="mb-4">
                  Back to the main: Everything is about commands and less about
                  GUI.
                </p>
                <br />
                <p className="mb-4">
                  Red Hat is definitely worth mentioning. It's another favorite
                  of my teacher. Red Hat is huge in the enterprise world,
                  especially with Red Hat Enterprise Linux (RHEL). They're known
                  for stability, security, and long-term support. What makes Red
                  Hat special is how much they contribute to open source. They
                  don't just use it, they help build it.
                </p>
                <br />
                <p className="mb-4">
                  <strong>
                    The main differences from Windows (system I used all my
                    life):
                  </strong>
                </p>
                <br />
                <ul className="list-disc pl-8 mb-4">
                  <li className="mb-4">
                    One of the biggest differences is that Linux is open source,
                    while Windows is proprietary ($$).
                  </li>
                  <li className="mb-4">
                    This affects cost, customization, and control. Linux is
                    usually free, while Windows needs a license. Linux is super
                    customizable and you can tweak almost anything.
                  </li>
                  <li className="mb-4">
                    Windows is more locked down. Linux relies heavily on the
                    terminal, while Windows is more GUI-focused (though
                    PowerShell is getting better).
                  </li>
                  <li className="mb-4">
                    Finally, Linux is known for stability and security, while
                    Windows has had more issues with malware and
                    vulnerabilities.
                  </li>
                </ul>
                <br />
                <p className="mb-4">
                  All this abstractions of stability, security, customization is
                  still cloudy for me, but I'm going to install a dual boot in
                  my mom's machine and experiment it by myself.
                </p>
                <br />
                <p className="mb-4">See ya!</p>
              </section>
            </div>
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
    <title>First time using Linux machine | cesarolvr</title>
    <meta
      name="description"
      content="My first encounter with Linux and understanding it as more than just an operating system - a movement and philosophy."
    />
  </>
);
