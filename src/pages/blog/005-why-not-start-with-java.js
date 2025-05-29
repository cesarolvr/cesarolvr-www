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
              <p className="mb-3 text-[80px]">☕</p>
              <h3 className="about-title text-[35px] md:text-[50px] mb-5 font-black w-full leading-[60px] md:mt-0">
                Why (not) start with Java?
              </h3>
              <time
                datetime="2013-03-03"
                className="text-[18px] text-[var(--tw-text-gray-secondary)]"
              >
                November 12, 2013
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
                    Java's verbose syntax and boilerplate code make simple tasks
                    unnecessarily complex.
                  </li>
                  <li className="mb-4">
                    Strict syntax rules (semicolons, curly braces,
                    capitalization) create a steep learning curve.
                  </li>
                  <li className="mb-4">
                    While Java might teach good programming habits, it can be
                    overwhelming for beginners.
                  </li>
                </ul>
                <br />
                <br />
              </section>
              <section class="intro-text">
                <p>
                  I don't know yet why does Java make everything so complicated. I'm trying to
                  learn programming, but Java feels like it's going out of its
                  way to make even the simplest tasks harder than they need to
                  be. Take "Hello, World!" for example. In Java, it's not just a
                  single line of code. No, you need a whole ceremony:
                </p>
                <br />
                <SyntaxHighlighter
                  language="java"
                  style={darcula}
                  className="my-4 overflow-scroll rounded-3xl"
                >
                  {`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`}
                </SyntaxHighlighter>
                <br />
                <p>
                  Why do I need a class? Why do I need public static void
                  main(String[] args)? I'm just trying to print a sentence! It
                  feels like Java is asking me to build a house just to open a
                  door.
                </p>
                <br />
                <p>
                  And then there's the syntax. Everything in Java is strict.
                  Forget a semicolon? Error. Miss a curly brace? Error. Use the
                  wrong capitalization? Error. It's like the language is waiting
                  for me to mess up so it can throw a wall of red squiggly lines
                  in my face. How am I supposed to experiment and learn when
                  every tiny mistake feels like a disaster?
                </p>
                <br />
                <p>
                  Even something as simple as declaring a variable feels
                  unnecessarily verbose. Want to store a number? Here's what
                  Java makes you do:
                </p>
                <br />
                <SyntaxHighlighter
                  language="java"
                  style={darcula}
                  className="overflow-scroll rounded-3xl"
                >
                  {`int number = 42;  // Have to specify it's an integer
double price = 19.99;  // Have to specify it's a decimal
String text = "Hello";  // Have to specify it's text`}
                </SyntaxHighlighter>
                <br />
                <p>
                  Okay, fine, but why do I have to specify the type every time?
                  Can't the language figure it out? And don't even get me
                  started on creating objects. If I want to create a simple
                  object, I need to write a whole class first:
                </p>
                <br />
                <SyntaxHighlighter
                  language="java"
                  style={darcula}
                  className="overflow-scroll rounded-3xl"
                >
                  {`public class Person {
    private String name;
    
    public Person(String name) {
        this.name = name;
    }
    
    public String getName() {
        return name;
    }
}`}
                </SyntaxHighlighter>
                <br />
                <p>
                  All of that just to store a name? It feels like overkill. And
                  then, when I actually want to use it:
                </p>
                <br />
                <SyntaxHighlighter
                  language="java"
                  style={darcula}
                  className="rounded-lg my-4"
                >
                  {`Person person = new Person("John");
System.out.println(person.getName());`}
                </SyntaxHighlighter>
                <br />
                <p>
                  Why does everything take so many steps? The language seems to love making me
                  jump through hoops for even the simplest tasks.
                </p>
                <br />
                <p>
                  I get that Java is supposed to teach me "good habits" and
                  "strong fundamentals" but right now, it just feels like it's
                  slowing me down. I'm spending more time fighting with the
                  syntax than actually learning how to solve problems. Other
                  languages, like Python, seem so much simpler. In Python, I
                  could do the same thing in just a few lines:
                </p>
                <br />
                <SyntaxHighlighter
                  language="python"
                  style={darcula}
                  className="overflow-scroll rounded-3xl"
                >
                  {`# Hello World
print("Hello, World!")

# Variables
number = 42
price = 19.99
text = "Hello"

# Simple object
class Person:
    def __init__(self, name):
        self.name = name

person = Person("John")
print(person.name)`}
                </SyntaxHighlighter>
                <br />
                <p>
                  That's it. No classes, no methods, no boilerplate. Just the
                  result I want, without all the extra noise.
                </p>
                <br />
                <p>
                  Java might be powerful, but as a beginner, it feels like I'm
                  carrying a toolbox full of heavy tools when all I need is a
                  simple hammer. Maybe one day I'll appreciate all the structure
                  and rules, but right now, it just feels like too much. For
                  now, I'm sticking with it because that's what I'm learning,
                  but I can't help but think there has to be a better way to
                  start programming.
                </p>
                <br />
                <p>
                  Hope to see some sense in this soon, when I will supposed to be better.
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
  <title>005. Why (not) start with Java? | cesarolvr</title>
);
