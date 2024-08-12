import {
    BrowserRouter ,
    Routes,

    Route,

  } from "react-router-dom";
import { HomePage,Navbar,ProductPage,SearchResult,Checkout, ProductBadge } from './Components'

const App = () => {
  return (
   
   
   
    <Routes>
      
        <Route exact path='/' element={<HomePage/>}/>
        <Route exact path='/search' element={<SearchResult/>}/>
        <Route exact path='/product/:id' element={<ProductPage/>}/>
        <Route exact path='/checkout' element={<Checkout/>}/>
    </Routes>
    

  )
}

export default App
