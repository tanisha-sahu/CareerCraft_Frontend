import { useNavigate } from "react-router-dom";

const templates = [
  {
    name: "Dark",
    id: "dark",
    image: "demo1.png",
  },
  {
    name: "Light",
    id: "light",
    image: "demo3.png",
  },
  {
    name: "Feminine",
    id: "modern",
    image: "demo2.png",
  },
];

export default function TemplateSelection() {
  const navigate = useNavigate();

  const handleDemo = (templateId: string) => {
    navigate(`/preview/${templateId}`);
  };

  const handleUseTemplate = (templateId: string) => {
    navigate(`/portfolio/create/${templateId}`);
  };

  return (
    <div className="min-h-screen bg-[#F8F8EC] py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Choose Your Portfolio Style
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {templates.map((template) => (
          <div
            key={template.id}
            className="relative bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden group cursor-pointer transition-shadow duration-300 ease-in-out hover:shadow-xl"
          >
            <img
              src={template.image}
              alt={template.name}
              className="w-full h-44 object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-gray-700">{template.name}</h2>
            </div>

            {/* Smooth Blur Hover Overlay */}
            {/* Buttons for large screens with hover blur */}
            <div
              className="hidden sm:flex absolute inset-0 bg-white/30 backdrop-blur-md items-center justify-center gap-4 
             opacity-0 group-hover:opacity-100 
             transition-opacity duration-500 ease-in-out"
            >
              <div
                onClick={() => handleDemo(template.id)}
                className="px-4 py-2 bg-white text-gray-800 rounded-full text-sm font-medium hover:bg-gray-100 transition-all duration-300 ease-in-out shadow"
              >
                Demo
              </div>
              <div
                onClick={() => handleUseTemplate(template.id)}
                className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-all duration-300 ease-in-out shadow"
              >
                Use This
              </div>
            </div>

            {/* Buttons for small screens at bottom of card */}
            <div className="flex sm:hidden justify-center gap-4 p-4 border-t border-gray-200 bg-white">
              <button
                onClick={() => handleDemo(template.id)}
                className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-200 transition"
              >
                Demo
              </button>
              <button
                onClick={() => handleUseTemplate(template.id)}
                className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition"
              >
                Use This
              </button>
            </div>


          </div>
        ))}
      </div>
    </div>
  );
}
