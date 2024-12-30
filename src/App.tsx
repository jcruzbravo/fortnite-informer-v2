import {BrowserRouter as Router, Routes, Route} from 'react-router'
import './App.css'
import Home from "./container/Home";
import Layout from "./container/Layout.tsx";
import News from "./container/News.tsx";

function App() {

  return (
      <Router>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route path="/" index element={<Home />} />
                  <Route path="/news" element={<News />} />
              </Route>
          </Routes>
      </Router>
  )
}

export default App
