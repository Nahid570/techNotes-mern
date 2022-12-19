import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { store } from "../../app/store";
import { notesApiSlice } from "../notes/notesApiSlice";
import { usersApiSlice } from "../users/usersApiSlice";

const Prefetch = () => {
  useEffect(() => {
    console.log("Subscribing");
    const users = store.dispatch(usersApiSlice.endpoints.getUsers.initiate());
    const notes = store.dispatch(notesApiSlice.endpoints.getNotes.initiate());

    return () => {
      console.log("Unsubscribing");
      users.unsubscribe();
      notes.unsubscribe();
    };
  }, []);

  return <Outlet />;
};

export default Prefetch;
