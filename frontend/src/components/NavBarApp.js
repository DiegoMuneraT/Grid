import { NavLink, Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const NavBarApp = () => {
    const { logOut } = UserAuth();

    const handleLogOut = async () => {
        try{
            await logOut();
        } catch (error) {
            console.log(error);
        }
    };
    
  return (
    <div
      className="bg-body shadow d-flex flex-column flex-shrink-0 position-fixed top-0 bottom-0"
      style={{ width: "4.5rem", zIndex: '2' }}
    >
      <div
        className="justify-content-center"
        style={{ display: "flex", color: "var(--bs-body-bg)" }}
      >
        <a
          className="text-center link-body-emphasis border rounded-circle d-block align-items-center"
          href="#"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          data-bs-original-title="Icon-only"
          style={{
            background: "var(--bs-emphasis-color)",
            color: "#fff !important",
            paddingTop: "0px",
            width: "50px",
            height: "50px",
            margin: "5px",
          }}
        ></a>
      </div>
      <ul className="nav nav-pills flex-column text-center nav-flush mb-auto">
        <li className="nav-item">
          <NavLink
            className="nav-link py-3 border-bottom rounded-0"
            to="/app/inicio/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              style={{ width: "30px", height: "30px" }}
            >
              <path d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"></path>
            </svg>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link py-3 border-bottom rounded-0"
            to="/app/estadisticas/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="icon-nav"
              style={{ width: "30px", height: "30px" }}
            >
              <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"></path>
            </svg>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link py-3 border-bottom rounded-0"
            to="/app/mis-vehiculos/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="1em"
              height="1em"
              fill="currentColor"
              style={{ width: "30px", height: "30px" }}
            >
              <path d="M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"></path>
            </svg>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link py-3 border-bottom rounded-0"
            to="/app/sugerencias/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              style={{ width: "30px", height: "30px" }}
            >
              <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"></path>
              <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"></path>
            </svg>
          </NavLink>
        </li>
      </ul>
      <div className="dropdown show p-3 border-top">
        <a
          className="dropdown-toggle link-body-emphasis d-flex align-items-center text-decoration-none"
          aria-expanded="true"
          data-bs-toggle="dropdown"
          role="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="bi bi-person-fill"
            style={{ width: "30px", height: "30px" }}
          >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
          </svg>
        </a>
        <div
          className="dropdown-menu show shadow text-small"
          data-bs-popper="none"
          data-popper-placement="top-start"
        >
          <Link className="dropdown-item" to="/" onClick={handleLogOut}>
            Sign out
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBarApp;