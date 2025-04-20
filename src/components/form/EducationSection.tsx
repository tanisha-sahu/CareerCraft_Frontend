import React from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';
import FloatingInput from './FloatingInput';
import { PortfolioFormData } from '../../types';

const EducationSection: React.FC = () => {
  const { register, control } = useFormContext<PortfolioFormData>();

  if (!control) {
    console.error("EducationSection: control is null or undefined");
    return null;
  }

  const { fields: educationFields, append: addEducation, remove: removeEducation } = useFieldArray({
    control,
    name: 'education',
  });

  return (
    <fieldset className="border p-4 rounded space-y-4">
      <legend className="text-2xl font-semibold mb-2">Education</legend>
      {educationFields.map((field, index) => (
        <div key={field.id} className="border p-4 rounded space-y-4">
          <FloatingInput
            id={`education-institution-${index}`}
            label="Institution"
            registerReturn={register(`education.${index}.institution`, { required: "Required" })}
            required
          />
          <FloatingInput
            id={`education-degree-${index}`}
            label="Degree"
            registerReturn={register(`education.${index}.degree`, { required: "Required" })}
            required
          />
          <FloatingInput
            id={`education-fieldOfStudy-${index}`}
            label="Field of Study"
            registerReturn={register(`education.${index}.fieldOfStudy`, { required: "Required" })}
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <FloatingInput
              id={`education-startDate-${index}`}
              label="Start Date"
              registerReturn={register(`education.${index}.startDate`, { required: "Required" })}
              required
            />
            <FloatingInput
              id={`education-endDate-${index}`}
              label="End Date"
              registerReturn={register(`education.${index}.endDate`, { required: "Required" })}
              required
            />
          </div>
          <FloatingInput
            id={`education-grade-${index}`}
            label="Grade"
            registerReturn={register(`education.${index}.grade`, { required: "Required" })}
            required
          />
          <span
            onClick={() => removeEducation(index)}
            className="cursor-pointer text-blue-500 hover:underline font-medium"
          >
            Remove
          </span>
        </div>
      ))}
      <div>
        <span
          onClick={() =>
            addEducation({
              institution: '',
              degree: '',
              fieldOfStudy: '',
              startDate: '',
              endDate: '',
              grade: '',
            })
          }
          className="cursor-pointer text-blue-500 hover:underline font-medium"
        >
          Add Education
        </span>
      </div>
    </fieldset>
  );
};

export default EducationSection;
