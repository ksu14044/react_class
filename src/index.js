import ReactDOM from 'react-dom/client';

//import Hello2, { printConsole, printConsole2 } from './study/Hello2/Hello2';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RouterDom from './components/RouterDom/RouterDom';
import App from './App';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';


const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();

root.render(
    <RecoilRoot>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </QueryClientProvider>
    </RecoilRoot>
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




