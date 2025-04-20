import React from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';
import FloatingInput from './FloatingInput';
import FloatingTextarea from './FloatingTextarea';
import { PortfolioFormData } from '../../types';

const PersonalInfoSection: React.FC = () => {
  const { register, control } = useFormContext<PortfolioFormData>();

  // Defensive check; this should never trigger if rendered inside FormProvider.
  if (!control) {
    console.error("PersonalInfoSection: control is null or undefined");
    return null;
  }

  const { fields: socialFields, append: addSocial, remove: removeSocial } = useFieldArray({
    control,
    name: 'personalInfo.socialLinks',
  });

  return (
    <fieldset className="border p-4 rounded space-y-4">
      <legend className="text-2xl font-semibold mb-2">Personal Info</legend>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FloatingInput
          id="fullName"
          label="Full Name"
          registerReturn={register("personalInfo.fullName", { required: "Full name is required" })}
          required
        />
        <FloatingInput
          id="email"
          type="email"
          label="Email"
          registerReturn={register("personalInfo.email", { required: "Email is required" })}
          required
        />
        <FloatingInput
          id="phone"
          label="Phone"
          registerReturn={register("personalInfo.phone")}
          required
        />
        <FloatingInput
          id="location"
          label="Location"
          registerReturn={register("personalInfo.location")}
          required
        />
        <FloatingTextarea
          id="bio"
          label="Bio"
          registerReturn={register("personalInfo.bio")}
          required
        />
        <FloatingInput
          id="resumeLink"
          label="Resume Link"
          registerReturn={register("personalInfo.resumeLink")}
          required
        />
        <FloatingInput
          id="profileImage"
          label="profile Image URL"
          registerReturn={register("personalInfo.profileImage")}
          required
        />
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Social Links</h3>
        {socialFields.map((field, index) => (
          <div key={field.id} className="flex flex-col md:flex-row items-center gap-4">
            <FloatingInput
              id={`social-platform-${index}`}
              label="Platform"
              registerReturn={register(`personalInfo.socialLinks.${index}.platform`, { required: "Required" })}
              required
              className="flex-1"
            />
            <FloatingInput
              id={`social-url-${index}`}
              label="URL"
              registerReturn={register(`personalInfo.socialLinks.${index}.url`, { required: "Required" })}
              required
              className="flex-1"
            />
            <span
              onClick={() => removeSocial(index)}
              className="cursor-pointer text-blue-500 hover:underline font-medium"
            >
              Remove
            </span>
          </div>
        ))}
        <div>
          <span
            onClick={() => addSocial({ platform: '', url: '' })}
            className="cursor-pointer text-blue-500 hover:underline font-medium"
          >
            Add Social Link
          </span>
        </div>
      </div>
    </fieldset>
  );
};

export default PersonalInfoSection;
