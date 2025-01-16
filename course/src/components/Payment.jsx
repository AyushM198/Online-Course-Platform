// import React from "react";
// import { Navigate, useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const PaymentPage = () => {
//     const query = new URLSearchParams(useLocation().search);
//   const plan = query.get("plan") || "Default Plan";
//   const price = query.get("price") || "$0.00";

  
//     return (
//         <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100 px-4 py-8">
//             {/* Left Section */}
//             <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-6 md:p-8 mb-6 md:mb-0 md:mr-6">
//                 {/* Attractive Platform Name */}
//                 <div className="mb-6 text-center">
//                     <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
//                         A2Z Learning Pro
//                     </h1>
//                     <p className="text-sm text-gray-500">Empowering You to Learn, Grow, and Succeed</p>
//                 </div>
//                 <p className="text-3xl font-extrabold text-gray-900 mb-2">
//           {price} <span className="text-lg font-normal">per year</span>
//         </p>
//                 <p className="text-sm text-gray-600 mb-6">
//                     Pro <br /> For startups and growing businesses – Unlimited screens, access to all templates, private projects.
//                 </p>
//                 <div className="flex justify-between items-center text-gray-700 text-sm mb-4">
//                     <span>Qty 1</span>
//                     <span>Billed annually</span>
//                 </div>
//                 <hr className="my-4" />
//                 <div className="flex justify-between items-center text-gray-700 text-sm">
//                     <span>Subtotal</span>
//                     <span>{price}</span>
//                 </div>
//                 <p className="text-sm text-blue-600 mt-4 cursor-pointer hover:underline">Add promotion code</p>
//                 <div className="flex justify-between items-center text-gray-700 text-sm mt-6">
//                     <span>Tax</span>
//                     <span>Enter address to calculate</span>
//                 </div>
//                 <hr className="my-4" />
//                 <div className="flex justify-between items-center text-lg font-bold">
//                     <span>Total due today</span>
//                     <span>{price}</span>
//                 </div>
//             </div>

//             {/* Right Section */}
//             <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-6 md:p-8">
//                 {/* Attractive Header for Payment Section */}
//                 <div className="mb-6">
//                     <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
//                         Pay with Card - A2Z Learning
//                     </h2>
//                 </div>
//                 <form>
//                     <label className="block mb-4">
//                         <span className="text-sm font-medium text-gray-600">Email</span>
//                         <input
//                             type="email"
//                             className="w-full mt-2 p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
//                             placeholder="divyansh15@duck.com"
//                         />
//                     </label>
//                     <label className="block mb-4">
//                         <span className="text-sm font-medium text-gray-600">Card information</span>
//                         <input
//                             type="text"
//                             className="w-full mt-2 p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
//                             placeholder="1234 1234 1234 1234"
//                         />
//                         <div className="flex space-x-2 mt-2">
//                             <input
//                                 type="text"
//                                 className="w-1/2 p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
//                                 placeholder="MM / YY"
//                             />
//                             <input
//                                 type="text"
//                                 className="w-1/2 p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
//                                 placeholder="CVC"
//                             />
//                         </div>
//                     </label>
//                     <label className="block mb-4">
//                         <span className="text-sm font-medium text-gray-600">Cardholder name</span>
//                         <input
//                             type="text"
//                             className="w-full mt-2 p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
//                             placeholder="Full name on card"
//                         />
//                     </label>
//                     <label className="block mb-4">
//                         <span className="text-sm font-medium text-gray-600">Country or region</span>
//                         <select className="w-full mt-2 p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500">
//                             <option>India</option>
//                             <option>United States</option>
//                             <option>United Kingdom</option>
//                             <option>Canada</option>
//                         </select>
//                     </label>
//                     <label className="block mb-6">
//                         <span className="text-sm font-medium text-gray-600">PIN</span>
//                         <input
//                             type="text"
//                             className="w-full mt-2 p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
//                             placeholder="Enter PIN"
//                         />
//                     </label>
//                     <label className="flex items-center mb-6">
//                         <input type="checkbox" className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
//                         <span className="ml-2 text-sm text-gray-600">
//                             Securely save my information for 1-click checkout
//                         </span>
//                     </label>
                     
//                     <button
//                         type="submit"
//                         className="w-full py-3 bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-600 hover:to-orange-800 text-white font-bold text-lg rounded-lg shadow transition duration-300  " 
//                     >
//                        Subscribe
//                     </button>
//                 </form>
//                 <p className="text-xs text-center text-gray-500 mt-6">
//                     By confirming your subscription, you allow A2Z Learning to charge your card for future payments.
//                     You can always cancel your subscription.
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default PaymentPage;

