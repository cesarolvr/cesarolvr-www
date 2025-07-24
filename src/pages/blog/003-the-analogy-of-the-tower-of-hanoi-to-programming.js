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

// Images
import towerOfHanoi from "../../images/blog-tower-of-hanoi/tower-of-hanoi.gif";

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
              <p className="mb-3 text-[80px]">🗼</p>
              <h3 className="about-title text-[35px] md:text-[50px] mb-5 font-black w-full leading-[60px] md:mt-0">
                003. The analogy of the tower of Hanoi to programming
              </h3>
              <time
                datetime="2013-06-10"
                className="text-[18px] text-[var(--tw-text-gray-secondary)]"
              >
                June 10, 2013
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
                    Learned about sequential instructions through the Tower of
                    Hanoi analogy in logic class.
                  </li>
                  <li className="mb-4">
                    Adopted a "step-by-step and explain-to-a-kid" mindset to
                    simplify abstract concepts.
                  </li>
                  <li className="mb-4">
                    Reminder: Computers are fast, not smart. They just follow
                    instructions.
                  </li>
                </ul>
                <br />
                <br />
              </section>
              <section className="intro-text">
                <p>
                  Last week, my math teacher, who is also my logic teacher,
                  explained to me how computers follow instructions sequentially
                  using the analogy of the Tower of Hanoi.
                </p>
                <br />
                <p>
                  Finally, I adopted a mindset that allowed me to behave as if I
                  were explaining something to a kid, and walkingtrhoung slowly,
                  step by step.
                </p>
                <br />
                <p>Let's see:</p>
                <br />
                <div className="flex justify-center rounded-3xl overflow-hidden">
                  <img
                    src={towerOfHanoi}
                    alt="Tower of Hanoi"
                    className="w-full"
                  />
                </div>
                <br />
                <p>In Java:</p>
                <SyntaxHighlighter
                  className="overflow-scroll rounded-3xl"
                  language="java"
                  style={darcula}
                >
                  {`public class TowerOfHanoi {

    // Recursive function to solve Tower of Hanoi
    public static void solveHanoi(int n, char source, char destination, char auxiliary) {
        // Base case: If there's only one disk, move it directly
        if (n == 1) {
            System.out.println("Move disk 1 from " + source + " to " + destination);
            return;
        }

        // Step 1: Move n-1 disks from source to auxiliary using destination
        solveHanoi(n - 1, source, auxiliary, destination);

        // Step 2: Move the nth disk from source to destination
        System.out.println("Move disk " + n + " from " + source + " to " + destination);

        // Step 3: Move n-1 disks from auxiliary to destination using source
        solveHanoi(n - 1, auxiliary, destination, source);
    }

    public static void main(String[] args) {
        int numberOfDisks = 4; // With 4 disks
        System.out.println("Tower of Hanoi solution for " + numberOfDisks + " disks:");
        solveHanoi(numberOfDisks, 'A', 'C', 'B'); // A = source, C = destination, B = auxiliary
    }
}
`}
                </SyntaxHighlighter>
                <br />
                <p>The steps are:</p>
                <br />
                <ul className="space-y-6 list-decimal list-inside dark:text-[var(--tw-text-gray-secondary)]">
                  <li>
                    <strong className="font-semibold dark:text-[var(--tw-text-gray-primary)]">
                      Base case:
                    </strong>{" "}
                    If I have only one disk, I move it directly from the source
                    peg to the destination peg.
                  </li>
                  <li>
                    <strong className="font-semibold dark:text-white">
                      Recursive step 1:
                    </strong>{" "}
                    I move the top <code>n-1</code> disks from the source peg to
                    the auxiliary peg, using the destination peg as a helper.
                  </li>
                  <li>
                    <strong className="font-semibold dark:text-white">
                      Move largest disk:
                    </strong>{" "}
                    I move the remaining (largest) disk from the source peg to
                    the destination peg.
                  </li>
                  <li>
                    <strong className="font-semibold dark:text-white">
                      Recursive step 2:
                    </strong>{" "}
                    Then, I move the <code>n-1</code> disks from the auxiliary
                    peg to the destination peg, using the source peg as a
                    helper.
                  </li>
                </ul>
                <br />
                <p>
                  Our routine is already quite abstract, making it difficult to
                  simplify things and approach them step by step. Ultimately, to
                  paraphrase her:
                  <blockquote>
                    "The computer is simply faster than you, not smarter"
                  </blockquote>
                </p>
                <br />
                <br />
                <p>Keep going...</p>
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
  <title>003. The analogy of the tower of Hanoi to programming | cesarolvr</title>
);
