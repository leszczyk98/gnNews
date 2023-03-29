import { render, screen } from 'test-utils'
import Footer from './Footer'

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str: string) => str,
    }
  },
  initReactI18next: {
    type: '3rdParty',
  },
}))

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    country: 'poland',
  }),
}))

describe('Footer', () => {
  test('display correct time', () => {
    render(<Footer />)
    expect(screen.getByTestId('time').textContent).toEqual(
      new Date().toLocaleTimeString()
    )
  })
  test('render article counter', () => {
    render(<Footer />)
    expect(screen.getByTestId('counter')).toBeInTheDocument()
  })
})
