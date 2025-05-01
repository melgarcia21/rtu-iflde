import {
  IdentificationIcon,
  BookOpenIcon,
  CloudArrowUpIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";


const features = [
  {
    name: "Assess Needs",
    description:
      "We identify your educational requirements and career goals",
    icon: IdentificationIcon,
  },
  {
    name: "Design Programs",
    description:
      "Programs are crafted using research-backed methods and benchmarking",
    icon: BookOpenIcon,
  },
  {
    name: "Deliver Flexibly",
    description:
      "Learn through various modalities that fit your schedule",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Ensure Quality",
    description:
      "Continuous monitoring and improvement of learning outcomes",
    icon: CheckBadgeIcon,
  },
];

const HowItWorks = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            How FlexiLearnPro Works
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;