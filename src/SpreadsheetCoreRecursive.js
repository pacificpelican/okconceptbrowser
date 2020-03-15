//  okconcept0 copyright 2017-2019
//  SpreadsheetCoreRecursive.js
//  via mlBench & danmckeown.info
import React, { Component } from "react";
import Okviewer from "okconceptviewer";

class SpreadsheetCoreRecursive extends Component {
  render(props) {

    return (
      <Okviewer spreadsheetdata={this.props.spreadsheetdata} />
    );
  }
}

export default SpreadsheetCoreRecursive;
