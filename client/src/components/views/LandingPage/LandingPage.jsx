import React from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from 'antd';

const moods = [
  { id: 1, state: '행복해요', emoji: '😃', color: '#ee5253', genreId: 18},
  { id: 2, state: '우울해요', emoji: '😢', color: '#576574', genreId: 35},
  { id: 3, state: '지루해요', emoji: '😪', color: '#e1b12c', genreId: 12},
  { id: 4, state: '더워요', emoji: '🤯', color: '#009432', genreId: 9648},
  { id: 5, state: '피곤해요', emoji: '🥱', color: '#574b90', genreId: 10402},
]

function LandingPage() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%', height: '100vh' }}>
      <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold'}}>지금 당신의 기분을 골라주세요.</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '4.5rem'}}>기분에 따라 알맞은 영화를 추천해 드려요. </p>
      <div className='mood' style={{ display: 'flex', fontSize: '12rem', lineHeight: '1.4'}}>
        {moods.map((mood) => { 
          return (
            <Link to={`/recommend/${mood.genreId}`}>
              <div key={mood.id} className='mood-state'>
                <Tooltip title={mood.state}>
                  <div style={{ marginRight: '1.5rem'}}>{mood.emoji}</div>
                </Tooltip>
              </div>
            </Link>
          )
        })}
    </div>
    </div>
  )
}

export default LandingPage
