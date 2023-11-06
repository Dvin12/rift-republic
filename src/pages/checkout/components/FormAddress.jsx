import { getIn } from "formik";

export default function FormAddress({
  type,
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
}) {
  const formattedName = (field) => `${type}.${field}`;
  const formattedError = (field) =>
    Boolean(
      getIn(touched, formattedName(field)) &&
        getIn(errors, formattedName(field))
    );

  const formattedHelper = (field) =>
    getIn(touched, formattedName(field)) && getIn(errors, formattedName(field));

  return (
    <section>
      <div>
        <input
          type="text"
          placeholder="First Name"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.firstName}
          name={formattedName("firstName")}
          error={formattedError("firstName")}
          helperText={formattedHelper("firstName")}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Last Name"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.lastName}
          name={formattedName("lastName")}
          error={formattedError("lastName")}
          helperText={formattedHelper("lastName")}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Country"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.country}
          name={formattedName("country")}
          error={formattedError("country")}
          helperText={formattedHelper("country")}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Street"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.street1}
          name={formattedName("street1")}
          error={formattedError("street1")}
          helperText={formattedHelper("street1")}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Second Street (optional)"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.street2}
          name={formattedName("street2")}
          error={formattedError("street2")}
          helperText={formattedHelper("street2")}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="City"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.city}
          name={formattedName("city")}
          error={formattedError("city")}
          helperText={formattedHelper("city")}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="State"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.state}
          name={formattedName("state")}
          error={formattedError("state")}
          helperText={formattedHelper("state")}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Zip Code"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.zipCode}
          name={formattedName("zipCode")}
          error={formattedError("zipCode")}
          helperText={formattedHelper("zipCode")}
        />
      </div>
    </section>
  );
}
