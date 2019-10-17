import React, {Component} from 'react';
import {render} from 'react-dom';

//  import Example from '../../src';
import Objectbrowser from '../../src'

class Demo extends Component {
  render() {
    return <React.Fragment>
      <Objectbrowser />
    </React.Fragment>
  }
}

render(<Demo/>, document.querySelector('#demo'))
