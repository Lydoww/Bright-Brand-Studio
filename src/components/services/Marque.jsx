import React from "react";

function Marque() {
  const text = "A business world where conscious brands leads the way.";

  return (
    <div
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        width: "100%",
        height: "100px",
        display: "flex",
        alignItems: "center",
        position: "relative",
        color: "#F98948",
        fontSize: "38px",
        fontWeight: "bold",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          animation: "marquee 10s linear infinite",
        }}
      >
        {/* Première copie du texte */}
        <div style={{ whiteSpace: "nowrap" }}>{text}&nbsp;&nbsp;&nbsp;</div>
        {/* Deuxième copie du texte */}
        <div style={{ whiteSpace: "nowrap" }}>{text}&nbsp;&nbsp;&nbsp;</div>
        {/* Troisième copie pour assurer la continuité */}
        <div style={{ whiteSpace: "nowrap" }}>{text}&nbsp;&nbsp;&nbsp;</div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </div>
  );
}

export default Marque;
