import { redirect } from "react-router-dom"

 const URL = "https://project-3-backend-cm7x.onrender.com"

// CREATE ACTION
export const createAction = async ({request}) => {
    const formData = await request.formData();

    const newPlace = {
        place: formData.get("place"),
        cityState: formData.get("cityState"),
        address: formData.get("address"),
        url: formData.get("url"),
        image: formData.get("image"),
        notes: formData.get("notes"),
    };

    await fetch(URL + '/places', {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newPlace),
    });
    return redirect('/');
};

// UPDATE ACTION
export const updateAction = async ({ request, params }) => {
    const formData = await request.formData()
  
    const updatedPlace = {
        place: formData.get("place"),
        cityState: formData.get("cityState"),
        address: formData.get("address"),
        url: formData.get("url"),
        image: formData.get("image"),
        notes: formData.get("notes"),
    }
  
    await fetch(URL + "/places/" + params.id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPlace),
    })
    return redirect("/")
  };
  
  // DELETE ACTION
  export const deleteAction = async ({ params }) => {
    await fetch(URL + "/places/" + params.id, {
      method: "delete",
    })
    return redirect("/")
  }