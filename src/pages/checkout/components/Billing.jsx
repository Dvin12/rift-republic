import FormAddress from "./FormAddress";

export default function Billing({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  setFieldValue,
}) {
  return (
    <section>
      <h3>Billing Information</h3>
      <div>
        <FormAddress
          type="billingAddress"
          values={values.billingAddress}
          errors={errors}
          touched={touched}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            defaultChecked
            values={values.shippingAddress.isSameAddress}
            onChange={() =>
              setFieldValue(
                "shippingAddress.isSameAddress",
                !values.shippingAddress.isSameAddress
              )
            }
          />
          Same for Shipping Address
        </label>
      </div>
      {!values.shippingAddress.isSameAddress && (
        <div>
          <h3>Shipping Information</h3>
          <div>
            <FormAddress
              type="shippingAddress"
              values={values.shippingAddress}
              errors={errors}
              touched={touched}
              handleBlur={handleBlur}
              handleChange={handleChange}
            />
          </div>
        </div>
      )}
    </section>
  );
}
