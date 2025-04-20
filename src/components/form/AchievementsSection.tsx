import React from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';
import FloatingInput from './FloatingInput';
import FloatingTextarea from './FloatingTextarea';
import { PortfolioFormData } from '../../types';

const AchievementsSection: React.FC = () => {
  const { register, control } = useFormContext<PortfolioFormData>();

  if (!control) {
    console.error("AchievementsSection: control is null or undefined");
    return null;
  }

  const { fields: achievementFields, append: addAchievement, remove: removeAchievement } = useFieldArray({
    control,
    name: 'achievements',
  });

  return (
    <fieldset className="border p-4 rounded space-y-4">
      <legend className="text-2xl font-semibold mb-2">Achievements</legend>
      {achievementFields.map((field, index) => (
        <div key={field.id} className="border p-4 rounded space-y-4">
          <FloatingInput
            id={`achieve-title-${index}`}
            label="Title"
            registerReturn={register(`achievements.${index}.title`, { required: "Required" })}
            required
          />
          <FloatingTextarea
            id={`achieve-description-${index}`}
            label="Description"
            registerReturn={register(`achievements.${index}.description`, { required: "Required" })}
            required
          />
          <FloatingInput
            id={`achieve-date-${index}`}
            label="Date"
            registerReturn={register(`achievements.${index}.date`, { required: "Required" })}
            required
          />
          <span
            onClick={() => removeAchievement(index)}
            className="cursor-pointer text-blue-500 hover:underline font-medium"
          >
            Remove
          </span>
        </div>
      ))}
      <div>
        <span
          onClick={() => addAchievement({ title: '', description: '', date: '' })}
          className="cursor-pointer text-blue-500 hover:underline font-medium"
        >
          Add Achievement
        </span>
      </div>
    </fieldset>
  );
};

export default AchievementsSection;
