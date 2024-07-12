import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import app from "firebaseConfig/firebaseConfig";
import { postImage } from "services/api";

export const uploadOneFile = async (file) => {
    if (!file) {
        return;
    }
    try {
        const url = await uploadFile(file);
        console.log('File available at', url);
        uploadTextData(url, file.name);
    } catch (err) {
    }
};

async function uploadFile(file) {
    const storage = getStorage(app);

    const storageRef = ref(storage, 'some-child/' + file.name);
    try {
      const snapshot = await uploadBytes(storageRef, file);
      const url = await getDownloadURL(snapshot.ref);
      console.log('Uploaded a file!', url);
      return url;
    } catch (error) {
      console.error('Upload failed', error);
    }
}

async function uploadTextData(loc, name) {
    try {
        const imageDocument = {
            location: loc,
            question: "Platzhalter",
            answers: name
        }
        postImage("guess", imageDocument);
        console.log("Successully uploaded Image text data");
    } catch (err) {
        console.error("Uploading to mongo Atlas failed", err);
    }
}