import { createRoot } from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = createRoot(document.querySelector("#root"))
document.querySelector("#root").className='bg-warning-subtle'
root.render(<App/>)