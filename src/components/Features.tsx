export default function Features() {
  const features = [
    {
      title: "Automatic Tracking",
      description:
        "Seamlessly tracks your steps using your phone or wearable. Works with Apple Watch, Fitbit, and more.",
      icon: (
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      ),
    },
    {
      title: "Group Challenges",
      description:
        "Create step challenges with friends, family, or colleagues. Perfect for office wellness programs.",
      icon: (
        <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63c-.34-1.02-1.28-1.74-2.46-1.74s-2.12.72-2.46 1.74L13.5 16H16v6h4zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9.5l-2.54-7.63A2.49 2.49 0 0 0 4.5 5.63c-1.18 0-2.12.72-2.46 1.74L0 15h1.5v7h6z" />
      ),
    },
    {
      title: "Achievement System",
      description:
        "Unlock badges and celebrate milestones as you build healthy habits and reach your fitness goals.",
      icon: (
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      ),
    },
    {
      title: "Clean Interface",
      description:
        "Beautiful, minimal design that focuses on what matters. No clutter, just your progress and goals.",
      icon: (
        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
      ),
    },
    {
      title: "Privacy First",
      description:
        "Your health data stays secure and private. We never sell your information or share it without permission.",
      icon: (
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
      ),
    },
    {
      title: "100% Free",
      description:
        "No premium tiers, no hidden costs, no ads disrupting your experience. Just a great fitness app for everyone.",
      icon: (
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
      ),
    },
  ];

  return (
    <section id="features" className="py-24 bg-[#f8f9fa]">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-5">
          Everything you need to stay active
        </h2>
        <p className="text-xl text-center text-gray-500 max-w-xl mx-auto mb-10">
          Enhanced with Smart Notifications & Retention to keep you motivated
          every day.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-2xl shadow-md border border-gray-100 text-center"
            >
              <div className="w-14 h-14 bg-[#0052cc] rounded-xl flex items-center justify-center text-white mb-6 mx-auto">
                <svg
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {feature.icon}
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-500 text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
