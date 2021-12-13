import './style.scss';

function ThemeButton({handleClick, themeColor}: any) {

    return (
        <div className='ThemeButton' style={{backgroundColor: themeColor}} onClick={handleClick}></div>
    )
}

export default ThemeButton