import { useState } from "react";

function CustomerPopupForm({ onClose, onSubmit }) {
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

    if (!formData.name || !formData.mobile) return;

    onSubmit(formData); // send data to parent
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="
          flex flex-col gap-4
          bg-white p-10 rounded-[25px]
          font-medium
          transition-all duration-300 ease-in-out
          shadow-[1px_2px_2px_rgba(0,0,0,0.4)]
          hover:-translate-x-2 hover:-translate-y-2
          hover:border hover:border-black
          hover:shadow-[10px_10px_0px_#666]
        "
      >
        <p className="text-center font-bold text-black pb-6 text-xl">Welcome</p>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="rounded-md border border-gray-200 bg-white p-3 outline-none"
        />

        <input
          type="number"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Enter mobile number"
          className="rounded-md border border-gray-200 bg-white p-3 outline-none
           [appearance:textfield]
            [&::-webkit-outer-spin-button]:appearance-none
            [&::-webkit-inner-spin-button]:appearance-none"
        />

        <button
          type="submit"
          className="
            mt-8 self-center rounded-lg px-6 py-3
            text-white font-semibold
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

export default CustomerPopupForm;
