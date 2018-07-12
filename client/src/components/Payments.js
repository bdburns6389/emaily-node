import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";
import * as keys from "../../../config/prod";
class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Emaily"
        description="$5 for 5 email credits"
        amount={500}
        shippingAddress={true} //Find way to add this to database
        billingAddress={true}
        token={token => this.props.handleToken(token)}
        stripeKey={keys.reactStripePublishableKey}
      >
        <button className="btn" style={{ background: "cyan", color: "black" }}>
          Add Credits
        </button>
      </StripeCheckout>
    );
  }
}

export default connect(
  null,
  actions
)(Payments);
