import { useState } from "react";
import { useSelector } from "react-redux";
import { Formik } from "formik";
import { loadStripe } from "@stripe/stripe-js";

import * as yup from "yup";
import Billing from "./components/Billing";
import Payment from "./components/Payment";
import { useNavigate } from "react-router-dom";

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
  cardNumber: "",
  cardName: "",
  cardExpiration: "",
  cardCvc: "",
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
    cardNumber: yup
      .string()
      .required("required")
      .matches(/^\d{16}$/, "Must be a 16-digit card number"),
    cardName: yup.string().required("required"),
    cardExpiration: yup
      .string()
      .required("required")
      .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Must be in MM/YY format"),
    cardCvc: yup
      .string()
      .required("required")
      .matches(/^\d{3,4}$/, "Must be a 3 or 4-digit CVC"),
  }),
];

export default function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  const handleFormSubmit = (values, actions) => {
    setActiveStep(activeStep + 1);

    if (activeStep === 1) {
      makePayment();
    }
    actions.setTouched({});
  };

  function makePayment() {
    navigate("/checkout/success");
  }

  return (
    <section className="px-6 py-24 2xl:px-44 xl:px-24 xl:py-40">
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
              }  w-full gap-6 mt-8 xl:gap-10`}
            >
              {activeStep === 1 && (
                <button
                  onClick={() => setActiveStep(activeStep - 1)}
                  className=" border-lightGrey border-[1px] px-4 text-lightGrey w-1/2 py-3 xl:text-lg "
                >
                  Back
                </button>
              )}

              <button
                type="submit"
                className=" border-lightGrey border-[1px] px-4  text-lightGrey w-full py-3 xl:text-lg "
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
