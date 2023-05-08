import { Meta, StoryObj } from '@storybook/react'

import '@styles/index.scss'

import { Comments } from './Comments'

const meta: Meta<typeof Comments> = {
  title: 'Comments/CommentLabel',
  tags: ['autodocs'],
  component: Comments,
  argTypes: {
    comments: {
      description: 'Список комментариев',
    },
  },
}

export default meta

type Story = StoryObj<typeof Comments>

export const Default: Story = {
  args: {
    comments: [
      {
        comment_id: '4d522235-7915-4122-8303-4bc79ea603a5',
        text: 'Фильм просто *** редкостное, не тратьте своё время!',
        vote: 2,
        createAt: '2023-05-08T07:30:59.761Z',
        user: {
          profile: {
            first_name: 'Victor',
            last_name: 'Barinov',
          },
        },
        sub_comments: [
          {
            comment_id: 'ec2d35f8-b9de-4fa6-a906-c76b9f2ddaer',
            text: 'Главный герой рассказывает о несчастной любви и такой же не очень счастливой жизни. Какие «вино, музыка, женщины», о чём вы? Все истории разные, и эта история именно вот такая. Это автобиография, спешу напомнить :) Т. е. фактически вы недовольны не фильмом, а историей этого человека. Плохо быть инвалидом, но ещё хуже завидовать… Здоровья вам!',
            createAt: '2023-05-08T07:30:59.761Z',
            vote: 4,
            user: {
              profile: {
                first_name: 'Victor',
                last_name: 'Barinov',
              },
            },
            sub_comments: [
              {
                comment_id: 'ec2d35f8-b9de-4fa6-a906-c76b9f2ddaew',
                text: 'Да причем тут зависть? Я делаю акцент на том, что трагедия «потреблял много, делал что хотел, а теперь я не могу, потому что инвалид» для меня не самая душераздирающая. По мне так «мы отправили сына дяде во Францию, потому что не можем содержать своего ребенка в своей нищете» куда пострашнее и куда более распространена по всему миру. Да, история на реальных событиях, но это не добавляет ей смысла, я не доволен таким рецептом поиска смысла жизни, а не чьей-либо жизнью. На мой взгляд, такой рецепт применим только в 0,001% случаев и то, я не уверен, что он так работает как показано в фильме. Вообще фраза «на реальных событиях» стала панацеей для всех слабоватых фильмов: делаешь клишеированных героев, предлагаешь выхолощенные ситуации, зритель сидит и не может избавиться от ощущения фальши на чувственном уровне, но мозг ему упорно напоминает фразу в титрах и зритель в конечном счете сам себя убеждает.',
                createAt: '2023-05-08T07:30:59.761Z',
                vote: 10,
                user: {
                  profile: {
                    first_name: 'Alex',
                    last_name: 'Der',
                  },
                },
                sub_comments: [],
              },
              {
                comment_id: 'ec2d35f8-b9de-4fa6-a906-c76b9f2ddaet',
                text: 'Рецензия прямо транслирует мои мысли по поводу этого переоцененного фильма.',
                createAt: '2023-05-08T07:30:59.761Z',
                vote: 10,
                user: {
                  profile: {
                    first_name: 'Dima',
                    last_name: 'Barinov',
                  },
                },
                sub_comments: [],
              },
              {
                comment_id: 'ec2d35f8-b9de-4fa6-a906-c76b9f2ddaey',
                text: 'Черт, рецензия убедила, но и фильм понравился. Что такое быть инвалидом, но богатым и тоже самое, но при этом вообще не имея денег, живя в бедности',
                createAt: '2023-05-08T07:30:59.761Z',
                vote: 10,
                user: {
                  profile: {
                    first_name: 'Alex',
                    last_name: 'Barinov',
                  },
                },
                sub_comments: [],
              },
            ],
          },
          {
            comment_id: 'ec2d35f8-b9de-4fa6-a906-c76b9f2ddaeq',
            text: 'Все по теме абсолютно. Взывают и играют с эмоциями на самом примитивном, легко доступном уровне. Спасибо за мнение, приятно было прочесть.',
            createAt: '2023-05-08T07:30:59.761Z',
            vote: 5,
            user: {
              profile: {
                first_name: 'Victor',
                last_name: 'Barinov',
              },
            },
            sub_comments: [],
          },
        ],
      },
      {
        comment_id: 'ec2d35f8-b9de-4fa6-a906-c76b9f2ddaef',
        text: '- 1,5 часа из жизни',
        vote: 3,
        createAt: '2023-05-08T07:30:59.761Z',
        user: {
          profile: {
            first_name: 'Victor',
            last_name: 'Barinov',
          },
        },
        sub_comments: [],
      },
      {
        comment_id: '4c786377-f586-4580-ab6e-24cb0ccd407e',
        text: 'Неплохой фильм, сойдёт для разнообразия.',
        vote: 0,
        createAt: '2023-05-08T07:30:59.761Z',
        user: {
          profile: {
            first_name: 'Victor',
            last_name: 'Barinov',
          },
        },
        sub_comments: [],
      },
    ],
  },
}
