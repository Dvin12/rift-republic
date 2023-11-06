import { Formik } from "formik";
import * as yup from "yup";
import Billing from "./components/Billing";
import { useState } from "react";
import { useSelector } from "react-redux";
import Payment from "./components/Payment";

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

  shippingAddress: {
    isSameAddress: true,
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
    shippingAddress: yup.object().shape({
      isSameAddress: yup.boolean(),
      firstName: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      lastName: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      country: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      street1: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      street2: yup.string(),
      city: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      state: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      zipCode: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
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

  async function handleFormSubmit(values, actions) {
    setActiveStep(activeStep + 1);

    if (activeStep === 0 && values.shippingAddress.isSameAddress) {
      actions.setFieldValue("shippingAddress", {
        ...values.billingAddress,
        isSameAddress: true,
      });
    }

    if (activeStep === 1) {
      makePayment(values);
    }
    actions.setTouched({});
  }

  return (
    <section className="px-6 py-24">
      <h2 className="text-2xl font-medium text-center text-lightGrey">
        Checkout
      </h2>
      <div className="flex items-center justify-between gap-6 my-4 text-lightGrey">
        <span>Billing</span>
        <div className="w-full h-[1px] bg-lightGrey"></div>
        <span className=" text-opacity-40 text-lightGrey">Payment</span>
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

            <div>
              {activeStep === 1 && (
                <button onClick={() => setActiveStep(activeStep - 1)}>
                  Back
                </button>
              )}

              <button
                type="submit"
                onClick={() => setActiveStep(activeStep - 1)}
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
