import { PaymentElement } from "@stripe/react-stripe-js";
import { Button } from "../../../../components/ui/button";
import Link from "next/link";

const CheckoutForm = () => {
  return (
    <form>
      <div className="px-32 md:mx-[250px]  mt-12 text-center bg-gray-300 rounded-3xl  ">
        <h1 className="font-extrabold m-2 pt-2 text-gray-500 font-mono">
          Checkout
        </h1>
        <PaymentElement />
        <button className="bg-primary p-2 text-white rounded-2xl w-1/2 my-14 ">
          Submit
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
