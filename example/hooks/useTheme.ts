import { useTheme as emotioThemingUseTheme } from 'emotion-theming'
import { theme } from '../theme'

type UseTheme = () => typeof theme
export const useTheme: UseTheme = emotioThemingUseTheme
