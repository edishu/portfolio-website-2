import { useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const router = useRouter();
  const blogRef = useRef(null);
  const skillRef = useRef(null);
  const contatRef = useRef(null);
  useEffect(() => {
    if (router.asPath.match(/#blog/)) {
      window.scrollTo({
        top: blogRef.current.offsetTop - 75,
        behavior: "smooth"
      });
    } else if (router.asPath.match(/#skill/)) {
      window.scrollTo({
        top: skillRef.current.offsetTop - 75,
        behavior: "smooth"
      });
    } else if (router.asPath.match(/#contact/)) {
      window.scrollTo({
        top: contatRef.current.offsetTop - 75,
        behavior: "smooth"
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }, [router]);

  return (
    <div className="min-h-screen min-w-max">
      <Head>
        <title>Udayan Maurya</title>
        <meta name="description" content="Udayan Maurya - Frontend Developer" />
        <link rel="icon" href="favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@700&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <nav className="pt-8 pb-4 sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto px-8">
          <div>
            <Link href={{ hash: "" }}>
              <a className="text-5xl font-bold font-kumbh outline-none focus:ring ring-black ring-offset-4">
                udayanmaurya
              </a>
            </Link>
          </div>
          <div>
            <Link href={{ hash: "blog" }}>
              <a className="mx-4 text-xl font-medium outline-none focus:ring ring-black ring-offset-4 hover:underline">
                Blogs
              </a>
            </Link>
            <Link href={{ hash: "skill" }}>
              <a className="mx-4 text-xl font-medium outline-none focus:ring ring-black ring-offset-4 hover:underline">
                Skills
              </a>
            </Link>
            <Link href={{ hash: "contact" }}>
              <a className="mx-4 text-xl font-medium outline-none focus:ring ring-black ring-offset-4 hover:underline">
                Contact
              </a>
            </Link>
          </div>
        </div>
      </nav>
      <section className="flex justify-center items-center pt-40 pb-32">
        <div>
          <div className="text-center">
            <h1 className="mb-4 text-5xl lg:text-6xl font-bold font-kumbh">
              Full-stack Developer
            </h1>
            <p className="text-xl lg:text-2xl">
              Helping organizations create <strong>applications</strong> their
              users <strong>love!</strong>
            </p>
          </div>
        </div>
      </section>
      <section ref={blogRef} className="max-w-screen-xl mx-auto py-10">
        <h2 className="text-2xl text-center underline mb-10">Blogs</h2>
        <div className="flex flex-col items-center">
          <Blog
            imgSrc="/abstract.jpg"
            title="Frontend Abstractions"
            subTitle="Major Frontend Development Abstractions, which help in writing bug free and maintainable code."
            linkTo="https://dev.to/udayanmaurya/frontend-abstractions-4pca"
          />
          <Blog
            imgSrc="/boxing.jpg"
            title="TypeScript: type vs interface"
            subTitle={
              <>
                Find conclusive answer to type vs interface conundrum. Spoiler:
                <em>It's called 'TypeScript' not 'InterfaceScript' </em>😉
              </>
            }
            linkTo="https://dev.to/udayanmaurya/type-vs-interface-45o7"
          />
          <Blog
            imgSrc="/eventRedux.jpg"
            title="Event Driven Architecture for Redux"
            subTitle="Improve maintainability and scalability of Redux stores by deriving actions based on application events."
            linkTo="https://dev.to/udayanmaurya/event-driven-architecture-for-redux-53ak"
          />
        </div>
      </section>
      <section ref={skillRef} className="max-w-screen-xl mx-auto py-10">
        <h2 className="text-2xl text-center underline">Skills</h2>
        <div className="flex justify-around items-center py-10">
          <div className="border border-black border-solid rounded-xl py-8 px-12">
            <div className="bg-react-logo bg-center bg-contain bg-no-repeat">
              <h3 className="text-xl font-semibold text-center py-4 bg-white bg-opacity-40">
                Core
              </h3>
            </div>
            <ul>
              <li className="my-2 text-center">React/React-Hooks</li>
              <li className="my-2 text-center">Redux/Redux-Toolkit</li>
              <li className="my-2 text-center">Javascript (ES6+)</li>
              <li className="my-2 text-center">HTML5 / CSS3 / SASS</li>
            </ul>
          </div>
          <div className="border border-black border-solid rounded-xl py-8 px-11">
            <div className="bg-node-logo bg-center bg-contain bg-no-repeat bg-opacity-100">
              <h3 className="text-xl font-semibold text-center py-4 bg-white bg-opacity-40">
                Value Add
              </h3>
            </div>
            <ul>
              <li className="my-2 text-center">NodeJS/ExpressJS</li>
              <li className="my-2 text-center">SQL - DB Design</li>
              <li className="my-2 text-center">Progressive Web Apps</li>
              <li className="my-2 text-center">Test Driven Development</li>
            </ul>
          </div>
          <div className="border border-black border-solid rounded-xl py-8 px-11">
            <div className="bg-git-logo bg-center bg-contain bg-no-repeat bg-opacity-100">
              <h3 className="text-xl font-semibold text-center py-4 bg-white bg-opacity-40">
                Productivity
              </h3>
            </div>
            <ul>
              <li className="my-2 text-center">Git / CI / CD</li>
              <li className="my-2 text-center">Docker</li>
              <li className="my-2 text-center">AWS/Firebase/Azure</li>
              <li className="my-2 text-center">Functional Programming</li>
            </ul>
          </div>
        </div>
      </section>
      <footer ref={contatRef} className="pt-32 pb-20 bg-black text-white">
        <h2 className="text-2xl text-center mb-10">Get in Touch</h2>
        <div className="flex justify-center items-center max-w-screen-xl mx-auto px-8">
          <a
            href="https://www.linkedin.com/in/udayanmaurya"
            target="_blank"
            rel="noreferrer noopener"
            className="mx-8 w-8 hover:text-linkedin outline-none focus:ring-2 ring-linkedin ring-offset-8 ring-offset-black"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="mailto:mauryaudayan@gmail.com"
            className="mx-8 w-8 hover:text-gmail outline-none focus:ring-2 ring-gmail ring-offset-8 ring-offset-black"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a
            href="https://github.com/edishu"
            target="_blank"
            rel="noreferrer noopener"
            className="mx-8 w-8 rounded-full hover:text-github outline-none focus:ring-2 ring-github ring-offset-8 ring-offset-black"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </footer>
    </div>
  );
}

const Blog = ({ imgSrc, title, subTitle, linkTo }) => {
  return (
    <a
      href={linkTo}
      target="_blank"
      className="w-9/12 px-10 py-8 mb-12 
      border border-black border-solid rounded-xl  outline-none
      cursor-pointer hover:shadow-2xl focus:ring-1 ring-offset-8 ring-black active:bg-gray-200 transition-shadow duration-500
      group flex"
    >
      <div>
        <Image
          src={imgSrc}
          width={300}
          height={200}
          layout="fixed"
          className="rounded-xl"
        />
      </div>
      <div className="p-10">
        <h2
          className="text-3xl font-bold font-kumbh mb-4 outline-none 
          focus:ring ring-black ring-offset-1 group-hover:underline group-focus:underline"
        >
          {title}
        </h2>
        <p className="text-gray-600 text-lg mb-2">{subTitle}</p>
      </div>
    </a>
  );
};

const Skill = ({ title, logo, skillList }) => {
  return (
    <div className="border border-black border-solid rounded-xl py-8 px-12">
      <div className={`${logo} bg-center bg-contain bg-no-repeat`}>
        <h3 className="text-xl font-semibold text-center py-4 bg-white bg-opacity-40">
          {title}
        </h3>
      </div>
      <ul>
        {skillList.map((el, idx) => (
          <li key={idx} className="my-2 text-center">
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};
