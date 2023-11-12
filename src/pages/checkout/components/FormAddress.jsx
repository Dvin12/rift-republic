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
    <section className="flex flex-col gap-4 xl:py-6 xl:grid xl:grid-cols-4">
      <div className="flex flex-col gap-1 xl:col-span-2">
        <label className="text-sm text-lightGrey">First Name</label>
        <input
          className="w-full p-2 rounded"
          type="text"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.firstName}
          name={formattedName("firstName")}
        />
        {formattedError("firstName") && (
          <div className="text-sm text-[#900]">
            {formattedError("firstName")}
          </div>
        )}

        {formattedHelper("firstName") && (
          <div className="text-sm text-[#900]">
            {formattedHelper("firstName")}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1 xl:col-span-2">
        <label className="text-sm text-lightGrey">Last Name</label>
        <input
          className="w-full p-2 rounded"
          type="text"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.lastName}
          name={formattedName("lastName")}
        />
        {formattedError("lastName") && (
          <div className="text-sm text-[#900]">
            {formattedError("lastName")}
          </div>
        )}

        {formattedHelper("lastName") && (
          <div className="text-sm text-[#900]">
            {formattedHelper("lastName")}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-1 xl:col-span-4">
        <label className="text-sm text-lightGrey">Country</label>
        <input
          className="w-full p-2 rounded"
          type="text"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.country}
          name={formattedName("country")}
        />
        {formattedError("country") && (
          <div className="text-sm text-[#900]">{formattedError("country")}</div>
        )}

        {formattedHelper("country") && (
          <div className="text-sm text-[#900]">
            {formattedHelper("country")}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1 xl:col-span-2">
        <label className="text-sm text-lightGrey">Street</label>
        <input
          className="w-full p-2 rounded"
          type="text"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.street1}
          name={formattedName("street1")}
        />

        {formattedError("street1") && (
          <div className="text-sm text-[#900]">{formattedError("street1")}</div>
        )}

        {formattedHelper("street1") && (
          <div className="text-sm text-[#900]">
            {formattedHelper("street1")}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-1 xl:col-span-2">
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
        />

        {formattedError("street2") && (
          <div className="text-sm text-[#900]">{formattedError("street2")}</div>
        )}

        {formattedHelper("street2") && (
          <div className="text-sm text-[#900]">
            {formattedHelper("street2")}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-1 xl:col-span-2">
        <label className="text-sm text-lightGrey">City</label>
        <input
          className="w-full p-2 rounded"
          type="text"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.city}
          name={formattedName("city")}
        />
        {formattedError("city") && (
          <div className="text-sm text-[#900]">{formattedError("city")}</div>
        )}

        {formattedHelper("city") && (
          <div className="text-sm text-[#900]">{formattedHelper("city")}</div>
        )}
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
        />

        {formattedError("state") && (
          <div className="text-sm text-[#900]">{formattedError("state")}</div>
        )}

        {formattedHelper("state") && (
          <div className="text-sm text-[#900]">{formattedHelper("state")}</div>
        )}
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
        />
        {formattedError("zipCode") && (
          <div className="text-sm text-[#900]">{formattedError("zipCode")}</div>
        )}

        {formattedHelper("zipCode") && (
          <div className="text-sm text-[#900]">
            {formattedHelper("zipCode")}
          </div>
        )}
      </div>
    </section>
  );
}
