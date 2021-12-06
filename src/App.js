import './App.css'
import React from 'react'
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import SignInSignUp from './components/sign-in-sign-up/sign-in-sign-up.component';
import { auth } from './firebase/firebase.utils';

const SignOutPop=()=><div><h1>Sign out successfully</h1></div>
class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser:''
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      
      this.setState({ currentUser: user });
      console.log("currentUser "+this.state.currentUser);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render(){
    return (
      <div className="app">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/sign-in' component={SignInSignUp}/>
          <Route path='/sign-out-pop' component={SignOutPop}/>
        </Switch>
      </div>
    );
}
}
export default App;