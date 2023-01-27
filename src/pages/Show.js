import { useLoaderData, Form } from "react-router-dom"
import "../styles/show-styles.scss"

export default function Show(props) {
  const place = useLoaderData()
  return (
    <section className="index_header">
      <img className="place-image" src={place.image} alt={place.place}/>
      <div className="information">
        <a href={place.url} target="_blank" rel="noreferrer">
          <h1>{place.place}</h1>
        </a>
        <h3>{place.cityState}</h3>
        <h4>{place.address}</h4>
        <p>Notes: {place.notes}</p>
      </div>
     
    <div className="form-changes">
      <Form action={`/update/${place._id}`} method="post">
          <input type="input" name="place" placeholder="Place to visit" defaultValue={place.place} />
          <input
            type="input"
            name="cityState"
            placeholder="City, State"
            defaultValue={place.cityState}
          />
          <input type="input" name="address" placeholder="Address" defaultValue={place.address} />
          <input type="input" name="url" placeholder="Website URL" defaultValue={place.url} />
          <input type="input" name="image" placeholder="Image URL" defaultValue={place.image} />
          <input type="input" name="notes" placeholder="Notes" defaultValue={place.notes} />
          <button>Update {place.place}</button>
        </Form>

        <Form action={`/delete/${place._id}`} method="post">
          <button>Delete {place.place}</button>
        </Form>
    </div>
    </section>
  )
}
