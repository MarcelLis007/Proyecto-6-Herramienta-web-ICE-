import React from 'react'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navbar */}
      <nav className="bg-amber-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Café Delicioso</h1>
          <div className="space-x-4">
            <a href="#" className="text-white hover:text-amber-200">Inicio</a>
            <a href="#" className="text-white hover:text-amber-200">Menú</a>
            <a href="#" className="text-white hover:text-amber-200">Contacto</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto py-12 px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-amber-900 mb-4">Bienvenido a Café Delicioso</h2>
          <p className="text-lg text-amber-700 mb-8">El mejor café de la ciudad, hecho con amor</p>
          <button className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors">
            Ver Menú
          </button>
        </div>

        {/* Featured Products */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Product Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="h-40 bg-amber-200 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold text-amber-900">Café Americano</h3>
            <p className="text-amber-700">Nuestro clásico café americano</p>
            <p className="text-amber-900 font-bold mt-2">$2.50</p>
          </div>

          {/* Product Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="h-40 bg-amber-200 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold text-amber-900">Cappuccino</h3>
            <p className="text-amber-700">Espresso con espuma de leche</p>
            <p className="text-amber-900 font-bold mt-2">$3.50</p>
          </div>

          {/* Product Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="h-40 bg-amber-200 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold text-amber-900">Latte</h3>
            <p className="text-amber-700">Suave y cremoso</p>
            <p className="text-amber-900 font-bold mt-2">$3.00</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App