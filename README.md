gql-schemas-cli
===============

GQL Schema&#39;s CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/gql-schemas-cli.svg)](https://npmjs.org/package/gql-schemas-cli)
[![CircleCI](https://circleci.com/gh/https://github.com/meta-3/gql-schemas-cli/gql-schemas-cli/tree/master.svg?style=shield)](https://circleci.com/gh/https://github.com/meta-3/gql-schemas-cli/gql-schemas-cli/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/gql-schemas-cli.svg)](https://npmjs.org/package/gql-schemas-cli)
[![License](https://img.shields.io/npm/l/gql-schemas-cli.svg)](https://github.com/https://github.com/meta-3/gql-schemas-cli/gql-schemas-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g gql-schemas-cli
$ gql-schemas COMMAND
running command...
$ gql-schemas (-v|--version|version)
gql-schemas-cli/0.0.0 darwin-x64 node-v12.4.0
$ gql-schemas --help [COMMAND]
USAGE
  $ gql-schemas COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`gql-schemas hello [FILE]`](#gql-schemas-hello-file)
* [`gql-schemas help [COMMAND]`](#gql-schemas-help-command)
* [`gql-schemas schemas [FILE]`](#gql-schemas-schemas-file)

## `gql-schemas hello [FILE]`

describe the command here

```
USAGE
  $ gql-schemas hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ gql-schemas hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/meta-3/gql-schemas-cli/gql-schemas-cli/blob/v0.0.0/src/commands/hello.ts)_

## `gql-schemas help [COMMAND]`

display help for gql-schemas

```
USAGE
  $ gql-schemas help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.0/src/commands/help.ts)_

## `gql-schemas schemas [FILE]`

describe the command here

```
USAGE
  $ gql-schemas schemas [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/schemas.ts](https://github.com/meta-3/gql-schemas-cli/gql-schemas-cli/blob/v0.0.0/src/commands/schemas.ts)_
<!-- commandsstop -->
