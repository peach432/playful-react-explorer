import { Code, Layout, Zap } from "lucide-react";

const features = [
  {
    icon: <Layout className="h-6 w-6" />,
    title: "Responsive Design",
    description: "Looks great on any device, from mobile to desktop.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Fast Performance",
    description: "Optimized for speed and smooth user experience.",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Modern Stack",
    description: "Built with React, TypeScript, and Tailwind CSS.",
  },
];

const Features = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 animate-slideUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <div className="text-primary">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;