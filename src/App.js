import React from "react";
import { GlobalState } from "./global/globalState";
import { RoutesComponent } from "./routes/Routes"
import { GlobalStyle } from "./style";

function App() {
  return (
    <>
      <GlobalStyle />

      <GlobalState>
        <RoutesComponent />
      </GlobalState>
    </>
  )
}

export default App;
