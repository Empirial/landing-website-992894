export default function About() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-[minmax(0,280px)_1fr] md:gap-16 md:px-8">
        <div className="flex justify-center md:justify-start">
          <img
            src="https://placehold.co/960x640/e2e8f0/475569?text=about"
            alt="The founding team of Northwind Analytics standing together in our modern office, smiling at the camera"
            className="h-48 w-48 rounded-full border border-border object-cover md:h-64 md:w-64"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            We help data-driven teams make faster, smarter decisions.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Northwind Analytics started in 2019 with a simple observation: most companies sit on a mountain of data but struggle to turn it into action. Our founders, two former data engineers, built a tool they wished existed—one that automates the tedious parts of analysis so teams can focus on asking better questions. Today, we serve over 400 businesses across retail, finance, and healthcare.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Our mission is to make advanced analytics accessible to every team, not just data scientists. We believe in transparency, simplicity, and measurable outcomes. We’re a remote-first company of 25 people who genuinely care about our customers—and it shows in our 98% retention rate. When you work with us, you’re not just getting software; you’re getting a partner who celebrates your wins as our own.
          </p>
        </div>
      </div>
    </section>
  );
}