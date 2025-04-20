// DynamicPortfolioForm.tsx
import React, { useState } from 'react';
import { useForm, useFieldArray, SubmitHandler, UseFormRegisterReturn } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { IUserPortfolio } from '../../types';

type PortfolioFormData = Omit<IUserPortfolio, 'userId' | 'createdAt'>;

interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    registerReturn: UseFormRegisterReturn;
    id: string;
}

const FloatingInput: React.FC<FloatingInputProps> = ({
    label,
    registerReturn,
    id,
    type = "text",
    ...rest
}) => (
    <div className="relative z-0 w-full mb-5 group">
        <input
            type={type}
            id={id}
            {...registerReturn}
            {...rest}
            placeholder=" "
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 
                      appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        />
        <label
            htmlFor={id}
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0]
                      peer-focus:left-0 peer-focus:text-blue-600
                      peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
        >
            {label}
        </label>
    </div>
);

interface FloatingTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    registerReturn: UseFormRegisterReturn;
    id: string;
}

const FloatingTextarea: React.FC<FloatingTextareaProps> = ({
    label,
    registerReturn,
    id,
    ...rest
}) => (
    <div className="relative z-0 w-full mb-5 group">
        <textarea
            id={id}
            {...registerReturn}
            {...rest}
            placeholder=" "
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 
                      appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer resize-none"
        />
        <label
            htmlFor={id}
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0]
                      peer-focus:left-0 peer-focus:text-blue-600
                      peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
        >
            {label}
        </label>
    </div>
);

