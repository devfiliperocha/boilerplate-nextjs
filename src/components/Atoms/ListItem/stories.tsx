import ListItem, { ListItemProps } from '.'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Design System/Atoms/ListItem',
  component: ListItem,
  argTypes: {
    children: { table: { disable: true } },
    classes: { table: { disable: true } },
    elevation: { table: { disable: true } },
    square: { table: { disable: true } },
    sx: { table: { disable: true } },
    variant: { table: { disable: true } },
    ref: { table: { disable: true } }
  }
} as Meta

export const Basic: Story<ListItemProps> = (args) => <ListItem {...args} />
