import Link from "./Link";

export default function Navigation(props) {
  const { data } = props;
  return (
    <ul>
      {data.map((link, index) => {
        return (
          <li>
            <Link
              to={link.path}
              className={link.path.startsWith("http") ? "" : "nav-link"}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
