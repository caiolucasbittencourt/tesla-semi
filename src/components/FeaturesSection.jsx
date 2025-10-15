import FadeInSection from "./FadeInSection";

const features = [
  {
    title: "Lowest Cost of Ownership",
    description:
      "With estimated fuel savings of more than $200,000 and a two-year payback period, Semi is the clear choice for fleet operators.",
    video: "/semi-cost-video.mp4",
    reverse: false,
  },
  {
    title: "Unrivaled Performance",
    description:
      "Three independent motors provide instant torque and unmatched power, allowing the Semi to accelerate from 0-60 mph in 20 seconds, even fully loaded.",
    video: "/semi-performance-video.mp4",
    reverse: true,
  },
  {
    title: "Built for Safety",
    description:
      "An active safety suite, including automatic emergency braking and lane keeping assist, provides 360-degree visibility to prevent accidents.",
    video: "/semi-safety-video.mp4",
    reverse: false,
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-1 bg-black">
      {features.map((feature, index) => {
        const orderClassText = feature.reverse ? "lg:order-2" : "";
        const orderClassImage = feature.reverse ? "lg:order-1" : "";

        return (
          <div
            key={index}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`space-y-4 ${orderClassText}`}>
                <FadeInSection>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    {feature.title}
                  </h2>
                  <p className="text-base text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </FadeInSection>
              </div>

              <div className={orderClassImage}>
                <FadeInSection delay={0.2}>
                  <video
                    src={feature.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-cover rounded-lg"
                    aria-label={feature.title}
                  />
                </FadeInSection>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
