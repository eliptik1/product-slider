import { Carousel } from './components/carousel';
import { Header } from './components/header';
import { NavBar } from './components/navbar';
import { ProductButton } from './components/productButton';

function App() {
  return (
    <div style={{ maxWidth: '1620px' }} className='main px-4 sm:px-8 flex flex-col items-center justify-start mx-auto'>
      <NavBar/>
      <Header/>
      <Carousel/>
      <ProductButton/>
    </div>
  );
}

export default App;