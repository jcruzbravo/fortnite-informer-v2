import {BrowserRouter as Router, Routes, Route} from 'react-router'
import './App.css'
import Home from "./container/Home.tsx";
import Layout from "./container/Layout.tsx";
import News from "./container/News.tsx";
import Shop from "./container/Shop.tsx";
import Challenge from "./container/Challenge.tsx";
import SearchAccount from "./container/SearchAccount.tsx";

function App() {

  return (
      <Router>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route path="/" index element={<Home />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/challenges" element={<Challenge />} />
                  <Route path="/search-account" element={<SearchAccount />} />
              </Route>
          </Routes>
      </Router>
  )
}

export default App
