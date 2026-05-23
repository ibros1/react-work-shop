import React from "react";
import { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    role: "",
    yrsOfExp: "",
    skills: [],
    terms: false,
    notification: false,
  });

  const [errors, setErrors] = useState({});
  console.log(errors);
  const handleErrors = (name, value) => {
    let error = " ";
    if (name === "fullname") {
      if (!value.trim()) {
        error = "full name is required!";
      } else if (!/^[a-zA-Z\s]{2,30}$/.test(value)) {
        error = "Please enter a valid name (2-30 characters, letters only)";
      }
    }
    if (name === "email") {
      if (!value) {
        error = "email is required!";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Please enter a valid email address";
      }
    }
    if (name === "role") {
      if (!value || value === "Select Option") {
        error = "role is required";
      }
    }

    if (name === "yrsOfExp") {
      if (!value) {
        error = "Experience is required!";
      }
    }

    if (name === "skills") {
      if (!value) {
        error = "skills is required!";
      }
    }
    if (name === "terms") {
      if (!value) {
        error = "You must agree to the terms";
      }
    }

    return error;
  };

  const skillOptions = [
    "React",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Python",
    "Java",
    "UI Design",
    "API Development",
  ];
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type == "checkbox" ? checked : value;

    setFormData((prev) => ({ ...prev, [name]: newValue }));
    const errors = handleErrors(name, newValue);

    setErrors((prev) => ({
      ...prev,
      [name]: errors,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const formErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = handleErrors(key, formData[key]);
      if (error) {
        formErrors[key] = error;
      }
    });

    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted:", formData);
      // Handle successful submission
    } else {
      setErrors(formErrors);
    }
  };

  const hanleSkillChange = (skill) => {
    const newSkills = formData.skills.includes(skill)
      ? formData.skills.filter((s) => s !== skill)
      : [...formData.skills, skill];
    console.log(newSkills);
    setFormData((prev) => ({
      ...prev,
      skills: newSkills,
    }));
  };
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-4 px-4">
      <div className=" w-full  md-w-[80%] lg:w-[60%] xl:w-[30%] h-full mx-auto bg-white py-8 px-6 border border-gray-300 rounded-lg  ">
        <h1 className="text-3xl font-semibold text-center py-4 ">
          Developer Application Form
        </h1>
        <form action="" className="space-y-3">
          <div className="grid">
            <label htmlFor="">Full Name</label>
            <input
              className="py-2 border px-2 border-gray-300 rounded-md"
              type="text"
              name="fullname"
              value={formData.fullname}
              placeholder="Enter your full name"
              onChange={handleChange}
            />
            {errors.fullname && (
              <p className="text-red-600"> {errors.fullname} </p>
            )}
          </div>
          <div className="grid">
            <label htmlFor="">Email</label>
            <input
              className="py-2 border px-2 border-gray-300 rounded-md"
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-600"> {errors.email} </p>}
          </div>
          <div className="grid">
            <label htmlFor="">Role</label>
            <select
              name="role"
              value={formData.role}
              id=""
              className="py-2 border px-2 border-gray-300 rounded-md"
              onChange={handleChange}
            >
              <option>Select Option</option>
              <option>Frontend Developer</option>
              <option>Backend Developer</option>
              <option>Full Stack Developer</option>
            </select>
            {errors.role && <p className="text-red-600"> {errors.role} </p>}
          </div>
          <div className="grid">
            <label htmlFor="">years of experience</label>
            <input
              className="py-2 border px-2 border-gray-300 rounded-md"
              type="text"
              name="yrsOfExp"
              value={formData.yrsOfExp}
              placeholder="Enter years of experience"
              onChange={handleChange}
            />
            {errors.yrsOfExp && (
              <p className="text-red-600"> {errors.yrsOfExp} </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">
              Skills
            </label>
            <div className="grid grid-cols-2 gap-4">
              {skillOptions.map((skill) => (
                <label key={skill} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.skills.includes(skill)}
                    className="h-4 w-4 rounded border-zinc-300 text-blue-600 focus:ring-blue-500"
                    onChange={() => hanleSkillChange(skill)}
                  />
                  <span className="text-sm text-zinc-600">{skill}</span>
                </label>
              ))}
              {errors.Skills && (
                <p className="text-red-600"> {errors.Skills} </p>
              )}
            </div>
          </div>

          <div className="flex gap-2 pt-6">
            <input
              type="checkbox"
              name="terms"
              value={formData.terms}
              onChange={handleChange}
            />
            <p>i agree to the terms and conditions</p>
            {errors.terms && <p className="text-red-600"> {errors.terms} </p>}
          </div>

          <div className="flex gap-2 py-2">
            <input
              type="checkbox"
              value={formData.notification}
              name="notification"
              onChange={handleChange}
            />
            <p>Recieve notifications about new apportunities</p>
          </div>
          <button
            onClick={handleSubmit}
            className="bg-rose-600 w-full py-2 text-white font-semibold rounded-md cursor-pointer "
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
