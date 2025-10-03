import GifItem from "./GifItem";

interface Gif {
  id: string;
  images: {
    fixed_height: { url: string };
  };
  title: string;
}

interface Props {
  gifs?: Gif[];
}

export default function GifList({ gifs }: Props) {
  if (!gifs) return null;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 p-4">
      {gifs.map((gif) => (
        <div
          key={gif.id}
          className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 m-2"
        >
          <GifItem gif={gif} />
        </div>
      ))}
    </div>
  );
}
