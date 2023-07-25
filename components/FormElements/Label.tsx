import { cn } from "@/utils/cn";
import { HTMLAttributes } from "react";

type LabelProps = HTMLAttributes<HTMLLabelElement> & { htmlFor: string };

const Label = ({ className, htmlFor, ...props }: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        "flex hover:text-primary active:text-primary hover:cursor-pointer gap-2 items-center font-semibold",
        className
      )}
      {...props}
    >
      {props.children}
    </label>
  );
};

export default Label;
