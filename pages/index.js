import Head from "next/head";
import Image from "next/image";

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
            <span className="mx-4 text-xl font-medium">Blog</span>
            <span className="mx-4 text-xl font-medium">Skills</span>
            <span className="mx-4 text-xl font-medium">Contact</span>
          </div>
        </div>
      </nav>
      <section className="flex justify-center items-center py-40">
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
      <footer className="py-12 bg-black text-white">
      <h2 className="text-xl text-center mb-14">Get in Touch</h2>
        <div className="flex justify-center items-center max-w-screen-xl mx-auto px-8">
          <div>
            <span className="mx-4 font-medium">Github</span>
            <span className="mx-4 font-medium">Linkedin</span>
            <span className="mx-4 font-medium">Mail</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
