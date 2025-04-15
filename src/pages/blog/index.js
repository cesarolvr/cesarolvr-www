import * as React from "react";

// Components
import Header from "../../components/Header";
import Note from "../../components/Note";
import Loader from "../../components/Loader";
import Cursor from "../../components/Cursor";

// Styles
import "../../styles/global.scss";

const Blog = () => {
  const [isOpened, setIsOpened] = React.useState(true);
  
  const articles = [
    {
      year: 2013,
      posts: [
        {
          id: "001",
          emoji: "🚀",
          title: "Starting...",
          description: "Describing my purpose and goals for this blog.",
          readTime: "2 min read",
          link: "/blog/starting",
          active: true
        },
        {
          id: "002",
          emoji: "💻",
          title: "First contact with programming",
          description: "I just don't know what I'm doing. Everything that I write sucks.",
          readTime: "3 min read",
          link: "/blog/first-contact-with-programming",
          active: true
        },
        {
          id: "003",
          emoji: "🗼",
          title: "The analogy of the Tower of Hanoi to programming",
          description: "Understanding programming concepts through the famous puzzle.",
          readTime: "4 min read",
          link: "/blog/tower-of-hanoi",
          active: false
        },
        {
          id: "004",
          emoji: "➡️",
          title: "Even with fear or confusion, keep going",
          readTime: "3 min read",
          link: "/blog/keep-going",
          active: false
        },
        {
          id: "005",
          emoji: "☕",
          title: "Why start with Java?",
          readTime: "4 min read",
          link: "/blog/why-java",
          active: false
        },
        {
          id: "006",
          emoji: "🗄️",
          title: "The boring rules of modeling a DB",
          readTime: "5 min read",
          link: "/blog/db-modeling",
          active: false
        }
      ]
    },
    {
      year: 2014,
      posts: [
        {
          id: "007",
          emoji: "🎯",
          title: "Starting with Object-Oriented Programming",
          readTime: "4 min read",
          link: "/blog/oop-start",
          active: false
        },
        {
          id: "008",
          emoji: "🐘",
          title: "First contact with PHP",
          readTime: "3 min read",
          link: "/blog/php-contact",
          active: false
        },
        {
          id: "009",
          emoji: "🌐",
          title: "Networking is not that easy",
          readTime: "4 min read",
          link: "/blog/networking",
          active: false
        },
        {
          id: "010",
          emoji: "🐧",
          title: "First time using a Linux machine",
          readTime: "3 min read",
          link: "/blog/linux-first",
          active: false
        }
      ]
    },
    {
      year: 2015,
      posts: [
        {
          id: "011",
          emoji: "🌐",
          title: "Coding inside a browser?",
          readTime: "3 min read",
          link: "/blog/browser-coding",
          active: false
        },
        {
          id: "012",
          emoji: "🎯",
          title: "Coding now has a purpose",
          readTime: "4 min read",
          link: "/blog/coding-purpose",
          active: false
        }
      ]
    },
    {
      year: 2016,
      posts: [
        {
          id: "013",
          emoji: "🔧",
          title: "A WordPress issue at my first job (knowing nothing)",
          readTime: "5 min read",
          link: "/blog/wordpress-first-job",
          active: false
        },
        {
          id: "014",
          emoji: "📱",
          title: "An AngularJS app just handed to me",
          readTime: "4 min read",
          link: "/blog/angularjs-handover",
          active: false
        },
        {
          id: "015",
          emoji: "🎭",
          title: "Jack of all trades in a small agency",
          readTime: "4 min read",
          link: "/blog/agency-jack",
          active: false
        },
        {
          id: "016",
          emoji: "🎨",
          title: "WordPress templates with Advanced Custom Fields",
          readTime: "5 min read",
          link: "/blog/wp-acf",
          active: false
        }
      ]
    },
    {
      year: 2017,
      posts: [
        {
          id: "017",
          emoji: "🔄",
          title: "Angular is totally different now",
          readTime: "4 min read",
          link: "/blog/angular-changes",
          active: false
        },
        {
          id: "018",
          emoji: "💛",
          title: "JavaScript is officially a focus",
          readTime: "4 min read",
          link: "/blog/js-focus",
          active: false
        },
        {
          id: "019",
          emoji: "⚛️",
          title: "React is boosting my routine",
          readTime: "4 min read",
          link: "/blog/react-boost",
          active: false
        },
        {
          id: "020",
          emoji: "📱",
          title: "Starting in the native world with Ionic",
          readTime: "4 min read",
          link: "/blog/ionic-start",
          active: false
        },
        {
          id: "021",
          emoji: "💳",
          title: "Implementing credit card fill animation with CSS",
          readTime: "5 min read",
          link: "/blog/css-card-animation",
          active: false
        },
        {
          id: "022",
          emoji: "📝",
          title: "Why should I type my JS code?",
          readTime: "4 min read",
          link: "/blog/typed-js",
          active: false
        },
        {
          id: "023",
          emoji: "💅",
          title: "Personal notes on Styled-Components",
          readTime: "4 min read",
          link: "/blog/styled-components",
          active: false
        }
      ]
    },
    {
      year: 2018,
      posts: [
        {
          id: "024",
          emoji: "📊",
          title: "Elevating my state management in React with Redux",
          readTime: "5 min read",
          link: "/blog/redux-state",
          active: false
        },
        {
          id: "025",
          emoji: "🐹",
          title: "First contact with Golang",
          readTime: "4 min read",
          link: "/blog/golang-first",
          active: false
        },
        {
          id: "026",
          emoji: "🔄",
          title: "Playing with React Transition Group",
          readTime: "4 min read",
          link: "/blog/react-transition",
          active: false
        },
        {
          id: "027",
          emoji: "👥",
          title: "Tech community boosted me, but is it still for me?",
          readTime: "5 min read",
          link: "/blog/tech-community",
          active: false
        },
        {
          id: "028",
          emoji: "🎬",
          title: "I made an interactive movie to finish my Design graduation",
          readTime: "6 min read",
          link: "/blog/interactive-movie",
          active: false
        }
      ]
    },
    {
      year: 2019,
      posts: [
        {
          id: "029",
          emoji: "✨",
          title: "Just created a CSS animation library",
          readTime: "4 min read",
          link: "/blog/css-library",
          active: false
        },
        {
          id: "030",
          emoji: "✈️",
          title: "First trip abroad. Thanks, programming.",
          readTime: "5 min read",
          link: "/blog/first-trip",
          active: false
        },
        {
          id: "031",
          emoji: "⛏️",
          title: "Creating a Minecraft block using only CSS",
          readTime: "4 min read",
          link: "/blog/css-minecraft",
          active: false
        },
        {
          id: "032",
          emoji: "🏗️",
          title: "Layered architecture with Recompose",
          readTime: "5 min read",
          link: "/blog/recompose-layers",
          active: false
        },
        {
          id: "033",
          emoji: "🖼️",
          title: "Microfrontends with iFrames are weird",
          readTime: "4 min read",
          link: "/blog/iframe-microfrontends",
          active: false
        },
        {
          id: "034",
          emoji: "λ",
          title: "Starting with Functional Programming",
          readTime: "5 min read",
          link: "/blog/functional-start",
          active: false
        }
      ]
    },
    {
      year: 2020,
      posts: [
        {
          id: "035",
          emoji: "🎣",
          title: "Recompose out, Hooks in",
          readTime: "4 min read",
          link: "/blog/hooks-migration",
          active: false
        },
        {
          id: "036",
          emoji: "⚡",
          title: "Why Gatsby seems great",
          readTime: "4 min read",
          link: "/blog/gatsby-great",
          active: false
        },
        {
          id: "037",
          emoji: "📦",
          title: "Serving static frontend is so 2000s",
          readTime: "4 min read",
          link: "/blog/static-frontend",
          active: false
        },
        {
          id: "038",
          emoji: "🏗️",
          title: "JAMstack is perfect for digital sales",
          readTime: "5 min read",
          link: "/blog/jamstack-sales",
          active: false
        }
      ]
    },
    {
      year: 2021,
      posts: [
        {
          id: "039",
          emoji: "🚦",
          title: "Lighthouse magic recipe",
          readTime: "4 min read",
          link: "/blog/lighthouse-recipe",
          active: false
        },
        {
          id: "040",
          emoji: "🤔",
          title: "So specialized in digital sales + static apps. Is it healthy?",
          readTime: "5 min read",
          link: "/blog/specialization",
          active: false
        },
        {
          id: "041",
          emoji: "👥",
          title: "Younger devs underperforming and how to help",
          readTime: "5 min read",
          link: "/blog/helping-juniors",
          active: false
        },
        {
          id: "042",
          emoji: "⚡",
          title: "React Context to avoid Kamehameha code",
          readTime: "4 min read",
          link: "/blog/context-pattern",
          active: false
        }
      ]
    },
    {
      year: 2022,
      posts: [
        {
          id: "043",
          emoji: "🗣️",
          title: "How to learn English as a self-taught learner",
          readTime: "5 min read",
          link: "/blog/learning-english",
          active: false
        },
        {
          id: "044",
          emoji: "💚",
          title: "Playing with VueJS",
          readTime: "4 min read",
          link: "/blog/vue-playing",
          active: false
        },
        {
          id: "045",
          emoji: "🏭",
          title: "Frontend as a commodity?",
          readTime: "4 min read",
          link: "/blog/frontend-commodity",
          active: false
        },
        {
          id: "046",
          emoji: "👨‍💼",
          title: "Finding your leadership style",
          readTime: "5 min read",
          link: "/blog/leadership-style",
          active: false
        },
        {
          id: "047",
          emoji: "🤝",
          title: "This 1:1 strategy is working so far",
          readTime: "4 min read",
          link: "/blog/one-on-one",
          active: false
        }
      ]
    },
    {
      year: 2023,
      posts: [
        {
          id: "048",
          emoji: "☁️",
          title: "AWS stack for static frontend apps",
          readTime: "5 min read",
          link: "/blog/aws-static-frontend",
          active: false
        },
        {
          id: "049",
          emoji: "⚡",
          title: "GSAP Timeline vs ScrollMagic",
          readTime: "4 min read",
          link: "/blog/gsap-scrollmagic",
          active: false
        },
        {
          id: "050",
          emoji: "🎓",
          title: "I got an MBA",
          readTime: "5 min read",
          link: "/blog/mba-journey",
          active: false
        },
        {
          id: "051",
          emoji: "🦸‍♂️",
          title: "Avoiding the tech lead hero mindset and art of delegate",
          readTime: "6 min read",
          link: "/blog/tech-lead-delegation",
          active: false
        },
        {
          id: "052",
          emoji: "🏆",
          title: "Taking my shot at Awwwards",
          readTime: "4 min read",
          link: "/blog/awwwards-submission",
          active: false
        },
        {
          id: "053",
          emoji: "📋",
          title: "Is the job description for a tech lead role reliable?",
          readTime: "5 min read",
          link: "/blog/tech-lead-job-desc",
          active: false
        },
        {
          id: "054",
          emoji: "🔍",
          title: "The importance of context when coding",
          readTime: "4 min read",
          link: "/blog/coding-context",
          active: false
        },
        {
          id: "055",
          emoji: "🔒",
          title: "Personal notes on JavaScript Closures",
          readTime: "4 min read",
          link: "/blog/js-closures",
          active: false
        },
        {
          id: "056",
          emoji: "🎥",
          title: "Live coding and failures",
          readTime: "4 min read",
          link: "/blog/live-coding",
          active: false
        },
        {
          id: "057",
          emoji: "🚀",
          title: "Releasing my website",
          readTime: "3 min read",
          link: "/blog/website-release",
          active: false
        },
        {
          id: "058",
          emoji: "📊",
          title: "Technology governance was not important so far",
          readTime: "5 min read",
          link: "/blog/tech-governance",
          active: false
        },
        {
          id: "059",
          emoji: "🏢",
          title: "Agencies, startups and enterprises: Whats the main differences for a software engineer?",
          readTime: "6 min read",
          link: "/blog/company-types",
          active: false
        }
      ]
    },
    {
      year: 2024,
      posts: [
        {
          id: "060",
          emoji: "🔄",
          title: "Personal notes on Go Routines",
          readTime: "4 min read",
          link: "/blog/go-routines",
          active: false
        },
        {
          id: "061",
          emoji: "📡",
          title: "Pub/Sub architecture on the frontend",
          readTime: "5 min read",
          link: "/blog/frontend-pubsub",
          active: false
        },
        {
          id: "062",
          emoji: "📈",
          title: "Getting 1% better every day is a lie",
          readTime: "4 min read",
          link: "/blog/one-percent",
          active: false
        },
        {
          id: "063",
          emoji: "☁️",
          title: "AWS stack for Go APIs",
          readTime: "5 min read",
          link: "/blog/aws-go-apis",
          active: false
        },
        {
          id: "064",
          emoji: "🎯",
          title: "My career is mine and the downside of freedom",
          readTime: "5 min read",
          link: "/blog/career-freedom",
          active: false
        },
        {
          id: "065",
          emoji: "📨",
          title: "Personal notes on Kafka",
          readTime: "4 min read",
          link: "/blog/kafka-notes",
          active: false
        },
        {
          id: "066",
          emoji: "📊",
          title: "Using Datadog RUM to get unhappy users",
          readTime: "4 min read",
          link: "/blog/datadog-rum",
          active: false
        },
        {
          id: "067",
          emoji: "🌱",
          title: "Embrace inefficiency",
          readTime: "4 min read",
          link: "/blog/embrace-inefficiency",
          active: false
        },
        {
          id: "068",
          emoji: "🎭",
          title: "Playing with Framer Motion",
          readTime: "4 min read",
          link: "/blog/framer-motion",
          active: false
        },
        {
          id: "069",
          emoji: "🔄",
          title: "Gatsby out. Next in",
          readTime: "4 min read",
          link: "/blog/next-migration",
          active: false
        }
      ]
    },
    {
      year: 2025,
      posts: [
        {
          id: "070",
          emoji: "📝",
          title: "The power of daily logs and journeylog.app launch",
          readTime: "5 min read",
          link: "/blog/journeylog-launch",
          active: false
        },
        {
          id: "071",
          emoji: "🌱",
          title: "You're not ready for some ideas. Not yet",
          readTime: "4 min read",
          link: "/blog/ideas-timing",
          active: false
        },
        {
          id: "072",
          emoji: "📚",
          title: "Microlearning as entertainment",
          readTime: "4 min read",
          link: "/blog/microlearning",
          active: false
        },
        {
          id: "073",
          emoji: "🦁",
          title: "Your ego can help you grow",
          readTime: "4 min read",
          link: "/blog/ego-growth",
          active: false
        },
        {
          id: "074",
          emoji: "💧",
          title: "Caches are like water tanks",
          readTime: "4 min read",
          link: "/blog/cache-analogy",
          active: false
        },
        {
          id: "075",
          emoji: "⚡",
          title: "Supabase is great and charges you for it",
          readTime: "4 min read",
          link: "/blog/supabase-costs",
          active: false
        }
      ]
    }
  ];

  // Find the last active article instead of the first one
  const lastPublished = articles?.[0]?.posts?.filter(article => article.active)?.pop()?.id || articles?.[0]?.posts?.[0]?.id;

  React.useEffect(() => {
    setTimeout(() => {
      setIsOpened(false);
    }, 800);
  }, []);

  return (
    <>
      <Cursor />
      <div className="blog">
        <Loader isOpened={isOpened} duration={0.5} />
        <Header goBackToHome={true} />
        <main className="flex flex-col mb-10 max-w-full">
          <h3 className="about-title text-[50px] mb-6 font-black px-[5%] w-full mt-10 md:mt-0">
            Ideas. Opinions. Daydreams.
          </h3>
          <p className="paragraph md:w-[880px] mb-12 text-[20px] px-[5%] w-full">
            Written by me, for my future self. You will find here an honest (and
            sometimes wrong) view of front-end, tech career, algorithms,
            creative development, study strategies and technical leadership.
          </p>
          {articles?.slice().reverse().map((yearGroup) => (
            <React.Fragment key={yearGroup.year}>
              <p className="px-[5%] mb-8 text-[25px] text-[#555555] font-bold">
                {yearGroup.year}
              </p>
              <ul className="text-[18px] w-full">
                {yearGroup.posts?.slice().reverse().map((article) => (
                  <li
                    key={article.id}
                    id={article.id}
                    className="flex flex-col items-start group px-[5%] mb-7 pb-5 pt-2 w-full text-white hover:bg-[#fff]"
                  >
                    <a href={article.active ? article.link : `#${lastPublished}`}>
                      <div className="flex flex-row items-center mb-3 md:mb-0">
                        <p className="pl-0 md:pr-7 pr-5 md:pl-0 text-[50px] h-[65px]">
                          {article.emoji}
                        </p>
                        <p className="font-bold break-words text-[22px] md:text-[24px] group-hover:text-[#222]">
                          <span className="">{article.id}.</span> {article.title}
                        </p>
                      </div>
                      <div className="md:pl-20">
                        <p className="text-[#777777] mb-6 text-[18px] group-hover:text-[#222] max-w-[700px] block">
                          {article.active ? article.description : "Will be published soon..."}
                        </p>
                        <p className="text-[16px] group-hover:text-[#666] group-hover:hidden">
                          {article.active ? article.readTime : "Go to the last published ->"}
                        </p>
                        <p className="text-[16px] hidden group-hover:block group-hover:text-[#222] font-bold">
                          
                          {article.active ? "Read ->" : "Go to the last published ->"}
                        </p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </React.Fragment>
          ))}
        </main>
        <Note />
      </div>
    </>
  );
};

export default Blog;

export const Head = () => <title>Blog | cesarolvr</title>;
