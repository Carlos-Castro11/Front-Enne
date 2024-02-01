import React from "react";

const useMedia = (size: string) => {
  const [match, setMatch] = React.useState<boolean>();

  React.useEffect(() => {
    function handleChange() {
      const { matches } = window.matchMedia(size);
      setMatch(matches);
    }
    window.addEventListener("resize", handleChange);
    return () => {
      window.removeEventListener("resize", handleChange);
    };
  }, [size]);

  return match;
};

export default useMedia;
