export default function Footer(props) {
  const data = props.data;
  return (
    <ul>
      {data.map((v, i) => {
        return <li key={i}>{v}</li>;
      })}
    </ul>
  );
}
