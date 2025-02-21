import React from 'react'

const HowItWorks = () => {
    const steps = [
        {
          title: "Register Your Account",
          description: "Sign up as a donor, volunteer, or organization in need. Complete your profile with relevant details and preferences for better matching.",
          number: "01",
          details: [
            "Quick registration process",
            "Role-specific profiles",
            "Verification system",
            "Preference settings"
          ]
        },
        {
          title: "List or Request Food",
          description: "Easily list available food donations or submit requests for assistance. Our smart system helps match donors with recipients efficiently.",
          number: "02",
          details: [
            "Simple listing interface",
            "Detailed food categories",
            "Quantity specification",
            "Expiry tracking"
          ]
        },
        {
          title: "Connect & Coordinate",
          description: "Get matched with local organizations or volunteers. Coordinate pickup and delivery through our real-time messaging system.",
          number: "03",
          details: [
            "Smart matching algorithm",
            "In-app messaging",
            "Location sharing",
            "Schedule coordination"
          ]
        },
        {
          title: "Track & Complete",
          description: "Monitor the entire process from pickup to delivery. Receive notifications and track impact metrics for your contributions.",
          number: "04",
          details: [
            "Real-time tracking",
            "Status updates",
            "Delivery confirmation",
            "Impact measurement"
          ]
        }
      ];
  return (
   <>
            <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Process</h2>
          <p className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-dark sm:text-5xl">
            How It Works
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
            Our streamlined process makes it easy to start making a difference in your community. Follow these simple steps to begin your journey.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-dark mb-4">{step.title}</h3>
                <p className="text-gray-600 mb-6">{step.description}</p>
                <ul className="space-y-3">
                  {step.details.map((detail, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-500">
                      <svg className="h-4 w-4 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <button className="px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
   </>
  )
}

export default HowItWorks