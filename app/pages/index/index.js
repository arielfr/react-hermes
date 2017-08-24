/**
 * Created by arey on 4/28/17.
 */
const React = require('react');
const {Component} = require('react');
const Layout = require('../../components/Layout/Layout').default;
const Number = require('./components/Number/Number').default;

class App extends Component {
  constructor(props) {
    super(props);

    // Set initial state from props
    this.state = this.props.initialState;
  }

  componentDidMount() {
    console.log('cargo...');
  }

  render() {
    return (
      <Layout>
        <div>
          <p>Contenido</p>
          <Number/>
        </div>
      </Layout>
    )
  }
}

export default App;
