import FadeInSection from "./FadeInSection";

export default function InteriorSection() {
  return (
    <section id="interior" className="py-24 bg-black text-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl font-bold">
              A Driver-Focused Cabin
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mt-4">
              The cabin is designed around the driver, with a centered seating
              position for maximum visibility and control. Dual touchscreens
              provide easy access to all vehicle functions.
            </p>
          </FadeInSection>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <FadeInSection delay={0.1}>
              <video
                src="/semi-interior-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover rounded-lg"
              />
            </FadeInSection>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-black rounded-lg">
              <FadeInSection delay={0.2}>
                <h3 className="text-lg font-medium mb-2">Dual Touchscreens</h3>
                <p className="text-gray-400 text-sm">
                  Two large touchscreens display vehicle data, navigation, and
                  blind spot cameras, putting everything within reach.
                </p>
              </FadeInSection>
            </div>

            <div className="p-6 bg-black rounded-lg">
              <FadeInSection delay={0.3}>
                <h3 className="text-lg font-medium mb-2">
                  Centered Driving Position
                </h3>
                <p className="text-gray-400 text-sm">
                  Offers a commanding view of the road, enhancing safety and
                  reducing driver fatigue.
                </p>
              </FadeInSection>
            </div>

            <div className="p-6 bg-black rounded-lg">
              <FadeInSection delay={0.4}>
                <h3 className="text-lg font-medium mb-2">Enhanced Autopilot</h3>
                <p className="text-gray-400 text-sm">
                  Helps with lane keeping and changing, making driving safer and
                  less stressful for the driver.
                </p>
              </FadeInSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
