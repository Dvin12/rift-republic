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
      <h3 className="my-4 text-lg text-center text-lightGrey xl:text-left xl:text-2xl">
        Credit Card Details
      </h3>
      <section className="grid w-full grid-cols-4 gap-4">
        <div className="flex flex-col col-span-2 gap-1">
          <label className="text-sm text-lightGrey">Card Number</label>
          <input
            className="w-full p-2 rounded"
            name="cardNumber"
            type="text"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.cardNumber}
          />

          {!!touched.cardNumber && !!errors.cardNumber && (
            <div className="text-sm text-[#900]">
              {!!touched.cardNumber && !!errors.cardNumber}
            </div>
          )}

          {touched.cardNumber && errors.cardNumber && (
            <div className="text-sm text-[#900]">
              {touched.cardNumber && errors.cardNumber}
            </div>
          )}
        </div>

        <div className="flex flex-col col-span-2 gap-1 ">
          <label className="text-sm text-lightGrey">Name</label>
          <input
            className="w-full p-2 rounded"
            name="cardName"
            type="text"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.cardName}
          />

          {!!touched.cardName && !!errors.cardName && (
            <div className="text-sm text-[#900]">
              {!!touched.cardName && !!errors.cardName}
            </div>
          )}

          {touched.cardName && errors.cardName && (
            <div className="text-sm text-[#900]">
              {touched.cardName && errors.cardName}
            </div>
          )}
        </div>

        <div className="flex flex-col w-full col-span-3 gap-1">
          <label className="text-sm text-lightGrey">Card Expiration</label>
          <input
            className="w-full p-2 rounded col"
            name="cardExpiration"
            type="text"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.cardExpiration}
          />
          {!!touched.cardExpiration && !!errors.cardExpiration && (
            <div className="text-sm text-[#900]">
              {!!touched.cardExpiration && !!errors.cardExpiration}
            </div>
          )}

          {touched.cardExpiration && errors.cardExpiration && (
            <div className="text-sm text-[#900]">
              {touched.cardExpiration && errors.cardExpiration}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-1 ">
          <label className="text-sm text-lightGrey">CVC</label>
          <input
            className="w-full p-2 rounded"
            name="cardCvc"
            type="text"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.cardCvc}
          />

          {!!touched.cardCvc && !!errors.cardCvc && (
            <div className="text-sm text-[#900]">
              {!!touched.cardCvc && !!errors.cardCvc}
            </div>
          )}

          {touched.cardCvc && errors.cardCvc && (
            <div className="text-sm text-[#900]">
              {touched.cardCvc && errors.cardCvc}
            </div>
          )}
        </div>
      </section>
    </section>
  );
}
