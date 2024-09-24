"use client";

const TeacherForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  return (
    <div className="">
      <input type="text" defaultValue={"PLACEHOLDER"} />
    </div>
  );
};

export default TeacherForm;
