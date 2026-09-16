import { SERVICES } from "@/data/site";

export function Services() {
  return (
    <section className="container-edit py-24 md:py-32 border-t border-border">
      <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.02] mb-14">
        WHAT I
        <br />
        CAN HELP WITH.
      </h2>

      <div>
        {SERVICES.map((service) => (
          <div
            key={service.index}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 border-t border-border py-8 items-baseline"
          >
            <span className="md:col-span-1 label-meta">{service.index}</span>
            <h3 className="md:col-span-4 text-xl md:text-2xl tracking-tight">
              {service.title.toUpperCase()}
            </h3>
            <p className="md:col-span-7 text-secondary max-w-xl">
              {service.description}
            </p>
          </div>
        ))}
        <div className="border-t border-border" />
      </div>
    </section>
  );
}
