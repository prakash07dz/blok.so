import { FaStar } from "react-icons/fa";

export default function TestimonialsSection2() {
  // Sample testimonial data - replace with your actual testimonials
  const testimonials = [
    {
      id: 1,
      userName: "@Adam",
      username: "@adamson",
      image: "/user1.png",
      content:
        "This has been helpful with aiding to my ADD tendencies. By the point that I'm actually getting a weekly Snapshot and now I highly addicted to their notifications so give this a try.",
    },
    {
      id: 2,
      userName: "Matt Murray",
      username: "@mattmurray",
      image: "/user1.png",
      content:
        "Also I've noticed a change after Blok is my relationship with my children has now I'm getting used to Blok. I had reductions but obviously buildings that reduced my daily phone use, during the things I'd like to do more connecting with friends and working with them.",
    },
    {
      id: 3,
      userName: "MMMM",
      username: "@username",
      image: "/user1.png",
      content:
        "Working out so far I think the physical device is turning off & barely work. Even on that hangi it off physically removed and the background. As always mentioned.",
    },
    {
      id: 4,
      userName: "Smith",
      username: "@smithers",
      image: "/user1.png",
      content:
        "Got myself a Blok few (@teamblok), so, as expected here breath from time a breath of fresh air.",
    },
    {
      id: 5,
      userName: "Adam",
      username: "@adamuser",
      image: "/user1.png",
      content:
        "Loving blok so far - really helps with productivity. Even on the blok sitting in the backpack although not mentioned.",
    },
    {
      id: 6,
      userName: "Chris",
      username: "@chrisname",
      image: "/user1.png",
      content:
        "I got blok'd and it was @ Love writing @somewhere all the time at some place 🙂",
    },
  ];

  // Split testimonials into 3 columns of 2 each
  const columns = [
    testimonials.slice(0, 2),
    testimonials.slice(2, 4),
    testimonials.slice(4, 6),
  ];

  return (
    <section className="w-full bg-black px-8 md:px-16 py-16 border-t border-[#212121]">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-4xl text-white mb-4">
          What people are saying
        </h2>
        <p className="text-gray-300 text-base md:text-lg">
          Some decreased their screen time dramatically!
        </p>
      </div>

      {/* Three Column Layout with Reduced Width */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="flex flex-col gap-6">
            {column.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-[#121212] rounded-2xl p-6 border border-gray-800"
              >
                <div className="flex ">
                  <img
                    src={testimonial.image}
                    alt="user_image"
                    className="w-10 h-10 rounded-full border-2 border-white shadow mr-4"
                  />
                  {/* User Info in Vertical Layout */}
                  <div className="flex flex-col mb-4">
                    {/* 5 Star Rating */}
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} size={18} />
                      ))}
                    </div>
                    {/* User Name */}
                    <span className="text-white font-bold text-sm">
                      {testimonial.userName}
                    </span>
                    {/* Username */}
                    <span className="text-gray-300 text-xs">
                      {testimonial.username}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {testimonial.content}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
