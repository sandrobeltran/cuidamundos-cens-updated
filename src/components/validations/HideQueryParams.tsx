"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const HideQueryParams = () => {
  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    if (params) {
      // Remove the 'id' from the URL using shallow routing
      router.replace(pathname, {});
    }
  }, [params]);

  return <></>;
};

export default HideQueryParams;
