"use client";

import { useState } from "react";

const items = [
  { name: "ZUNacc", isMarked: true },
  { name: "ZUNst", isMarked: false },
  { name: "ZUNhr", isMarked: false },
  { name: "ZUNpr", isMarked: false },
  { name: "ZUNaft", isMarked: false },
];

export default function useMark() {
  const [itemsMarked, setItemsMarked] = useState(items);
  function handleMark(target) {
    setItemsMarked(
      items.map((item) =>
        item.name === target
          ? { ...item, isMarked: true }
          : { ...item, isMarked: false }
      )
    );
  }
  return { itemsMarked, handleMark };
}
