import HomeCardGroup from "./components/HomeCardGroup";

export default function Home() {
  return (
    <main className="main-app-container">
      <div className="container">
        <h1>This weeks specials</h1>
        <hr />
        <HomeCardGroup />
      </div>
    </main>
  );
}
