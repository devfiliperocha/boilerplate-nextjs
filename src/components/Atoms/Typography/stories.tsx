import Typography, { TypographyPropsBase } from '.'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Design System/Atoms/Typography',
  component: Typography,
  argTypes: {
    children: {
      type: 'string'
    }
  },
  args: {
    children: 'Typography',
    color: 'primary',
    variant: 'h1'
  }
} as Meta

export const Basic: Story<TypographyPropsBase> = ({
  color,
  children,
  variant
}) => (
  <>
    <Typography color={color} variant={variant}>
      {variant?.toUpperCase()} - {children}
    </Typography>
  </>
)
