import logo from "../assets/logo.png"

function Home() {
  return (
    <div className="p-6 text-center">

      {/* Logo */}
      <img
        src={logo}
        alt="Golden Crumbs Cake Shop"
        className="mx-auto w-40 rounded-lg shadow-lg"
      />

      {/* Heading */}
      <h1 className="mt-6 text-4xl font-bold text-[#0033a0]">
        Golden Crumbs Cake Shop
      </h1>

      {/* Welcome Message */}
      <p className="mt-4 text-lg text-gray-700">
        Welcome to the Admin Portal
      </p>

      {/* Contact Details */}
      <div className="mt-8 bg-[#0033a0] text-white p-6 rounded-xl max-w-3xl mx-auto shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">
          Contact Details
        </h2>

        <p className="mb-3">
          Address: Kimathi Street, Nairobi, Kenya
        </p>

        <p className="mb-3">
          Phone: +254 712 345 678
        </p>

        <p className="mb-3">
          Email: info@goldencrumbs.com
        </p>

        <p>
          Opening Hours: Mon - Sat, 8:00 AM - 7:00 PM
        </p>
      </div>

    </div>
  )
}

export default Home