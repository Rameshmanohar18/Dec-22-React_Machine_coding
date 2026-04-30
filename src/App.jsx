import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NavBar from "./Components/Navbar";

// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Contact from "./Pages/Contact";

import Dec22Task from "./Components/Dec22Task";
import Counter from "./Components/Counter";
import PasswordToggle from "./Components/PasswordToggle";
import DisableSubmit from "./Components/DisableSubmit";
import CharacterCount from "./Components/CharacterCount";
import Users from "./Components/Users";
import ThemeToggle from "./Components/ThemeToggle";
import ControlledForm from "./Components/ControlledForm";
import Todo from "./Components/Todo";
import SearchUsers from "./Components/SearchUsers";
import ReactPlayground from "./Components/ReactPlayground";
import ReactMasterPlayground from "./Components/Reactmaster";
import ParentComponent from "./Components/ParentComponent";
import NestedCircles from "./Components/NestedCircles";
import DisplayUserInput from "./Components/DisplayUserInput";
import DisplayDropDown from "./Components/DisplayDropDown";
import DisplayRadiobox from "./Components/DisplayRadiobox";
import DisplaySearchtextbox from "./Components/DisplaySearchtextbox";
import DisplayCounterUseState from "./Components/DisplayCounterUseState";
import DisplayCounterUseReducer from "./Components/DisplayCounterUseReducer";
import DisplayIncDecWithUseReducer from "./Components/DisplayIncDecWithUseReducer";
import BindArraytodropdown from "./Components/BindArraytodropdown";
import ControlledUncontrolled from "./Components/ControlledUncontrolled";
import Debounce from "./Components/Debounce";
import DecemberuseEffect from "./Components/DecemberuseEffect";
import ApiPolling from "./Components/APIPolling";
import Progressbutton from "./Components/ProgressButton";
import SkeltonComponent from "./Components/SkeltonComponent";
import DataFetcher from "./Components/DataFetcher";
import FileUpload from "./Components/File_upload";
import FormHandling from "./Components/FormHandling";

function App() {
  return (
    <>
      <h1 className="text-dark">React Machine coding rounds</h1>  

      <Header />

      <nav style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
        {/* <a href="/about" target="_blank" rel="noopener noreferrer">About</a>
        <a href="/contact" target="_blank" rel="noopener noreferrer">Contact</a>
        <a href="/Dec22Task" target="_blank" rel="noopener noreferrer">Dec22Task</a> */}
        <a href="/Counter" target="_blank" rel="noopener noreferrer">Counter</a>

        <a href="/password" target="_blank" rel="noopener noreferrer">Password</a>
        <a href="/disable" target="_blank" rel="noopener noreferrer">Disable</a>
        <a href="/count" target="_blank" rel="noopener noreferrer">Characters</a>
        <a href="/users" target="_blank" rel="noopener noreferrer">Users</a>
        <a href="/theme" target="_blank" rel="noopener noreferrer">Theme</a>
        <a href="/form" target="_blank" rel="noopener noreferrer">Form</a>
        <a href="/todo" target="_blank" rel="noopener noreferrer">Todo</a>
        <a href="/search" target="_blank" rel="noopener noreferrer">Search</a>
        <a href="/reactplayground" target="_blank" rel="noopener noreferrer">Playground</a>
        <a href="/reactmaster" target="_blank" rel="noopener noreferrer">React Master</a>
        <a href="/parentcomponent" target="_blank" rel="noopener noreferrer">Parent</a>
        <a href="/nestedcircles" target="_blank" rel="noopener noreferrer">Nested Circles</a>
        <a href="/displaydropdown" target="_blank" rel="noopener noreferrer">Dropdown</a>
        <a href="/displayUserInput" target="_blank" rel="noopener noreferrer">User Input</a>
        <a href="/displayradiobox" target="_blank" rel="noopener noreferrer">Radio</a>
        <a href="/DisplaySearchtextbox" target="_blank" rel="noopener noreferrer">Search Box</a>
        <a href="/DisplayCounterUseState" target="_blank" rel="noopener noreferrer">Counter State</a>
        <a href="/DisplayCounterUseReducer" target="_blank" rel="noopener noreferrer">Counter Reducer</a>
        <a href="/DisplayIncDecWithUseReducer" target="_blank" rel="noopener noreferrer">Inc Dec</a>
        <a href="/Bindarraytodropdown" target="_blank" rel="noopener noreferrer">Bind Dropdown</a>
        <a href="/Controlled" target="_blank" rel="noopener noreferrer">Controlled</a>
        <a href="/debounce" target="_blank" rel="noopener noreferrer">Debounce</a>
        <a href="/DecemberuseEffect" target="_blank" rel="noopener noreferrer">useEffect</a>
        <a href="/APIPolling" target="_blank" rel="noopener noreferrer">API Polling</a>
        <a href="/DataFetcher" target="_blank" rel="noopener noreferrer">Data Fetcher</a>
        <a href="/FileUpload" target="_blank" rel="noopener noreferrer">File Upload</a>
        <a href="/FormHandling" target="_blank" rel="noopener noreferrer">Form Handling</a>
        <a href="/Navbar" target="_blank" rel="noopener noreferrer">NavBar</a>
      </nav>

      {/* ✅ SINGLE ROUTES BLOCK */}
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Dec22Task" element={<Dec22Task />} /> */}
        <Route path="/Counter" element={<Counter />} />

        <Route path="/password" element={<PasswordToggle />} />
        <Route path="/disable" element={<DisableSubmit />} />
        <Route path="/count" element={<CharacterCount />} />
        <Route path="/users" element={<Users />} />
        <Route path="/theme" element={<ThemeToggle />} />
        <Route path="/form" element={<ControlledForm />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/search" element={<SearchUsers />} />
        <Route path="/reactplayground" element={<ReactPlayground />} />
        <Route path="/reactmaster" element={<ReactMasterPlayground />} />
        <Route path="/parentcomponent" element={<ParentComponent />} />
        <Route path="/nestedcircles" element={<NestedCircles />} />
        <Route path="/displayUserInput" element={<DisplayUserInput />} />
        <Route path="/displaydropdown" element={<DisplayDropDown />} />
        <Route path="/displayradiobox" element={<DisplayRadiobox />} />
        <Route path="/DisplaySearchtextbox" element={<DisplaySearchtextbox />} />
        <Route path="/DisplayCounterUseState" element={<DisplayCounterUseState />} />
        <Route path="/DisplayCounterUseReducer" element={<DisplayCounterUseReducer />} />
        <Route path="/DisplayIncDecWithUseReducer" element={<DisplayIncDecWithUseReducer />} />
        <Route path="/Bindarraytodropdown" element={<BindArraytodropdown />} />
        <Route path="/Controlled" element={<ControlledUncontrolled />} />
        <Route path="/debounce" element={<Debounce />} />
        <Route path="/DecemberuseEffect" element={<DecemberuseEffect />} />
        <Route path="/APIPolling" element={<ApiPolling />} />
        <Route path="/DataFetcher" element={<DataFetcher />} />
        <Route path="/FileUpload" element={<FileUpload />} />
        <Route path="/FormHandling" element={<FormHandling />} />
        <Route path="/Navbar" element={<NavBar />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
