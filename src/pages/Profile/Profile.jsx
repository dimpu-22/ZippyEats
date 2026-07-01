import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../../api/userApi";

const Profile = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile();
        setProfile(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!profile) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h2 className="text-2xl font-semibold">Loading Profile...</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">

        <div className="bg-orange-500 h-40"></div>

        <div className="px-8 pb-8">

          <div className="-mt-16 flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-md"
            />
          </div>

          <h2 className="text-3xl font-bold text-center mt-4">
            {profile.name}
          </h2>

          <p className="text-center text-gray-500">
            Welcome to ZippyEats
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-6">

            <div className="bg-gray-100 rounded-lg p-5">
              <h3 className="font-semibold mb-2">Full Name</h3>
              <p>{profile.name}</p>
            </div>

            <div className="bg-gray-100 rounded-lg p-5">
              <h3 className="font-semibold mb-2">Email</h3>
              <p>{profile.email}</p>
            </div>

            <div className="bg-gray-100 rounded-lg p-5">
              <h3 className="font-semibold mb-2">Phone</h3>
              <p>{profile.phone || "Not Available"}</p>
            </div>

            <div className="bg-gray-100 rounded-lg p-5">
              <h3 className="font-semibold mb-2">Membership</h3>
              <p>Premium User</p>
            </div>

          </div>

          <div className="flex justify-center gap-4 mt-10">

            <button
              className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
            >
              Edit Profile
            </button>

            <button
              onClick={handleLogout}
              className="border border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-500 hover:text-white transition"
            >
              Logout
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;