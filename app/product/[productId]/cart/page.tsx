"use client";

import React, { useState } from "react";

function Cart() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Cart Screen</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Cart;
