import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Code } from 'shared/ui/Code/Code';

export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    text: '\n'
        + '# The first parameter should e a name, the second a number\n'
        + 'if [ $# -lt 2 ]\n'
        + 'then\n'
        + '    echo "Not enough parameters"\n'
        + '    exit 1\n'
        + 'fi\n'
        + '\n'
        + '\n'
        + '# echo "Example shell script\\t2020\\nWelcome!"\n'
        + 'echo -e "Example shell script\\t2020\\nWelcome!"\n'
        + '\n'
        + '# Command line parameters\n'
        + 'echo $0\n'
        + 'echo $1\n'
        + 'echo $2\n'
        + '\n'
        + '# run command\n'
        + 'echo\n'
        + 'echo "List of files:"\n'
        + 'ls\n'
        + '\n'
        + '# run a command inside a string\n'
        + 'echo\n'
        + 'echo "Timestamp: `date`"\n'
        + '\n'
        + '# run another script\n'
        + 'echo\n'
        + 'echo "Greeting: `./hello.sh`"\n'
        + '\n'
        + 'ii=1\n'
        + 'count=$2\n'
        + 'if [ $count -ge 10 ]\n'
        + 'then\n'
        + '    echo "Updating count"\n'
        + '    count=10\n'
        + 'fi\n'
        + '\n'
        + 'while [ $ii -le $count ]\n'
        + 'do\n'
        + '    echo "$count : $ii : $1"\n'
        + '    ii=$((ii+1))\n'
        + 'done',
};
