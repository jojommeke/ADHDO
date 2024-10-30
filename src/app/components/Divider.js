export default function Divider(props) {
  const margintop = props.margintop * 4;
  return (
    <div
      id="line"
      className="mx-auto my-10 h-1 bg-white bg-opacity-20 shadow-md backdrop-blur-md portrait:my-6"
      style={{ width: props.width, marginTop: margintop + "px" }}
    />
  );
}
