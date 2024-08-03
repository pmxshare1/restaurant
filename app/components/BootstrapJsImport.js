"use client";
import { useEffect } from "react";

const BootstrapJsImport = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.js");
  }, []);

  return <></>;
};

export default BootstrapJsImport;
