import AnimatedTitle from "../components/AnimatedTitle";
import Reveal from "../components/Reveal";
import { useEffect } from "react";
import gsap from "gsap";

const Prologue = () => {
  useEffect(() => {
    gsap.fromTo(
      "#prologue-mask",
      { clipPath: "polygon(0 0,100% 0,100% 100%,0 100%)" },
      {
        clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
        scrollTrigger: {
          trigger: "#prologue-mask",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="pt-28">
      <div className="container mx-auto px-5 md:px-10">
        <Reveal><p className="font-general text-sm uppercase">Prologue</p></Reveal>
        <Reveal>
          <AnimatedTitle
            title="st<b>e</b>p int<b>o</b> the worl<b>d</b>"
            containerClass="mt-5 !text-black"
          />
        </Reveal>

        <div id="prologue-mask" className="relative my-16 h-[60vh] overflow-hidden rounded-xl bg-blue-75">
          <img
            src="/img/stones.webp"
            alt="ancient stones"
            className="absolute left-0 top-0 size-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <Reveal from="left">
            <p className="max-w-2xl font-circular-web text-neutral-700">
              The journey begins with a whisper. Discover the lore, factions, and
              the rules that govern this interconnected universe.
            </p>
          </Reveal>
          <Reveal from="right">
            <div className="border-hsla overflow-hidden rounded-xl">
              <img src="/img/about.webp" alt="lore" className="h-64 w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Prologue;


