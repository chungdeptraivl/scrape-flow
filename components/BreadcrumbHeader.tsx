"use client";

import { MobileSidebar } from "@/components/Sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import React from "react";

function BreadcrumbHeader() {
  const pathName = usePathname();
  const paths = pathName === "/" ? [""] : pathName?.split("/");
  console.log("paths", paths);

  return (
    <div className="flex items-center float-start">
      <MobileSidebar />
      <Breadcrumb>
        <BreadcrumbList>
          {paths.map((path, index) => {
            const isLast = index === paths.length - 1;

            return (
              <React.Fragment key={index}>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    className="capitalize"
                    href={`${path === "" ? "/" : path}`}
                  >
                    {path === "" ? "home" : path}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {isLast && (
                  <div className="flex items-center gap-1">
                    <BreadcrumbSeparator />
                    <p className="text-white font-medium capitalize">
                      {path === "" ? "Home" : path}
                    </p>
                  </div>
                )}
                <BreadcrumbSeparator className="last:hidden" />
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

export default BreadcrumbHeader;
