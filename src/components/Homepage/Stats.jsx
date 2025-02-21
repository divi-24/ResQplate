import React from 'react'

const Stats = () => {
    const impactMetrics = [
        {
          category: "Food Impact",
          stats: [
            { label: "Meals Saved", value: "250,000+", growth: "+45% this year" },
            { label: "Food Waste Reduced", value: "125 tons", growth: "+60% this year" },
            { label: "CO₂ Emissions Saved", value: "450 tons", growth: "+40% this year" }
          ]
        },
        {
          category: "Community Impact",
          stats: [
            { label: "Active Volunteers", value: "5,000+", growth: "+75% this year" },
            { label: "Partner Organizations", value: "350+", growth: "+55% this year" },
            { label: "Communities Served", value: "100+", growth: "+80% this year" }
          ]
        },
        {
          category: "Platform Activity",
          stats: [
            { label: "Monthly Donations", value: "15,000+", growth: "+65% this year" },
            { label: "Successful Deliveries", value: "12,500+", growth: "+70% this year" },
            { label: "Active Users", value: "25,000+", growth: "+85% this year" }
          ]
        }
      ];
    
    
  return (
    <>
            <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Our Impact</h2>
          <p className="mt-2 text-4xl font-extrabold text-dark sm:text-5xl">
            Making a Real Difference
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
            Together we're creating meaningful change in communities worldwide. Here's how our collective efforts are making an impact.
          </p>
        </div>

        <div className="mt-20 space-y-20">
          {impactMetrics.map((section) => (
            <div key={section.category} className="relative">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-dark">{section.category}</h3>
              </div>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {section.stats.map((stat) => (
                  <div key={stat.label} className="relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <div className="absolute -top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {stat.growth}
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                    <div className="absolute bottom-4 right-4">
                      <svg className="h-8 w-8 text-green-100" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a href="#" className="inline-flex items-center text-primary hover:text-green-600 font-medium">
            View Detailed Impact Report
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>

    </>
  )
}

export default Stats