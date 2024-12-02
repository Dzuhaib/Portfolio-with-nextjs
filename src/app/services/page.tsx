// pages/services.js
const servicesData = [
  { name: "WordPress", description: "Custom WordPress development and maintenance." },
  { name: "Social Media", description: "Social media integration and management solutions." },
  { name: "Next.js", description: "Building fast, modern web applications with Next.js." },
  { name: "React.js", description: "Creating dynamic UIs with React.js." },
  { name: "HTML", description: "Structuring responsive and accessible web content." },
  { name: "CSS", description: "Styling websites with responsive and modern CSS techniques." },
];

export default function Services() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 py-10 px-5">
      <h1 className="text-4xl font-bold text-orange-600 mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="group relative p-6 bg-white border border-gray-200 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-yellow-50"
          >
            <h2 className="text-2xl4 font-semibold mb-3 group-hover:text-orange-600 transition-colors duration-300">
              {service.name}
            </h2>
            <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
