export default function Payment({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
}) {
  return (
    <section>
      <h3 className="my-4 text-lg text-center text-lightGrey xl:text-left xl:text-2xl">
        Contact Info
      </h3>
      <section className="flex flex-col gap-4 xl:py-6">
        <div className="flex flex-col gap-1 ">
          <label className="text-sm text-lightGrey">Email</label>
          <input
            className="w-full p-2 rounded"
            name="email"
            type="text"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.email}
          />

          {!!touched.email && !!errors.email && (
            <div className="text-sm text-[#900]">
              {!!touched.email && !!errors.email}
            </div>
          )}

          {touched.email && errors.email && (
            <div className="text-sm text-[#900]">
              {touched.email && errors.email}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-lightGrey">Phone Number</label>
          <input
            className="w-full p-2 rounded"
            name="phoneNumber"
            type="text"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.phoneNumber}
          />

          {!!touched.phoneNumber && !!errors.phoneNumber && (
            <div className="text-sm text-[#900]">
              {!!touched.phoneNumber && !!errors.phoneNumber}
            </div>
          )}

          {touched.phoneNumber && errors.phoneNumber && (
            <div className="text-sm text-[#900]">
              {touched.phoneNumber && errors.phoneNumber}
            </div>
          )}
        </div>
      </section>
    </section>
  );
}
