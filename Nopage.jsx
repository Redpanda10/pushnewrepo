import Home from "./Home";

export default function Nopage() {
  return (
    <>
      Error 404: no page found go back <a href={<Home />}>go to home</a>
    </>
  );
}
