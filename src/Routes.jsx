import React from "react";
import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Signin from "./pages/auth/Signin";
import Register from "./pages/auth/Register";
import PageNotFound from "./pages/PageNotFound";
import ResetPassword from "./pages/auth/ResetPassword";

import AboutUs from "./pages/AboutUs";
import DonateFood from "./pages/DonateFood";
import FindFood from "./pages/FindFood";
import Volunteer from "./pages/Volunteer";


import ProtectedRoutes from "./Routes/ProtectedRoutes";

import DonarRoutes from "./Routes/DonarRoutes";
import DonarDashboard from "./pages/Dashboard/DONAR/DonarDashboard";
import MakeDonation from "./pages/Dashboard/DONAR/pages/MakeDonation";
import MyDonations from "./pages/Dashboard/DONAR/pages/MyDonations";
import PendingDonations from "./pages/Dashboard/DONAR/pages/PendingDonations";
import Settings from "./pages/Dashboard/DONAR/pages/Settings";
import Help from "./pages/Dashboard/DONAR/pages/Help";

import NGORoutes from "./Routes/NGORoutes";
import NGODashboard from "./pages/Dashboard/NGO/NGODashboard";

import HelpSeekerRoutes from "./Routes/HelpSeeker"
import HelpSeekerDashboard from "./pages/Dashboard/HELP_SEEKER/HelpSeekerDashboard";

import AdminRoutes from "./Routes/AdminRoutes";
import AdminPage from "./pages/Dashboard/Admin/AdminPage";

import VolunteerRoutes from "./Routes/VolunteerRoutes";
import VolunteerDashboard from "./pages/Dashboard/VOLUNTEER/VolunteerDashboard";

const RoutesPath = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />

            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/donate-food" element={<DonateFood />} />
            <Route path="/find-food" element={<FindFood />} />
            <Route path="/volunteer" element={<Volunteer />} />


            {/* Donar Routes */}
            <Route path="/donar/dashboard/" element={<DonarRoutes />} >
                <Route index element={<DonarDashboard />} />
                <Route path="donate" element={<MakeDonation />} />
                <Route path="my-donations" element={<MyDonations />} />
                <Route path="pending" element={<PendingDonations />} />
                <Route path="settings" element={<Settings />} />
                <Route path="help" element={<Help />} />
            </Route>

            {/* NGO routes */}
            <Route path="/ngo/dashboard/" element={<NGORoutes />} >
                <Route index element={<NGODashboard />} />

            </Route>

            {/* Help Seeker routes */}
            <Route path="/help_seeker/dashboard/" element={<HelpSeekerRoutes />} >
                <Route index element={<HelpSeekerDashboard />} />
            </Route>

            {/* Admin routes */}
            <Route path="/admin/dashboard/" element={<AdminRoutes />} >
                <Route index element={<AdminPage />} />
            </Route>

            {/* Volunteer routes */}
            <Route path="/volunteer/dashboard/" element={<VolunteerRoutes />} >
                <Route index element={<VolunteerDashboard />} />
            </Route>






            <Route path="*" element={<PageNotFound />} />

        </Routes>
    );
}

export default RoutesPath;
