export default function Login() {
  return (
    <div className="bg-orange">
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
                  Email không hợp lệ
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      Login
    </div>
  );
}