///////////////////////////////////
// import React from "react";
// import { useLocation } from "react-router-dom";

// const PaymentPage = () => {
//   const query = new URLSearchParams(useLocation().search);
//   const plan = query.get("plan") || "Default Plan";
//   const price = query.get("price") || "$0.00";

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100 px-4 py-8">
//       {/* Left Section */}
//       <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-6 md:p-8 mb-6 md:mb-0 md:mr-6">
//         <div className="mb-6 text-center">
//           <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
//             A2Z Learning Pro
//           </h1>
//           <p className="text-sm text-gray-500">Empowering You to Learn, Grow, and Succeed</p>
//         </div>
//         <p className="text-3xl font-extrabold text-gray-900 mb-2">
//           {price} <span className="text-lg font-normal">per year</span>
//         </p>
//         <p className="text-sm text-gray-600 mb-6">
//           {plan} <br /> For startups and growing businesses – Unlimited screens, access to all templates, private projects.
//         </p>
//         {/* Remaining payment details */}
//       </div>
//     </div>
//   );
// };

// export default PaymentPage;




import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const PaymentPage = () => {
  const navigate = useNavigate();
  const query = new URLSearchParams(useLocation().search);
  const plan = query.get("plan") || "Default Plan";
  const price = query.get("price") || "$0.00";

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    navigate("/", { state: { plan, price } }); // Redirect to the success page with state
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100 px-4 py-8">
      {/* Left Section */}
      <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-6 md:p-8 mb-6 md:mb-0 md:mr-6">
        {/* Attractive Platform Name */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
            A2Z Learning Pro
          </h1>
          <p className="text-sm text-gray-500">Empowering You to Learn, Grow, and Succeed</p>
        </div>
        <p className="text-3xl font-extrabold text-gray-900 mb-2">
          {price} <span className="text-lg font-normal">per year</span>
        </p>
        <p className="text-sm text-gray-600 mb-6">
          Pro <br /> For startups and growing businesses – Unlimited screens, access to all templates, private projects.
        </p>
        <div className="flex justify-between items-center text-gray-700 text-sm mb-4">
          <span>Qty 1</span>
          <span>Billed annually</span>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between items-center text-gray-700 text-sm">
          <span>Subtotal</span>
          <span>{price}</span>
        </div>
        <p className="text-sm text-blue-600 mt-4 cursor-pointer hover:underline">Add promotion code</p>
        <div className="flex justify-between items-center text-gray-700 text-sm mt-6">
          <span>Tax</span>
          <span>Enter address to calculate</span>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between items-center text-lg font-bold">
          <span>Total due today</span>
          <span>{price}</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-6 md:p-8">
        {/* Attractive Header for Payment Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            Pay with Card - A2Z Learning
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <label className="block mb-4">
            <span className="text-sm font-medium text-gray-600">Email</span>
            <input
              type="email"
              className="w-full mt-2 p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
              placeholder="divyansh15@duck.com"
              required
            />
          </label>
          <label className="block mb-4">
            <span className="text-sm font-medium text-gray-600">Card information</span>
            <input
              type="text"
              className="w-full mt-2 p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
              placeholder="1234 1234 1234 1234"
              required
            />
            <div className="flex space-x-2 mt-2">
              <input
                type="text"
                className="w-1/2 p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
                placeholder="MM / YY"
                required
              />
              <input
                type="text"
                className="w-1/2 p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
                placeholder="CVC"
                required
              />
            </div>
          </label>
          <label className="block mb-4">
            <span className="text-sm font-medium text-gray-600">Cardholder name</span>
            <input
              type="text"
              className="w-full mt-2 p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
              placeholder="Full name on card"
              required
            />
          </label>
          <label className="block mb-4">
            <span className="text-sm font-medium text-gray-600">Country or region</span>
            <select className="w-full mt-2 p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500" required>
              <option>India</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Canada</option>
            </select>
          </label>
          <label className="block mb-6">
            <span className="text-sm font-medium text-gray-600">PIN</span>
            <input
              type="text"
              className="w-full mt-2 p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter PIN"
              required
            />
          </label>
          <label className="flex items-center mb-6">
            <input type="checkbox" className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
            <span className="ml-2 text-sm text-gray-600">
              Securely save my information for 1-click checkout
            </span>
          </label>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-600 hover:to-orange-800 text-white font-bold text-lg rounded-lg shadow transition duration-300"
          >
            Subscribe
          </button>
        </form>
        <p className="text-xs text-center text-gray-500 mt-6">
          By confirming your subscription, you allow A2Z Learning to charge your card for future payments.
          You can always cancel your subscription.
        </p>
      </div>
    </div>
  );
};

export default PaymentPage;
