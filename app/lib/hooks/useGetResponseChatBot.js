/*
useGetResponseChatbot v0.2.0
@param imput->object example {messsage:"hola"}
 */

const { useState, useEffect } = require("react");

export default function useGetResponseChatBot() {
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(isLoading);
    setResponse(response);
  }, [response, isLoading]);

  async function sendMessage(input) {
    setResponse(""); //Limpio la respuesta anterior en caso de
    setIsLoading(true);
    const res = await fetch("/api/chatbot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });
    const data = await res.json();
    setIsLoading(false);
    setResponse(data.answer);
  }

  return { response, isLoading, sendMessage };
}
