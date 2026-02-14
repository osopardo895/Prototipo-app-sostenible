function List() {
    let items =["Almería",
      "Granada",
      "Cádiz",
      "Sevilla",
      "Málaga",
      "Jaén",
      "Córdova"];

  return (
    <div>
      <ul className="list-group">
        {items.map(item => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List