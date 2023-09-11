import { MoviesList } from "../../components/MoviesList/MoviesList"
import { TemplatePage } from "../../components/TemplatePage/TemplatePage"

export const HomePage = () => {
  return(
    <TemplatePage>
      <main>
        <MoviesList/>
      </main>
    </TemplatePage>
  )
}