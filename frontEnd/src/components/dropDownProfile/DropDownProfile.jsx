import React from 'react';

function DropDownProfile({ buttons }) {
    return (
        <div className="flex flex-col dropDownProfile">
            <ul className="flex flex-col gap-4">
                {buttons.map((button, index) => (
                    <button className='drop-btns' key={index} onClick={button.onClick}>{button.label}</button>
                ))}
            </ul>
        </div>
    );
}

export default DropDownProfile;
