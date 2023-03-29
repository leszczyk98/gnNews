import { fireEvent, render, screen } from 'test-utils'
import Item, { ItemProps } from './Item'
import placeholderImg from '../../assets/no-image.jpg'

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

describe('NewsItem', () => {
  const props: Required<Omit<ItemProps, 'data-testid'>> = {
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    publishedAt: new Date(),
    type: 'list',
    url: '#',
    author: 'John Doe',
    desc: 'Donec feugiat convallis turpis, eget iaculis nisi volutpat eu. Integer luctus eros malesuada pellentesque molestie. Nulla posuere sed nisl non gravida. Nullam luctus interdum nisi. Duis egestas convallis velit a posuere.',
    image: placeholderImg,
  }
  test('modal visible after click', () => {
    render(<Item {...props} />)
    fireEvent.click(screen.getByTestId('news-wrapper'))
    expect(screen.getByTestId('news-modal')).toBeInTheDocument()
  })
  test('display correctly in list view', () => {
    render(<Item {...props} />)
    expect(screen.getByTestId('date')).toHaveTextContent(
      new Date().toDateString()
    )
    expect(screen.getByTestId('desc')).toHaveTextContent(props.desc)
    expect(screen.getByTestId('news-wrapper')).toHaveStyle({ width: '100%' })
  })
  test('display correctly in grid view', () => {
    render(<Item {...props} type="grid" />)
    expect(screen.queryByTestId('date')).not.toBeInTheDocument()
    expect(screen.queryByTestId('desc')).not.toBeInTheDocument()
    expect(screen.getByTestId('news-wrapper')).toHaveStyle({
      maxWidth: '400px',
    })
  })
  test('display image when provided', () => {
    render(<Item {...props} />)
    expect(screen.getByTestId('image')).toBeInTheDocument()
  })
  test('display placeholder image when no image', () => {
    render(<Item {...props} image="" />)
    expect(screen.getByTestId('placeholder-image')).toBeInTheDocument()
  })
})
