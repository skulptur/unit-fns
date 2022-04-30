// Let's start with the simple goal of outputing these
// they only have built-in stuff so it should be doable
// float repeat (float scale, float t) {
//     float times = 1.0 / scale;
//     return mod(t * times, 1.0);
// }

// export const repeat = (scale: Unit, t: Unit): Unit => {
//     const times = 1 / scale
//     return (t * times) % 1
// }

const arg = (name: string, valueKind: ValueKind): ArgumentDeclarationNode => {
  return {
    kind: 'argumentDeclaration',
    name,
    valueKind,
  }
}

const fn = (
  name: string,
  args: Array<ArgumentDeclarationNode>,
  valueKind: ValueKind,
  body: Array<FunctionBody>
): FunctionNode => {
  return {
    kind: 'functionDeclaration',
    name,
    arguments: args,
    valueKind,
    body,
  }
}

const repeatAst: FunctionNode = fn(
  'repeat',
  [arg('x', 'unit'), arg('y', 'unit')],
  'unit',
  [
    {
      kind: 'variableDeclaration',
      name: 'times',
      valueKind: 'unit',
      value: {
        kind: 'functionCall',
        fn: '/',
        isBuiltIn: true,
        params: [
          {
            kind: 'inlineValue',
            value: 1,
            valueKind: 'unit',
          },
          {
            kind: 'scopeReference',
            value: 'x',
          },
        ],
      },
    },
    {
      kind: 'functionCall',
      fn: 'mod',
      isBuiltIn: true,
      params: [
        {
          kind: 'functionCall',
          fn: '*',
          isBuiltIn: true,
          params: [
            {
              kind: 'scopeReference',
              value: 'y',
            },
            {
              kind: 'scopeReference',
              value: 'times',
            },
          ],
        },
        {
          kind: 'inlineValue',
          value: 1,
          valueKind: 'unit',
        },
      ],
    },
  ]
)

const functionDeclarationToGlsl = (fnNode: FunctionNode): string => {
  const returnKind = valueKindToGlsl(fnNode.valueKind)
  const name = fnNode.name
  const args = fnNode.arguments
    .map(arg => `${valueKindToGlsl(arg.valueKind)} ${arg.name}`)
    .join(', ')
  const body = fnNode.body.map(astToGlsl)
  const lastIndex = body.length - 1
  body[lastIndex] = 'return ' + body[lastIndex]
  const bodyStr = body.join(';\n') + ';'
  return [returnKind, name, '(', args, ')', '{\n', bodyStr, '\n}'].join(' ')
}

const valueKindToGlsl = (valueKind: ValueKind): string => {
  if (valueKind === 'unit') return 'float'
  return ''
}

const builtInOperators = ['+', '-', '*', '/'] as const

const functionCallToGlsl = (callNode: FunctionCall): string => {
  if (builtInOperators.includes(callNode.fn as any)) {
    return `${astToGlsl(callNode.params[0])} ${callNode.fn} ${astToGlsl(
      callNode.params[1]
    )}`
  }
  return `${callNode.fn}(${callNode.params.map(astToGlsl).join(', ')})`
}

const variableDeclarationToGlsl = (
  element: VariableDeclarationNode
): string => {
  return `${valueKindToGlsl(element.valueKind)} ${element.name} = ${astToGlsl(
    element.value
  )}`
}
const toNumberString = (num: number): string => {
  return Number.isInteger(num) ? num + '.0' : num.toString()
}

const inlineValueToGlsl = (inlineValue: InlineValue): string => {
  if (inlineValue.valueKind === 'unit') return toNumberString(inlineValue.value)
  return ''
}

export const astToGlsl = (element: Node): string => {
  switch (element.kind) {
    case 'functionDeclaration':
      return functionDeclarationToGlsl(element)
    case 'variableDeclaration':
      return variableDeclarationToGlsl(element)
    case 'functionCall':
      return functionCallToGlsl(element)
    case 'inlineValue':
      return inlineValueToGlsl(element)
    case 'scopeReference':
      return element.value
    default:
      return ''
  }
}

console.log(astToGlsl(repeatAst))

type ValueKind = 'unit' // let's just start with this for now
type InlineValue = {
  kind: 'inlineValue'
  value: number
  valueKind: ValueKind
}
type ScopeReference = {
  kind: 'scopeReference'
  value: string
}
type Expression = InlineValue | FunctionCall | ScopeReference
type BuiltInOperator = '+' | '-' | '*' | '/' // TODO: get from arr
type BuiltInFn = 'mod'
type FunctionCall = {
  kind: 'functionCall'
  fn: BuiltInOperator | BuiltInFn
  isBuiltIn: boolean
  params: Array<Expression>
}
type ArgumentDeclarationNode = {
  kind: 'argumentDeclaration'
  name: string
  valueKind: ValueKind
}
type VariableDeclarationNode = {
  kind: 'variableDeclaration'
  name: string
  valueKind: ValueKind
  value: InlineValue | FunctionCall
}

type FunctionBody = VariableDeclarationNode | FunctionCall

type FunctionNode = {
  kind: 'functionDeclaration'
  name: string
  arguments: Array<ArgumentDeclarationNode>
  valueKind: ValueKind
  body: Array<FunctionBody>
}

type Node =
  | FunctionNode
  | VariableDeclarationNode
  | ArgumentDeclarationNode
  | FunctionCall
  | Expression
