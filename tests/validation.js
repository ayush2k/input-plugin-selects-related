import test from 'ava';
import validation from '../lib/validation';

const input = {
  target: {
    name: 'selectsRelated',
    value: 'foo bar baz',
  },
  all: {
    selectsRelated: 'foo bar baz',
  },
};

const settings = {
  target: {
    empty: false,
  },
  all: {
    selectsRelated: {
      empty: false,
    },
  },
};


// Valid input
test('valid input', t => {
  t.true(validation(input, settings), 'Valid input returns true');
});

// Invalid input
test('validate correct input', t => {
  const ip = input;
  ip.target.value = '';

  t.is(validation(ip, settings), 'selectsRelated cannot be left blank!', 'Return string if not valid');
});
