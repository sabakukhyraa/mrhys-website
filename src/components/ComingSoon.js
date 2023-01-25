export default function comingSoon() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen gap-12 bg-amber-500 md:gap-20">
      <img
        className="absolute top-0 w-64 h-auto md:w-96 animation hover:scale-105"
        src="/cover.png"
        alt="MRHYA Logo"
      />
      <h1 className="mb-5 text-4xl font-bold md:text-7xl text-amber-50">
        Coming Soon!
      </h1>
    </section>
  );
}
