export default function Hero() {
  return (
    <section className="bg-background">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-4 py-20 text-center sm:py-24 lg:py-28">
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Build a Stunning Website in Minutes — No Code Needed
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Launch your dream site with our drag-and-drop builder, AI-powered templates, and built-in SEO tools. Fast, beautiful, and effortless.
        </p>
        <img
          src="https://placehold.co/960x640/e2e8f0/475569?text=hero"
          alt="Hero image showing a sleek laptop displaying a vibrant website builder interface with colorful templates and drag-and-drop elements"
          className="mt-10 aspect-video w-full rounded-lg border border-border object-cover"
        />
        <a
          href="/signup"
          className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-semibold text-primary-foreground transition-colors hover:opacity-90"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}