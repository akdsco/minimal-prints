import React, {useContext} from "react"
import {getClass} from "../utils";
import {Context} from "../Context";
import Image from "../components/Image";

export default function Photos() {
  const {allPhotos} = useContext(Context);

  return (
    <main className="photos">
      {allPhotos.map( (photo, index) =>
        <Image key={photo.id} className={getClass(index)} img={photo} />
      )}
    </main>
  )
}