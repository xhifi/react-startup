import { Link as RRLink } from "react-router-dom";

export default function Link(props) {
  const { to, children, ...rest } = props;

  if (to.startsWith("http")) {
    return (
      <a href={to} target="_blank" rel="noreferrer" {...rest}>
        {children}
      </a>
    );
  }
  return (
    <RRLink to={to} {...rest}>
      {children}
    </RRLink>
  );
}
