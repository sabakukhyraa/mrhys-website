import BaseSlider from "../components/BaseSlider";

export default function Home() {
  return (
    <div>
      <BaseSlider />
      <section
        className="container min-h-screen w-full my-10 md:my-20 space-y-6 md:space-y-20 md:!px-0"
      >
        <h1>MRHYA.com Lorem, ipsum dolor.</h1>

        <div
          className="flex flex-col items-center gap-6 p-10 shadow-lg md:items-start rounded-3xl bg-amber-500"
        >
          <h2 className="text-4xl font-bold text-white">Giysilerimize göz at!</h2>
          <p className="text-center text-amber-50 md:text-start">
            Biz tasarladık. Biz ürettik. Siz giyeceksiniz!
          </p>
          <button
            className="px-4 py-2 rounded-lg md:self-end bg-amber-700 hover:scale-105 animation"
          >
            Göz at! 🡪
          </button>
        </div>
      </section>
    </div>
  )
}