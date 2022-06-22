import { gql, useQuery } from '@apollo/client'

const GET_LESSONS_QUERY = gql`
  query {
    lessons{
      id
      title
    }
  }
`
interface lesson {
  id: string;
  title: string;
}
export default function App () {
  const { data } = useQuery<{lessons:lesson[]}>(GET_LESSONS_QUERY)
  console.log(data)

  return (
    <ul>
      {data?.lessons.map((lesson, idx) => (
        <li key={idx}>{lesson?.title}</li>
      ))}
    </ul>
  )
}
