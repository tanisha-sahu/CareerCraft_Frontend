import React from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';
import FloatingInput from './FloatingInput';
import { PortfolioFormData } from '../../types';

const CertificationsSection: React.FC = () => {
  const { register, control } = useFormContext<PortfolioFormData>();

  if (!control) {
    console.error("CertificationsSection: control is null or undefined");
    return null;
  }

  const { fields: certFields, append: addCert, remove: removeCert } = useFieldArray({
    control,
    name: 'certifications',
  });

  return (
    <fieldset className="border p-4 rounded space-y-4">
      <legend className="text-2xl font-semibold mb-2">Certifications</legend>
      {certFields.map((field, index) => (
        <div key={field.id} className="border p-4 rounded space-y-4">
          <FloatingInput
            id={`cert-title-${index}`}
            label="Title"
            registerReturn={register(`certifications.${index}.title`, { required: "Required" })}
            required
          />
          <FloatingInput
            id={`cert-issuer-${index}`}
            label="Issuer"
            registerReturn={register(`certifications.${index}.issuer`, { required: "Required" })}
            required
          />
          <FloatingInput
            id={`cert-issueDate-${index}`}
            label="Issue Date"
            registerReturn={register(`certifications.${index}.issueDate`, { required: "Required" })}
            required
          />
          <FloatingInput
            id={`cert-certificateUrl-${index}`}
            label="Certificate URL"
            registerReturn={register(`certifications.${index}.certificateUrl`, { required: "Required" })}
            required
          />
          <span
            onClick={() => removeCert(index)}
            className="cursor-pointer text-blue-500 hover:underline font-medium"
          >
            Remove
          </span>
        </div>
      ))}
      <div>
        <span
          onClick={() => addCert({ title: '', issuer: '', issueDate: '', certificateUrl: '' })}
          className="cursor-pointer text-blue-500 hover:underline font-medium"
        >
          Add Certification
        </span>
      </div>
    </fieldset>
  );
};

export default CertificationsSection;
