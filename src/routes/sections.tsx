import { lazy, Suspense } from "react";
import { Atom } from "react-loading-indicators";
import { Outlet, Navigate, useRoutes } from "react-router-dom";
import { DashboardLayout } from "@/layouts/Dashboard/Dashboard";

export const Homepage = lazy(() => import("../pages/Home"));
export const Search = lazy(() => import("../pages/Search"));
export const CreateDossier = lazy(() => import("../pages/CreateDossier"));
export const Page404 = lazy(() => import("../pages/404"));
export const Dossier = lazy(() => import("../pages/Dossier"));
export const ProfilePage = lazy(() => import("../pages/Profile"));

export function Router() {
  const loading = <Atom color="#ff2056" size="large" text="" textColor="" />;

  return useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense fallback={loading}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <Homepage />, index: true },
        { path: "search", element: <Search /> },
        { path: "create-dossier", element: <CreateDossier /> },
        { path: "profile", element: <ProfilePage /> },
        { path: "Dossier", element: <Dossier /> },
      ],
    },
    {
      path: "404",
      element: <Page404 />,
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);
}
