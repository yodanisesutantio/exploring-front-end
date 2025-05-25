import React from "react";

export default function ProductLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="">
        {children}
        <div className="">
            <h2>Featured Product Sections</h2>
        </div>
      </div>
    );
  }