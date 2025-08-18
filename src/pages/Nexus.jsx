import AnimatedTitle from "../components/AnimatedTitle";
import VideoPreview from "../components/VideoPreview";
import Reveal from "../components/Reveal";
import { useRef } from "react";
import useInViewMedia from "../hooks/useInViewMedia";

const Nexus = () => {
  const videoRef = useRef(null);
  useInViewMedia(videoRef);

  return (
    <section className="bg-black text-blue-50 pt-28">
      <div className="container mx-auto px-5 md:px-10">
        <Reveal>
          <p className="font-general text-sm uppercase opacity-70">Nexus</p>
        </Reveal>
        <Reveal>
          <AnimatedTitle
            title="soc<b>i</b>al l<b>a</b>yer f<b>o</b>r c<b>o</b>mmunities"
            containerClass="mt-5 !text-white"
          />
        </Reveal>

        <Reveal from="up" distance={32}>
          <div className="relative my-16 h-[60vh] w-full overflow-hidden rounded-2xl border-hsla">
            <VideoPreview>
              <video
                ref={videoRef}
                src="/videos/feature-3.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="absolute left-0 top-0 size-full object-cover object-center"
              />
            </VideoPreview>
          </div>
        </Reveal>

        <div className="grid gap-10 md:grid-cols-3">
          {[{
            title: "Parties",
            desc: "Form guild-like groups to raid quests and share rewards.",
            img: "/img/gallery-1.webp"
          },{
            title: "Quests",
            desc: "Weekly objectives that encourage collaboration and discovery.",
            img: "/img/gallery-2.webp"
          },{
            title: "Leaderboards",
            desc: "Celebrate excellence with fair, seasonal rankings.",
            img: "/img/gallery-3.webp"
          }].map((card, i) => (
            <Reveal key={card.title} from={i % 2 ? "up" : "down"}>
              <div className="border-hsla overflow-hidden rounded-xl">
                <img src={card.img} alt={card.title} className="h-48 w-full object-cover" loading="lazy" />
                <div className="p-5">
                  <h3 className="bento-title text-white mb-2">{card.title}</h3>
                  <p className="font-circular-web text-blue-50/70">{card.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-12 max-w-2xl font-circular-web text-blue-50/70">
            Nexus introduces playful social mechanics, layered on top of your existing
            communities. Earn, level up, and unlock perks while staying connected.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Nexus;


