import './App.css';
import React,{Component} from 'react';
import Books from './containers/Books';
import 'bootstrap/dist/css/bootstrap.css';
import CreateBook from './containers/CreateBook';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';


class App extends Component{
  constructor(props){
    super(props);

    this.state={
      pathname:'',

    };
    this.notifyPathname = this.notifyPathname.bind(this);


  }
  notifyPathname(pathname){
    this.setState({
      pathname:pathname,

    });
  }
  render(){
    return(
      <Router>
         <div className='App'>
           <Nav notifyPathname={this.notifyPathname}
           pathname={this.state.pathname} />
           <Switch>
             <Route path="/" exact component={Books}/>
             <Route path="/createBook" exact component={CreateBook}/>
             <Route path="/edit/:id" exact component={CreateBook}/>
           </Switch>
            
          </div>

      </Router>
   )
    }
}
export default App;
