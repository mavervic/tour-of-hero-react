function DashboardHero({ heroes }) {
  return heroes.map((h) => <a>{h.name}</a>);
}

export default function Dashboard({ heroes }) {
  return (
    <>
      <h2>Top Heroes</h2>
      <div className="heroes-menu">
        <DashboardHero heroes={heroes} />
      </div>
    </>
  );
}
