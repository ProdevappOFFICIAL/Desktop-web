import React, { useState } from 'react';
import Draggable from 'react-draggable';

const App: React.FC = () => {
  const [quote, setQuote] = useState<string>('Your daily quote will appear here.');
  const [fontColor, setFontColor] = useState<string>('#000000');
  const [fontSize, setFontSize] = useState<string>('16px');
  const [fontFamily, setFontFamily] = useState<string>('sans-serif');
  const [bgImageUrl, setBgImageUrl] = useState<string>('');
  const [bgColor, setBgColor] = useState<string>('#ffffff');
  const [borderRadius, setBorderRadius] = useState<string>('0px');
  const [blurImage, setBlurImage] = useState<boolean>(false);
  const [width, setWidth] = useState<string>('400px');
  const [height, setHeight] = useState<string>('300px');

  const handleFontColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFontColor(e.target.value);
  };

  const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFontSize(e.target.value);
  };

  const handleFontFamilyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFontFamily(e.target.value);
  };

  const handleBgImageUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBgImageUrl(e.target.value);
  };

  const handleBgColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBgColor(e.target.value);
  };

  const handleBorderRadiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBorderRadius(e.target.value);
  };

  const handleBlurImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlurImage(e.target.checked);
  };

  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWidth(e.target.value);
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(e.target.value);
  };

  const handleQuoteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuote(e.target.value);
  };

  return (
    <div className="containe">
      <div className="mb-4">
        <label className="block mb-2 text-9xl bg-red-700">
          Quote Text:
          <input 
            type="text" 
            value={quote} 
            onChange={handleQuoteChange} 
            placeholder="Enter your quote" 
            className="block w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block mb-2">
          Font Color:
          <input 
            type="color" 
            value={fontColor} 
            onChange={handleFontColorChange} 
            className="block mt-1"
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block mb-2">
          Font Size:
          <input 
            type="text" 
            value={fontSize} 
            onChange={handleFontSizeChange} 
            placeholder="e.g. 24px" 
            className="block w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block mb-2">
          Font Family:
          <select 
            onChange={handleFontFamilyChange} 
            defaultValue="sans-serif" 
            className="block w-full mt-1 p-2 border border-gray-300 rounded"
          >
            <option value="sans-serif">Sans-serif</option>
            <option value="serif">Serif</option>
            <option value="monospace">Monospace</option>
          </select>
        </label>
      </div>

      <div className="mb-4">
        <label className="block mb-2">
          Background Image URL:
          <input 
            type="text" 
            value={bgImageUrl} 
            onChange={handleBgImageUrlChange} 
            placeholder="e.g. http://example.com/image.jpg" 
            className="block w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block mb-2">
          Background Color:
          <input 
            type="color" 
            value={bgColor} 
            onChange={handleBgColorChange} 
            className="block mt-1"
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block mb-2">
          Border Radius:
          <input 
            type="text" 
            value={borderRadius} 
            onChange={handleBorderRadiusChange} 
            placeholder="e.g. 10px" 
            className="block w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block mb-2">
          Blur Background Image:
          <input 
            type="checkbox" 
            checked={blurImage} 
            onChange={handleBlurImageChange} 
            className="ml-2"
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block mb-2">
          Width:
          <input 
            type="text" 
            value={width} 
            onChange={handleWidthChange} 
            placeholder="e.g. 400px" 
            className="block w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block mb-2">
          Height:
          <input 
            type="text" 
            value={height} 
            onChange={handleHeightChange} 
            placeholder="e.g. 300px" 
            className="block w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </label>
      </div>

      <div className={`relative overflow-hidden border border-gray-300 ${bgImageUrl ? 'bg-cover bg-center' : ''}`} 
        style={{
          borderRadius: borderRadius,
          width: width,
          height: height,
          backgroundColor: bgColor,
          backgroundImage: bgImageUrl ? `url(${bgImageUrl})` : 'none',
          filter: blurImage ? 'none' : 'blur(5px)',
        }}
      >
        {blurImage && (
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{
              backgroundImage: bgImageUrl ? `url(${bgImageUrl})` : bgColor,
              filter: 'blur(5px)',
              zIndex: 0,
            }} 
          />
        )}
        <Draggable
          bounds="parent"
          defaultPosition={{ x: 0, y: 0 }}
        >
          <p 
            className="relative z-10 m-0" 
            style={{
              color: fontColor,
              fontSize: fontSize,
              fontFamily: fontFamily,
            }}
          >
            {quote}
          </p>
        </Draggable>
      </div>
    </div>
  );
};

export default App;
