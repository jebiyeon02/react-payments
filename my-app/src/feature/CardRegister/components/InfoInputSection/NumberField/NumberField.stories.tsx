import type {Meta, StoryObj} from '@storybook/react-vite';
import NumberField from './NumberField';

const meta = {
  title: 'common/components/NumberField',
  component: NumberField,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof NumberField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
