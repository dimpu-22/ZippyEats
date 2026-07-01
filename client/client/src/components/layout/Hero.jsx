const Hero = () => {
  return (
    <section className="bg-orange-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div>
          <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold">
            🍔 India's No.1 Food Delivery
          </span>

          <h1 className="text-6xl font-bold mt-8 leading-tight">
            Delicious Food
            <br />
            Delivered
            <span className="text-orange-500">
              {" "}Fast
            </span>
          </h1>

          <p className="text-gray-600 text-xl mt-6">
            Fresh meals from your favourite restaurants delivered to your
            doorstep in minutes.
          </p>

          <div className="mt-10 flex gap-5">
            <button className="bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 duration-300">
              Order Now
            </button>

            <button className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-xl font-semibold hover:bg-orange-500 hover:text-white duration-300">
              Explore Menu
            </button>
          </div>
        </div>

        {/* Right Side */}

        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800"
            alt="Burger"
            className="rounded-3xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;