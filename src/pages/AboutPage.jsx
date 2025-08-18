import AnimatedTitle from "../components/AnimatedTitle";
import Reveal from "../components/Reveal";

const AboutPage = () => {
  return (
    <section className="pt-28">
      <div className="container mx-auto px-5 md:px-10">
        <Reveal><p className="font-general text-sm uppercase">About</p></Reveal>
        <Reveal>
          <AnimatedTitle
            title="welc<b>o</b>me t<b>o</b> z<b>e</b>ntry"
            containerClass="mt-5 !text-black"
          />
        </Reveal>
        <div className="mt-6 grid gap-10 md:grid-cols-2">
          <Reveal from="left">
            <p className="max-w-2xl font-circular-web text-neutral-700">
              We connect every player into a shared play economy, across games and
              worlds. This page mirrors the home design language but gives more room
              for narrative and brand.
            </p>
          </Reveal>
          <Reveal from="right">
            <div className="border-hsla overflow-hidden rounded-xl">
              <img src="/img/entrance.webp" alt="brand world" className="h-64 w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;


