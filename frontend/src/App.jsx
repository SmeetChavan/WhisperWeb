import { useState } from "react";
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';

import "./App.css";

import AuthPage from "./pages/AuthPage";
import ChatsPage from "./pages/ChatsPage";

function App() {

  const [user, setUser] = useState(undefined);


  return(
    <Router>
      <Routes>

        <Route path="/" element={<AuthPage onAuth={(user) => setUser(user)} />} />
        <Route path="/chat" element={<ChatsPage user={user} />} />

      </Routes>
    </Router>
  );
}

export default App;