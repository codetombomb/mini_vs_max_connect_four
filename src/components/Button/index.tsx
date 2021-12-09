import './style.scss';

function Button({text}: {text: string}) {
  return (
    <button className="Button">{text}</button>
  );
}

export default Button;