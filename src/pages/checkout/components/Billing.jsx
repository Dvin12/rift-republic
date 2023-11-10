import FormAddress from "./FormAddress";

export default function Billing({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
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
    </section>
  );
}
