import { Route, Routes } from "react-router-dom"
import { ResponsiveLayout } from "../layouts/ResponsiveLayout"
import { Home } from "../pages/Home/Home"
import { About } from "../pages/About/About"
import { Projects } from "../pages/Projects/Projects"
import { Contact } from "../pages/Contact/Contact"
import { ProjectDetails } from "../pages/Projects/ProjectsDetails/ProjectDetails"

import { useMediaQuery } from "../hooks/useMediaQuery";
import { HomeMobile } from "../pages/Home/HomeMobile"
// ...

export const AppRoutes = () => {
  const isMobile = useMediaQuery("(max-width: 1024px)");

  return (
    <Routes>
      <Route path="/" element={<ResponsiveLayout />}>
        <Route
          index
          element={isMobile ? <HomeMobile /> : <Home />}
        />

        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:id" element={<ProjectDetails />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};
