import React, { createContext, Component } from "react";

export const AirbnbContext = createContext();

class AirbnbContextProvider extends Component {
  state = {
    showSearch: false,
  };

  render() {
    return (
      <AirbnbContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </AirbnbContext.Provider>
    );
  }
}

export default AirbnbContextProvider;
