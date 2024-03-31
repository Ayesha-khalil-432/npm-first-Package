import React from "react";

const Model = ({ text }) => {
    const fonts = [
        { name: "Arial", style: "Arial, sans-serif" },
        { name: "Georgia", style: "Georgia, serif" },
        { name: "Courier New", style: "Courier New, monospace" },
        { name: "Verdana", style: "Verdana, sans-serif" },
        { name: "Times New Roman", style: "Times New Roman, serif" }
    ];

    return (
        <div>
            <div>
                {fonts.map((font, index) => (
                    <p key={index} style={{ fontFamily: font.style, fontSize: '25px' }}>
                        {text} - {font.name}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default Model;