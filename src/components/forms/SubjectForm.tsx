"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import Image from "next/image";

const schema = z.object({
  userName: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(20, { message: "Username must be less than 20 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
  firstName: z.string().min(1, { message: "A first name is required" }),
  lastName: z.string().min(1, { message: "A last name is required" }),
  phoneNumber: z.string().min(1, { message: "A phone number is required" }),
  address: z.string().min(1, { message: "An address is required" }),
  bloodType: z.string().min(1, { message: "A blood type is required" }),
  birthday: z.date({ message: "A birthday is required" }),
  img: z.instanceof(File, { message: "A profile picture is required" }),
});

type Inputs = z.infer<typeof schema>;

const SubjectForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Add a new subject</h1>
      <span className="text-xs text-gray-400 font-medium">
        Authentication Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Username"
          name="userName"
          defaultValue={data?.userName}
          register={register}
          error={errors?.userName}
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          defaultValue={data?.email}
          register={register}
          error={errors?.email}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          defaultValue={data?.password}
          register={register}
          error={errors?.password}
        />
      </div>
      <span className="text-xs text-gray-400 font-medium">
        Personal Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="First Name"
          name="firstName"
          defaultValue={data?.firstName}
          register={register}
          error={errors?.firstName}
        />
        <InputField
          label="Last Name"
          name="lastName"
          defaultValue={data?.lastName}
          register={register}
          error={errors?.lastName}
        />
        <InputField
          label="Phone Number"
          name="phoneNumber"
          defaultValue={data?.phoneNumber}
          register={register}
          error={errors?.phoneNumber}
        />
        <InputField
          label="Address"
          name="address"
          defaultValue={data?.address}
          register={register}
          error={errors?.address}
        />
        <InputField
          label="Blood Type"
          name="bloodType"
          defaultValue={data?.bloodType}
          register={register}
          error={errors?.bloodType}
        />
        <InputField
          label="Birthday"
          name="birthday"
          defaultValue={data?.birthday}
          register={register}
          error={errors?.birthday}
          type="date"
        />
        <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
          <label
            className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
            htmlFor="img"
          >
            <Image src="/upload.png" alt="upload" width={28} height={28} />
            <span>Upload a profile picture</span>
          </label>
          <input type="file" id="img" {...register("img")} className="hidden" />
          {errors.img?.message && (
            <p className="text-xs text-red-400">
              {errors.img.message.toString()}
            </p>
          )}
        </div>
      </div>
      <button className="bg-blue-400 text-white p-2 rounded-md cursor-pointer">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default SubjectForm;
