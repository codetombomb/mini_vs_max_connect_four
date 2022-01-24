import './style.scss';

interface ThemeButtonProps {
    handleClick: () => void;
    themeColor: `#${string}`
}

function ThemeButton({handleClick, themeColor}: ThemeButtonProps) {
    return (
        <div className='ThemeButton' style={{backgroundColor: themeColor}} onClick={handleClick}></div>
    )
}

export default ThemeButton