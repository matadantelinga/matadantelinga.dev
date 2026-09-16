export function About() {
  return (
    <section className="container-edit py-24 md:py-32 border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.02]">
            I CARE ABOUT
            <br />
            THE DETAILS <span className="text-blue">PEOPLE</span>
            <br />
            DON&apos;T NOTICE.
          </h2>
        </div>
        <div className="lg:col-span-5 space-y-5 text-secondary">
          <p>
            I&apos;m a frontend developer and designer who enjoys turning ideas
            into digital experiences that feel simple, thoughtful, and
            purposeful.
          </p>
          <p>
            My work covers frontend development, UI/UX design, graphic design,
            and logo design — from shaping how a product looks and feels to
            bringing the interface to life with clean, maintainable code.
          </p>
          <p>
            For projects that require more than frontend and design, I work with
            a team of backend and mobile developers to build the complete
            experience.
          </p>
        </div>
      </div>
    </section>
  );
}
