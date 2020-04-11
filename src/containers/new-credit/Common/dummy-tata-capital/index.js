import React from 'react';
function Tata(props) {
    console.log(props)
    return (
        <div style={{ textAlign: 'center', fontSize: '50px', margin: '10px', color: 'white' }}>
            Tata Capital Page
            <h4>{props.location.state.selectedTag}</h4>
        </div>
    )
}

export default Tata;