
import { StepCard } from "./StepCard";
import { StepConnector } from "./StepConnector";

type Step = {
  id: string;
  number: string;
  heading: string;
  subtext: string;
  showImage?: boolean;
  imageSrc?: string;
};

const steps: Step[] = [
  {
    id: "connect",
    number: "1",
    heading: "Connect Your Screens",
    subtext:
      "No expensive hardware is needed. Plug SignageX into the screens you already own and turn them into AI-ready displays.",
    showImage: true,
    imageSrc: "/images/step-card-one.png",
  },
  {
    id: "craft",
    number: "2",
    heading: "AI-Powered Crafting",
    subtext:
      "Use our AI copilot to describe a vibe, layout, or campaign. SignageX drafts creative options and lets you go live quickly.",
    showImage: true,
    imageSrc: "/images/step-card-two.png",
  },
  {
    id: "dashboard",
    number: "3",
    heading: "Control From Dashboard",
    subtext:
      "Schedule updates, trigger playlists, and monitor device health for one or hundreds of screens from a single live dashboard.",
    showImage: true,
    imageSrc: "/images/step-card-three.png",
  },
  {
    id: "scale",
    number: "4",
    heading: "Scale With SignageX AI",
    subtext:
      "Automate rollouts, integrate third-party data, and unlock AI insights to grow from one storefront to an entire network.",
    showImage: true,
    imageSrc: "/images/step-card-four.png",
  },
];
const ExperienceFlow = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#050014] py-16 md:py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 right-0 h-72 w-72 rounded-full bg-purple-500/30 blur-[200px]" />
        <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-[190px]" />
      </div>
      <div className="container relative mx-auto flex flex-col items-center gap-12 px-4 text-white">
        <div className="relative mt-6 flex w-full flex-col gap-20">
          {steps.map((step, index) => {
            const isOdd = parseInt(step.number, 10) % 2 === 1;
            const isLast = index === steps.length - 1;
            const connectorPath = isOdd
              ? "M160 10 C 320 40 420 120 560 150"
              : "M560 10 C 420 40 320 120 160 150";

            return (
              <div key={step.id} className="relative flex w-full flex-col gap-6 pb-10">
                <StepCard
                    stepNumber={step.number}
                    heading={step.heading}
                    subtext={step.subtext}
                    isOdd={isOdd}
                    showImage={step.showImage}
                    imageSrc={step.imageSrc}
                />

                {!isLast && (
                  <StepConnector stepId={step.id} connectorPath={connectorPath} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceFlow;
