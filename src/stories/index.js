import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import App from "../App";

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button!</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

  storiesOf('App', module).add('default', () => <App />);

  // added cme

  storiesOf("Pages/Welcome", module)
  .addDecorator(withKnobs)
  .add("Welcome", () => (
   <Welcome>
    <Table
     items={[
      { id: 1, name: "foo", description: "bar" },
      { id: 2, name: "baz", description: "foobar" }
     ]}
    />
   </Welcome>
  )); 

  storiesOf('BarChart', module)
  .addDecorator(getStory => <ShowcaseCard>{ getStory() }</ShowcaseCard>)
  .add('With Multiple data set', () => <MultipleBarChart/>)
  .add('With Gradient', () => <BarChartWithGradient/>)
  .add('With Different Bars', () => <BarChartWithDifferentBars/>)
  .add('Horizontal', () => <BarChartHorizontal/>)
  .add('Horizontal with YAxis', () => <BarChartHorizontalWithYAxis/>)
  .add('Horizontal with Labels', () => <BarChartHorizontalWithLabels/>)
  .add('Vertical with Labels', () => <BarChartVerticalWithLabels/>)
