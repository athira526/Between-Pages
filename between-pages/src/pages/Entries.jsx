import "../styles/Entries.css"
import { useParams } from "react-router-dom";

function Entry(){
    const {categoryId,entryId} = useParams();
    return(
        <section className="entry-section">
            <h1 className="title">Entry:{entryId} in Category:{categoryId}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis molestiae corporis eveniet distinctio, soluta id perspiciatis recusandae amet veritatis quis adipisci deserunt eligendi quas ad, officiis, quam dicta impedit pariatur!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, repudiandae. Amet veritatis minima reiciendis facilis odit modi iusto in, soluta odio tenetur, exercitationem tempora magnam commodi tempore ullam atque rerum?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste non veritatis unde aperiam omnis laborum dignissimos sapiente nobis debitis tenetur officia neque saepe aspernatur, odio, eaque repellat doloribus accusantium sint.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quas sequi repellat dolorum, omnis quisquam nihil corrupti laboriosam molestias aspernatur, porro veniam corporis repudiandae exercitationem quasi ducimus vitae, laborum reprehenderit!</p>
        </section>
    )
}
export default Entry;
