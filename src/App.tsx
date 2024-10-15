import useRouteElement from "./useRouteElement";

export default function App() {
  const useRoute = useRouteElement();
  return <div>{useRoute}</div>;
}
