
import Heading from './component/Heading'
import Testimonial from './component/Testimonial'
import './App.css'

function App() {


  return (
    <div className='flex flex-col w-[100vw]  justify-center items-center bg-gray-200'>
      <div className='text-center'>
      <Heading></Heading>
      </div>
      
      <Testimonial></Testimonial>
    </div>


  )
}

export default App
