export default function Payment({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
}) {
  return (
    <section className=" border-[1px] p-6 border-lightGrey rounded-sm relative">
      <h3 className="absolute px-4 text-lg text-center bg-black -top-4 S text-lightGrey xl:text-left xl:text-2xl">
        Payment Info
      </h3>
      <section className="flex flex-col gap-8 xl:py-6">
        <div className="relative flex flex-col gap-1 ">
          <label className="absolute px-2 text-sm text-white bg-black left-2 -top-3 ">
            Email
          </label>
          <input
            className="w-full px-4 py-4 bg-black rounded border-[1px] border-darkGrey text-white outline-none focus:border-white duration-200   "
            name="email"
            type="text"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.email}
          />

          {!!touched.email && !!errors.email && (
            <div className="text-sm text-lightYellow">
              {!!touched.email && !!errors.email}
            </div>
          )}

          {touched.email && errors.email && (
            <div className="text-sm text-lightYellow">
              {touched.email && errors.email}
            </div>
          )}
        </div>

        <div className="relative flex flex-col gap-1">
          <label className="absolute px-2 text-sm text-white bg-black left-2 -top-3 ">
            Phone Number
          </label>
          <input
            className="w-full px-4 py-4 bg-black rounded border-[1px] border-darkGrey text-white outline-none focus:border-white duration-200   "
            name="phoneNumber"
            type="text"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.phoneNumber}
          />

          {!!touched.phoneNumber && !!errors.phoneNumber && (
            <div className="text-sm text-lightYellow">
              {!!touched.phoneNumber && !!errors.phoneNumber}
            </div>
          )}

          {touched.phoneNumber && errors.phoneNumber && (
            <div className="text-sm text-lightYellow">
              {touched.phoneNumber && errors.phoneNumber}
            </div>
          )}
        </div>
      </section>
      <h3 className="text-lg text-center text-lightGrey xl:text-left xl:text-xl">
        Credit Card Details
      </h3>
      <section className="grid w-full grid-cols-4 gap-8 xl:py-6">
        <div className="relative flex flex-col col-span-2 gap-1">
          <label className="absolute px-2 text-sm text-white bg-black left-2 -top-3 ">
            Card Number
          </label>
          <input
            className="w-full px-4 py-4 bg-black rounded border-[1px] border-darkGrey text-white outline-none focus:border-white duration-200   "
            name="cardNumber"
            type="text"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.cardNumber}
          />

          {!!touched.cardNumber && !!errors.cardNumber && (
            <div className="text-sm text-lightYellow">
              {!!touched.cardNumber && !!errors.cardNumber}
            </div>
          )}

          {touched.cardNumber && errors.cardNumber && (
            <div className="text-sm text-lightYellow">
              {touched.cardNumber && errors.cardNumber}
            </div>
          )}
        </div>

        <div className="relative flex flex-col col-span-2 gap-1 ">
          <label className="absolute px-2 text-sm text-white bg-black left-2 -top-3 ">
            Name
          </label>
          <input
            className="w-full px-4 py-4 bg-black rounded border-[1px] border-darkGrey text-white outline-none focus:border-white duration-200   "
            name="cardName"
            type="text"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.cardName}
          />

          {!!touched.cardName && !!errors.cardName && (
            <div className="text-sm text-lightYellow">
              {!!touched.cardName && !!errors.cardName}
            </div>
          )}

          {touched.cardName && errors.cardName && (
            <div className="text-sm text-lightYellow">
              {touched.cardName && errors.cardName}
            </div>
          )}
        </div>

        <div className="relative flex flex-col w-full col-span-3 gap-1">
          <label className="absolute px-2 text-sm text-white bg-black left-2 -top-3 ">
            Card Expiration
          </label>
          <input
            className="w-full px-4 py-4 bg-black rounded border-[1px] border-darkGrey text-white outline-none focus:border-white duration-200   "
            name="cardExpiration"
            type="text"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.cardExpiration}
          />
          {!!touched.cardExpiration && !!errors.cardExpiration && (
            <div className="text-sm text-lightYellow">
              {!!touched.cardExpiration && !!errors.cardExpiration}
            </div>
          )}

          {touched.cardExpiration && errors.cardExpiration && (
            <div className="text-sm text-lightYellow">
              {touched.cardExpiration && errors.cardExpiration}
            </div>
          )}
        </div>

        <div className="relative flex flex-col gap-1 ">
          <label className="absolute px-2 text-sm text-white bg-black left-2 -top-3 ">
            CVC
          </label>
          <input
            className="w-full px-4 py-4 bg-black rounded border-[1px] border-darkGrey text-white outline-none focus:border-white duration-200   "
            name="cardCvc"
            type="text"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.cardCvc}
          />

          {!!touched.cardCvc && !!errors.cardCvc && (
            <div className="text-sm text-lightYellow">
              {!!touched.cardCvc && !!errors.cardCvc}
            </div>
          )}

          {touched.cardCvc && errors.cardCvc && (
            <div className="text-sm text-lightYellow">
              {touched.cardCvc && errors.cardCvc}
            </div>
          )}
        </div>
      </section>
    </section>
  );
}
