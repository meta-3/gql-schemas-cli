import { flags } from '@oclif/command'

export const SCHEMAS_ADD = {
  description: `Add and register a new GraphQL Schema`,

  args: [{ name: 'name' }, { name: 'uri' }],

  flags: {
    help: flags.help({ char: 'h' }),
    name: flags.string({ char: 'n', description: 'Schema Name' }),
    uri: flags.string({ char: 'u', description: 'GraphQL or GraphQL Server URI' }),
    repository: flags.string({ char: 'r', description: 'Repository URI ' }),
  },
}
