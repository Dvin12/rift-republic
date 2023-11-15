import FormAddress from "./FormAddress";

export default function Billing({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
}) {
  return (
    <section className=" border-[1px] xl:py-4 xl:px-6 border-lightGrey rounded-sm relative">
      <h3 className="absolute px-4 text-lg text-center bg-black -top-4 S text-lightGrey xl:text-left xl:text-2xl ">
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
