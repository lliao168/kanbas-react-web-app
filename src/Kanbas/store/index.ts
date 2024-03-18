import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/reducer";
import assignmentsReducer from "../Courses/Assignments/assignmentsReducer";
import counter from "../Courses/Assignments/Editor/counter";
export interface KanbasState {
  modulesReducer: {
    modules: any[];
    module: any;
  };
  assignmentsReducer: {
    assignments: any[];
    assignment: any;
  };
  counter: {
    count: number;
  };
}
const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentsReducer,
    counter,
  }
});


export default store;

