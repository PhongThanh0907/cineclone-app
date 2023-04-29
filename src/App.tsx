import { useState, Suspense } from "react";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import router from "./routes/router";
import MainLayout from "./layouts/MainLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />;
    </Suspense>
  );
}

export default App;
