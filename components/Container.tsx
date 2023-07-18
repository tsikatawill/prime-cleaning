import { cn } from "@/utils/cn";

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

const Container = ({ ...props }: ContainerProps) => {
  return (
    <div className={cn("max-w-screen-lg mx-auto px-4", props.className)}>
      {props.children}
    </div>
  );
};

export default Container;
