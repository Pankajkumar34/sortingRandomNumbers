import logo from './logo.svg';
import './App.css';
import { Bubble } from './bubble';
import GetName from './GetName';

function App() {
  return (
    <>
    <div className='bg-slate-500 h-screen'>
    <div className='max-w-[1140px] mx-auto'>
    <Bubble/>
    <GetName/>
    </div>
    </div>
    </>
  );
}

export default App;
