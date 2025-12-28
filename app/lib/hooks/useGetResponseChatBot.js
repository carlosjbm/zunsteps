/*
useGetResponseChatbot v0.2.0
@param imput->object example {messsage:"hola"}
 */

const { useState, useEffect } = require("react");

export default function useGetResponseChatBot(imput) {
  const [response, setResponse] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function sendMessage(imput) {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(imput),
      });
      const data = await res.json();
      setResponse(data.answer);
      setIsLoading(false);
    }
    sendMessage(imput);
  }, [imput]);

  return { response, isLoading };
}
