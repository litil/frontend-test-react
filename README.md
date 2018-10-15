# [aircall.io](https://aircall.io) - Frontend technical test

This test is a part of the hiring process at Aircall for frontend positions. More information about the test  [here](https://github.com/aircall/frontend-test-react).

## Summary

The goal of this test was to make a ReactJS application displaying information about calls.

The app has two different components:
- **Activity Feed** - simple list of calls
- **Activity Detail** - detail of a call

![Activity Details](https://user-images.githubusercontent.com/5346118/46978013-fdd0e900-d0cd-11e8-8cec-e6faeb7302f7.png) ![Activity Feed](https://user-images.githubusercontent.com/5346118/46978012-fdd0e900-d0cd-11e8-8d2b-94e0f716bb9b.png)


## Installation

We're using [yarn](https://yarnpkg.com) here:

```
yarn install
yarn start
```

The app is now running on [localhost:8081](http://localhost:8081).

## Run tests

We're using [jest](https://jestjs.io/). Some of the components and sagas have been tested. To run the tests:

```
yarn run jest
```

## Run linter

We're using [eslint](https://eslint.org/) here:

```
yarn run lint
```

## Component library

We're using [storybook](https://github.com/storybooks/storybook) here:

```
yarn run storybook
```

## API documentation

### Routes

The API is hosted on: https://aircall-job.herokuapp.com.

As you can see, it's hosted on a free Heroku server, which means that the first time you will fetch the API, it will take few seconds to answer.

After having archived a few calls, you might want to reset the activity list. Do so by calling this endpoint:
- **GET** - https://aircall-job.herokuapp.com/reset: Reset all calls to initial state

## TODO

A few things are missing or could be improved:
- Continuous Integration
- Deploy the application (AWS S3)
