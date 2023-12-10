import { Carousel } from './components/carousel';
import { Header } from './components/header';
import { NavBar } from './components/navbar';
import { ProductButton } from './components/productButton';
import { ThemeButton } from './components/themeButton';

function App() {
  return (
    <div  className='light-bg dark:dark-bg  main min-h-[100vh] px-4 sm:px-8 flex flex-col items-center justify-start mx-auto'>
      <NavBar/>
      <Header/>
      <Carousel/>
      <ProductButton/>
      <ThemeButton/>
    </div>
  );
}

export default App;