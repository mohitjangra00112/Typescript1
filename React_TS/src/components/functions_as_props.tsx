type Props = {
  onSave: (value: string) => void;
};

function Input({ onSave }: Props) {
  return (
    <input
      onChange={e => onSave(e.target.value)}
    />
  );
}
