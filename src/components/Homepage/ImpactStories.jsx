import React from 'react'

const ImpactStories = () => {
    const stories = [
        {
          title: "Local Restaurant's Journey",
          category: "Success Story",
          description: "How Fine Dining Co. reduced their food waste by 80% and helped feed 500+ families monthly.",
          image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          stats: [
            { label: "Food Saved", value: "2,500 kg" },
            { label: "Families Helped", value: "500+" },
            { label: "Monthly Impact", value: "$15,000" }
          ]
        },
        {
          title: "Community Impact",
          category: "Volunteer Story",
          description: "Meet Sarah, who has helped deliver over 10,000 meals to those in need through our platform.",
          image: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          stats: [
            { label: "Meals Delivered", value: "10,000+" },
            { label: "Hours Contributed", value: "500+" },
            { label: "Communities Served", value: "15+" }
          ]
        },
        {
          title: "NGO Partnership",
          category: "Organization Impact",
          description: "How Food Bank Network expanded their reach by 200% using our platform.",
          image: "https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          stats: [
            { label: "Reach Expanded", value: "200%" },
            { label: "New Donors", value: "150+" },
            { label: "Monthly Donations", value: "5,000 kg" }
          ]
        }
      ];
    
    
  return (
    <>
        <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Impact Stories</h2>
          <p className="mt-2 text-4xl font-extrabold text-dark sm:text-5xl">
            Real Stories, Real Impact
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
            Discover how our platform is making a difference in communities through the stories of our users.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {stories.map((story) => (
              <div key={story.title} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full">
                    {story.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark mb-3">{story.title}</h3>
                  <p className="text-gray-600 mb-6">{story.description}</p>
                  <div className="grid grid-cols-3 gap-4">
                    {story.stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div className="text-lg font-bold text-primary">{stat.value}</div>
                        <div className="text-sm text-gray-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <button className="w-full py-3 bg-gray-50 text-primary font-medium rounded-lg hover:bg-gray-100 transition-colors">
                    Read Full Story
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Share Your Story
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default ImpactStories