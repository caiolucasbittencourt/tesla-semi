import FadeInSection from "./FadeInSection";

export default function CTASection() {
  return (
    <section
      id="cta"
      className="relative py-24 from-black via-gray-950 to-black text-white  px-4"
    >
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-4xl sm:text-5xl font-bold">Semi</h2>
              <p className="text-lg text-gray-400 max-w-md mx-auto md:mx-0">
                Stay informed on how we're accelerating the future of electric
                trucking.
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <button className="px-10 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all">
                Get Updates
              </button>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <p className="text-xs text-gray-500 text-center mt-16 max-w-3xl mx-auto leading-relaxed">
            Certain high data usage vehicle features require at least Standard
            Connectivity, including maps, navigation and voice commands. Access
            to features that use cellular data and third-party licenses are
            subject to change. Learn more about Standard Connectivity and any
            limitations.
          </p>
        </FadeInSection>
      </div>
    </section>
  );
}
