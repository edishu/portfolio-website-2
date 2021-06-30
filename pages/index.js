import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Udayan Maurya</title>
        <meta name="description" content="Udayan Maurya - Frontend Developer" />
        <link rel="icon" href="favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@700&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <nav className="py-8 sticky top-0 z-50">
        <div className="flex justify-between items-center container mx-auto">
          <div className="pl-4">
            <h1 className="text-5xl font-bold font-kumbh">udayanmaurya</h1>
          </div>
          <div className="pr-4">
            <span className="mx-4 text-xl font-medium">Blog</span>
            <span className="mx-4 text-xl font-medium">Skills</span>
            <span className="mx-4 text-xl font-medium">Contact</span>
          </div>
        </div>
      </nav>
      <section>
        <div className="flex justify-start items-center container mx-auto py-10">
          <div className="ml-6 lg:ml-16">
            <div>
              <Image
                src="/udayan.jpg"
                width={261}
                height={350}
                alt="Udayan Maurya"
                className="rounded-full drop-shadow-2xl"
              />
            </div>
          </div>
          <div className="ml-12 lg:ml-24 text-center">
            <h1 className="mb-4 text-4xl lg:text-6xl font-bold font-kumbh">
              Front End Developer
            </h1>
            <p className="lg:text-2xl">
              Helping organizations create <strong>expriences</strong> their
              users <strong>love!</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
