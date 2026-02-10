import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function CustomerForm() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const tableId = searchParams.get("tableId"); // from QR

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // ✅ go to customer menu page
    navigate(`/customer/menu/${tableId}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center dark:bg-white">
      <form
        onSubmit={handleSubmit}
        className="
          flex flex-col gap-4
          dark:bg-white p-10 rounded-[25px]
          font-medium
          transition-all duration-300 ease-in-out
          shadow-[1px_2px_2px_rgba(0,0,0,0.4)]
          hover:-translate-x-2 hover:-translate-y-2
          hover:border hover:border-black
          hover:shadow-[10px_10px_0px_#666]
        "
      >
        {/* Heading */}
        <p className="text-center font-bold text-black pb-6 text-xl">Welcome</p>

        {/* Name */}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="
    rounded-md border border-gray-200
    bg-white p-3 outline-none
     dark:text-black !text-black forced-color-adjust-none
    placeholder:text-gray-600
    caret-black
    transition-all duration-300 ease-in-out

    hover:-translate-x-1 hover:-translate-y-1
    hover:shadow-[6px_6px_0px_#969696,-3px_-3px_10px_#ffffff]

    focus:shadow-[inset_2px_5px_10px_rgba(0,0,0,0.25)]
  "
        />

        {/* Mobile Number */}
        <input
          type="number"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Enter mobile number"
          className="
            rounded-md border border-gray-200
           dark:bg-white p-3 outline-none
            text-black   
            dark:text-black !text-black            /* typed text = black */
            placeholder:text-gray-600   /* placeholder = gray */
            caret-black
            transition-all duration-300 ease-in-out

            [appearance:textfield]
            [&::-webkit-outer-spin-button]:appearance-none
            [&::-webkit-inner-spin-button]:appearance-none

            hover:-translate-x-1 hover:-translate-y-1
            hover:shadow-[6px_6px_0px_#969696,-3px_-3px_10px_#ffffff]

            focus:shadow-[inset_2px_5px_10px_rgba(0,0,0,0.25)]
          "
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="
            mt-8 self-center rounded-lg px-6 py-3
            text-black font-semibold
            transition-all duration-300 ease-in-out
            shadow-[1px_1px_1px_rgba(0,0,0,0.4)]

            hover:-translate-x-2 hover:-translate-y-2
            hover:shadow-[6px_6px_0px_#969696,-3px_-3px_10px_#ffffff]

            active:translate-x-0 active:translate-y-0 active:shadow-none
          "
        >
          Continue
        </button>
      </form>
    </div>
  );
}

export default CustomerForm;
