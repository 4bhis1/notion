"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
  return (
    <div className="max-w-3xl spze-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents, & Plans. Unifies. Welcome to
        <span className="underline">Notion</span>
      </h1>
      <h3 className="text-base m-6 sm:text-xl md:text-2xl font-medium ">
        Notion is connected workspace wherr <br /> better, fatser work happend.
      </h3>
      <Button className="m-6">
        Enter Notion
        <ArrowRight />
      </Button>
    </div>
  );
};
