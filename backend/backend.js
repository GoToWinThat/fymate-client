import * as firebase from "firebase"
import '../firebaseConfig'
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();


//Deletes currently logged in user and all it's associated data
export async function deleteCurrentUser() {
    const uid = auth.currentUser.uid;
    const storageRef = storage.ref();
    //find all offers made by this user and delete them
    let offerRefs = null;
    let avatarRef = null;
    let userDataRef = null;

    //We dont care about changing data
    //Document IDs are constant so use a batch write operation
    const batch = db.batch();


    //get all owner offers
    const snap = await db.collection("offers")
        .where("ownerUid", "==", uid)
        .get()

    offerRefs = snap.docs.map(x => x.id).map(x => db.collection("offers").doc(x));
    //find avatar used by this user
    avatarRef = storageRef.child("avatars/" + uid)
    //find user data document
    userDataRef = db.collection("users").doc(uid)



    //delete all data
    batch.delete(userDataRef);
    for (const ref of offerRefs) {
        batch.delete(ref);
    }

    try {
        await batch.commit();
        avatarRef.delete();
        auth.currentUser.delete();
    }
    catch (e) {
        console.log(e)
    }

}