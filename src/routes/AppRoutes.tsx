import { Route, Routes } from "react-router-dom"
import { MainLayout } from "../layouts/MainLayout"
import { Home } from "../pages/Home/Home"
import { About } from "../pages/About/About"
import { Projects } from "../pages/Projects/Projects"
import { Contact } from "../pages/Contact/Contact"
import { ProjectsDetails } from "../pages/ProjectsDetails/ProjectsDetails"

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projectsdetails" element={<ProjectsDetails />} />
      </Route>
    </Routes>
  )
}

