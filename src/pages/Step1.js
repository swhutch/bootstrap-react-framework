// import React from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { useStateMachine } from "little-state-machine";
// import updateAction from "./updateAction";

// const Step1 = (props) => {
//   const { register, handleSubmit } = useForm();
//   const { actions, state } = useStateMachine({ updateAction });
//   const onSubmit = (data) => {
//     actions.updateAction(data);
//     props.history.push("./step");
//   };


//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <h2>Step 1</h2>
//       <label>
//         First Name:
//         <input {...register("firstName")} defaultValue={state.data.firstName} />
//       </label>
//       <label>
//         Last Name:
//         <input {...register("lastName")} defaultValue={state.data.lastName} />
//       </label>
//       <input type="submit" />
//     </form>
//   );
// };

// export default useNavigate(Step1);