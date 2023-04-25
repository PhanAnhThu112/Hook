import { useState } from "react";
import { Data } from "./Data";
import  Item  from "./item";
export default function Menu() {
  const [items, setitem] = useState(Data());
  return (
    <div>
      <h1>Menu</h1>
      {items.map((element) => (
        <div>
          <Item name={element.name} gia={element.gia} />
        </div>
      ))}
    </div>
  );
}
