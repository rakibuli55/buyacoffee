import { createContext } from "react";

const UsernameContext = createContext('');
const StepFormContext = createContext(1);

export {UsernameContext, StepFormContext}