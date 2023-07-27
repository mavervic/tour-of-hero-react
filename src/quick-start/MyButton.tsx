interface Props {
  count: number;
  onClick: () => void;
}

export default function MyButton({ count, onClick }: Props) {
  return <button onClick={onClick}> Clicked {count} times</button>;
}
