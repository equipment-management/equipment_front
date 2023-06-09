import { useLocation, useNavigate } from "react-router-dom";
import API from "./lib/axios/TokenAxios";
import { useEffect } from "react";

const Callback = () => {
  const { search } = useLocation();
  const navigate = useNavigate();

  async function serverRequest() {
    await API.post("/auth/dauth/login", {
      code: `${search.slice(6, -11)}`,
    })
      .then((data) => {
        localStorage.setItem("equipment_token", data.data.accessToken);
        localStorage.setItem("equipment_refreshToken", data.data.accessToken);
        localStorage.setItem("equipment_user_id", data.data.user.name);
        localStorage.setItem(
          "equipment_admin",
          data.data.user.role === "ROLE_STUDENT" ? "false" : "true"
        );

        data.data.user.role === "ROLE_STUDENT"
          ? navigate("/")
          : navigate("/admin");

        console.log("setend");
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    serverRequest();
  }, []);

  return <div>...loading</div>;
};

export default Callback;
