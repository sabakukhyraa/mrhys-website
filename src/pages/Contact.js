export default function Contact() {
  return (
    <section className="container min-h-screen my-10">
      <div className="flex flex-col gap-10">
        <div className="flex items-center justify-between p-4 shadow-2xl bg-amber-600 rounded-2xl md:p-6">
          <h3 className="text-xl md:text-2xl">İletişim Bilgilerimiz</h3>
          <i className="fa-solid fa-angles-down md:text-3xl"></i>
        </div>

        <div className="flex flex-col items-center justify-around gap-20 md:flex-row md:gap-0 text-amber-600">
          <div className="text-xl">
            <a
              className="block font-medium hover:text-amber-800 animation"
              href="tel:+90 657 77 11 00"
            >
              İletişim: +90 657 77 11 00
            </a>
            <a
              className="block font-medium hover:text-amber-800 animation"
              href="tel:+90 657 77 11 00"
            >
              Ofis İletişim: +90 324 55 77 80
            </a>
            <p className="p-4 text-lg text-center text-white rounded-2xl bg-amber-500 md:text-xl">
              Ürünlerimiz hakkında detaylı bilgi için lütfen iletişime geçiniz!
            </p>
          </div>

          <div className="flex items-center gap-10 cursor-pointer">
            {/* Social Media icons */}
          </div>
        </div>
      </div>
    </section>
  );
}
