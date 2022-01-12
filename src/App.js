import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import Catalog from "./Catalog";
import Collection from "./Collection/Collection";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import Header from "./Header/Header";

import { auth, createUserProfileDocument } from "./Auth/Firebase.Utils";
import { setCurrentUser } from "./redux/Actions/user.action";

const Cart = () => (
  <div>
    <h1>Cart</h1>
  </div>
);

class App extends React.Component {
  constructor() {
    super();

    this.state = { currentUser: null };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    try {
      const { setCurrentUser } = this.props;

      this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
        if (userAuth) {
          //          console.log(userAuth);
          const userRef = await createUserProfileDocument(userAuth);
          //          console.log(userRef);

          userRef.onSnapshot((snapShot) => {
            const user = snapShot.data();
            console.log(user);
            setCurrentUser(
              user.displayName
                ? user.displayName
                : "User"
            );
          });
        }
        const user = userAuth? userAuth.displayName: null;
        setCurrentUser(user);
      });
    } catch (error) {
      console.error(error);
    }
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  logout() {
    auth
      .signOut()
      .then(() => {
        console.log("Sign-out successful");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Catalog} />
          <Route exact path="/shop" component={Collection} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignIn />
            }
          />
          <Route
            exact
            path="/signout"
            render={() => {
              this.logout();
              return (<SignIn />);
            }}
          />
          <Route
            exact
            path="/signup"
            render={() =>
              this.state.currentUser ? <Redirect to="/" /> : <SignUp />
            }
          />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
