/* src\components\ui\custom\Button_.tsx */

interface ButtonProps {
  label: string;
  onClick?: () => void;
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