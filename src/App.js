import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import Catalog from "./Catalog";
import Shop from "./Collection/Shop/Shop";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import Header from "./Header/Header";
import CheckoutPage from "./Checkout/Checkout";

import { auth, createUserProfileDocument } from "./Auth/Firebase.Utils";
import { setCurrentUser } from "./redux/User/user.action";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/User/user.selector";
import { emptyCart } from "./redux/Cart/cart.actions";

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
    emptyCart();
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
          <Route path="/shop" component={Shop} />
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
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  emptyCart: () => dispatch(emptyCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
