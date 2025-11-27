import React, { useState, useEffect, useRef } from "react";

const EditableText = ({
  initialValue,
  tag: Tag = "div",
  className = "",
  multiline = false,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing && inputRef.current) inputRef.current.focus();
  }, [isEditing]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !multiline) setIsEditing(false);
  };

  if (isEditing) {
    return multiline ? (
      <textarea
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => setIsEditing(false)}
        className={`bg-transparent border-b border-red-500 outline-none w-full text-white resize-none ${className}`}
        rows={4}
      />
    ) : (
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => setIsEditing(false)}
        onKeyDown={handleKeyDown}
        className={`bg-transparent border-b border-red-500 outline-none text-white w-full text-center ${className}`}
      />
    );
  }

  return (
    <Tag
      onDoubleClick={() => setIsEditing(true)}
      className={`cursor-pointer hover:bg-white/10 rounded px-1 transition-colors select-none ${className}`}
      title="Double click to edit"
    >
      {value}
    </Tag>
  );
};

export default EditableText;
