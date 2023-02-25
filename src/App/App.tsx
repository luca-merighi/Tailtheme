import useAppData from '../data/hook/useAppData'

import './App.css'

export default function App() {
  const {theme, changeTheme} = useAppData()

  return (
    <div className={`h-screen w-screen ${theme}`}>
      <div className={`h-full w-full flex items-center justify-center bg-slate-50 dark:bg-slate-900`}>        
        <main className="
          bg-stone-200 dark:bg-slate-700 p-10 w-1/3 
          flex flex-col gap-4
          rounded-md">
          <h1 className="text-sky-500 text-3xl font-bold">
            Tail
            <span className="text-stone-800 dark:text-stone-200">
              Theme
            </span>
          </h1>
          <p className="text-stone-700/75 dark:text-stone-200/75">
            Esté um exemplo de mudança de tema da aplicação. Utilizando <span className="text-sky-500 font-medium">TailwindCSS</span> podemos facilmente alternar o tema para Dark ou Light, além disso, estamos salvando essa configuração no <span className="text-stone-700 dark:text-stone-200 font-medium">LocalStorage</span> através dos Cookies.
          </p>
          <div className="
            w-fit
            border-2 border-stone-700 dark:border-stone-200
            rounded-md">
            <span className="
              text-stone-700 dark:text-stone-200 text-xl font-medium p-1">
              Theme &nbsp;
              {theme === '' ? (
                <button 
                  onClick={changeTheme}
                  className="
                  border-l-2 border-stone-700 dark:border-stone-200 h-full p-1">
                  Dark
                </button>
              ) : (
                <button 
                  onClick={changeTheme}
                  className="
                  border-l-2 border-stone-700 dark:border-stone-200 h-full p-1">
                  Light
                </button>
              )}
            </span>
          </div>
        </main>
      </div>
    </div>
  )
}