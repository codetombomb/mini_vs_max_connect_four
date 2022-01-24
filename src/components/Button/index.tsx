import './style.scss';

interface ButtonProps {
  text: string;
}

function Button({text}: ButtonProps) {
  return (
    <button className="Button">{text}</button>
  );
}

export default Button;