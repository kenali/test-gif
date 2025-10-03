interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchInput({ value, onChange }: Props) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Введите слово для поиска GIF"
      className="w-full mb-4 p-4 h-14 rounded-xl border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none transition-all duration-300 placeholder-gray-400
    text-base
  "
    />
  );
}
