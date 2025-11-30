import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import IntroPage from './pages/auth/IntroPage';
import LoginPage from './pages/auth/LoginPage';

import StudentDashboard from './pages/student/StudentDashboard';
import StudentGroups from './pages/student/StudentGroups';
import StudentTutors from './pages/student/StudentTutor';
import StudentSessions from './pages/student/StudentSession';

import TutorDashboard from './pages/tutor/TutorDashboard';
import TutorClasses from './pages/tutor/TutorClasses';
import TutorRequests from './pages/tutor/TutorRequest';

import StaffDashboard from './pages/staff/StaffDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        {/* ──────────────── LOGIN PAGE (KHÔNG NAVBAR) ──────────────── */}
<Route path="/" element={<IntroPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* ──────────────── LAYOUT CÓ NAVBAR ──────────────── */}
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Routes>

                {/* Student */}
                <Route path="student/dashboard" element={<StudentDashboard />} />
                <Route path="student/groups" element={<StudentGroups />} />
                <Route path="student/tutors" element={<StudentTutors />} />
                <Route path="student/sessions" element={<StudentSessions />} />

                {/* Tutor */}
                <Route path="tutor/dashboard" element={<TutorDashboard />} />
                <Route path="tutor/classes" element={<TutorClasses />} />
                <Route path="tutor/requests" element={<TutorRequests />} />

                {/* Staff & Admin */}
                <Route path="staff/dashboard" element={<StaffDashboard />} />
                <Route path="admin/dashboard" element={<AdminDashboard />} />

              </Routes>
            </>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
