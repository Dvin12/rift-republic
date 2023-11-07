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
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label className="text-sm text-lightGrey">First Name</label>
        <input
          className="w-full p-2 rounded"
          type="text"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.firstName}
          name={formattedName("firstName")}
          error={formattedError("firstName")}
          helperText={formattedHelper("firstName")}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-lightGrey">Last Name</label>
        <input
          className="w-full p-2 rounded"
          type="text"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.lastName}
          name={formattedName("lastName")}
          error={formattedError("lastName")}
          helperText={formattedHelper("lastName")}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm text-lightGrey">Country</label>
        <input
          className="w-full p-2 rounded"
          type="text"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.country}
          name={formattedName("country")}
          error={formattedError("country")}
          helperText={formattedHelper("country")}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-lightGrey">Street</label>
        <input
          className="w-full p-2 rounded"
          type="text"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.street1}
          name={formattedName("street1")}
          error={formattedError("street1")}
          helperText={formattedHelper("street1")}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm text-lightGrey">
          Second Street (optional)
        </label>
        <input
          className="w-full p-2 rounded"
          type="text"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.street2}
          name={formattedName("street2")}
          error={formattedError("street2")}
          helperText={formattedHelper("street2")}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm text-lightGrey">City</label>
        <input
          className="w-full p-2 rounded"
          type="text"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.city}
          name={formattedName("city")}
          error={formattedError("city")}
          helperText={formattedHelper("city")}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm text-lightGrey">State</label>
        <input
          className="w-full p-2 rounded"
          type="text"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.state}
          name={formattedName("state")}
          error={formattedError("state")}
          helperText={formattedHelper("state")}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm text-lightGrey">Zip Code</label>
        <input
          className="w-full p-2 rounded"
          type="text"
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
