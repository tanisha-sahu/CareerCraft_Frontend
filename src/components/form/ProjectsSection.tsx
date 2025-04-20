import React from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';
import FloatingInput from './FloatingInput';
import FloatingTextarea from './FloatingTextarea';
import { PortfolioFormData } from '../../types';

const ProjectsSection: React.FC = () => {
  const { register, control } = useFormContext<PortfolioFormData>();

  if (!control) {
    console.error("ProjectsSection: control is null or undefined");
    return null;
  }

  const { fields: projectFields, append: addProject, remove: removeProject } = useFieldArray({
    control,
    name: 'projects',
  });

  return (
    <fieldset className="border p-4 rounded space-y-4">
      <legend className="text-2xl font-semibold mb-2">Projects</legend>
      {projectFields.map((field, index) => (
        <div key={field.id} className="border p-4 rounded space-y-4">
          <FloatingInput
            id={`project-title-${index}`}
            label="Title"
            registerReturn={register(`projects.${index}.title`, { required: "Required" })}
            required
          />
          <FloatingTextarea
            id={`project-description-${index}`}
            label="Description"
            registerReturn={register(`projects.${index}.description`, { required: "Required" })}
            required
          />
          <FloatingInput
            id={`project-techStack-${index}`}
            label="Tech Stack (comma-separated)"
            registerReturn={register(`projects.${index}.techStack`, { required: "Required" })}
            required
          />
          <FloatingInput
            id={`project-liveUrl-${index}`}
            label="Live URL"
            registerReturn={register(`projects.${index}.liveUrl`)}
          />
          <FloatingInput
            id={`project-githubUrl-${index}`}
            label="GitHub URL"
            registerReturn={register(`projects.${index}.githubUrl`)}
          />
          <FloatingInput
            id={`project-image-${index}`}
            label="Image URL"
            registerReturn={register(`projects.${index}.image`)}
          />
          <div className="flex items-center gap-4">
            <span className="text-gray-700 font-medium">Featured:</span>
            <input
              type="checkbox"
              id={`project-featured-${index}`}
              {...register(`projects.${index}.featured`)}
              className="h-5 w-5 text-blue-600 border-gray-300 rounded"
            />
          </div>
          <span
            onClick={() => removeProject(index)}
            className="cursor-pointer text-blue-500 hover:underline font-medium"
          >
            Remove Project
          </span>
        </div>
      ))}
      <div>
        <span
          onClick={() =>
            addProject({
              title: '',
              description: '',
              techStack: [],
              liveUrl: '',
              githubUrl: '',
              image: '',
              featured: false,
            })
          }
          className="cursor-pointer text-blue-500 hover:underline font-medium"
        >
          Add Project
        </span>
      </div>
    </fieldset>
  );
};

export default ProjectsSection;
