interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: 'primary' | 'secondary';
}

const Button = ({ label, onClick, type = 'primary' }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`button ${type === 'primary' ? 'button-primary' : 'button-secondary'}`}
    >
      {label}
    </button>
  );
};

export default Button;