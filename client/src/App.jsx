import { Routes, Route } from "react-router-dom";
import DashLayout from "./components/DashLayout";
import Layout from "./components/Layout";
import Login from "./features/auth/Login";
import Public from "./components/Public";
import Welcome from "./features/auth/Welcome";
import NotesList from "./features/notes/NotesList";
import UsersList from "./features/users/UsersList";
import NewUserForm from "./features/users/NewUserForm";
import EditUser from "./features/users/EditUser";
import NewNote from "./features/notes/NewNote";
import EditNote from "./features/notes/EditNote";
import Prefetch from "./features/auth/Prefetch";
import PersistLogin from "./features/auth/PersistLogin";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
        {/* Prefetch  */}
        <Route element={<PersistLogin />}>
          <Route element={<Prefetch />}>
            <Route path="dash" element={<DashLayout />}>
              <Route index element={<Welcome />} />
              <Route path="users">
                <Route index element={<UsersList />} />
                <Route path="new" element={<NewUserForm />} />
                <Route path=":id" element={<EditUser />} />
              </Route>
              <Route path="notes">
                <Route index element={<NotesList />} />
                <Route path="new" element={<NewNote />} />
                <Route path=":id" element={<EditNote />} />
              </Route>
            </Route>
          </Route>
        </Route>
        {/* Prefetch Ends   */}
      </Route>
    </Routes>
  );
};

export default App;
