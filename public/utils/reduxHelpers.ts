export const formatTheme = (theme : 'dark' | 'light') => {
    if (theme === 'dark')   return "bg-zinc-900 text-white"
else                         return 'bg-white text-black'
}