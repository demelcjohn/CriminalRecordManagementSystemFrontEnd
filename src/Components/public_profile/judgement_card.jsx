import React, { useState } from 'react'

import './case_card.css';

export default function Judgement_card(props) {
    const [data,setdata] = useState(props.data);
  return (
    <div className='judgement_card_div'>
        <p>{data.judgement}</p>
    </div>
  )
}
