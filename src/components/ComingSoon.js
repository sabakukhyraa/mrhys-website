export default function comingSoon() {
    return(
        <section className="bg-amber-500 min-h-screen flex flex-col justify-center items-center gap-12 md:gap-20">
            <img
            className="w-64 h-auto md:w-96 animation hover:scale-105" src="/cover.png" alt="MRHYA Logo"
            />

            <h1>
                <li className="list-none text-4xl md:text-7xl font-bold text-amber-50">Coming Soon!</li>
            </h1>
        </section>
    )
}