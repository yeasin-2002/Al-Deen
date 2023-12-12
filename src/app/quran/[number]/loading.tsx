import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface loadingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Loading: FC<loadingProps> = ({ ...rest }) => {
  return (
    <div {...rest} className="h-20 w-10 grid place-items-center shadow-2xl">
      Loading......
    </div>
  );
};
export default Loading;
