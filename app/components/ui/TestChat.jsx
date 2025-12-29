"use client";

import useGetResponseChatBot from "@/app/lib/hooks/useGetResponseChatBot";
import React, { useState, useEffect } from "react";

export default function TestChat(test) {
  const { response, isLoading, sendMessage } = useGetResponseChatBot();

  const [inputChanger, setChanger] = useState("");

  console.log(isLoading);
  const handleMessage = (entrada) => {
    sendMessage({ message: entrada });
    console.log(isLoading);
  };
  return (
    <React.Fragment>
      <p>Test chat</p>
      {isLoading ? <p>Cargando...</p> : <p>esperando nueva pregunta</p>}
      <p>{response}</p>

      <input
        type="text"
        name=""
        id=""
        placeholder="algo..."
        value={inputChanger}
        onChange={(e) => setChanger(e.target.value)}
      />
      <button onClick={() => handleMessage(inputChanger)}>enviar</button>
    </React.Fragment>
  );
}
