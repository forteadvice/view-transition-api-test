import { cn } from "@/lib/cn";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return <div className={cn("p-10 max-w-[1300px] mx-auto mt-20", className)}>{children}</div>;
}
