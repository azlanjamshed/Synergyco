// import React from "react";
// import { useForm } from "react-hook-form";
// import { MapPin, Phone, Mail } from "lucide-react";

// const ContactSection = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
//       <div className=" mx-auto px-4 sm:px-6 lg:px-12">
//         {/* Heading */}
//         <div className="mb-10">
//           <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A365D]">
//             Contact Our Team
//           </h2>
//           <p className="text-gray-600 text-sm mt-2">
//             Our enterprise specialists are ready to discuss your operational
//             needs in the MENA region.
//           </p>
//         </div>

//         {/* GRID */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
//           {/* LEFT SIDE */}
//           <div className="bg-white border rounded-lg p-5 sm:p-6">
//             <h3 className="font-semibold text-[#1A365D] mb-4">
//               Regional Offices
//             </h3>

//             <div className="flex flex-col gap-4 text-sm text-gray-700">
//               <div className="flex gap-3">
//                 <MapPin className="w-4 h-4 text-blue-600 mt-1" />
//                 <div>
//                   <p className="font-medium">Qatar Headquarters</p>
//                   <p>Level 32, Tornado Tower, West Bay</p>
//                   <p>Doha, State of Qatar</p>
//                 </div>
//               </div>

//               <div className="flex gap-3">
//                 <MapPin className="w-4 h-4 text-blue-600 mt-1" />
//                 <div>
//                   <p className="font-medium">UAE Regional Office</p>
//                   <p>Business Bay, Executive Towers</p>
//                   <p>Dubai, United Arab Emirates</p>
//                 </div>
//               </div>

//               <div className="flex gap-3">
//                 <Phone className="w-4 h-4 text-blue-600 mt-1" />
//                 <div>
//                   <p>+974 4400 0000 (Doha)</p>
//                   <p>+971 4400 0000 (Dubai)</p>
//                 </div>
//               </div>

//               <div className="flex gap-3">
//                 <Mail className="w-4 h-4 text-blue-600 mt-1" />
//                 <div>
//                   <p>inquiries@synergyco.com</p>
//                   <p>support@synergyco.com</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT SIDE FORM */}
//           <div className="bg-white border rounded-lg p-5 sm:p-6">
//             <h3 className="font-semibold text-[#1A365D] mb-4">
//               Business Inquiry
//             </h3>

//             <form
//               onSubmit={handleSubmit(onSubmit)}
//               className="flex flex-col gap-4"
//             >
//               {/* NAME + EMAIL */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <input
//                   {...register("name", { required: true })}
//                   placeholder="Full Name"
//                   className="border p-2.5 rounded text-sm"
//                 />

//                 <input
//                   {...register("email", { required: true })}
//                   placeholder="Business Email"
//                   className="border p-2.5 rounded text-sm"
//                 />
//               </div>

//               {/* SERVICE TYPE */}
//               <select
//                 {...register("service")}
//                 className="border p-2.5 rounded text-sm"
//               >
//                 <option>Logistics & Supply Chain</option>
//                 <option>Facility Management</option>
//                 <option>Manpower Supply</option>
//               </select>

//               {/* MESSAGE */}
//               <textarea
//                 {...register("message", { required: true })}
//                 placeholder="How can we assist your business operations?"
//                 rows="4"
//                 className="border p-2.5 rounded text-sm"
//               />

//               {/* BUTTON */}
//               <button
//                 type="submit"
//                 className="bg-[#1A365D] text-white py-2.5 rounded text-sm hover:bg-[#2B6CB0] transition"
//               >
//                 Send Inquiry
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* MAP SECTION */}

//         <div className="mt-10 rounded-xl overflow-hidden relative">
//           {/* GOOGLE MAP */}
//           <iframe
//             title="GCC Map"
//             src="https://www.google.com/maps?q=Middle%20East&output=embed"
//             className="w-full h-[250px] sm:h-[320px] lg:h-[380px] border-0 grayscale"
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;

