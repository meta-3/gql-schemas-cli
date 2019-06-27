import { Command, flags } from '@oclif/command'
import { SCHEMAS_ADD } from '../../configuration/commands'

export default class AddSchema extends Command {
  static description = SCHEMAS_ADD.description

  static flags = SCHEMAS_ADD.flags

  static args = SCHEMAS_ADD.args

  async run() {
    const { args, flags } = this.parse(AddSchema)

    const name = flags.name || 'world'
    this.log(`hello ${name} from ./src/commands/hello.ts`)
    // if (args.file && flags.force) {
    //   this.log(`you input --force and --file: ${args.file}`)
    // }
  }
}
