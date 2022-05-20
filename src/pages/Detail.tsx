import { Link, useParams } from "react-router-dom";

export function Detail() {
  const { id } = useParams();

  return (
    <>
      <p>detail works!</p>
      idToEdit: { id }
      <br />
      <Link to="/list">Back</Link>
    </>
  )
}