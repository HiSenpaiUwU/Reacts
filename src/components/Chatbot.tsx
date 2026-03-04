import React, { useState } from "react";

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Unsa may ika alagad nako nimo?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const updated = [...messages, { text: input, sender: "user" }];

    let reply = "Pasayloa dili ko makatabang basta dili related sa website";

    if (input.toLowerCase().includes("project")) {
      reply = "Check out the Projects section above!";
    } else if (input.toLowerCase().includes("contact")) {
      reply = "Scroll down to the Contact section!";
    } else if (input.toLowerCase().includes("rada")) {
      reply = "Alaws lagi 👋";
    } else if (input.toLowerCase().includes("buang ka")){
        reply = "Sorry Boss, wala lang ko kasabut pero ug amigo ka ani akong kinomo basig labaw pa sa libat, tarunga lang ng text nimo, mura kag si kinsa ba";
    } else if (input.toLowerCase().includes("looking")) {
        reply = "LF kuhaon dayun";
    }

    updated.push({ text: reply, sender: "bot" });

    setMessages(updated);
    setInput("");
  };

  return (
    <>
      {/* Toggle Button */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#6a11cb",
          color: "white",
          padding: "15px",
          borderRadius: "50%",
          cursor: "pointer",
          zIndex: 999
        }}
      >
        💬 {/*Comment rani*/}
      </div>

      {/* Chat Window */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            width: "300px",
            height: "400px",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            display: "flex",
            flexDirection: "column",
            zIndex: 999
          }}
        >
          <div style={{ padding: "10px", overflowY: "auto", flex: 1 }}>
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  textAlign: msg.sender === "user" ? "right" : "left",
                  margin: "5px 0"
                }}
              >
                <span>{msg.text}</span>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", padding: "10px" }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type..."
              style={{ flex: 1 }}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;