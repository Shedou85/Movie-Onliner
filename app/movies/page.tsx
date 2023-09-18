"use client";
import { ERoutes } from "@/utils/routes";
import firebase from "firebase/compat/app";
import {
  DocumentData,
  QuerySnapshot,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyBz8Ng1jWoW2upKozZSl78oyGcMdLayz9s",
  authDomain: "cinema-app-a175d.firebaseapp.com",
  projectId: "cinema-app-a175d",
  storageBucket: "cinema-app-a175d.appspot.com",
  messagingSenderId: "993039324588",
  appId: "1:993039324588:web:44f536fc0a4bbd92015609",
};
firebase.initializeApp(firebaseConfig);

const Movies: React.FC = () => {
  const [getMoviesList, setGetMoviesList] = useState<any[]>([]);

  useEffect(() => {
    const GetMoviesList = async () => {
      const db = getFirestore();
      const collectionName = "movies";
      const colRef = collection(db, collectionName);

      try {
        const snapshot: QuerySnapshot<DocumentData> = await getDocs(colRef);
        const allData: any[] = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setGetMoviesList(allData);
        console.log(allData);
      } catch (error: any) {
        console.error(
          `Error fetching data from ${collectionName}:`,
          error.message
        );
      }
    };

    GetMoviesList();
  }, []);

  return (
    <main className="flex flex-col items-center  p-24">
      <div className="flex gap-20">
        <Link href={ERoutes.Home}> ---Back</Link>
        <h1>Movies Page List</h1>
      </div>
      <div>
        {getMoviesList.map((list, idx) => {
          return (
            <div key={idx}>
              <div>{list.movieName}</div>
              <div>{list.year}</div>
              <div>{list.actors}</div>
              <div>{list.description}</div>
              <div>{list.director}</div>
              <div>{list.duration}</div>
              <div>{list.genre}</div>
              <div>{list.id}</div>
              <div>{list.imageURL}</div>
              <div>{list.movieUrl}</div>
              <div>{list.rating}</div>
              <div>{list.trailer}</div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Movies;
