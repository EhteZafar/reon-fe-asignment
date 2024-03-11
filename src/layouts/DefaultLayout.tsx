import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default DefaultLayout;