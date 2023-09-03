import React, { useEffect, useState } from "react";
import Loading from "../Loading";

interface Props {
  children: React.ReactNode;
}

export default ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return <>{isLoading ? <Loading /> : children}</>;
};
