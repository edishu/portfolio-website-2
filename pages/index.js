import Head from "next/head";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
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
      <nav className="pt-8 pb-4 sticky top-0 z-50 bg-white">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto px-8">
          <div>
            <h1 className="text-5xl font-bold font-kumbh">udayanmaurya</h1>
          </div>
          <div>
            <span className="mx-4 text-xl font-medium">Blogs</span>
            <span className="mx-4 text-xl font-medium">Skills</span>
            <span className="mx-4 text-xl font-medium">Contact</span>
          </div>
        </div>
      </nav>
      <section className="flex justify-center items-center pt-40 pb-32">
        <div>
          <div className="text-center">
            <h1 className="mb-4 text-5xl lg:text-6xl font-bold font-kumbh">
              Front End Developer
            </h1>
            <p className="text-xl lg:text-2xl">
              Helping organizations create <strong>expriences</strong> their
              users <strong>love!</strong>
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto py-10">
        <h2 className="text-2xl text-center underline mb-10">Blogs</h2>
        <div className="flex flex-col items-center max-h-96 overflow-auto">
          <Blog
            imgSrc="/abstract.jpg"
            title="Frontend Abstractions"
            subTitle="Abstract thinking has helped us solve big problems with ease. Learn more about major abstraction in the world of Frontend Web Development."
            linkTo="https://dev.to/udayanmaurya/frontend-abstractions-4pca"
          />
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto py-10">
        <h2 className="text-2xl text-center underline">Skills</h2>
        <div className="flex justify-around items-center py-10">
          <div className="border border-black border-solid rounded-xl py-8 px-12 shadow-md">
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
          <div className="border border-black border-solid rounded-xl py-8 px-11 shadow-md">
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
          <div className="border border-black border-solid rounded-xl py-8 px-11 shadow-md">
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
      <footer className="pt-8 pb-12 bg-black text-white">
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
    <div
      className="border border-black border-solid rounded-xl
      w-9/12 px-10 py-8 mb-12 shadow-lg hover:shadow-2xl
      flex"
    >
      <Image src={imgSrc} width={300} height={200} className="rounded-xl" />
      <div className="p-10">
        <a
          href={linkTo}
          target="_blank"
          className="text-3xl font-bold font-kumbh mb-4 outline-none 
          focus:ring ring-black ring-offset-1 hover:underline"
        >
          {title}
        </a>
        <p className="text-gray-600 text-lg mb-2">{subTitle}</p>
        <a
          href={linkTo}
          target="_blank"
          className="mb-4 font-bold outline-none underline text-blue-700
          focus:ring ring-blue-700 ring-offset-1 hover:text-indigo-700"
        >
          Read
        </a>
      </div>
    </div>
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