import React from "react";
import { useForm } from "react-hook-form";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ shouldFocusError: true });

  const onSubmit = async (data) => {
    console.log(data);
    await new Promise((res) => setTimeout(res, 1000)); // simulate API
    reset();
  };

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className=" mx-auto px-4 sm:px-6 lg:px-70">
        {/* Heading */}
        <div className="mb-10 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A365D]">
            Contact Our Team
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2">
            Our enterprise specialists are ready to discuss your operational
            needs in the MENA region.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20">
          {/* LEFT */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 shadow-sm">
            <h3 className="font-semibold text-[#1A365D] mb-5">
              Regional Offices
            </h3>

            <div className="flex flex-col gap-5 text-sm text-gray-700 ">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="font-medium">Qatar Headquarters</p>
                  <p>CR: 147143, Doha, Qatar, Office #504 5 th Floor,</p>
                  <p>Gitco Building, Street 820, Zone 18, Building #8</p>
                  <p>Doha, State of Qatar</p>
                </div>
              </div>
              {/* 
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="font-medium">UAE Regional Office</p>
                  <p>Business Bay, Executive Towers</p>
                  <p>Dubai, United Arab Emirates</p>
                </div>
              </div> */}

              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p>+974 60070049 </p>
                  <p>+971 60020017 </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p>i info@synergycoqatar.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 shadow-sm">
            <h3 className="font-semibold text-[#1A365D] mb-5">
              Business Inquiry
            </h3>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              {/* NAME + EMAIL */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* NAME */}
                <div>
                  <input
                    {...register("name", {
                      required: "Full name is required",
                      minLength: {
                        value: 3,
                        message: "Minimum 3 characters",
                      },
                    })}
                    placeholder="Full Name"
                    className={`w-full border p-2.5 rounded text-sm outline-none focus:ring-2 focus:ring-blue-200 ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* EMAIL */}
                <div>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email",
                      },
                    })}
                    placeholder="Business Email"
                    className={`w-full border p-2.5 rounded text-sm outline-none focus:ring-2 focus:ring-blue-200 ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* SERVICE */}
              <div>
                <select
                  {...register("service", {
                    required: "Please select a service",
                  })}
                  className={`w-full border p-2.5 rounded text-sm outline-none focus:ring-2 focus:ring-blue-200 ${
                    errors.service ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Select Service Type</option>
                  <option>Logistics & Supply Chain</option>
                  <option>Facility Management</option>
                  <option>Manpower Supply</option>
                </select>

                {errors.service && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.service.message}
                  </p>
                )}
              </div>

              {/* MESSAGE */}
              <div>
                <textarea
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Minimum 10 characters",
                    },
                  })}
                  placeholder="How can we assist your business operations?"
                  rows="4"
                  className={`w-full border p-2.5 rounded text-sm outline-none focus:ring-2 focus:ring-blue-200 ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                />

                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#1A365D] text-white py-2.5 rounded text-sm hover:bg-[#2B6CB0] transition disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send Inquiry"}
              </button>
            </form>
          </div>
        </div>

        {/* MAP */}
        <div className="mt-10 rounded-xl overflow-hidden">
          {/* <iframe
            title="GCC Map"
            src="https://www.google.com/maps?q=Middle%20East&output=embed"
            className="w-full h-[250px] sm:h-[320px] lg:h-[380px] border-0 grayscale"
            loading="lazy"
          ></iframe> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d115482.04596892722!2d51.41780279356215!3d25.243191131965162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sCR%3A%20147143%2C%20Doha%2C%20Qatar%2C%20Office%20%23504%205%20th%20Floor%2C%20%20Gitco%20Building%2C%20Street%20820%2C%20Zone%2018%2C%20Building%20%238%20%20Doha%2C%20State%20of%20Qatar!5e0!3m2!1sen!2sin!4v1777669319089!5m2!1sen!2sin"
            width="600"
            height="450"
            className="w-full h-[250px] sm:h-[320px] lg:h-[380px] border-0 "
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
