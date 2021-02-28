import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import MyCheckoutForm from './MyCheckoutForm'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IPVU9JUoCLQAplkrUCuZmj9xgGnalPldN02D7Od1cioXD5svpuwFEuyydGZTNEhUXUuEoAW62zRBLtgjlSTk1e100CEI2qZNR');

const StripeSetup = () => {
  return (
    <Elements stripe={stripePromise}>
      <MyCheckoutForm />
    </Elements>
  );
};

export default StripeSetup