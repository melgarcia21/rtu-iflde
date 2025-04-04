interface ButtonProps {
  label: string;
  onClick?: () => void;  // Make onClick optional
  className?: string;
}

const Button = ({ label, onClick, className = '' }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`button button-primary ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;