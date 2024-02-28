import Image from "next/image";

export default function Home() {
  return (
    <main className="grid min-h-lvh place-items-center">
      <section className="m-4 max-w-lg rounded-lg bg-slate-800 px-4 py-8 text-center">
        <Image
          src="/papa.jpeg"
          alt="Papa Tripathi"
          width={3024}
          height={4032}
          className="mx-auto max-w-xs"
        />
        <h1 className="mb-2 mt-4 inline-block bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-4xl font-bold text-transparent">
          Happy Birthday Papa
        </h1>
        <p>
          Here is to a very special person born on a very special day. May you
          always be healthy and happy. Lots of love
        </p>
        <p className="mt-1">Golu &amp; Jono ❤️</p>
      </section>
    </main>
  );
}
