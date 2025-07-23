import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// import AllTheBooks from './components/AllBooks';
// import SingleBook from "./components/SingleBook";
import fantasy from "./data/fantasy.json"; 
import BookList from "./components/BookList"; 

function App() {
  return (
    <>
      <NavbarComponent tema="dark" />
      <Welcome />
      <BookList books={fantasy} />
      {/* <AllTheBooks /> */}
      {/* <SingleBook book={fantasy[0]} /> */}
      <MyFooter />
    </>
  );
}
export default App;
