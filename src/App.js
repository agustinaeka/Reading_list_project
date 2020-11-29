const { default: AddBook } = require("./components/AddBook");
const { default: BookList } = require("./components/BookList");
const { default: Navbar } = require("./components/Navbar");
const { default: BookContextProvider } = require("./context/BookContext");

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <AddBook/>
      </BookContextProvider>
    </div>
  );
}

export default App;
