import AnimatedTitle from "../components/AnimatedTitle";
import Reveal from "../components/Reveal";
import { TiLocationArrow } from "react-icons/ti";

const Vault = () => {
  return (
    <section className="pt-28">
      <div className="container mx-auto px-5 md:px-10">
        <Reveal><p className="font-general text-sm uppercase">Vault</p></Reveal>
        <Reveal>
          <AnimatedTitle
            title="c<b>o</b>llect & e<b>a</b>rn in the m<b>e</b>tagame"
            containerClass="mt-5 !text-black"
          />
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Reveal key={i} from={i % 2 ? "left" : "right"}>
              <div className="border-hsla group relative h-56 overflow-hidden rounded-xl bg-white">
                <img
                  src={`/img/gallery-${(i % 5) + 1}.webp`}
                  alt={`collectible ${i + 1}`}
                  loading="lazy"
                  className="absolute left-0 top-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white">
                  <TiLocationArrow aria-hidden="true" />
                  <span className="font-circular-web text-sm">view</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <div className="border-hsla overflow-hidden rounded-2xl bg-blue-50/10 p-8">
              <h3 className="bento-title mb-3">rewards</h3>
              <p className="font-circular-web text-neutral-700">
                Earn badges and seasonal rewards through quests and community events. Your vault
                is your on-chain showcase.
              </p>
            </div>
            <div className="border-hsla overflow-hidden rounded-2xl">
              <img src="/img/gallery-4.webp" alt="rewards" className="h-64 w-full object-cover" loading="lazy" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Vault;


