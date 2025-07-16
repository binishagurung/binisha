import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

export default function Emoji() {
  const [text, setText] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (emojiData) => {
    setText((prev) => prev + emojiData.emoji);
  };

  const handleDelete = () => {
    const chars = Array.from(text);
    chars.pop();
    setText(chars.join(''));
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Emoji Picker (with emoji-picker-react) 😊</h2>

      {/* Text Input */}
      <input
        type="text"
        value={text}
        readOnly
        style={{
          fontSize: '1.4rem',
          padding: '10px',
          width: '90%',
          maxWidth: '400px',
          textAlign: 'center',
          marginBottom: '10px',
        }}
        placeholder="Click emojis to add..."
      />

      <br />

      {/* Buttons */}
      <button
        onClick={() => setShowPicker(!showPicker)}
        style={{
          padding: '8px 16px',
          margin: '10px',
          fontSize: '1rem',
          borderRadius: '5px',
          border: '1px solid #ccc',
          cursor: 'pointer',
        }}
      >
        {showPicker ? 'Hide Emoji Picker' : 'Show Emoji Picker'}
      </button>

      <button
        onClick={handleDelete}
        style={{
          padding: '8px 16px',
          background: '#cd1dd3ff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          fontSize: '1rem',
          cursor: 'pointer',
        }}
      >
        ⬅️ Delete Last Emoji
      </button>

      {/* Emoji Picker */}
      {showPicker && (
        <div style={{ marginTop: '20px', display: 'inline-block' }}>
          <EmojiPicker onEmojiClick={onEmojiClick} />
        </div>
      )}
    </div>
  );
}
