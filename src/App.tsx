import Navbar from './components/Navbar'
function App() {
  return (
    <div className='flex flex-col min-h-screen bg-slate-950 text-gray-200'>
      <div className="container mx-auto">
      <Navbar />
      <div className='flex items-center h-[80vh] p-4'>
        <div className="w-1/2">

      <h1>Hello, world!</h1>
      <p className="text-sm">My name is Matt Sweet and I&apos;m a seasoned FullStack 
      developer with professional experience on a wide array of projects. I prefer working 
      in the frontend, but I am not afraid of the backend. My most recent role was a Frontend
      Developer at Digital Freight Network.</p>
      <button className="accent hover:text-emerald-300 font-bold py-4 text-xs">Download my resume</button>
        </div>
      </div>
    </div>

      </div>
  )
}

export default App
