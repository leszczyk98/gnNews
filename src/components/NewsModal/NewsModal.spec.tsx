import { render, screen } from 'test-utils'
import NewsModal, { NewsModalProps } from './NewsModal'
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

describe('NewsModal', () => {
  const props: Required<NewsModalProps> = {
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    publishedAt: new Date(),
    url: '#',
    author: 'John Doe',
    desc: 'Donec feugiat convallis turpis, eget iaculis nisi volutpat eu. Integer luctus eros malesuada pellentesque molestie. Nulla posuere sed nisl non gravida. Nullam luctus interdum nisi. Duis egestas convallis velit a posuere.',
    image: placeholderImg,
  }
  test('modal displays correctly', () => {
    render(<NewsModal {...props} />)
    expect(screen.getByTestId('title')).toHaveTextContent(props.title)
    expect(screen.getByTestId('image')).toBeInTheDocument()
    expect(screen.queryByTestId('no-image')).not.toBeInTheDocument()
    expect(screen.getByTestId('desc')).toHaveTextContent(props.desc)
    expect(screen.getByTestId('link')).toHaveTextContent(props.url)
    expect(screen.getByTestId('author')).toHaveTextContent(props.author)
    expect(screen.getByTestId('date')).toHaveTextContent(
      props.publishedAt.toDateString()
    )
  })
  test('modal displays correctly when no image', () => {
    render(<NewsModal {...props} image="" />)
    expect(screen.queryByTestId('image')).not.toBeInTheDocument()
    expect(screen.getByTestId('no-image')).toBeInTheDocument()
  })
})
