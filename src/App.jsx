import './App.css'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className='App'>
      <div className='main-container'>
        <h1>This say our alums about FreecodeCamp</h1>
        <Testimonials
          imgSrc='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
          name='Emma B.'
          country='USA'
          work='Software Engineer'
          company='Spotify'
          testimonial='Aprende los fundamentos de React en este curso desde cero. Crearás cuatro proyectos paso a paso y aprenderás los fundamentos para comenzar a crear aplicaciones web interactivas con React. 
          '
        />
        <Testimonials
          imgSrc='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
          name='Shawn G.'
          country='Singapore'
          work='Software Engineer'
          company='Amazon'
          testimonial='Aprende los fundamentos de React en este curso desde cero. Crearás cuatro proyectos paso a paso y aprenderás los fundamentos para comenzar a crear aplicaciones web interactivas con React. 
          '
        />
        <Testimonials
          imgSrc='https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
          name='Lucy B.'
          country='Brazil'
          work='Software Engineer'
          company='Facebook'
          testimonial='Aprende los fundamentos de React en este curso desde cero. Crearás cuatro proyectos paso a paso y aprenderás los fundamentos para comenzar a crear aplicaciones web interactivas con React. 
          '
        />
      </div>
    </div>
  )
}

export default App
