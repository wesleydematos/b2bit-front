import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserProfile } from "./types";
import Loading from "../../components/Loading";
import api from "../../services/axiosConfig";
import toast from "react-hot-toast";

export default function Profile() {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({} as UserProfile);
  const navigate = useNavigate();

  async function getProfile() {
    api
      .get("/auth/profile/")
      .then((response) => {
        setProfile(response.data);
        setLoading(false);
      })
      .catch((error) => {
        toast.error(
          `Error when searching profile: ${error.response.data.detail}`
        );
        setLoading(false);
        logout();
      });
  }

  function logout() {
    localStorage.clear();
    navigate("/");
  }

  useEffect(() => {
    getProfile();
  }, []);

  if (loading) {
    return <Loading> profile</Loading>;
  }

  return (
    <main className="bg-[#F1F5F9] w-screen h-screen flex flex-col font-sans">
      <header className="flex h-[70px] w-full bg-grey justify-center sm:justify-end">
        <button
          onClick={logout}
          className="my-auto bg-primary text-grey py-2 w-[270px] rounded-lg sm:mr-10"
        >
          Logout
        </button>
      </header>

      <div className="flex flex-col mx-auto my-auto bg-grey-l p-7 rounded-2xl shadow-custom">
        <div className="mx-auto flex flex-col items-center gap-2">
          <p>Profile picture</p>
          <div className="relative w-20 h-20 overflow-hidden">
            <img
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
              src={profile.avatar.low}
              alt="Avatar"
            />
          </div>
        </div>

        <div className="mt-5">
          <div className="w-[250px] sm:w-[300px] mb-3">
            <p>
              Your <span className="font-bold">Name</span>
            </p>
            <p className="bg-grey-d p-3 rounded-xl w-full">{profile.name}</p>
          </div>

          <div className="w-[250px] sm:w-[300px]">
            <p>
              Your <span className="font-bold">E-mail</span>
            </p>
            <p className="bg-grey-d p-3 rounded-xl w-full">{profile.email}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
