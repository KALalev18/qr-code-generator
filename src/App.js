import React, { useState } from "react";
import QRCode from "qrcode.react";
import "./App.css"

export default function QRCodeGenerator() {
    const [qrCode, setQrCode] = useState("");
    const [input, setInput] = useState("");
    const [backgroundColor, setBackgroundColor] = useState("#ffffff")
    const [showQrCode, setShowQrCode] = useState(false);

    function handleGenerateQrCode() {
        setQrCode(input);
        setShowQrCode(true);
        //setInput(""); - when you want to reset it on pressed button
    }
    return (<div className="container">
        <h1>QR Code Generator</h1>
        <div>
            <input
                onChange={(e) => setInput(e.target.value)}
                type="text"
                name="qr-code"
                value={input}
                placeholder="Enter your value" />

            <button
                disabled={input && input.trim() !== "" ? false : true}
                onClick={handleGenerateQrCode}>Generate</button>
        </div>
        <div>
            {qrCode && (
                <div className={`qr-code-container ${showQrCode ? "show" : ""}`}>
                    <QRCode
                        id="qr-code-value"
                        value={qrCode || input}
                        size={600}
                        bgColor={backgroundColor} />


                </div>
            )}
            <div className="color-picker-container">
                <label htmlFor="color-picker"><h2>Choose background color:</h2></label>
                <input
                    id="color-picker"
                    type="color"
                    onChange={(e) => setBackgroundColor(e.target.value)}
                    value={backgroundColor}
                    className="color-picker"
                />
            </div>
        </div>
    </div>
    );
}
