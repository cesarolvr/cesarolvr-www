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
        <Header goBackToHome={true} />
        <main className="flex flex-col mb-10 max-w-[900px]">
          <article class="blog-intro">
            <header className="px-[5%] mb-4">
              <p className="mb-3 text-[80px]">🌐</p>
              <h3 className="about-title text-[35px] md:text-[50px] mb-5 font-black w-full leading-[60px] md:mt-0">
                Networking is not that easy
              </h3>
              <time datetime="2014-04-15" className="text-[18px] text-[#bbb]">
                April 15, 2014
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
                    Understanding the internet as a big neighborhood with
                    addresses
                  </li>
                  <li className="mb-4">
                    Learning about IP addresses (IPv4 vs IPv6) and DNS
                  </li>
                  <li className="mb-4">
                    Exploring ports, firewalls, and network classes
                  </li>
                  <li className="mb-4">
                    My attempt to make networking concepts less scary
                  </li>
                </ul>
                <br />
              </section>
              <section class="intro-text">
                <p className="mb-4">The analogy that worked for me:</p>
                <br />
                <p className="mb-4">
                  Imagine the internet is like a really, really big
                  neighborhood! And I'm trying to understand how this
                  neighborhood works. I had my first class about this (networks)
                  last Wednesday.
                </p>
                <br />
                <p className="mb-4">
                  Now, every house in the neighborhood needs an address, right?
                  According to Junior (my teacher), that's what an IP address
                  is! It's like a special name tag for your computer so the
                  internet knows where to send the mail (or something else).
                </p>
                <br />
                <p className="mb-4">
                  If I got it right, there are two kinds of these addresses,
                  like having two different ways to write the house number:
                </p>
                <br />
                <ul className="list-disc pl-8 mb-4">
                  <li className="mb-4">
                    <strong>IPv4:</strong> This is like the old way of writing
                    addresses, like <code>192.168.1.1</code>. It's just some
                    numbers with dots. But we're running out of these...
                  </li>
                  <li className="mb-4">
                    <strong>IPv6:</strong> This is the new way, and it's super
                    long, like{" "}
                    <code>2001:0db8:85a3:0000:0000:8a2e:0370:7334</code>. It has
                    letters and numbers! The good thing is, we have lots and
                    lots of these, so everyone can have an address.
                  </li>
                  <li className="mb-4">
                    <strong>Abstraction:</strong> We don't see these addresses
                    much because the computer does it for us! It's like magic
                    for us. When you type <code>google.com</code>, the computer
                    knows the secret address.
                  </li>
                </ul>
                <br />
                <p className="mb-4">
                  Going deeper briefly: Think of DNS like a giant phone book for
                  the internet. When you type a website name, your computer asks
                  a DNS server, "Hey, what's the IP address for{" "}
                  <code>google.com</code>?". The DNS server looks it up and
                  tells your computer the right IP address so it can connect to
                  the website.
                </p>
                <br />
                <ul className="list-disc pl-8 mb-4">
                  <li className="mb-4">
                    <strong>Dynamic vs. Static:</strong> Sometimes the address
                    can change, like if you move houses. That's a dynamic
                    address. If it stays the same, it's static.
                  </li>
                  <li className="mb-4">
                    <strong>Subnets and Masks:</strong> Imagine the neighborhood
                    is divided into smaller streets. These help find the right
                    house faster.
                  </li>
                </ul>
                <br />
                <p className="mb-4">
                  Ports are like the apartment number in that building. A port
                  is a virtual "door" that lets specific apps or services talk
                  to each other.
                </p>
                <br />
                <ul className="list-disc pl-8 mb-4">
                  <li className="mb-4">
                    Ports are numbers from 0 to 65535 (I dont know why yet...)
                  </li>
                  <li className="mb-4">
                    But there are some standards: These ports are reserved for
                    common stuff:
                  </li>
                </ul>
                <br />
                <SyntaxHighlighter
                  language="text"
                  style={darcula}
                  className="my-4 overflow-scroll rounded-3xl"
                >
                  {`• 80: HTTP (that's regular web traffic)
• 443: HTTPS (secure web traffic - the good stuff!)
• 22: SSH (securely connecting to another computer)
• 21: FTP (transferring files)
• 25: SMTP (sending email)`}
                </SyntaxHighlighter>
                <br />
                <ul className="list-disc pl-8 mb-4">
                  <li className="mb-4">
                    <strong>Port Conflicts:</strong> If two apps try to use the
                    same port, things break. It's like two people trying to go
                    through the same door at once.
                  </li>
                  <li className="mb-4">
                    <strong>Firewalls:</strong> Firewalls can block certain
                    ports for security. Which is good, but also annoying when
                    you're trying to troubleshoot something.
                  </li>
                </ul>
                <br />
                <p className="mb-4">
                  Back in the day, IP addresses were divided into classes (A, B,
                  and C) based on the size of the network. This isn't really
                  used anymore because of something called Classless
                  Inter-Domain Routing (CIDR). But it's still good to know the
                  basics:
                </p>
                <br />
                <ul className="list-disc pl-8 mb-4">
                  <li className="mb-4">
                    <strong>Class A:</strong> For HUGE networks. The first
                    number is between 1 and 126.
                  </li>
                  <li className="mb-4">
                    <strong>Class B:</strong> For medium-sized networks. The
                    first number is between 128 and 191.
                  </li>
                  <li className="mb-4">
                    <strong>Class C:</strong> For smaller networks. The first
                    number is between 192 and 223.
                  </li>
                </ul>
                <br />
                <p className="mb-4">
                  <strong>CIDR:</strong> Imagine you have a big box of crayons,
                  and you want to share them with your friends. The old way
                  (classes) was like saying "You get exactly 10 crayons, you get
                  exactly 50 crayons, you get exactly 100 crayons" - but what if
                  someone only needs 15 crayons? That's wasteful!
                </p>
                <br />
                <p className="mb-4">
                  CIDR is like having a magic box where you can give exactly the
                  right number of crayons to each person. If someone needs 15
                  crayons, they get 15. If someone needs 200 crayons, they get
                  200. No waste!
                </p>
                <br />
                <p className="mb-4">
                  The <code>/24</code> part is like a label that tells the
                  computer "Hey, this group can have up to 254 houses in it!"
                  (Just like how a crayon box might say "Contains 24 crayons").
                  The bigger the number after the slash, the fewer houses can be
                  in that group. It's like having different-sized boxes for
                  different needs!
                </p>
                <br />
                <p className="mb-4">
                  Hopefully, this is going to be less scary next semester.
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
    <title>Networking is not that easy - Cesar Oliveira</title>
    <meta
      name="description"
      content="Understanding networking concepts through analogies: IP addresses, DNS, ports, firewalls, and network classes explained in simple terms."
    />
  </>
);
