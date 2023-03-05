import { SideBarItem } from "@/components/SideBarItem";
import { DraggableBox } from "@/components/DraggableBox";
import { categories } from "@/information/categories";
import { albums } from "@/information/albums";

export default function Home() {
  return (
    <>
      <section className="section-main">
        <div className="sidenav">
          {categories.map((category) => {
            return <SideBarItem {...category} />;
          })}
        </div>
        <div className="main-content">
          <h1>Betty's Music Library</h1>
          {albums.taylorSwiftAlbums.map((album) => {
            return <DraggableBox albumArt={album.albumArtLink} />; 
          })}
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

        .main-content {
        }
      `}</style>
    </>
  );
}
