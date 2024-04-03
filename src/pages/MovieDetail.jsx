import { useParams } from "react-router-dom"

export const MovieDetail = () => {
  const params = useParams()
  console.log(params)

  return (
    <div>MovieDetail</div>
  )
}
