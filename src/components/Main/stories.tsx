import Main from '.'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Main',
  component: Main
} as Meta

export const Basic: Story = (args) => <Main {...args} />
Basic.argTypes = {
  title: {
    name: 'Title',
    type: { name: 'string' },
    defaultValue:
      'Desenvolvimento de Software e Aplicativos Personalizados de Alta Performance',
    description: 'Título',
    control: {
      type: 'text'
    }
  },
  description: {
    name: 'Description',
    type: { name: 'string' },
    defaultValue: 'Uma idéia no papel, é só uma idéia...',
    description: 'Descrição',
    control: {
      type: 'text'
    }
  },
  logo: {
    name: 'Logo',
    type: { name: 'string' },
    description: 'Arquivo de logo',
    control: {
      type: 'file'
    }
  },
  illustration: {
    name: 'Illustration',
    type: { name: 'string' },
    description: 'Arquivo de ilustração',
    control: {
      type: 'file'
    }
  }
}
