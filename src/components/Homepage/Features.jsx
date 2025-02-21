import React from 'react'

const Features = () => {
    const features = [
        {
          title: "Smart Food Donation",
          description: "List your surplus food in minutes and connect with local organizations. Our AI-powered system matches donations with the right recipients based on location, quantity, and food type.",
          icon: (
            <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          ),
          benefits: ["Quick listing process", "Smart matching algorithm", "Real-time notifications", "Donation history tracking"]
        },
        {
          title: "Real-time Tracking System",
          description: "Track your donations from pickup to delivery in real-time. Our advanced tracking system ensures transparency and accountability throughout the entire donation process.",
          icon: (
            <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          ),
          benefits: ["GPS tracking", "Status updates", "Delivery confirmations", "Route optimization"]
        },
        {
          title: "Volunteer Network",
          description: "Join our extensive network of volunteers to help collect and distribute food. Get notified about nearby opportunities and make a real difference in your community.",
          icon: (
            <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          ),
          benefits: ["Flexible scheduling", "Impact tracking", "Community recognition", "Training provided"]
        },
        {
          title: "Quality Assurance",
          description: "Our comprehensive food safety protocols ensure that all donations meet the highest quality standards. We provide guidelines and training for proper food handling and storage.",
          icon: (
            <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          benefits: ["Safety guidelines", "Quality checks", "Temperature monitoring", "Compliance tracking"]
        },
        {
          title: "Community Engagement",
          description: "Build stronger communities through food sharing. Our platform facilitates connections between donors, volunteers, and recipients, creating lasting social impact.",
          icon: (
            <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          ),
          benefits: ["Community events", "Social networking", "Impact reporting", "Recognition programs"]
        },
        {
          title: "Analytics Dashboard",
          description: "Access detailed insights about your donations, impact, and community engagement. Make data-driven decisions to maximize your contribution to food waste reduction.",
          icon: (
            <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          ),
          benefits: ["Real-time metrics", "Custom reports", "Trend analysis", "Goal tracking"]
        }
      ];
  return (
    <>
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-dark sm:text-5xl">
            Powerful Tools for Food Waste Reduction
          </p>
          <p className="mt-4 max-w-3xl text-xl text-gray-500 lg:mx-auto">
            Our comprehensive platform provides everything you need to make a difference in food waste reduction and community support.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="relative p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="absolute -top-4 left-4">
                  <div className="inline-flex p-3 bg-primary rounded-xl shadow-lg">
                    {feature.icon}
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-dark mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-500">
                        <svg className="h-4 w-4 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
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

export default Features