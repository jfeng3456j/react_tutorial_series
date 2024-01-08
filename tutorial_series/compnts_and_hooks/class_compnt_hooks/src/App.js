import './style/App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import ComponentDidMountExample from './ComponentLifeCycleMethods/ComponentDidMountExample';
import ComponentDidUpdateExample from './ComponentLifeCycleMethods/ComponentDidUpdateExample';
import ComponentWillMountExample from './ComponentLifeCycleMethods/ComponentWillMountExample';
import ShouldComponentUpdateExample from './ComponentLifeCycleMethods/ShouldComponentUpdateExample';

function App() {
  return (
    <Router>
        <div className='App'>
          <ul>
            <li>
              <Link to='/componentdidmount'>ComponentDidMount</Link>
            </li>

            <li>
              <Link to='/componentdidupdate'>ComponentDidUpdate</Link>
            </li>

            <li>
              <Link to='/componentwillmount'>ComponentWillMount</Link>
            </li>

            <li>
              <Link to='/shouldcomponentupdate'>ShouldComponentUpdate</Link>
            </li>
          </ul>
        </div>
          <Routes>
            <Route  exact path="/componentdidmount" element= {<ComponentDidMountExample/>} />
            <Route  exact path="/componentdidupdate" element= {<ComponentDidUpdateExample/>}  />
            <Route  exact path="/componentwillmount" element= {<ComponentWillMountExample/>}  />
            <Route  exact path="/shouldcomponentupdate" element= {<ShouldComponentUpdateExample/>} />
          </Routes>


    </Router>

  );
}

export default App;
