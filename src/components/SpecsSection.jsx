const specs = [
  {
    value: "500",
    unit: "mi",
    label: "Range",
    description: "At max gross weight",
  },
  {
    value: "20",
    unit: "sec",
    label: "0-60 mph",
    description: "With 82k lb load",
  },
  {
    value: "<2",
    unit: "kWh/mi",
    label: "Energy Consumption",
    description: "Lowest on the market",
  },
  {
    value: "1M",
    unit: "mi",
    label: "Powertrain",
    description: "Million Mile Guarantee",
  },
];

export default function SpecsSection() {
  return (
    <section id="specs" className="py-24 bg-black px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Performance and Efficiency
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-4">
            Tesla Semi is the safest, most comfortable truck ever, with the
            lowest cost of ownership.
          </p>
        </div>
        <div
          id="specs-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {specs.map((spec, index) => (
            <div
              key={index}
              className="p-6 text-center border border-gray-800 rounded-lg"
            >
              <div className="flex items-baseline justify-center mb-2">
                <span className="text-4xl font-bold text-white">
                  {spec.value}
                </span>
                <span className="text-lg text-gray-400 ml-1">{spec.unit}</span>
              </div>
              <h3 className="text-lg font-medium text-white mb-1">
                {spec.label}
              </h3>
              <p className="text-gray-400 text-sm">{spec.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
