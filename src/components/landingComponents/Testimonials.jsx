import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Adventure Traveler",
    location: "Kathmandu, Nepal",
    avatarBg: "bg-amber-500",
    initials: "AS",
    rating: 5,
    quote:
      "WanderWise planned my entire Annapurna trek in minutes. The itinerary was spot-on and the local tips saved my trip.",
  },
  {
    name: "Sofia Martinez",
    role: "Solo Backpacker",
    location: "Barcelona, Spain",
    avatarBg: "bg-rose-500",
    initials: "SM",
    rating: 5,
    quote:
      "As a solo traveler, I loved how it tailored suggestions to my pace and budget. Found hidden gems I'd never have discovered.",
  },
  {
    name: "Liam O'Connor",
    role: "Family Vacationer",
    location: "Dublin, Ireland",
    avatarBg: "bg-sky-500",
    initials: "LO",
    rating: 4,
    quote:
      "Planned a two-week family trip across Italy with zero stress. The kids-friendly filter was a game changer for us.",
  },
  {
    name: "Mei Chen",
    role: "Digital Nomad",
    location: "Singapore",
    avatarBg: "bg-emerald-500",
    initials: "MC",
    rating: 5,
    quote:
      "The flexible day-by-day planner adapts to my work schedule. I just move things around when meetings come up.",
  },
  {
    name: "Jamal Hassan",
    role: "Honeymoon Planner",
    location: "Marrakech, Morocco",
    avatarBg: "bg-violet-500",
    initials: "JH",
    rating: 5,
    quote:
      "From desert camps to riad stays, WanderWise built the perfect romantic route. Better than any agency I tried.",
  },
  {
    name: "Elena Rossi",
    role: "Weekend Explorer",
    location: "Rome, Italy",
    avatarBg: "bg-orange-500",
    initials: "ER",
    rating: 4,
    quote:
      "I use it every weekend for quick getaways. The offline maps and saved plans make spontaneous trips effortless.",
  },
];

function Stars({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating
              ? "fill-amber-400 text-amber-400"
              : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
            <Quote className="h-3.5 w-3.5" />
            Loved by travelers
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Stories from the WanderWise community
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Join thousands of explorers who plan smarter, travel further, and
            never miss a hidden gem.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <Stars rating={t.rating} />

              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                "{t.quote}"
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${t.avatarBg} text-sm font-semibold text-white`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t.role} · {t.location}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}