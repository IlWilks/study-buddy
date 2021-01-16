import { useState } from "react";

// setting default values for label and required
export const useFormInput = (initialValue, label = "", required = true) => {
  const [value, setValue] = useState(initialValue);
  
  return {
    required,
    label,
    placeholder: `Enter ${label}`,
    value,
    onChange: (e) => setValue(e.target.value),
  };
};
