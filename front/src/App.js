// import StripeSetup from './StripeSetup'
import LandingPage from './Pages/LandingPage/LandingPage'
import Pricing from './Pages/Pricing/Pricing'
import Signup from './Pages/Forms/Signup'
import Signin from './Pages/Forms/Signin'
import {Route,BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    	<Router>
    		<Route path='/' exact component={LandingPage}/>
    		<Route path='/signin' exact component={Signin}/>
    		<Route path='/signup' exact component={Signup}/>
			<Route path='/pricing' exact component={Pricing}/>    	
		</Router>
    </div>
  );
}

export default App;
