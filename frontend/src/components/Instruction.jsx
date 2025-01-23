import React from "react";

//function
const InstructionsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Site Instructions</h1>
          <nav className="space-x-6">
            <a href="/" className="hover:text-gray-200">
              Home
            </a>
            <a href="/about" className="hover:text-gray-200">
              About
            </a>
            <a href="/contact" className="hover:text-gray-200">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-xl font-bold text-gray-700 mb-4">How to Use This Site</h2>
        <p className="text-gray-600 mb-6">
          Welcome to our site! Please follow the instructions below to navigate and make the most out of your experience:
        </p>

        {/* Instruction Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-700 mb-2">Step 1: Explore</h3>
            <p className="text-gray-600">
              Use the navigation bar above to browse through our site. Check out the Home, About, and Contact pages for more details.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-700 mb-2">Step 2: Interact</h3>
            <p className="text-gray-600">
              Engage with our content by clicking on links and buttons. Discover the features we offer!
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-700 mb-2">Step 3: Connect</h3>
            <p className="text-gray-600">
              Reach out to us using the Contact page for any inquiries or feedback. We’d love to hear from you!
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; 2025 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default InstructionsPage;
