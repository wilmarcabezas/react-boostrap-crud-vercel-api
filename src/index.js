import ReactDOM  from 'react-dom/client';
import Estudiantes from './components/Estudiantes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
     <h2>React API Vercel</h2>
     <hr/>
     <Estudiantes/>
    </>
);