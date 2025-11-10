"use client"

// ✅ Reusable Button Component
export default function Button({ children }) {

  return (
    // ✅ Clickable button with default styles & console log action
    <button
      onClick={() => console.log("Button is clicked")}
      className="bg-blue-950 mt-5 p-2"
    >
      {/* ✅ Render whatever content is passed between <Button>...</Button> */}
      {children}
    </button>
  )
}
