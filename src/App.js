import './App.css'
import React from 'react'
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import SignInSignUp from './components/sign-in-sign-up/sign-in-sign-up.component';
import { auth } from './firebase/firebase.utils';
import { createUserProfileDocument } from './firebase/firebase.utils';
import { onSnapshot } from "firebase/firestore";
import { Contact } from './components/contact/contact.component';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
const SignOutPop=()=><div><h1>Sign out successfully</h1></div>
class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const {setCurrentUser}=this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
          onSnapshot(userRef, (doc)=>{
              setCurrentUser({
                id: doc.id,
                ...doc.data()
              })
          });

          console.log(this.state);
        };
        setCurrentUser(userAuth);
  }
    )
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  };
  
  render(){
    return (
      <div className="app">
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/sign-in' component={SignInSignUp}/>
          <Route path='/sign-out-pop' component={SignOutPop}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
      </div>
    );
}
}

const mapStateToProps=({user})=>({
  currentUser:user.currentUser
})
const mapDidpatchToProps=dispatch=>({
  setCurrentUser: user=>dispatch(setCurrentUser(user))
})
export default connect(
  mapStateToProps,
  mapDidpatchToProps
)(App)