import { render, screen } from 'test-utils'
import List from './List'
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

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    country: 'poland',
  }),
}))

describe('NewsList', () => {
  test('displays in grid view', () => {
    render(<List />, {
      preloadedState: {
        viewType: {
          value: 'grid',
        },
        news: {
          byCountry: {},
          isLoading: false,
        },
      },
    })
    expect(screen.getByTestId('list-wrapper')).toHaveStyle({ display: 'grid' })
  })
  test('displays in list view', () => {
    render(<List />, {
      preloadedState: {
        viewType: {
          value: 'list',
        },
        news: {
          byCountry: {},
          isLoading: false,
        },
      },
    })
    expect(screen.getByTestId('list-wrapper')).toHaveStyle({ display: 'flex' })
  })
  test('displays correct amount of items', () => {
    render(<List />, {
      preloadedState: {
        viewType: {
          value: 'list',
        },
        news: {
          byCountry: {
            pl: {
              articles: Array.from({ length: 10 }).map((_, idx) => ({
                author: 'John Doe',
                title:
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
                  idx,
                content:
                  'Donec feugiat convallis turpis, eget iaculis nisi volutpat eu. Integer luctus eros malesuada pellentesque molestie. Nulla posuere sed nisl non gravida. Nullam luctus interdum nisi. Duis egestas convallis velit a posuere.',
                description:
                  'Donec feugiat convallis turpis, eget iaculis nisi volutpat eu. Integer luctus eros malesuada pellentesque molestie. Nulla posuere sed nisl non gravida. Nullam luctus interdum nisi. Duis egestas convallis velit a posuere.',
                publishedAt: '2023-03-28T16:03:25Z',
                source: {
                  id: 'asd',
                  name: 'asdasd',
                },
                url: '#',
                urlToImage: placeholderImg,
              })),
              totalArticles: 10,
            },
          },
          isLoading: false,
        },
      },
    })
    expect(screen.getAllByTestId('list-item').length).toEqual(10)
  })
})
