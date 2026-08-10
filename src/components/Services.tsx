import { Coffee, Cake, Star } from "lucide-react";

export default function Services() {
  const services = [
    {
      Icon: Coffee,
      title: "Custom Web Development",
      description: "Bespoke, high-performance websites built from the ground up to match your brand and business goals exactly.",
    },
    {
      Icon: Cake,
      title: "E-Commerce Solutions",
      description: "Scalable online stores with secure checkout, inventory management, and seamless customer experiences.",
    },
    {
      Icon: Star,
      title: "SEO & Digital Marketing",
      description: "Drive targeted traffic and boost rankings with data-driven SEO strategies and integrated marketing campaigns.",
    },
  ];

  return (
    <section className="bg-background py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Our Services
        </h2>

        <div className="mt-12 flex flex-col divide-y divide-border rounded-lg border border-border bg-card sm:mt-16">
          {services.map(({ Icon, title, description }) => (
            <div key={title} className="flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:gap-6 sm:p-8">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary sm:h-14 sm:w-14">
                <Icon className="h-6 w-6 text-primary-foreground sm:h-7 sm:w-7" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-card-foreground sm:text-xl">{title}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}