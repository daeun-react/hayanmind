import React from "react";

import GlobalStyle from "./styles/GlobalStyle";
import InfinityScroll from "./hooks/InfinityScroll";
import List from "./components/List";

function App() {
  return (
    <>
      <GlobalStyle />
      <InfinityScroll>
        <List />
      </InfinityScroll>
    </>
  );
}

export default App;
