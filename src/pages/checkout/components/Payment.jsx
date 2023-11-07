export default function Payment({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
}) {
  return (
    <section>
      <h3 className="my-4 text-lg text-center text-lightGrey">Contact Info</h3>
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-1 ">
          <label className="text-sm text-lightGrey">Email</label>
          <input
            className="w-full p-2 rounded"
            name="email"
            type="text"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.email}
            error={!!touched.email && !!errors.email}
            helperText={touched.email && errors.email}
          />
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
            error={!!touched.phoneNumber && !!errors.phoneNumber}
            helperText={touched.phoneNumber && errors.phoneNumber}
          />
        </div>
      </section>
    </section>
  );
}
