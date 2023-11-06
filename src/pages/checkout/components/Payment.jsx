export default function Payment({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
}) {
  return (
    <section>
      <h3>Contact Info</h3>
      <section>
        <div>
          <input
            name="email"
            type="text"
            placeholder="Email"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.email}
            error={!!touched.email && !!errors.email}
            helperText={touched.email && errors.email}
          />
        </div>

        <div>
          <input
            name="phoneNumber"
            type="text"
            placeholder="Phone Number"
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
