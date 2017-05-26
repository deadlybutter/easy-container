## easy container

Easy Container :tm: is a simpler way of constructing Redux containers for your components.

### setup

```
$ npm install easy-container --save
```

### basic usage

```js
import React from 'react';
import Container from 'easy-container';
import { connect } from 'react-redux';
import { genericAction } from '../actions';

const Example = (props) => {
  console.log(props); // { hello: 'world', genericAction: () => ... }
  return null;
};

Example.mapStateToProps = state => ({
  hello: state.world,
});

Example.actionCreators = {
  genericAction
};

export default Container(connect, Example);
```

In essence, you're attaching the Redux container `.mapStateToProps` and `.actionCreators` to your component. From there you can pass it through easy container with your instance of `connect`.
