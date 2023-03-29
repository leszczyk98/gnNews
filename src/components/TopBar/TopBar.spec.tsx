import { render, screen } from 'test-utils'
import TopBar from './TopBar'

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    }
  },
  initReactI18next: {
    type: '3rdParty',
    init: () => {},
  },
}))

describe('TopBar', () => {
  test('renders correctly', () => {
    render(<TopBar />)
    expect(screen.queryByTestId('hamburger')).toHaveStyle({ display: 'none' })
    expect(screen.getByTestId('view-type-buttons')).toBeInTheDocument()
    expect(screen.getByTestId('language-buttons')).toBeInTheDocument()
  })
})
