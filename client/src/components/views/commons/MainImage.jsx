import React from 'react'

function MainImage({ title, originalTitle, overview, image }) {
  return (
    <section className="main-movie" 
      style={{ position: "relative", width: "100%", height: "500px", background: `url(${image}) no-repeat top center / cover`}}>
      <div>
          <div style={{ position: 'absolute', maxWidth: '500px', color: "#fff", bottom: '2rem', marginLeft: '2rem', padding: "1rem", background: "rgba(0, 0, 0, 0.5)"}} >
            <h2 style={{ color: "#fff", fontWeight: "bold", fontSize: "1.7rem" }}>🤗 가장 추천하는 영화에요! 🤗</h2>
            <h3 style={{ color: "#fff", fontSize: "1.2rem"}}>{title} ({originalTitle})</h3>
            <p style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"}}>{overview}</p>
          </div>
      </div>
  </section>
  )
}

export default MainImage
