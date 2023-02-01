import { useState } from "react";

export default function Products() {
  const [isDropdown, setIsDropdown] = useState(false);

  return (
    <section className="container min-h-screen my-10 text-amber-700">
      <div className="grid items-start grid-cols-3 gap-14">

        <div className="flex col-span-3 gap-6 md:col-start-3">
          <input
            className="w-full p-3 border-2 border-amber-700 rounded-xl outlinr-none"
            type="text" placeholder="Search a Product..."
          />
          <button
            className="search-button"
            >SEARCH
          </button>
        </div>

        <ul className="flex-col hidden col-span-1 gap-4 text-base md:flex md:text-xl">
          <li className="category" onClick={() => setIsDropdown(prev => !prev)}>
            CLOTHES
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className={`${
                isDropdown && "sidebar-arrow-animation"
              } inline-block fill-amber-50 animation`}>
              <path d="M11.8079 14.7695L8.09346 10.3121C7.65924 9.79109 8.02976 9 8.70803 9L15.292 9C15.9702 9 16.3408 9.79108 15.9065 10.3121L12.1921 14.7695C12.0921 14.8895 11.9079 14.8895 11.8079 14.7695Z"/>
            </svg>

            <ul className={`${
                isDropdown ? "active-mobile-dropdown" : " !opacity-0 !h-0"
              } mt-2 pl-2 space-y-3 pointer-events-none animation border-t-[1px] !transition-all`}>
              <li className="category-item">JEANS</li>
              <li className="category-item">T-SHIRTS</li>
              <li className="category-item">SKIRTS</li>
              <li className="category-item">DRESSES</li>
              <li className="category-item">JACKETS</li>
              <li className="category-item">SWEATSHIRTS</li>
            </ul>
          </li>

          <li className="category">PRICE</li>
        </ul>

        <div className="grid grid-cols-1 col-span-3 gap-8 md:col-span-2 md:grid-cols-3">
          <div className="product-item">1</div>
          <div className="product-item">2</div>
          <div className="product-item">3</div>
          <div className="product-item">4</div>
          <div className="product-item">5</div>
          <div className="product-item">6</div>
          <div className="product-item">7</div>
          <div className="product-item">8</div>
          <div className="product-item">9</div>
        </div>

      </div>
    </section>
  )
}