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
    <section className="flex flex-col gap-8 xl:py-10 xl:grid xl:grid-cols-4">
      <div className="relative flex flex-col gap-1 xl:col-span-2 ">
        <label className="absolute px-2 text-sm text-white bg-black left-2 -top-3 ">
          First Name
        </label>
        <input
          className="w-full px-4 py-4 bg-black rounded border-[1px] border-darkGrey text-white outline-none focus:border-white duration-200   "
          type="text"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.firstName}
          name={formattedName("firstName")}
        />
        {formattedError("firstName") && (
          <div className="text-sm text-lightYellow">
            {formattedError("firstName")}
          </div>
        )}

        {formattedHelper("firstName") && (
          <div className="text-sm text-lightYellow">
            {formattedHelper("firstName")}
          </div>
        )}
      </div>
      <div className="relative flex flex-col gap-1 xl:col-span-2">
        <label className="absolute px-2 text-sm text-white bg-black left-2 -top-3 ">
          Last Name
        </label>
        <input
          className="w-full px-4 py-4 bg-black rounded border-[1px] border-darkGrey text-white outline-none focus:border-white duration-200   "
          type="text"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.lastName}
          name={formattedName("lastName")}
        />
        {formattedError("lastName") && (
          <div className="text-sm text-lightYellow">
            {formattedError("lastName")}
          </div>
        )}

        {formattedHelper("lastName") && (
          <div className="text-sm text-lightYellow">
            {formattedHelper("lastName")}
          </div>
        )}
      </div>

      <div className="relative flex flex-col gap-1 xl:col-span-4">
        <label className="absolute px-2 text-sm text-white bg-black left-2 -top-3 ">
          Country
        </label>
        <input
          className="w-full px-4 py-4 bg-black rounded border-[1px] border-darkGrey text-white outline-none focus:border-white duration-200   "
          type="text"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.country}
          name={formattedName("country")}
        />
        {formattedError("country") && (
          <div className="text-sm text-lightYellow">
            {formattedError("country")}
          </div>
        )}

        {formattedHelper("country") && (
          <div className="text-sm text-lightYellow">
            {formattedHelper("country")}
          </div>
        )}
      </div>
      <div className="relative flex flex-col gap-1 xl:col-span-2">
        <label className="absolute px-2 text-sm text-white bg-black left-2 -top-3 ">
          Street
        </label>
        <input
          className="w-full px-4 py-4 bg-black rounded border-[1px] border-darkGrey text-white outline-none focus:border-white duration-200   "
          type="text"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.street1}
          name={formattedName("street1")}
        />

        {formattedError("street1") && (
          <div className="text-sm text-lightYellow">
            {formattedError("street1")}
          </div>
        )}

        {formattedHelper("street1") && (
          <div className="text-sm text-lightYellow">
            {formattedHelper("street1")}
          </div>
        )}
      </div>

      <div className="relative flex flex-col gap-1 xl:col-span-2">
        <label className="absolute px-2 text-sm text-white bg-black left-2 -top-3 ">
          Second Street (optional)
        </label>
        <input
          className="w-full px-4 py-4 bg-black rounded border-[1px] border-darkGrey text-white outline-none focus:border-white duration-200   "
          type="text"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.street2}
          name={formattedName("street2")}
        />

        {formattedError("street2") && (
          <div className="text-sm text-lightYellow">
            {formattedError("street2")}
          </div>
        )}

        {formattedHelper("street2") && (
          <div className="text-sm text-lightYellow">
            {formattedHelper("street2")}
          </div>
        )}
      </div>

      <div className="relative flex flex-col gap-1 xl:col-span-2">
        <label className="absolute px-2 text-sm text-white bg-black left-2 -top-3 ">
          City
        </label>
        <input
          className="w-full px-4 py-4 bg-black rounded border-[1px] border-darkGrey text-white outline-none focus:border-white duration-200   "
          type="text"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.city}
          name={formattedName("city")}
        />
        {formattedError("city") && (
          <div className="text-sm text-lightYellow">
            {formattedError("city")}
          </div>
        )}

        {formattedHelper("city") && (
          <div className="text-sm text-lightYellow">
            {formattedHelper("city")}
          </div>
        )}
      </div>

      <div className="relative flex flex-col gap-1">
        <label className="absolute px-2 text-sm text-white bg-black left-2 -top-3 ">
          State
        </label>
        <input
          className="w-full px-4 py-4 bg-black rounded border-[1px] border-darkGrey text-white outline-none focus:border-white duration-200   "
          type="text"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.state}
          name={formattedName("state")}
        />

        {formattedError("state") && (
          <div className="text-sm text-lightYellow">
            {formattedError("state")}
          </div>
        )}

        {formattedHelper("state") && (
          <div className="text-sm text-lightYellow">
            {formattedHelper("state")}
          </div>
        )}
      </div>

      <div className="relative flex flex-col gap-1">
        <label className="absolute px-2 text-sm text-white bg-black left-2 -top-3 ">
          Zip Code
        </label>
        <input
          className="w-full px-4 py-4 bg-black rounded border-[1px] border-darkGrey text-white outline-none focus:border-white duration-200   "
          type="text"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.zipCode}
          name={formattedName("zipCode")}
        />
        {formattedError("zipCode") && (
          <div className="text-sm text-lightYellow">
            {formattedError("zipCode")}
          </div>
        )}

        {formattedHelper("zipCode") && (
          <div className="text-sm text-lightYellow">
            {formattedHelper("zipCode")}
          </div>
        )}
      </div>
    </section>
  );
}
