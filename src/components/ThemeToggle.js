import { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from './Theme';

const ThemeToggle = () =>
{
    const { theme, setTheme } = useContext{ThemeContext};
    const handleThemeToggle = () =>
    {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    return (
        <div>
            <switch>

            </switch>
        </div>
    )
}