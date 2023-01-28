import { Form, Link, useLoaderData } from "react-router-dom"

function Index(props) {
  const places = useLoaderData()

  return (
    <div>
      <div className="container">
        <h1>Places to Visit</h1>
        {places.map((place, idx) => (
          <div className="place" id="place" key={idx}>
            <Link to={`/${place._id}`}>
              <h1>{place.place}</h1>
            </Link>
            {/* <div className="icons">
              <Link to={`/${place._id}`}>
                <img className="pen" src={Pen} alt="pen" />
              </Link>
              <Form action={`/delete/${place._id}`} method="post">
                <button className={"trashCan"}>
                  <img className="trashcan" src={Trashcan} alt="trashcan" />
                </button>
              </Form>
            </div> */}
          </div>
        ))}
      </div>

      <div className="add">
        <h2>Add a place you want to visit:</h2>
        <Form action="/create" method="post">
          <input type="input" name="place" placeholder="Place to visit" />
          <input type="input" name="cityState" placeholder="City, State" />
          <input type="input" name="address" placeholder="Address" />
          <input type="input" name="url" placeholder="Website URL" />
          <input type="input" name="image" placeholder="Image URL" />
          <input type="input" name="notes" placeholder="Notes" />
          <input type="submit" value="Add a Place to List" />
        </Form>
      </div>
    </div>
  )
}

export default Index
