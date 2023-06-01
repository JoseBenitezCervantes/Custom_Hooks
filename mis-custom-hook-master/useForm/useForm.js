import { haveEmptyKeys } from "@/utils";
import { useEffect, useState } from "react";

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);
  const [haveEmpty, setHaveEmpty] = useState(true);
  useEffect(() => {
    if (haveEmptyKeys(values)) {
      setHaveEmpty(true);
    } else {
      setHaveEmpty(false);
    }
  }, [values]);

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = ({ target }: any) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return [values, handleInputChange, reset, haveEmpty];
};

export const haveEmptyKeys = (obj: any) => {
  for (let clave in obj) {
    const actualValue = obj[clave];
    const isEmpty =
    actualValue === undefined || actualValue === null || actualValue === "";
    if (obj.hasOwnProperty(clave) && isEmpty) {
      return true; // Retorna true si encuentra una clave vacía
    }
  }
  return false; // Retorna false si no encuentra claves vacías
};
