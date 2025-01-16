import React from "react";



const PricingPlans = () => {
    const handleRedirect = (plan, price) => {
      window.location.href = `/payment?plan=${encodeURIComponent(plan)}&price=${encodeURIComponent(price)}`;
    };
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          Choose the Best Plan For Your Need
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Don’t want to buy courses one by one? Pick a plan to help you, your team, or your organization achieve outcomes faster.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Personal Plan */}
          <div className="border rounded-lg p-6 shadow-lg bg-white">
            <h2 className="text-xl font-semibold text-orange-700">Personal Plan</h2>
            <p className="text-gray-500 mt-1">For You</p>
            <p className="text-gray-500">👤 Individual</p>
            <h3 className="text-2xl font-bold mt-4">
              Starting at ₹50 per month
            </h3>
            <p className="text-sm text-gray-500">Billed monthly or annually, cancel anytime</p>
            <button className="mt-6 w-full bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-500 hover:to-gray-700 text-white py-2 rounded-lg font-medium"               onClick={() => handleRedirect('Personal Plan', '₹50 per month')}
            >
              Starting Subscription →
            </button>
            <ul className="mt-6 text-gray-600 space-y-2">
              <li>✔ Access to 12,000+ top courses</li>
              <li>✔ Certification prep</li>
              <li>✔ Goal-focused recommendations</li>
              <li>✔ AI-powered coding exercises</li>
            </ul>
          </div>

          {/* Team Plan */}
          <div className="border rounded-lg p-6 shadow-lg bg-white">
            <h2 className="text-xl font-semibold text-orange-800">Team Plan</h2>
            <p className="text-gray-500 mt-1">For your team</p>
            <p className="text-gray-500">👥 2 to 20 people</p>
            <h3 className="text-2xl font-bold mt-4">
              Starting at ₹200 per month
            </h3>
            <p className="text-sm text-gray-500">Billed monthly or annually, cancel anytime</p>
            <button className="mt-6 w-full bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-600 hover:to-orange-800 text-white py-2 rounded-lg font-medium" onClick={() => handleRedirect('Team Plan', '₹200 per month')}>
              Starting Subscription →
            </button>
            <ul className="mt-6 text-gray-600 space-y-2">
              <li>✔ Access to 12,000+ top courses</li>
              <li>✔ Certification prep</li>
              <li>✔ Goal-focused recommendations</li>
              <li>✔ AI-powered coding exercises</li>
            </ul>
          </div>

          {/* Enterprise Plan */}
          <div className="border rounded-lg p-6 shadow-lg bg-white">
            <h2 className="text-xl font-semibold text-orange-700">Enterprise Plan</h2>
            <p className="text-gray-500 mt-1">For your organization</p>
            <p className="text-gray-500">👥 More than 20 people</p>
            <h3 className="text-2xl font-bold mt-4">
              Starting at ₹599 per month
            </h3>
            <p className="text-sm text-gray-500">Billed monthly or annually, cancel anytime</p>
            <button className="mt-6 w-full text-white py-2 rounded-lg font-medium bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-500 hover:to-gray-700" onClick={() => handleRedirect('Enterprise Plan', '₹599 per month')}>
              Starting Subscription →
            </button>
            <ul className="mt-6 text-gray-600 space-y-2">
              <li>✔ Access to 27,000+ top courses</li>
              <li>✔ Certification prep</li>
              <li>✔ Goal-focused recommendations</li>
              <li>✔ AI-powered coding exercises</li>
              <li>✔ Advanced analytics and insights</li>
              <li>✔ Dedicated customer success team</li>
              <li>✔ 15 languages</li>
              <li>✔ Customizable content</li>
              <li>✔ Hands-on tech training</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;