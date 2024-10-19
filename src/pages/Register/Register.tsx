import { Link } from "react-router-dom";

export default function Register() {
  return <div className="bg-orange">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-5 lg:py-32 lg:pr-10">
      <div className="lg:col-span-2 lg:col-start-4">
        <form className="p-10 rounded bg-white shadow-sm">
          <div className="text-2xl">Đăng ký</div>
          <div className="mt-8">
            <input
              type="email"
              name="email"
              className="p-3 w-full outline-none border border-gray-400  focus:border-gray-500 rounded-sm"
              placeholder="email"
            />
            <div className="mt-1 text-red-600 min-h-[1rem] text-sm">
            </div>
          </div>
          <div className="mt-8">
            <input
              type="password"
              name="password"
              className="p-3 w-full outline-none border border-gray-400  focus:border-gray-500 rounded-sm"
              placeholder="password"
            />
            <div className="mt-1 text-red-600 min-h-[1rem] text-sm">
            </div>
          </div>
          <div className="mt-8">
            <input
              type="confirm_password"
              name="confirm_password"
              className="p-3 w-full outline-none border border-gray-400  focus:border-gray-500 rounded-sm"
              placeholder="confirm_password"
            />
            <div className="mt-1 text-red-600 min-h-[1rem] text-sm">
            </div>
          </div>
          <div className="mt-3">
            <button className="w-full text-center py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-500">
               Đăng ký
            </button>
          </div>
          <div className="mt-8 text-center">
          <div className="flex items-center justify-center">
            <span className="text-gray-400">
              Bạn đã có tài khoản?
            </span>
            <Link className="text-red-400" to='/login'>
              Đăng nhập
            </Link>
          </div>
        </div>
        </form>
       
      </div>
    </div>
  </div>
  Đăng ký
</div>
}
