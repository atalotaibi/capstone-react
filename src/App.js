import React, { Component } from "react";

import Qlist from "./components/Qlist";
import Search from "./components/Search";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        {/* <SearchBar /> */}
        <Qlist />
      </div>
    );
  }
}

export default App;
