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
              <p className="mb-3 text-[80px]">🎯</p>
              <h3 className="about-title text-[35px] md:text-[50px] mb-5 font-black w-full leading-[60px] md:mt-0">
                Starting with Object-Oriented Programming
              </h3>
              <time datetime="2014-01-15" className="text-[18px] text-[#bbb]">
                January 15, 2014
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
                    My first steps into Object-Oriented Programming with Java
                  </li>
                  <li className="mb-4">
                    Understanding classes as blueprints for creating objects
                  </li>
                  <li className="mb-4">
                    Learning about encapsulation, inheritance, and polymorphism
                  </li>
                  <li className="mb-4">
                    My confusion about where to draw the line between object responsibilities
                  </li>
                </ul>
                <br />
              </section>
              <section class="intro-text">
                <p className="mb-4">
                  I started diving into object-oriented programming (OOP) with Java, and honestly, it feels like a whole new level of coding.
                </p>
                <p className="mb-4">
                  So far, my goal is just stringing together lines of code freely and giving space to my creativity. But this week, I had to create these "objects", and each one has its own data and actions it can perform.
                </p>
                <br />
                <p className="mb-4">
                  The first thing that started to make sense was the idea of a "class". Think of it like a blueprint. I can create a <code>Dog</code> class, and it has characteristics like <code>breed</code>, <code>age</code>, and <code>name</code>. It can also <em>do</em> things, like <code>bark()</code> or <code>wagTail()</code>.
                </p>
                <p className="mb-4">
                  Then I can make a bunch of <code>Dog</code> objects, and each one can have its own <code>breed</code>, <code>age</code>, and <code>name</code>.
                </p>
                <br />
                <SyntaxHighlighter
                  language="java"
                  style={darcula}
                  className="my-4 overflow-scroll rounded-3xl"
                >
                  {`public class Dog {
    private String breed;
    private int age;
    private String name;
    
    public Dog(String breed, int age, String name) {
        this.breed = breed;
        this.age = age;
        this.name = name;
    }
    
    public void bark() {
        System.out.println(name + " says: Woof!");
    }
    
    public void wagTail() {
        System.out.println(name + " is wagging its tail!");
    }
}`}
                </SyntaxHighlighter>
                <br />
                <p className="mb-4">
                  I noticed that every time my teacher gives easy examples. Or maybe when she explains things, everything becomes easy... Anyway, what about putting into a class a "touch screen"? What's the function of that? Show images? Allow something else to touch on it? But is it the screen's function or is it someone else's hands function? I have no clues.
                </p>
                <br />
                <p className="mb-4">
                  Then there's "encapsulation." It's like bundling everything related to an object together and keeping some of it private. It's supposed to be cleaner and easier to manage...
                </p>
                <br />
                <p className="mb-4">
                  "Inheritance" is pretty cool too. It means one class can inherit stuff from another class. So, a <code>BrazilianFila</code> class can inherit all the basic <code>GuardBreed</code> stuff, but also have its own unique characteristics. It's like building on top of what's already there.
                </p>
                <br />
                <SyntaxHighlighter
                  language="java"
                  style={darcula}
                  className="my-4 overflow-scroll rounded-3xl"
                >
                  {`public class GuardBreed extends Dog {
    public void guard() {
        System.out.println(name + " is guarding the property!");
    }
}

public class BrazilianFila extends GuardBreed {
    public void loyalProtection() {
        System.out.println(name + " shows extreme loyalty to family!");
    }
}`}
                </SyntaxHighlighter>
                <br />
                <p className="mb-4">
                  And finally, "polymorphism." This one's a bit trickier, but it's about objects being able to take on different forms. So, if I have a method that expects a <code>GuardBreed</code>, I can also pass it a <code>BrazilianFila</code> because a <code>BrazilianFila</code> <em>is</em> a <code>GuardBreed</code>.
                </p>
                <br />
                <p className="mb-4">
                  Let's continue!
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
    <title>Starting with Object-Oriented Programming - Cesar Oliveira</title>
    <meta name="description" content="My first steps into Object-Oriented Programming with Java, understanding classes, encapsulation, inheritance, and polymorphism." />
  </>
); 