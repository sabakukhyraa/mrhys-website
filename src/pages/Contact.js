import Icons from "../components/icons/Icons";

export default function Contact() {
  return (
    <section className="container min-h-screen my-10">
      <div className="flex flex-col gap-8 p-8 md:bg-amber-500 rounded-3xl md:shadow-2xl">
        <div className="flex items-center justify-between p-4 shadow-2xl bg-amber-600 rounded-2xl md:shadow-none md:p-6">
          <h3 className="text-xl md:text-2xl">iletişim Bilgilerimiz</h3>
          <Icons iconName={"contact"} />
        </div>
        
        <div className="flex flex-col text-xl">
          <a className="block md:text-white text-amber-600" href="tel:+90 888 45 99 00">
            İletişim : +90 888 45 99 00
          </a>
          <a className="block md:text-white text-amber-600" href="tel:+90 888 45 99 00">
            Ofis İletişim : +90 888 45 99 00
          </a>
          <br></br>

          <div className="flex justify-between">
            {/* sosyal medya ikonları:
            <Link>
              <img></img>
            </Link> */}
          </div>

          <p className="p-4 text-base text-center shadow-2xl md:text-lg md:text-start md:text-white bg-amber-600 rounded-2xl md:shadow-none">
            Ürünlerimiz hakkında detaylı bilgi için lütfen iletişime geçiniz!
          </p>
        </div>
      </div>
    </section>
  );
}
