# GitHub Issue Explorer

Displays issues and pull requests of a GitHub repository.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

1. Ensure you have permission to access this project.

2. Ensure you have an adequate version of [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git), [Node](http://nodejs.org/), [npm](https://npmjs.org/) (included in Node). This app was developed with the following tool versions.

```
$ node -v
v10.16.0

$ npm -v
6.9.2

$ git --version
git version 2.20.1.windows.1
```

### Installing

To install, type the following commands.

```
$ git clone https://github.com/axiomzen/cc_SarahNg_IssuesExplorerFE.git
$ cd cc_SarahNg_IssuesExplorerFE\issues-explorer
$ npm install
```

### Running

Navigate to the `issues-explorer` folder of the project and run the following command to run the app.

```
$ npm start
```

The app should be running shortly in your default web browser at `localhost:3000`. (Microsoft Edge not supported.)

## User guide

### How to use the GitHub Issue Explorer

1. Paste a GitHub repo URL in the search bar, then press enter.

2. View the results page that displays all (open, closed, pull requests) issues from the GitHub repo provided.
   * All issues displays all open, closed, and pull requests
3. Select different filters to filter issues (all, open, closed, pull requests). Note that a maximum of 30 items are displayed by default.
   * Open issues displays open issues and open pull requests
   * Closed issues displays closed issues and closed pull requests
   * Pull requests displays open and closed pull requests

4. To view issues from a different GitHub repository, click the ‘X’ at the top right corner to exit the current view. Repeat step 1 with a new repository URL.

### Issue Icon

Issues types are indicated by the icon on each issue. While all pull requests are issues to GitHub, not all issues are pull requests.

* All pull requests (open and closed) are indicated by the [pull request icon](https://octicons.github.com/icon/git-pull-request/)
* Open issues are indicated by the absence of an icon (excluding open pull requests)
* Closed issues are indicated by the  [issue closed icon](https://octicons.github.com/icon/issue-closed/) (excluding closed pull requests)

## Built With

- [React](https://reactjs.org/) - Interactive UI
- [npm](https://www.npmjs.com/) - Package management
- [Redux](https://redux.js.org/) - State management