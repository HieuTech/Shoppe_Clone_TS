import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInputs{
  firstName: string
  lastName: string

}

const onSubmit: SubmitHandler<IFormInputs> 

export default function Login() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data)
  return (
    // <div className="bg-orange">
    //   <div className="max-w-7xl mx-auto px-4">
    //     <div className="grid grid-cols-1 lg:grid-cols-5 lg:py-32 lg:pr-10">
    //       <div className="lg:col-span-2 lg:col-start-4">
    //         <form className="p-10 rounded bg-white shadow-sm">
    //           <div className="text-2xl">Đăng nhập</div>
    //           <div className="mt-8">
    //             <input
    //               type="email"
    //               name="email"
    //               className="p-3 w-full outline-none border border-gray-400  focus:border-gray-500 rounded-sm"
    //               placeholder="email"
    //             />
    //             <div className="mt-1 text-red-600 min-h-[1rem] text-sm">
    //             </div>
    //           </div>
    //           <div className="mt-8">
    //             <input
    //               type="password"
    //               name="password"
    //               className="p-3 w-full outline-none border border-gray-400  focus:border-gray-500 rounded-sm"
    //               placeholder="password"
    //             />
    //             <div className="mt-1 text-red-600 min-h-[1rem] text-sm">
    //             </div>
    //           </div>
    //           <div className="mt-3">
    //             <button className="w-full text-center py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-500">
    //                 Đăng nhập
    //             </button>
    //           </div>
    //           <div className="mt-8 text-center">
    //           <div className="flex items-center justify-center">
    //             <span className="text-gray-400">
    //               Bạn chưa có tài khoản?
    //             </span>
    //             <Link className="text-red-400" to='/login'>
    //               Đăng ký
    //             </Link>
    //           </div>
    //         </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    //   Đăng nhập
    // </div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input 
        {...register("firstName", { required: true })} 
        aria-invalid={errors.firstName ? "true" : "false"} 
      />
      {errors.firstName?.type === 'required' && <p role="alert">First name is required</p>}

      <input 
        {...register("mail", { required: "Email Address is required" })} 
        aria-invalid={errors.mail ? "true" : "false"} 
      />
      {errors.mail && <p role="alert">{errors.mail?.message}</p>}
      
      <input type="submit" />
    </form>
  );
}
