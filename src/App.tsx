import React from "react";

import GlobalStyle from "./styles/global";
import SignUp from "./pages/SignUp";
// import SigIn from "./pages/SignIn";

const App: React.FC = () => (
  <>
    <SignUp />
    <GlobalStyle />
  </>
);

export default App;
