import { useParams } from "react-router-dom";

export default function Products() {
  const { type } = useParams();

  return <h2>{type}</h2>;
}
