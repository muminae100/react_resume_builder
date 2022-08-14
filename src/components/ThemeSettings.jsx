import { useStateValue } from '../StateProvider';
import { BsCheck } from 'react-icons/bs';

const themeColors = [
    {
      name: 'blue-theme',
      color: '#1A97F5',
    },
    {
      name: 'green-theme',
      color: '#03C9D7',
    },
    {
      name: 'purple-theme',
      color: '#7352FF',
    },
    {
      name: 'red-theme',
      color: '#FF5C8E',
    },
    {
      name: 'indigo-theme',
      color: '#1E4DB7',
    },
    {
      color: '#FB9678',
      name: 'orange-theme',
    },
];

const ThemeSettings = () => {
  const { setColor, setMode, currentMode, currentColor, setThemeSettings } = useStateValue();

  return (
        <>
          <div>
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === 'Light'}
            />
            <label>
              Light
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              onChange={setMode}
              className="cursor-pointer"
              checked={currentMode === 'Dark'}
            />
            <label htmlFor="dark">
              Dark
            </label>
          </div>
       
        <div>
          <p>Theme Colors</p>
          <div>
            {themeColors.map((item, index) => (
              
                <div
                  key={item.name}
                >
                  <button
                    type="button"
                    style={{ backgroundColor: item.color }}
                    onClick={() => setColor(item.color)}
                  >
                    <BsCheck className={` ${item.color === currentColor ? 'block' : 'hidden'}`} />
                  </button>
                </div>
              
            ))}
          </div>
        </div>
        </>
      
  );
};

export default ThemeSettings;