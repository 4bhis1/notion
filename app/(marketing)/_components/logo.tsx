import { cn } from "@/lib/utils";
import Image from "next/image";
// import {Poppins} from

// const font = Poppins

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image src={"/logo.svg"} height={40} width={40} alt="Logo" />
      <p className={cn("font-semibold")}>Notion</p>
    </div>
  );
};
