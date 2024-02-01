import React from "react";

const types: ITypes = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Preencha um email válido"
  }
};

const useInput = (type?: string) => {
  const [value, setValue] = React.useState<string>("");
  const [error, setError] = React.useState<string | null>();

  function validateValue(value: string) {
    if (value) {
      return true;
    } else if (value.length === 0) {
      return false;
    } else if (
      types[type as keyof typeof types] &&
      !isValueValidByRegex(value)
    ) {
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function isValueValidByRegex(value: string) {
    if (!types[type as keyof typeof types].regex.test(value)) {
      return false;
    } else {
      return true;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleChangeValue({ target }: any) {
    if (error) validateValue(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    error,
    handleChangeValue,
    validateValue,
    onBlur: () => validateValue(value)
  };
};

export default useInput;

interface ITypes {
  email: {
    regex: RegExp;
    message: string;
  };
}
