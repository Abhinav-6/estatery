import React, { ReactNode } from "react";

const Page = ({ children }: { children: ReactNode }) => {
  return <main className="mt-[62px] md:mt-[74px] ">{children}</main>;
};

export default Page;
