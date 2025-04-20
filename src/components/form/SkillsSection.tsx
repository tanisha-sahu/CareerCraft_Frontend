import React from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';
import FloatingInput from './FloatingInput';
import { PortfolioFormData } from '../../types';

const SkillsSection: React.FC = () => {
  const { register, control } = useFormContext<PortfolioFormData>();

  if (!control) {
    console.error("SkillsSection: control is null or undefined");
    return null;
  }

  const { fields: skillFields, append: addSkill, remove: removeSkill } = useFieldArray({
    control,
    name: 'skills',
  });

  return (
    <fieldset className="border p-4 rounded space-y-4">
      <legend className="text-2xl font-semibold mb-2">Skills</legend>
      {skillFields.map((field, index) => (
        <div key={field.id} className="flex flex-col md:flex-row items-center gap-4">
          <FloatingInput
            id={`skill-name-${index}`}
            label="Skill Name"
            registerReturn={register(`skills.${index}.name`, { required: "Required" })}
            required
            className="flex-1"
          />
            <FloatingInput
              id={`skill-category-${index}`}
              label="Category"
              registerReturn={register(`skills.${index}.category`, { required: "Required" })}
              required
              className="flex-1"
            />
          {/* <div className="relative z-0 w-full mb-5 group flex-1"> */}
            <select
              id={`skill-level-${index}`}
              {...register(`skills.${index}.level`, { required: "Required" })}
              className="mb-2.5 block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 
                         focus:border-blue-600 focus:outline-none focus:ring-0 peer"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          {/* </div> */}
          <span
            onClick={() => removeSkill(index)}
            className="cursor-pointer text-blue-500 hover:underline font-medium"
          >
            Remove
          </span>
        </div>
      ))}
      <div>
        <span
          onClick={() => addSkill({ name: '', level: 'Beginner', category: '' })}
          className="cursor-pointer text-blue-500 hover:underline font-medium"
        >
          Add Skill
        </span>
      </div>
    </fieldset>
  );
};

export default SkillsSection;
