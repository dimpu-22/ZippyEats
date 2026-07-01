import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Restaurants from "../pages/Restaurants/Restaurant";
import RestaurantDetails from "../pages/Restaurants/RestaurantDetails";
import Food from "../pages/Food/Food";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Profile from "../pages/Profile/Profile";
import Wishlist from "../pages/Wishlist/Wishlist";
import OrderHistory from "../pages/Orders/OrderHistory";
import OrderSuccess from "../pages/Orders/OrderSuccess";
import NotFound from "../pages/NotFound/NotFound";

// ===================== Admin Pages =====================
import Dashboard from "../pages/Admin/Dashboard";
import AdminRestaurants from "../pages/Admin/Restaurants";
import AdminFoods from "../pages/Admin/Foods";
import AdminOrders from "../pages/Admin/Orders";
import AdminUsers from "../pages/Admin/Users";

// ===================== Layouts =====================
import AdminLayout from "../layouts/AdminLayout";

// ===================== Protected Route =====================
import ProtectedRoute from "../components/auth/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* ===================== Public Routes ===================== */}

      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/restaurant" element={<Restaurants />} />
      <Route
        path="/restaurant/:id"
        element={<RestaurantDetails />}
      />

      <Route path="/food" element={<Food />} />

      <Route path="/cart" element={<Cart />} />

      <Route path="/wishlist" element={<Wishlist />} />

      <Route path="/success" element={<OrderSuccess />} />

      {/* ===================== Protected User Routes ===================== */}

      <Route
        path="/checkout"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/orders"
        element={
          <ProtectedRoute>
            <OrderHistory />
          </ProtectedRoute>
        }
      />

      {/* ===================== Protected Admin Routes ===================== */}

      <Route
        path="/admin"
        element={
          <ProtectedRoute adminOnly>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />

        <Route
          path="restaurants"
          element={<AdminRestaurants />}
        />

        <Route
          path="foods"
          element={<AdminFoods />}
        />

        <Route
          path="orders"
          element={<AdminOrders />}
        />

        <Route
          path="users"
          element={<AdminUsers />}
        />
      </Route>

      {/* ===================== 404 ===================== */}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;