import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (value) => {
    console.log(value);
    alert("Registration successful!\n" + JSON.stringify(value, null, 2));
  };

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center px-4">
      <form
        action=""
        className=" w-full md:w-[80%] lg:w-[60%] xl:w-[40%] mx-auto px-4 lg:px-6 xl:px-8  bg-white border border-gray-300 rounded-md space-y-2 py-4 pb-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-3xl text-center py-4 font-semibold ">
          Student registration Form
        </h1>
        <div className="grid">
          <label htmlFor="">Students Name</label>
          <input
            className="border py-2 px-2 border-gray-300 rounded-md"
            type="text"
            name=""
            id=""
            placeholder="Enter student name"
            {...register("name", {
              required: "Student name is required!",
            })}
          />
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}
        </div>
        <div className="grid">
          <label htmlFor="">Email</label>
          <input
            className="border py-2 px-2 border-gray-300 rounded-md"
            type="email"
            name=""
            id=""
            placeholder="Enter student email"
            {...register("email", {
              required: "email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "please enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}
        </div>
        <div className="grid">
          <label htmlFor="">Grade Level</label>
          <select
            name=""
            id=""
            className="border py-2 px-2 border-gray-300 rounded-md"
            {...register("grade", {
              required: "Grade is required!",
            })}
          >
            <option value="">Select Grade</option>
            <option>Grade 4</option>
            <option>Grade 5</option>
            <option>Grade 6</option>
            <option>Grade 7</option>
            <option>Grade 8</option>
          </select>
          {errors.grade && (
            <p className="text-red-600">{errors.grade.message}</p>
          )}
        </div>
        <div className="pb-6 ">
          <label className="font-semibold ">Subjects Interest</label>
          <div className="space-y-2 py-2">
            <label className="flex items-center">
              <input
                className="border py-2 px-2 border-gray-300 rounded-md"
                type="checkbox"
                value="math"
                className="mr-2"
                {...register("subjects", {
                  required: "Select at least one subject",
                })}
              />
              Mathematics
            </label>
            <label className="flex items-center">
              <input
                className="border py-2 px-2 border-gray-300 rounded-md"
                type="checkbox"
                value="science"
                className="mr-2"
                {...register("subjects", {
                  required: "Select at least one subject",
                })}
              />
              Science
            </label>
            <label className="flex items-center">
              <input
                className="border py-2 px-2 border-gray-300 rounded-md"
                type="checkbox"
                value="english"
                className="mr-2"
                {...register("subjects", {
                  required: "Select at least one subject",
                })}
              />
              English
            </label>
          </div>
          {errors.subjects && (
            <p className="text-red-600">{errors.subjects.message}</p>
          )}
        </div>
        <button className="bg-rose-600 hover:bg-rose-500 trasition-bg duration-600 text-white font-semibold w-full rounded-md py-2 ">
          {" "}
          Register{" "}
        </button>
      </form>
    </div>
  );
};

export default App;
