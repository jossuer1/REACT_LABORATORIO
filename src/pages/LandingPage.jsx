import { NavLink, Outlet } from "react-router-dom";
import { Code2, LayoutDashboard } from "lucide-react";

const links = [
  { to: "/fundamentos", label: "1. React" },
  { to: "/usestate", label: "2. useState" },
  { to: "/useffect", label: "3. useEffect" },
  { to: "/customhook", label: "4. Custom Hook" },
  { to: "/props", label: "5. Props" },
  { to: "/zustand", label: "7. Zustand" },
  { to: "/renderizado", label: "9. Renderizado" },
  { to: "/localstorage", label: "10. LocalStorage" },
];

const LandingPage = () => {
  return (
    <div className="container-fluid p-0">
      <div className="d-flex" style={{ height: "100vh" }}>
        {/* SIDEBAR */}
        <div
          className="bg-dark border-end border-secondary p-3"
          style={{ width: "280px" }}
        >
          <div className="d-flex align-items-center mb-4 text-white">
            <LayoutDashboard className="me-2 text-primary" />
            <span className="fs-4 fw-bold">DevPanel</span>
          </div>

          <ul className="nav nav-pills flex-column mb-auto">
            {links.map((link) => (
              <li className="nav-item mb-1" key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : "text-white"}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTENIDO PRINCIPAL */}
        <div className="flex-fill d-flex flex-column bg-black overflow-auto">
          {/* HEADER */}
          <header className="p-3 border-bottom border-secondary d-flex justify-content-between align-items-center bg-dark">
            <span className="text-secondary small fw-bold">DASHBOARD</span>
            <div className="d-flex align-items-center">
              <span className="me-2 fw-bold text-white">Byron</span>
              <div
                className="rounded-circle bg-primary d-flex align-items-center justify-content-center text-white"
                style={{ width: "32px", height: "32px" }}
              >
                B
              </div>
            </div>
          </header>

          {/* CUERPO */}
          <div className="p-5">
            <div
              className="card bg-dark text-white border-secondary p-4 shadow-lg"
              style={{ borderRadius: "15px" }}
            >
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
