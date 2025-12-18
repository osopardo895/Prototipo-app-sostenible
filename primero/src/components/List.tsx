function List() {
    let items =["Almería","Granada","Cádiz","Sevilla","Málaga","Jaén","Córdova"];

  return (
    <div>
      <ul class="list-group">
        {items.map((item) => (<li key={item}>{item}</li>))}
      </ul>
    </div>
  );
}

export default List