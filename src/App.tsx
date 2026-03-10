import Header from './components/Header'
import CartItem from './pages/CartItem'
import Login from './pages/Login'
import MenuPage from './pages/Menu'
import Register from './pages/Register'

function App() {

  return (
    <main className=''>
    <Header userName={'Matheus'} />
    <CartItem />
    
    </main>
  )
}

export default App
