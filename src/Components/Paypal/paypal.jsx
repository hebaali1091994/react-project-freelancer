import React, { useState } from 'react'
import { PayPalButton } from "react-paypal-button-v2";
export default function Paypal() {
  const [state, setstate] = useState(0)
  return (

    <div>
      <div className="container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="" />
        <input type="number" value={state} onChange={e => { setstate(e.target.value) }} />

        <PayPalButton

          options={{
            clientId: "AbT1_mgcwnlpz_sqRm6u7W3nXN_Xikce50VB8_E1VPL6-mHUT0sD7RFx2ar0BvAMPTco1iHdgUKYaQx5",
            currency: "USD"

          }}
          amount={state}
          // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
          onSuccess={(details, data) => {
            alert("Transaction completed by " + details.payer.name.given_name);

            // OPTIONAL: Call your server to save the transaction
            return fetch("/paypal-transaction-complete", {
              method: "post",
              body: JSON.stringify({
                orderID: data.orderID
              })
            });
          }}
        />
      </div>
    </div>
  )
}
