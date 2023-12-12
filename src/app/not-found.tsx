import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface notFoundProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const notFound: FC<notFoundProps> = ({ ...rest }) => {
  return (
    <div {...rest}>
      <p>Not Found</p>
    </div>
  );
};

export default notFound;
