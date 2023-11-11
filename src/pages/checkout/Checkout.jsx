import { useState } from "react";
import { useSelector } from "react-redux";
import { Formik } from "formik";
import { loadStripe } from "@stripe/stripe-js";

import * as yup from "yup";
import Billing from "./components/Billing";
import Payment from "./components/Payment";

const stripePromise = loadStripe(
  `pk_test_51N6bYMC3vJT26DRM3nL56LTLuFAW7pOW4JOwjfeOS83kh2eKlbIUs9FmhDq1mEZmNJzHHPSXwTGDKL7poYjPLWbG00gSkJynlx`
);

const initialValues = {
  billingAddress: {
    firstName: "",
    lastName: "",
    country: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zipCode: "",
  },

  email: "",
  phoneNumber: "",
};

const checkoutSchema = [
  yup.object().shape({
    billingAddress: yup.object().shape({
      firstName: yup.string().required("required"),
      lastName: yup.string().required("required"),
      country: yup.string().required("required"),
      street1: yup.string().required("required"),
      street2: yup.string(),
      city: yup.string().required("required"),
      state: yup.string().required("required"),
      zipCode: yup.string().required("required"),
    }),
  }),
  yup.object().shape({
    email: yup.string().required("required"),
    phoneNumber: yup.string().required("required"),
  }),
];

export default function Checkout() {
  const [activeStep, setActiveStep] = useState(0);

  const cart = useSelector((state) => state.cart.cart);

  const handleFormSubmit = async (values, actions) => {
    setActiveStep(activeStep + 1);

    if (activeStep === 1) {
      makePayment(values);
    }
    actions.setTouched({});
  };

  async function makePayment(values) {
    const stripe = await stripePromise;
    const requestBody = {
      userName: [
        values.billingAddress.firstName,
        values.billingAddress.lastName,
      ].join(" "),
      email: values.email,
      products: cart.map(({ id, count }) => ({ id, count })),
    };
    console.log(requestBody);
    const response = await fetch("http://localhost:1337/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    console.log(response);
    const session = await response.json();
    await stripe.redirectToCheckout({
      sessionId: session.id,
    });
  }

  return (
    <section className="px-6 py-24 xl:px-36 xl:py-40">
      <h2 className="text-2xl font-medium text-center text-lightGrey">
        Checkout
      </h2>
      <div className="flex items-center justify-center gap-3 my-8 text-lightGrey xl:my-12">
        <span
          className={`px-3 py-2 font-medium   ${
            activeStep === 0
              ? "bg-lightGrey text-darkBlack  "
              : " text-opacity-40 border-[1px]"
          } duration-200`}
        >
          Billing
        </span>

        <span
          className={`  font-medium  px-3 py-2 ${
            activeStep === 0
              ? "text-opacity-40 border-[1px]"
              : " text-opacity-100  bg-lightGrey text-darkBlack"
          } duration-200`}
        >
          Payment
        </span>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={checkoutSchema[activeStep]}
        onSubmit={handleFormSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleSubmit,
          handleChange,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
            {activeStep === 0 && (
              <Billing
                values={values}
                errors={errors}
                touched={touched}
                handleBlur={handleBlur}
                handleChange={handleChange}
                setFieldValue={setFieldValue}
              />
            )}

            {activeStep === 1 && (
              <Payment
                values={values}
                errors={errors}
                touched={touched}
                handleBlur={handleBlur}
                handleChange={handleChange}
              />
            )}

            <div
              className={`flex items-center ${
                activeStep === 0 ? "justify-center" : " justify-between"
              }  w-full gap-2 mt-8 xl:gap-10`}
            >
              {activeStep === 1 && (
                <button
                  onClick={() => setActiveStep(activeStep - 1)}
                  className=" border-lightGrey border-[1px] px-4 py-2 text-lightGrey xl:w-full xl:py-3 xl:text-lg "
                >
                  Back
                </button>
              )}

              <button
                type="submit"
                className=" border-lightGrey border-[1px] px-4 py-2 text-lightGrey xl:w-full xl:py-3 xl:text-lg "
              >
                {activeStep === 0 ? "Next" : "Place Order"}
              </button>
            </div>
          </form>
        )}
      </Formik>
    </section>
  );
}
