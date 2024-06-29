import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
  

const DirectionPad = ({setPlayerStartedMoving}) => {

const simulateKeydown = (direction) => {
  setPlayerStartedMoving(true);
  const keyCode = direction === 'ArrowUp' ? 38 :
                  direction === 'ArrowDown' ? 40 :
                  direction === 'ArrowLeft' ? 37 :
                  direction === 'ArrowRight' ? 39 : null;

  const event = new KeyboardEvent('keydown', { keyCode });
  window.dispatchEvent(event);
};

  return (
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ marginBottom: '10px' }}>
        <button style={{ backgroundColor: '#000', color: '#fff', borderRadius: '25%', padding: '10px 20px', border: '2px solid #fff', fontSize: '20px' }} onTouchStart={() => simulateKeydown('ArrowUp')} onClick={() => simulateKeydown('ArrowUp')}>
            <FontAwesomeIcon icon={faArrowUp} />
        </button>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px', width: '100%' }}>
        <button style={{ backgroundColor: '#000', color: '#fff', borderRadius: '25%', padding: '10px 20px', marginRight: '4rem', border: '2px solid #fff', fontSize: '20px' }} onTouchStart={() => simulateKeydown('ArrowLeft')} onClick={() => simulateKeydown('ArrowLeft')}>
            <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button style={{ backgroundColor: '#000', color: '#fff', borderRadius: '25%', padding: '10px 20px', border: '2px solid #fff', fontSize: '20px' }} onTouchStart={() => simulateKeydown('ArrowRight')} onClick={() => simulateKeydown('ArrowRight')}>
            <FontAwesomeIcon icon={faArrowRight} />
        </button>
    </div>
    <div>
        <button style={{ backgroundColor: '#000', color: '#fff', borderRadius: '25%', padding: '10px 20px', border: '2px solid #fff', fontSize: '20px' }} onTouchStart={() => simulateKeydown('ArrowDown')} onClick={() => simulateKeydown('ArrowDown')}>
            <FontAwesomeIcon icon={faArrowDown} />
        </button>
    </div>
</div>
  );
};

export default DirectionPad;