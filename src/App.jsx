import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComponent from './components/NavbarComponent';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllBooks';

function App() {
return(
  <>
    <NavbarComponent tema="dark"/>
    <Welcome />
    <AllTheBooks />
    <MyFooter />

  </>
  );
}
export default App
