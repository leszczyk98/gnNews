import { countries } from 'constants/countries'
import { render, screen } from 'test-utils'
import SideMenu from './SideMenu'

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str: string) => str,
    }
  },
  initReactI18next: {
    type: '3rdParty',
    init: () => {},
  },
}))

describe('SideMenu', () => {
  test('display correct amount of countries', () => {
    render(<SideMenu />)
    expect(screen.getByTestId('wrapper')).toBeInTheDocument()
    expect(screen.getAllByTestId('country').length).toEqual(
      Object.keys(countries).length
    )
  })
})
