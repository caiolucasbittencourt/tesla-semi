export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <video
          src="/semi-hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
            Semi
          </h1>
          <p className="text-lg text-white/90 mb-8">The Future of Trucking</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black hover:bg-gray-200 px-10 py-3 text-base font-medium rounded transition-colors cursor-pointer">
              Order Now
            </button>
            <button className="border border-white/50 text-white hover:bg-black hover:text-white px-10 py-3 text-base font-medium rounded transition-colors cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/60 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
