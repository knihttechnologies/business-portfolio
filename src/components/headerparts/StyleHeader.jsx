import React, { useState } from 'react'
import { headerStyles } from '../../assets/constants/headerStyles';

const StyleHeader = ({styleIdx, setStyleIdx}) => {
//   const [styleIdx, setStyleIdx] = useState(0);

    return (
        <nav className='flex flex-col gap-5'>
            <div className="fixed bottom-2 right-4 z-[100] flex gap-2">
                {headerStyles.map((style, idx) => (
                    <button
                        key={style.label}
                        onClick={() => setStyleIdx(idx)}
                        className={`px-3 py-1 rounded-lg font-semibold text-xs shadow ${styleIdx === idx ? 'bg-yellow-400 text-black' : 'bg-white/20 text-white hover:bg-yellow-400 hover:text-black transition'}`}
                    >
                        {style.label}
                    </button>
                ))}
            </div>
        </nav>
    );
}

export default StyleHeader
