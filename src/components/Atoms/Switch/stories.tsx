import Switch from '.'
import { Meta, Story } from '@storybook/react/types-6-0'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Design System/Atoms/Switch',
  component: Switch,
  args: {
    checked: false,
    label: 'Teste'
  },
  iconLeft: { table: { disable: true } },
  iconRight: { table: { disable: true } }
} as Meta

export const Basic: Story = (args) => (
  <Switch {...args} onChange={action('Check!')} />
)
