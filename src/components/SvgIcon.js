import { forwardRef } from "react";
import styled from "styled-components";
import clsx from "clsx";

const Icon = styled.svg.attrs({
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
})``;

const SvgIcon = forwardRef((props, ref) => {
  const iconPath = props.children.replace(":", ".svg#");

  return (
    <Icon
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={clsx("shrink-0", props.className)}
      ref={ref}
    >
      <use href={`${process.env.PUBLIC_URL}/images/icons/${iconPath}`} />
    </Icon>
  );
});

export default SvgIcon;
