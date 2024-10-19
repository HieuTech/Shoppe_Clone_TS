# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Chức năng
-Authen Module: Quản lí băng JWT

- đăng ký 
- đănh nhập
- đăng xuất

- Trang danh sách sản phẩm:

-phân trang
-Sort theo từng thuộc tính sản phẩm
-Filter nâng cao theo từng thuộc tính sản phẩm
-Search sản phẩm

- Trang chi tiết sản phẩm

- Hiển thị thông tin chi tiết
- Ảnh hiển thị theo slider + hover zoom effect
- Mô tả thì hiển thị rich text dạng WYSIWYG HTML
- Có chức năng mua hàng

-Giỏ hàng

- Quản lí đơn hàng: Thêm, sửa xóa sản phẩm
- Mua hàng

- Quản lí profile khách hàng

- Update thông tin cá nhân
- Upload avatar
- Đổi mật khẩu
- Xem tình trạng đơn hàng

## Công nghệ sử dụng

- UI/CSS: Tailwindcss + HeadlessUI
- State Management: React Query cho async state và React Context cho state thường
- Form Management: React Hook Form
- Router: React Router
- Build tool: Vite
- API: Rest API tự build expressjs
- Hỗ trợ đa ngôn ngữ với react.i18next
- Hỗ trợ SEO với React Helmet
- Mô hình hóa component với storybook
- Unit test



