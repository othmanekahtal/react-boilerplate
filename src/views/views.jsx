import { Navigate, Route, Routes } from "react-router-dom";

const Views = () => (
  <Routes>
    <Route index element={<div>index</div>} />
    <Route path="/home" element={<div>home</div>} />
    <Route path="/dashboard/*" element={<Navigate to="/home" />} />
    <Route path="/posts" element={<div>posts</div>}>
      <Route index element={<div>This is index</div>} />
      <Route path=":id" element={<div>post</div>} />
    </Route>
    <Route path="*" element={<div>Not found</div>} />
  </Routes>
);

export default Views;
