import React from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';
import FloatingInput from './FloatingInput';
import FloatingTextarea from './FloatingTextarea';
import { PortfolioFormData } from '../../types';

const ExperienceSection: React.FC = () => {
  const { register, control } = useFormContext<PortfolioFormData>();

  if (!control) {
    console.error("ExperienceSection: control is null or undefined");
    return null;
  }

  const { fields: experienceFields, append: addExperience, remove: removeExperience } = useFieldArray({
    control,
    name: 'experience',
  });

  return (
    <fieldset className="border p-4 rounded space-y-4">
      <legend className="text-2xl font-semibold mb-2">Experience</legend>
      {experienceFields.map((field, index) => (
        <div key={field.id} className="border p-4 rounded space-y-4">
          <FloatingInput
            id={`experience-title-${index}`}
            label="Title"
            registerReturn={register(`experience.${index}.title`, { required: "Required" })}
            required
          />
          <FloatingInput
            id={`experience-company-${index}`}
            label="Company"
            registerReturn={register(`experience.${index}.company`, { required: "Required" })}
            required
          />
          <FloatingInput
            id={`experience-location-${index}`}
            label="Location"
            registerReturn={register(`experience.${index}.location`, { required: "Required" })}
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <FloatingInput
              id={`experience-startDate-${index}`}
              label="Start Date"
              registerReturn={register(`experience.${index}.startDate`, { required: "Required" })}
              required
            />
            <FloatingInput
              id={`experience-endDate-${index}`}
              label="End Date"
              registerReturn={register(`experience.${index}.endDate`, { required: "Required" })}
              required
            />
          </div>
          <FloatingTextarea
            id={`experience-description-${index}`}
            label="Description"
            registerReturn={register(`experience.${index}.description`, { required: "Required" })}
            required
          />
          <div className="relative z-0 w-full mb-5 group">
            <select
              id={`experience-type-${index}`}
              {...register(`experience.${index}.type`, { required: "Required" })}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 
                         focus:border-blue-600 focus:outline-none focus:ring-0 peer"
            >
              <option value="Internship">Internship</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Freelance">Freelance</option>
            </select>
            <label
              htmlFor={`experience-type-${index}`}
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0]
                         peer-focus:left-0 peer-focus:text-blue-600
                         peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
            >
              Type
            </label>
          </div>
          <span
            onClick={() => removeExperience(index)}
            className="cursor-pointer text-blue-500 hover:underline font-medium"
          >
            Remove
          </span>
        </div>
      ))}
      <div>
        <span
          onClick={() =>
            addExperience({
              title: '',
              company: '',
              location: '',
              startDate: '',
              endDate: '',
              description: '',
              type: 'Internship',
            })
          }
          className="cursor-pointer text-blue-500 hover:underline font-medium"
        >
          Add Experience
        </span>
      </div>
    </fieldset>
  );
};

export default ExperienceSection;
