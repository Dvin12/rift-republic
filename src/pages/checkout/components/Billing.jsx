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
      <h3 className="my-4 text-lg text-center text-lightGrey">
        Billing Information
      </h3>
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
      <div className="my-8">
        <label className="flex items-center gap-2 text-lightGrey">
          <input
            type="checkbox"
            defaultChecked
            value={values.shippingAddress.isSameAddress}
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
          <h3 className="my-4 text-lg text-center text-lightGrey">
            Shipping Information
          </h3>
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
