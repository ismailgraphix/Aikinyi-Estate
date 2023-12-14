

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Featured Properties */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Featured Properties</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Property cards */}
            <div className="bg-white shadow-md p-4 rounded-md">
              <h3 className="text-xl font-semibold mb-2">Property Title</h3>
              <p className="text-gray-600 mb-4">
                Description of the property...
              </p>
              {/* Other details like images, price, etc. */}
            </div>
            {/* Repeat property cards for featured listings */}
          </div>
        </section>

        {/* About Us */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-600">
            Brief description about your estate agency or website...
          </p>
          {/* Other sections like services, testimonials, etc. */}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; Your Estate {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}
