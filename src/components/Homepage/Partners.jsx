import React from 'react'

const Partners = () => {
    const partners = {
        restaurants: [
          "Fine Dining Co.", "Green Kitchen", "Fresh Bites", "Urban Plates", "Food Haven"
        ],
        supermarkets: [
          "Fresh Market", "Daily Grocers", "Green Foods", "City Market", "Food Plus"
        ],
        organizations: [
          "Food Bank Network", "Community Help", "Hunger Relief", "Local Impact", "Care Foundation"
        ]
      };
    
      const testimonials = [
        {
          quote: "FoodSaver has revolutionized how we handle surplus food. It's efficient and impactful.",
          author: "Sarah Johnson",
          role: "Restaurant Owner",
          company: "Fine Dining Co."
        },
        {
          quote: "The platform has helped us reduce waste by 75% while helping our community.",
          author: "Michael Chen",
          role: "Store Manager",
          company: "Fresh Market"
        }
      ];
    
    
  return (
        <>
                <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Our Partners</h2>
          <p className="mt-2 text-4xl font-extrabold text-dark sm:text-5xl">
            Trusted by Industry Leaders
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
            We work with leading organizations across the food industry to maximize our impact on reducing food waste.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            {Object.entries(partners).map(([category, companies]) => (
              <div key={category} className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-dark capitalize mb-6">{category}</h3>
                <ul className="space-y-4">
                  {companies.map((company) => (
                    <li key={company} className="flex items-center">
                      <svg className="h-5 w-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{company}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-serif">
                    "
                  </div>
                </div>
                <blockquote className="text-lg text-gray-600 mb-6">
                  {testimonial.quote}
                </blockquote>
                <div>
                  <div className="font-medium text-dark">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
        </>
  )
}

export default Partners