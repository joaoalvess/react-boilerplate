import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Text, TextProps} from '.';

export default {
  title: 'Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args: TextProps) => (
  <Text {...args} />
);

export const Default = Template.bind({});
