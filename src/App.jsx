import "./App.css";
function Form() {
  return (
    <>
      <form className="Roboto flex flex-col items-start text-black bg-white p-10 rounded-xl">
        <p className="pb-[21px] text-[#273b3c] text-2xl Roboto-Bold">
          Contact Us
        </p>
        {/* Full name */}
        <div className="flex gap-4">
          <div className="flex flex-col items-start">
            <label className="text-xs font-medium tracking-wide pb-[10px]">
              First Name <span className="pl-[4px] text-green-600">*</span>
            </label>
            <input
              className="px-[58px] py-[14px] text-xs font-medium tracking-wide bg-white border-2 rounded-lg"
              type="text"
              required
            />
          </div>
          {/* Last Name */}
          <div className="flex flex-col items-start">
            <label className="text-xs font-medium tracking-wide pb-[10px]">
              Last Name <span className="pl-[4px] text-green-600">*</span>
            </label>
            <input
              className="relative px-[58px] py-[14px] text-xs font-medium tracking-wide bg-white border-2 rounded-lg"
              type="text"
              required
            />
          </div>
        </div>
        {/* Email Address */}
        <div className="flex flex-col items-start">
          <label className="text-xs font-medium tracking-wide pb-[10px] pt-[21px]">
            Email Address <span className="pl-[4px] text-green-600">*</span>
          </label>
          <input
            className="px-[206px] py-[14px] text-xs font-medium tracking-wide bg-white border-2 rounded-lg"
            type="email"
            required
          />
        </div>
        {/* Select Box */}
        <p className=" flex text-xs font-medium tracking-wide pb-[10px] pt-[21px]">
          Query Type <span className="pl-[10px] text-green-600">*</span>
        </p>
        {/* Query Type */}
        <div className="flex gap-4">
          {/* radio button */}
          <div className=" flex gap-2 px-[84px] py-[14px] text-xs font-medium tracking-wide bg-white border-2 rounded-lg">
            <input
              type="radio"
              id="generalEnquiry"
              name="queryType"
              value="General Enquiry"
              checked
            />
            <label
              className="text-xs font-medium tracking-wide"
              for="generalEnquiry"
            >
              General Enquiry
            </label>
          </div>
          <div className="flex gap-2 px-[84px] py-[14px] text-xs font-medium tracking-wide bg-white border-2 rounded-lg">
            <input
              type="radio"
              id="supportRequest"
              name="queryType"
              value="Support Request"
            />
            <label
              className="text-xs font-medium tracking-wide"
              for="supportRequest"
            >
              Support Request
            </label>
          </div>
        </div>
        {/* Message */}
        <div className="flex flex-col items-start">
          <label className="text-xs font-medium tracking-wide pb-[10px] pt-[21px]">
            Message <span className="pl-[4px] text-green-600">*</span>
          </label>
          <input
            className="px-52 py-8 text-xs font-medium tracking-wide bg-white border-2 rounded-lg"
            type="message"
            value={""}
            name="message"
            id="message"
          />
        </div>
        {/* Consent */}
        <div className="flex flex-row gap-4">
          <input
            className="border-2 border-green-400"
            type="checkbox"
            id="consent"
            name="consent"
          />
          <label className="text-xs font-medium tracking-wide bg-white py-[29px] ">
            I consent to being contracted by the team{" "}
            <span className="pl-[4px] text-green-600">*</span>
          </label>
        </div>
        <div className="w-full">
          <button
            className="flex justify-center items-center w-full bg-[#0c7d69] text-xs font-medium tracking-wide text-white"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
export default Form;
