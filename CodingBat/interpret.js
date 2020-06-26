// interpret(1, ['+'], [1]) → 2
// interpret(4, ['-'], [2]) → 2
// interpret(1, ['+', '*'], [1, 3]) → 6

function interpret(value, commands, args) {
  const commandsMap = {
    '+': 'add',
    '-': 'sub',
    '*': 'mul',
    '/': 'div'
  }

  let i = 0

  while (i < commands.length) {
    const command = commandsMap[commands[i]]
    if (!command) return -1

    const arg = args[i]
    switch (command) {
      case 'add':
        value += arg
        break
      case 'sub':
        value -= arg
        break
      case 'mul':
        value *= arg
        break
      default:
        return
    }
    i++
  }
  return value
}

function interpret2(value, commands, args) {
  const commandsMap = {
    '+': (value, arg) => value + arg,
    '-': (value, arg) => value - arg,
    '*': (value, arg) => value * arg,
    '/': (value, arg) => value / arg,
  }

  let i = 0

  while (i < commands.length) {
    const command = commandsMap[commands[i]]
    if (!command) return -1

    const arg = args[i]
    value = command(value, arg)
    i++
  }
  return value
}