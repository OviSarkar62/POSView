import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import ItemPage from "./pages/itemPage";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/item' element={<ItemPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
