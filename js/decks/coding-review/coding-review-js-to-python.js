const CODING_REVIEW_JS_TO_PYTHON_DECK = {
  label: "JS to Python Syntax",
  randomShuffle: true,
  cards: [
    // Arrays / Lists
    {
      question: "array.map(function)",
      answer: "[function(item) for item in array]"
    },
    {
      question: "array.filter(function)",
      answer: "[item for item in array if function(item)]"
    },
    {
      question: "array.reduce(function, initial)",
      answer: "functools.reduce(function, array, initial)"
    },
    {
      question: "array.includes(item)",
      answer: "item in array"
    },
    {
      question: "array.length",
      answer: "len(array)"
    },
    {
      question: "array.concat(secondArray)",
      answer: "array + secondArray"
    },
    {
      question: "array.slice(start, end)",
      answer: "array[start:end]"
    },
    {
      question: "array.find(function)",
      answer: "next((item for item in array if function(item)), None)"
    },
    {
      question: "array.some(function)",
      answer: "any(function(item) for item in array)"
    },
    {
      question: "array.every(function)",
      answer: "all(function(item) for item in array)"
    },
    {
      question: "array.sort((first, second) => first - second)",
      answer: "sorted(array)"
    },
    {
      question: "array.push(item)",
      answer: "array.append(item)"
    },
    {
      question: "array.pop()",
      answer: "array.pop()"
    },
    {
      question: "array.reverse()",
      answer: "array[::-1]"
    },
    {
      question: "Array.isArray(item)",
      answer: "isinstance(item, list)"
    },
    {
      question: "array.flat()",
      answer: "[item for subarray in array for item in subarray]"
    },
    // Strings
    {
      question: "string.split(separator)",
      answer: "string.split(separator)"
    },
    {
      question: "string.toUpperCase()",
      answer: "string.upper()"
    },
    {
      question: "a template literal `hi ${name}`",
      answer: 'f"hi {name}"'
    },
    {
      question: "string.includes(item)",
      answer: "item in string"
    },
    {
      question: "string.trim()",
      answer: "string.strip()"
    },
    // Objects / Dictionaries
    {
      question: "Object.keys(object)",
      answer: "object.keys()"
    },
    {
      question: "Object.values(object)",
      answer: "object.values()"
    },
    {
      question: "Object.entries(object)",
      answer: "object.items()"
    },
    {
      question: "object.key",
      answer: "object['key']"
    },
    {
      question: "JSON.stringify(object)",
      answer: "json.dumps(object)"
    },
    {
      question: "JSON.parse(string)",
      answer: "json.loads(string)"
    },
    {
      question: "new Map()",
      answer: "{} or dict()"
    },
    {
      question: "new Set()",
      answer: "set()"
    },
    // Control flow / syntax
    {
      question: "for (const item of array)",
      answer: "for item in array:"
    },
    {
      question: "for (let index = 0; index < number; index++)",
      answer: "for index in range(number):"
    },
    {
      question: "condition ? first : second",
      answer: "first if condition else second"
    },
    {
      question: "const [first, second] = array",
      answer: "first, second = array"
    },
    {
      question: "try { } catch (error) { }",
      answer: "try: ... except Exception as error:"
    },
    {
      question: "typeof item",
      answer: "type(item)"
    },
    {
      question: "async/await",
      answer: "async/await (same keywords in both languages)"
    }
  ]
};
