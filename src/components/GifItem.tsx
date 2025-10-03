import { useState } from "react";

interface Gif {
  id: string;
  images: {
    fixed_height: { url: string };
  };
  title: string;
}

interface Props {
  gif: Gif;
}

export default function GifItem({ gif }: Props) {
  const [hover, setHover] = useState(false);

  const copyGif = () => {
    navigator.clipboard.writeText(gif.images.fixed_height.url);
    alert("GIF скопирован!");
  };

  return (
    <div
      onClick={copyGif}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative cursor-pointer"
    >
      <img
        src={gif.images.fixed_height.url}
        alt={gif.title}
        className="max-w-[200px] max-h-[200px] object-cover rounded-lg"
      />
      {hover && (
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-1 text-sm">
          {gif.title}
        </div>
      )}
    </div>
  );
}
