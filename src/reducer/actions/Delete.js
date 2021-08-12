import { db } from "../../firebase";

db.settings({ timestampsInSnapshota: true });

const Delete = (id) => {
  return (dispatch, getstate, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("todo")
      .doc(id)
      .delete()
      .then(()=>{
        dispatch({ type: "Delete",id})
      }).catch(console.log("Something wrong"));
  };
};

export default Delete;
