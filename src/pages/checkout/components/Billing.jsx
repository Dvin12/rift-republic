import FormAddress from "./FormAddress";

export default function Billing({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
}) {
  return (
    <section className=" xl:border-[1px] xl:py-4 xl:px-6 border-lightGrey rounded-sm relative ">
      <h3 className="pb-8 text-lg text-center bg-black xl:absolute xl:-top-4 text-lightGrey xl:text-left xl:text-2xl xl:pb-0 xl:px-4">
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
