import React from 'react';
import { Tooltip } from 'antd';

const moods = [
  { id: 1, state: "행복해요", emoji: "😃", color: "#ee5253", },
  { id: 2, state: "우울해요", emoji: "😢", color: "#576574"},
  { id: 3, state: "지루해요", emoji: "😪", color: "#e1b12c"},
  { id: 4, state: "배고파요", emoji: "😵", color: "#009432"},
  { id: 5, state: "피곤해요", emoji: "🥱", color: "#574b90"},
]

function LandingPage() {
  return (
    <div style={{
      display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column",
      width: "100%", height: "100vh",
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "4rem"}}>지금 당신의 기분을 골라주세요.</h1>
      <div className="mood" style={{ display: "flex", fontSize: "12rem"}}>
          {moods.map((mood) => { 
            return (
            // <Link to>
              <div key={mood.id} className="mood-state">
                <Tooltip title={mood.state} color={mood.color} >
                  <div style={{ marginRight: "1.2rem"}}>{mood.emoji}</div>
                </Tooltip>
              </div>
            // </Link>
            )}
          )
        }
      </div>
    </div>
  )
}

export default LandingPage
