import { SideBarItem } from "@/components/SideBarItem";
import { DraggableBox } from "@/components/DraggableBox";
import { categories } from "@/information/categories";
import { albums } from "@/information/albums";
import { useState } from "react";

export default function Home() {
  const [genre, setGenre] = useState("all");
  const callback = (payload) => {
    setGenre(payload);

    console.log(genre);
  };

  let albumDiv;

  if (genre === "Taylor Swift") {
    console.log("TAY TAY");
    albumDiv = (
      <div>
        {albums.taylorSwiftAlbums.map((album) => {
          return <DraggableBox key={album.album} {...album} />;
        })}
      </div>
    );
  }
  if (genre === "K-Pop") {
    console.log("NEW JEANS");
    albumDiv = (
      <div>
        {albums.kPopAlbums.map((album) => {
          return <DraggableBox {...album} />;
        })}
      </div>
    );
  }

  return (
    <>
      <section className="section-main">
        <div className="sidenav">
          {categories.map((category) => {
            if(category.title === "Taylor Swift") {
              
              console.log(albums.taylorSwiftAlbums)
              return <SideBarItem {...category} callback={callback} albums={albums.taylorSwiftAlbums} />;
            }
            return <SideBarItem {...category} callback={callback} />;
          })}
        </div>
        <div className="main-content">
          <h1>Betty's Music Library</h1>

          {albumDiv}
        </div>
      </section>
      <style jsx>{`
        .section-main {
          display: flex;
          flex-direction: row;
        }

        .sidenav {
          display: flex;
          flex-direction: column;
          height: 100vh;
          width: 5vh;
        }
      `}</style>
    </>
  );
}
