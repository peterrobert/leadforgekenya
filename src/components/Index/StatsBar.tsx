const stats = [
  { label: "Projects Delivered", value: "30+" },
  { label: "Happy Clients", value: "15+" },
  { label: "Years Experience", value: "5+" },
  { label: "Client-Focused", value: "100%" },
];

const StatsBar = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-forge-navy/10 bg-white px-6 py-8 shadow-sm sm:px-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center md:text-left">
              <div className="font-display text-3xl font-bold text-forge-navy md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-medium text-forge-gray">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;