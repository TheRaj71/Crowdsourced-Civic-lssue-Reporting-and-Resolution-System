import { cn } from "@/lib/utils";
import { TypingAnimation } from "@/components/ui/typing-animation";
import {
  IconMapPin,
  IconCamera,
  IconBell,
  IconShield,
  IconClock,
  IconUsers,
  IconDeviceMobile,
  IconChartBar,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Instant Issue Reporting",
      description:
        "Report civic issues instantly with just a few taps. From potholes to streetlight failures, make your voice heard.",
      icon: <IconMapPin className="h-5 w-5" />,
    },
    {
      title: "Photo Evidence Support",
      description:
        "Capture and upload photos directly from your device to provide clear evidence of the issue.",
      icon: <IconCamera className="h-5 w-5" />,
    },
    {
      title: "Real-time Notifications",
      description:
        "Get instant updates on your reported issues. Stay informed about progress and resolution status.",
      icon: <IconBell className="h-5 w-5" />,
    },
    {
      title: "Secure & Private",
      description: 
        "Your personal information is protected with government-grade security. Report issues with confidence.",
      icon: <IconShield className="h-5 w-5" />,
    },
    {
      title: "24/7 Availability",
      description: 
        "Report issues anytime, anywhere. Our platform works round the clock to serve Jharkhand citizens.",
      icon: <IconClock className="h-5 w-5" />,
    },
    {
      title: "Community Driven",
      description:
        "Join thousands of citizens working together to improve our cities. See issues reported in your area.",
      icon: <IconUsers className="h-5 w-5" />,
    },
    {
      title: "Mobile First Design",
      description:
        "Optimized for mobile devices with offline capability. Works on any smartphone or computer.",
      icon: <IconDeviceMobile className="h-5 w-5" />,
    },
    {
      title: "Analytics & Insights",
      description: 
        "Track resolution rates and civic improvements in your area with comprehensive analytics and reports.",
      icon: <IconChartBar className="h-5 w-5" />,
    },
  ];

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 mb-4">
            <IconMapPin className="mr-2 h-3 w-3" />
            Government of Jharkhand Initiative
          </div>
          <TypingAnimation
            as="h2"
            startOnView={true}
            highlightFirstWordClass="text-green-600"
            className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl mb-6"
          >
            Empowering Citizens Through Technology
          </TypingAnimation>
          <p className="text-lg leading-8 text-neutral-600 dark:text-neutral-400">
            A comprehensive platform designed to bridge the gap between citizens and government, 
            making civic issue reporting simple, transparent, and effective.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden bg-white dark:bg-neutral-950">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 rounded-lg border border-blue-200 bg-blue-50 px-4 py-3 shadow-sm dark:border-blue-800 dark:bg-blue-950">
            <div className="flex -space-x-2">
              <div className="h-6 w-6 rounded-full bg-blue-500 border-2 border-white dark:border-blue-950"></div>
              <div className="h-6 w-6 rounded-full bg-green-500 border-2 border-white dark:border-blue-950"></div>
              <div className="h-6 w-6 rounded-full bg-orange-500 border-2 border-white dark:border-blue-950"></div>
            </div>
            <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
              Join 4.06 crore citizens shaping the future and making a difference
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "relative flex flex-col p-8 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900/50",
        // Border logic for grid layout
        "border-neutral-200 dark:border-neutral-800",
        // Right borders for all except last column
        index % 4 !== 3 && "border-r",
        // Bottom borders for all except last row
        index < 4 && "border-b"
      )}
    >
      {/* Icon */}
      <div className="mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-400">
        {description}
      </p>
    </div>
  );
};