const DynamicPortfolioForm: React.FC = () => {
    const { register, control, handleSubmit } = useForm<PortfolioFormData>({
        defaultValues: {
            personalInfo: {
                fullName: '',
                email: '',
                phone: '',
                location: '',
                bio: '',
                profileImage: '',
                resumeLink: '',
                socialLinks: [{ platform: '', url: '' }],
            },
            skills: [],
            projects: [],
            education: [],
            experience: [],
            certifications: [],
            achievements: [],
        },
    });

    // Router hook for navigation
    const navigate = useNavigate();

    // Loading state to show a spinner or loading animation
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // Dynamic Social Links
    const { fields: socialFields, append: addSocial, remove: removeSocial } = useFieldArray({
        control,
        name: 'personalInfo.socialLinks',
    });

    // Dynamic Skills
    const { fields: skillFields, append: addSkill, remove: removeSkill } = useFieldArray({
        control,
        name: 'skills',
    });

    // Dynamic Projects
    const { fields: projectFields, append: addProject, remove: removeProject } = useFieldArray({
        control,
        name: 'projects',
    });

    // Dynamic Education
    const { fields: educationFields, append: addEducation, remove: removeEducation } = useFieldArray({
        control,
        name: 'education',
    });

    // Dynamic Experience
    const { fields: experienceFields, append: addExperience, remove: removeExperience } = useFieldArray({
        control,
        name: 'experience',
    });

    // Dynamic Certifications
    const { fields: certFields, append: addCert, remove: removeCert } = useFieldArray({
        control,
        name: 'certifications',
    });

    // Dynamic Achievements
    const { fields: achievementFields, append: addAchievement, remove: removeAchievement } = useFieldArray({
        control,
        name: 'achievements',
    });

    const onSubmit: SubmitHandler<PortfolioFormData> = async (data) => {
        setIsLoading(true);
        try {
            // Replace the URL with your backend API endpoint.
            const response = await fetch('https://api.example.com/portfolio', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                // Navigate to the portfolio route after successful submission.
                navigate('/portfolio');
            } else {
                // Handle API errors here.
                console.error('Failed to submit:', response.statusText);
            }
        } catch (error) {
            console.error('Error during submission:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-5xl mx-auto p-8 bg-white shadow-lg rounded space-y-10">
            <h1 className="text-3xl font-bold text-center mb-8">Portfolio Form</h1>

            {/* PERSONAL INFO */}
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
                    />
                    <FloatingInput
                        id="location"
                        label="Location"
                        registerReturn={register("personalInfo.location")}
                    />
                    <FloatingTextarea
                        id="bio"
                        label="Bio"
                        registerReturn={register("personalInfo.bio")}
                    />
                    <div className="max-w-lg">
                        <label
                            htmlFor="profileImage"
                            className="block mb-2 text-sm font-semibold text-gray-900"
                        >
                            Upload file
                        </label>
                        <input
                            id="profileImage"
                            type="file"
                            accept="image/*"
                            {...register("personalInfo.profileImage")}
                            className="block w-full text-sm text-gray-900 bg-white border border-gray-300 rounded-md px-4 py-2 cursor-pointer 
                                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <FloatingInput
                        id="resumeLink"
                        label="Resume Link"
                        registerReturn={register("personalInfo.resumeLink")}
                    />
                </div>

                {/* Social Links */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Social Links</h3>
                    {socialFields.map((field, index) => (
                        <div key={field.id} className="flex flex-col md:flex-row items-center gap-4">
                            <FloatingInput
                                id={`social-platform-${index}`}
                                label="Platform"
                                registerReturn={register(`personalInfo.socialLinks.${index}.platform` as const, { required: "Required" })}
                                required
                                className="flex-1"
                            />
                            <FloatingInput
                                id={`social-url-${index}`}
                                label="URL"
                                registerReturn={register(`personalInfo.socialLinks.${index}.url` as const, { required: "Required" })}
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

            {/* SKILLS */}
            <fieldset className="border p-4 rounded space-y-4">
                <legend className="text-2xl font-semibold mb-2">Skills</legend>
                {skillFields.map((field, index) => (
                    <div key={field.id} className="flex flex-col md:flex-row items-center gap-4">
                        <FloatingInput
                            id={`skill-name-${index}`}
                            label="Skill Name"
                            registerReturn={register(`skills.${index}.name` as const, { required: "Required" })}
                            required
                            className="flex-1"
                        />
                        <div className="relative z-0 w-full mb-5 group flex-1">
                            <select
                                id={`skill-level-${index}`}
                                {...register(`skills.${index}.level` as const, { required: "Required" })}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 
                                       focus:border-blue-600 focus:outline-none focus:ring-0 peer"
                            >
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advanced">Advanced</option>
                            </select>
                            <label
                                htmlFor={`skill-level-${index}`}
                                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0]
                                       peer-focus:left-0 peer-focus:text-blue-600
                                       peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
                            >
                                Level
                            </label>
                        </div>
                        <FloatingInput
                            id={`skill-category-${index}`}
                            label="Category"
                            registerReturn={register(`skills.${index}.category` as const, { required: "Required" })}
                            required
                            className="flex-1"
                        />
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

            {/* PROJECTS */}
            <fieldset className="border p-4 rounded space-y-4">
                <legend className="text-2xl font-semibold mb-2">Projects</legend>
                {projectFields.map((field, index) => (
                    <div key={field.id} className="border p-4 rounded space-y-4">
                        <FloatingInput
                            id={`project-title-${index}`}
                            label="Title"
                            registerReturn={register(`projects.${index}.title` as const, { required: "Required" })}
                            required
                        />
                        <FloatingTextarea
                            id={`project-description-${index}`}
                            label="Description"
                            registerReturn={register(`projects.${index}.description` as const, { required: "Required" })}
                            required
                        />
                        <FloatingInput
                            id={`project-techStack-${index}`}
                            label="Tech Stack (comma-separated)"
                            registerReturn={register(`projects.${index}.techStack` as const, { required: "Required" })}
                            required
                        />
                        <FloatingInput
                            id={`project-liveUrl-${index}`}
                            label="Live URL"
                            registerReturn={register(`projects.${index}.liveUrl` as const)}
                        />
                        <FloatingInput
                            id={`project-githubUrl-${index}`}
                            label="GitHub URL"
                            registerReturn={register(`projects.${index}.githubUrl` as const)}
                        />
                        <FloatingInput
                            id={`project-image-${index}`}
                            label="Image URL"
                            registerReturn={register(`projects.${index}.image` as const)}
                        />
                        <div className="flex items-center gap-4">
                            <span className="text-gray-700 font-medium">Featured:</span>
                            <input
                                type="checkbox"
                                id={`project-featured-${index}`}
                                {...register(`projects.${index}.featured` as const)}
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

            {/* EDUCATION */}
            <fieldset className="border p-4 rounded space-y-4">
                <legend className="text-2xl font-semibold mb-2">Education</legend>
                {educationFields.map((field, index) => (
                    <div key={field.id} className="border p-4 rounded space-y-4">
                        <FloatingInput
                            id={`education-institution-${index}`}
                            label="Institution"
                            registerReturn={register(`education.${index}.institution` as const, { required: "Required" })}
                            required
                        />
                        <FloatingInput
                            id={`education-degree-${index}`}
                            label="Degree"
                            registerReturn={register(`education.${index}.degree` as const, { required: "Required" })}
                            required
                        />
                        <FloatingInput
                            id={`education-fieldOfStudy-${index}`}
                            label="Field of Study"
                            registerReturn={register(`education.${index}.fieldOfStudy` as const, { required: "Required" })}
                            required
                        />
                        <div className="grid grid-cols-2 gap-4">
                            <FloatingInput
                                id={`education-startDate-${index}`}
                                label="Start Date"
                                registerReturn={register(`education.${index}.startDate` as const, { required: "Required" })}
                                required
                            />
                            <FloatingInput
                                id={`education-endDate-${index}`}
                                label="End Date"
                                registerReturn={register(`education.${index}.endDate` as const, { required: "Required" })}
                                required
                            />
                        </div>
                        <FloatingInput
                            id={`education-grade-${index}`}
                            label="Grade"
                            registerReturn={register(`education.${index}.grade` as const, { required: "Required" })}
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

            {/* EXPERIENCE */}
            <fieldset className="border p-4 rounded space-y-4">
                <legend className="text-2xl font-semibold mb-2">Experience</legend>
                {experienceFields.map((field, index) => (
                    <div key={field.id} className="border p-4 rounded space-y-4">
                        <FloatingInput
                            id={`experience-title-${index}`}
                            label="Title"
                            registerReturn={register(`experience.${index}.title` as const, { required: "Required" })}
                            required
                        />
                        <FloatingInput
                            id={`experience-company-${index}`}
                            label="Company"
                            registerReturn={register(`experience.${index}.company` as const, { required: "Required" })}
                            required
                        />
                        <FloatingInput
                            id={`experience-location-${index}`}
                            label="Location"
                            registerReturn={register(`experience.${index}.location` as const, { required: "Required" })}
                            required
                        />
                        <div className="grid grid-cols-2 gap-4">
                            <FloatingInput
                                id={`experience-startDate-${index}`}
                                label="Start Date"
                                registerReturn={register(`experience.${index}.startDate` as const, { required: "Required" })}
                                required
                            />
                            <FloatingInput
                                id={`experience-endDate-${index}`}
                                label="End Date"
                                registerReturn={register(`experience.${index}.endDate` as const, { required: "Required" })}
                                required
                            />
                        </div>
                        <FloatingTextarea
                            id={`experience-description-${index}`}
                            label="Description"
                            registerReturn={register(`experience.${index}.description` as const, { required: "Required" })}
                            required
                        />
                        <div className="relative z-0 w-full mb-5 group">
                            <select
                                id={`experience-type-${index}`}
                                {...register(`experience.${index}.type` as const, { required: "Required" })}
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

            {/* CERTIFICATIONS */}
            <fieldset className="border p-4 rounded space-y-4">
                <legend className="text-2xl font-semibold mb-2">Certifications</legend>
                {certFields.map((field, index) => (
                    <div key={field.id} className="border p-4 rounded space-y-4">
                        <FloatingInput
                            id={`cert-title-${index}`}
                            label="Title"
                            registerReturn={register(`certifications.${index}.title` as const, { required: "Required" })}
                            required
                        />
                        <FloatingInput
                            id={`cert-issuer-${index}`}
                            label="Issuer"
                            registerReturn={register(`certifications.${index}.issuer` as const, { required: "Required" })}
                            required
                        />
                        <FloatingInput
                            id={`cert-issueDate-${index}`}
                            label="Issue Date"
                            registerReturn={register(`certifications.${index}.issueDate` as const, { required: "Required" })}
                            required
                        />
                        <FloatingInput
                            id={`cert-certificateUrl-${index}`}
                            label="Certificate URL"
                            registerReturn={register(`certifications.${index}.certificateUrl` as const, { required: "Required" })}
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

            {/* ACHIEVEMENTS */}
            <fieldset className="border p-4 rounded space-y-4">
                <legend className="text-2xl font-semibold mb-2">Achievements</legend>
                {achievementFields.map((field, index) => (
                    <div key={field.id} className="border p-4 rounded space-y-4">
                        <FloatingInput
                            id={`achieve-title-${index}`}
                            label="Title"
                            registerReturn={register(`achievements.${index}.title` as const, { required: "Required" })}
                            required
                        />
                        <FloatingTextarea
                            id={`achieve-description-${index}`}
                            label="Description"
                            registerReturn={register(`achievements.${index}.description` as const, { required: "Required" })}
                            required
                        />
                        <FloatingInput
                            id={`achieve-date-${index}`}
                            label="Date"
                            registerReturn={register(`achievements.${index}.date` as const, { required: "Required" })}
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

            {/* Submit Button & Loading Animation */}
            <div className="relative">
                <button 
                    type="submit" 
                    className={`w-full py-3 mt-4 text-white font-bold bg-green-600 hover:bg-green-700 rounded transition ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={isLoading}
                >
                    Submit Portfolio
                </button>
                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        {/* Simple loading spinner */}
                        <svg className="animate-spin h-8 w-8 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                        </svg>
                    </div>
                )}
            </div>
        </form>
    );
};

export default DynamicPortfolioForm;
