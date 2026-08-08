
export default function StatsBar() {
  const stats = [
    {
      value: "127K+",
      label: "Vehicles Registered",
    },
    {
      value: "2.4M",
      label: "Notifications Sent",
    },
    {
      value: "99.1%",
      label: "Privacy Score",
    },
    {
      value: "47",
      label: "States Covered",
    },
  ];

  return (
    <section className="w-full border-y border-slate-200/60 bg-white py-6 backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center justify-center px-6 py-4 text-center ${
              index !== 0 ? "border-l border-slate-200/60" : ""
            }`}
          >
            <div className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              {stat.value}
            </div>

            <div className="mt-2 text-sm font-medium text-slate-500">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}