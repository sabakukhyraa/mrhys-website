export default function About() {
  return (
    <section className="container min-h-screen my-10">
      <div className="flex flex-col gap-8 p-8 md:bg-amber-500 rounded-3xl md:shadow-2xl">
        <div className="flex items-center justify-between p-4 shadow-2xl bg-amber-600 rounded-2xl md:shadow-none md:p-6">
          <h3 className="text-xl md:text-2xl">Biz Kimiz?</h3>
          <p>{'>>' /* users icon */}</p> 
        </div>

        <p className="px-2 text-base md:text-white text-amber-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
          accusantium, accusamus ipsa consequatur nostrum vel excepturi esse
          dolor hic voluptate iusto nihil fugit eligendi eaque. Quo eveniet
          provident dolore possimus dolorum nemo error qui autem, asperiores
          dicta repudiandae in sit facilis eum, eius cum similique nam ratione,
          esse sapiente ipsum! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Molestiae non recusandae aperiam asperiores odio
          labore deserunt veniam eum! Neque mollitia ad eius repellendus
          repudiandae, temporibus maxime consectetur dolore nam laudantium!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          soluta.
        </p>
      </div>
    </section>
  );
}
