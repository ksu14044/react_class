import ReactDOM from 'react-dom/client';

//import Hello2, { printConsole, printConsole2 } from './study/Hello2/Hello2';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RouterDom from './components/RouterDom/RouterDom';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
//root.render(<App />);
//root.render(<App3 />);
//root.render(<App4 />);
//root.render(<App7 />);
// root.render(<App8 />);
// root.render(<App9 />);
// root.render(<App10 />);
// root.render(<App11 />);
// root.render(<App13 />);
// root.render(<App14 />);




