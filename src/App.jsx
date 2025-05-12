import { Route, Routes } from 'react-router-dom'
import './App.css'
import CenterLayout from './assets/layouts/CenterLayout'
import PortalLayout from './assets/layouts/PortalLayout'

function App() {
 

  return (
  <Routes>
    <Route element={<CenterLayout />}>
      <Route index element={<MarketingHome />} />
      <Route path="contact" element={<Contact />} />
    </Route>

    <Route path="projects">
      <Route index element={<ProjectsHome />} />
      <Route element={<ProjectsLayout />}>
        <Route path=":pid" element={<Project />} />
        <Route path=":pid/edit" element={<EditProject />} />
      </Route>
    </Route>
  </Routes>
  )
}

export default App
