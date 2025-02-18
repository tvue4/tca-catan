import './App.css'
import {
  HashRouter
  , Routes
  , Route
} from 'react-router';
import { Home } from './Home'


const App = (
) => {

  console.log(
    "App Component Func Called ! ! !"
  );
  return (
    <>
      <div
        className='p-4'
      >
        <HashRouter>
          <Routes>
            <Route 
              path='/'
              element={
                <Home />
              }
            />
          </Routes>
        </HashRouter>
      </div>
    </>
  )
}

export default App
