import { Link } from "react-router-dom";

const plans = [
  {
    name: "Free",
    description: "Get your vehicle online with the essentials.",
    price: "$0",
    period: "forever",
    features: [
      "Digital vehicle identity",
      "QR vehicle profile",
      "Anonymous reports",
      "Basic notifications",
    ],
    button: "Get Started",
    featured: false,
  },
  {
    name: "Driver",
    description: "More control and protection for your everyday vehicle.",
    price: "$5",
    period: "/month",
    features: [
      "Everything in Free",
      "Unlimited notifications",
      "Photo-based reports",
      "Maintenance history",
      "Emergency contacts",
      "Priority notifications",
    ],
    button: "Choose Driver",
    featured: true,
  },
  {
    name: "Fleet",
    description: "Manage vehicle identities across your entire fleet.",
    price: "$19",
    period: "/vehicle/month",
    features: [
      "Everything in Driver",
      "Fleet dashboard",
      "Multiple vehicles",
      "Vehicle management",
      "Fleet notifications",
      "Priority support",
    ],
    button: "Contact Us",
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#5DAEFF] via-[#A8D8F5] to-white px-6 py-32">

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[10%] h-72 w-72 rounded-full bg-white/30 blur-3xl" />
        <div className="absolute right-[5%] top-[30%] h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
      </div>

      {/* Header */}
      <section className="relative z-10 mx-auto max-w-4xl text-center">

        <div className="glass mx-auto mb-6 inline-flex rounded-full px-4 py-2">
          <span className="text-sm font-medium text-[#0B132B]">
            Simple & transparent
          </span>
        </div>

        <h1 className="text-5xl font-bold tracking-tight text-[#0B132B] md:text-7xl">
          Choose the identity
          <br />
          your vehicle deserves.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
          Start with the essentials or unlock more powerful tools for
          protecting, managing, and connecting your vehicle.
        </p>
      </section>

      {/* Pricing cards */}
      <section className="relative z-10 mx-auto mt-20 grid max-w-6xl gap-6 lg:grid-cols-3">

        {plans.map((plan) => (
         <div
    key={plan.name}
    className={`${
      plan.featured ? "glass-card-yellow" : "glass-card"
    } relative flex flex-col ${
      plan.featured
        ? "scale-[1.03]"
        : ""
    }`}
  >

            {/* Recommended */}
            {plan.featured && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#FFD166] px-4 py-1.5 text-xs font-semibold text-gray-600">
                Most Popular
              </div>
            )}

            <div>
              <h2 className="text-2xl font-semibold text-[#0B132B]">
                {plan.name}
              </h2>

              <p className="mt-2 min-h-[48px] text-sm leading-relaxed text-slate-500">
                {plan.description}
              </p>
            </div>

            {/* Price */}
            <div className="mt-8 flex items-baseline">
              <span className="text-5xl font-bold tracking-tight text-[#0B132B]">
                {plan.price}
              </span>

              <span className="ml-2 text-sm text-slate-400">
                {plan.period}
              </span>
            </div>

            {/* CTA */}
            <Link
              to="/register"
              className={`mt-8 w-full rounded-xl px-5 py-3 text-center font-semibold transition-all duration-300 ${
                plan.featured
                  ? "bg-[#0B132B] text-white hover:-translate-y-0.5 hover:bg-[#162352] hover:shadow-lg"
                  : "bg-white/70 text-[#0B132B] hover:-translate-y-0.5 hover:bg-white hover:shadow-lg"
              }`}
            >
              {plan.button}
            </Link>

            {/* Divider */}
            <div className="my-8 h-px bg-slate-900/10" />

            {/* Features */}
            <div className="flex-1">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Includes
              </p>

              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-slate-600"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-500">
                      ✓
                    </span>

                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* Bottom note */}
      <div className="relative z-10 mx-auto mt-16 text-center">
        <p className="text-sm text-slate-500">
          No hidden fees. Start free and upgrade whenever you need.
        </p>
      </div>

    </main>
  );
}