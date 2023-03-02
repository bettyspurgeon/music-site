import { SideBarItem } from "@/components/SideBarItem";
import { categories } from "@/information/categories";
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
          margin-left: 10rem;
          margin-top: 10rem;
        }
      `}</style>
    </>
  );
}
